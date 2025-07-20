/**
 * IsolationManager - 통합된 CSS 격리 시스템
 * 
 * Shadow DOM과 Light DOM 환경 모두에서 CSS 격리를 제공하는 유틸리티 클래스
 * 외부 라이브러리 스타일 관리 및 컴포넌트별 스타일 네임스페이스를 지원
 */

class IsolationManager {
    // 전역 상태 관리
    static _injectedStyles = new Map(); // 주입된 스타일 추적
    static _pendingStyles = new Map();  // 주입 대기 중인 스타일
    static _instanceCounts = new Map(); // 컴포넌트 인스턴스 카운트
    static _externalDependencies = new Map(); // 외부 라이브러리 의존성 추적
    
    /**
     * 컴포넌트 스타일을 안전하게 주입
     * @param {string} componentName - 컴포넌트 이름
     * @param {CSSResult|string} styles - 주입할 스타일
     * @param {Object} options - 옵션
     * @param {boolean} options.forceUpdate - 강제 업데이트 여부
     * @param {boolean} options.useNamespace - 네임스페이스 적용 여부
     * @param {string} options.namespace - 커스텀 네임스페이스
     * @returns {Promise} 스타일 주입 완료 Promise
     */
    static async injectStyles(componentName, styles, options = {}) {
        const { forceUpdate = false, useNamespace = false, namespace } = options;
        const styleId = `isolation-${componentName}`;
        
        // 이미 주입된 경우 처리
        if (this._injectedStyles.has(styleId) && !forceUpdate) {
            return Promise.resolve();
        }
        
        // 이미 주입 중인 경우
        if (this._pendingStyles.has(styleId)) {
            return this._pendingStyles.get(styleId);
        }
        
        const promise = this._createInjectionPromise(styleId, styles, useNamespace, namespace || componentName);
        this._pendingStyles.set(styleId, promise);
        
        return promise;
    }
    
    /**
     * 스타일 주입 Promise 생성
     */
    static _createInjectionPromise(styleId, styles, useNamespace, namespace) {
        return new Promise((resolve) => {
            const injectFn = () => {
                try {
                    this._injectStyleElement(styleId, styles, useNamespace, namespace);
                    resolve();
                } catch (error) {
                    console.warn(`Failed to inject styles for ${styleId}:`, error);
                    resolve(); // 에러가 발생해도 Promise는 resolve
                }
            };
            
            // DOM 준비 상태 확인
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', injectFn);
            } else {
                // DOM이 이미 준비된 경우 다음 프레임에서 실행
                requestAnimationFrame(injectFn);
            }
        });
    }
    
    /**
     * 실제 스타일 요소 생성 및 주입
     */
    static _injectStyleElement(styleId, styles, useNamespace, namespace) {
        // 기존 스타일 제거
        const existingStyle = document.getElementById(styleId);
        if (existingStyle) {
            existingStyle.remove();
        }
        
        // 스타일 내용 처리
        let styleContent = this._getStyleContent(styles);
        
        // 네임스페이스 적용
        if (useNamespace) {
            styleContent = this._applyNamespace(styleContent, namespace);
        }
        
        // 새 스타일 요소 생성
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = styleContent;
        
        // head에 추가 (우선순위 보장을 위해 마지막에 추가)
        document.head.appendChild(styleElement);
        
        this._injectedStyles.set(styleId, styleElement);
        this._pendingStyles.delete(styleId);
    }
    
    /**
     * 스타일 내용 추출
     */
    static _getStyleContent(styles) {
        if (typeof styles === 'string') {
            return styles;
        }
        if (styles && styles.cssText) {
            return styles.cssText;
        }
        if (Array.isArray(styles)) {
            return styles.map(style => this._getStyleContent(style)).join('\n');
        }
        return '';
    }
    
    /**
     * CSS에 네임스페이스 적용
     */
    static _applyNamespace(cssContent, namespace) {
        // CSS 규칙에 네임스페이스 접두사 추가
        return cssContent.replace(/([^}]+)\{/g, (match, selector) => {
            // :host, :root 등 특수 선택자 처리
            if (selector.includes(':host') || selector.includes(':root') || selector.includes('@')) {
                return match;
            }
            
            // 일반 선택자에 네임스페이스 추가
            const namespacedSelector = selector
                .split(',')
                .map(s => `${namespace} ${s.trim()}`)
                .join(', ');
            
            return `${namespacedSelector} {`;
        });
    }
    
    /**
     * 외부 라이브러리 의존성 로드 대기
     * @param {string} libraryName - 라이브러리 이름
     * @param {Function} checkFn - 로드 확인 함수
     * @param {number} timeout - 타임아웃 (ms)
     * @returns {Promise} 로드 완료 Promise
     */
    static async waitForExternalDependency(libraryName, checkFn, timeout = 5000) {
        const dependencyId = `external-${libraryName}`;
        
        // 이미 로드된 경우
        if (this._externalDependencies.has(dependencyId)) {
            return this._externalDependencies.get(dependencyId);
        }
        
        const promise = new Promise((resolve, reject) => {
            let attempts = 0;
            const maxAttempts = timeout / 50; // 50ms 간격으로 체크
            
            const checkDependency = () => {
                if (checkFn()) {
                    resolve(true);
                    return;
                }
                
                attempts++;
                if (attempts >= maxAttempts) {
                    console.warn(`Timeout waiting for external dependency: ${libraryName}`);
                    resolve(false); // 타임아웃이어도 reject하지 않음
                    return;
                }
                
                setTimeout(checkDependency, 50);
            };
            
            checkDependency();
        });
        
        this._externalDependencies.set(dependencyId, promise);
        return promise;
    }
    
    /**
     * 컴포넌트 인스턴스 등록
     */
    static registerInstance(componentName) {
        const count = this._instanceCounts.get(componentName) || 0;
        this._instanceCounts.set(componentName, count + 1);
        return count + 1;
    }
    
    /**
     * 컴포넌트 인스턴스 해제
     */
    static unregisterInstance(componentName) {
        const count = this._instanceCounts.get(componentName) || 0;
        const newCount = Math.max(0, count - 1);
        this._instanceCounts.set(componentName, newCount);
        
        // 마지막 인스턴스가 제거되면 스타일도 제거
        if (newCount === 0) {
            this.removeStyles(componentName);
        }
        
        return newCount;
    }
    
    /**
     * 스타일 제거
     */
    static removeStyles(componentName) {
        const styleId = `isolation-${componentName}`;
        const styleElement = this._injectedStyles.get(styleId);
        
        if (styleElement) {
            styleElement.remove();
            this._injectedStyles.delete(styleId);
        }
        
        // 외부 의존성도 정리
        const dependencyId = `external-${componentName}`;
        this._externalDependencies.delete(dependencyId);
    }
    
    /**
     * 전체 캐시 초기화 (개발 환경에서 유용)
     */
    static clearCache() {
        // 모든 주입된 스타일 제거
        this._injectedStyles.forEach(styleElement => {
            if (styleElement.parentNode) {
                styleElement.remove();
            }
        });
        
        this._injectedStyles.clear();
        this._pendingStyles.clear();
        this._instanceCounts.clear();
        this._externalDependencies.clear();
    }
    
    /**
     * 디버깅 정보 반환
     */
    static getDebugInfo() {
        return {
            injectedStyles: Array.from(this._injectedStyles.keys()),
            pendingStyles: Array.from(this._pendingStyles.keys()),
            instanceCounts: Object.fromEntries(this._instanceCounts),
            externalDependencies: Array.from(this._externalDependencies.keys())
        };
    }
}

export { IsolationManager };