/**
 * ExternalStyleLoader - 외부 라이브러리 스타일 관리자
 * 
 * Flatpickr, Bootstrap 등 외부 라이브러리의 CSS 로딩과 의존성을 안전하게 관리합니다.
 * CSS 로딩 순서를 보장하고 스타일 충돌을 방지합니다.
 */

class ExternalStyleLoader {
    static _loadedLibraries = new Map();     // 로드된 라이브러리 추적
    static _loadingPromises = new Map();     // 로딩 중인 Promise들
    static _dependencyGraph = new Map();     // 의존성 그래프
    static _styleElements = new Map();       // 주입된 스타일 요소들
    
    /**
     * 라이브러리 의존성 등록
     * @param {string} libraryName - 라이브러리 이름
     * @param {Object} config - 라이브러리 설정
     */
    static registerLibrary(libraryName, config) {
        const {
            cssUrls = [],
            dependencies = [],
            checkFunction = null,
            version = 'latest',
            priority = 0
        } = config;
        
        this._dependencyGraph.set(libraryName, {
            cssUrls,
            dependencies,
            checkFunction,
            version,
            priority,
            loaded: false
        });
    }
    
    /**
     * 라이브러리 로드 (의존성 포함)
     * @param {string} libraryName - 로드할 라이브러리
     * @param {Object} options - 로드 옵션
     * @returns {Promise} 로드 완료 Promise
     */
    static async loadLibrary(libraryName, options = {}) {
        const { force = false, timeout = 10000 } = options;
        
        // 이미 로드된 경우
        if (!force && this._loadedLibraries.has(libraryName)) {
            return this._loadedLibraries.get(libraryName);
        }
        
        // 이미 로딩 중인 경우
        if (this._loadingPromises.has(libraryName)) {
            return this._loadingPromises.get(libraryName);
        }
        
        const loadPromise = this._performLibraryLoad(libraryName, timeout);
        this._loadingPromises.set(libraryName, loadPromise);
        
        try {
            const result = await loadPromise;
            this._loadedLibraries.set(libraryName, result);
            return result;
        } finally {
            this._loadingPromises.delete(libraryName);
        }
    }
    
    /**
     * 실제 라이브러리 로드 수행
     */
    static async _performLibraryLoad(libraryName, timeout) {
        const config = this._dependencyGraph.get(libraryName);
        if (!config) {
            throw new Error(`Unknown library: ${libraryName}`);
        }
        
        // 의존성 먼저 로드
        for (const dep of config.dependencies) {
            await this.loadLibrary(dep);
        }
        
        // CSS 파일들 로드
        const loadPromises = config.cssUrls.map(url => 
            this._loadCSS(url, `${libraryName}-css`)
        );
        
        await Promise.all(loadPromises);
        
        // 로드 확인
        if (config.checkFunction) {
            await this._waitForLibraryReady(config.checkFunction, timeout);
        }
        
        config.loaded = true;
        return {
            libraryName,
            version: config.version,
            loadedAt: new Date().toISOString()
        };
    }
    
    /**
     * CSS 파일 로드
     */
    static _loadCSS(url, id) {
        return new Promise((resolve, reject) => {
            // 이미 로드된 CSS인지 확인
            if (document.getElementById(id) || 
                Array.from(document.styleSheets).some(sheet => 
                    sheet.href && sheet.href.includes(url)
                )) {
                resolve();
                return;
            }
            
            const link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            link.href = url;
            
            link.onload = () => {
                this._styleElements.set(id, link);
                resolve();
            };
            
            link.onerror = () => {
                reject(new Error(`Failed to load CSS: ${url}`));
            };
            
            // 우선순위에 따라 삽입 위치 결정
            this._insertStyleElement(link);
        });
    }
    
    /**
     * 스타일 요소 삽입 (우선순위 고려)
     */
    static _insertStyleElement(element) {
        const head = document.head;
        const existingStyles = Array.from(head.querySelectorAll('link[rel="stylesheet"], style'));
        
        // 마지막에 추가하여 우선순위 보장
        head.appendChild(element);
    }
    
    /**
     * 라이브러리 준비 상태 대기
     */
    static _waitForLibraryReady(checkFunction, timeout) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            
            const checkReady = () => {
                if (checkFunction()) {
                    resolve();
                    return;
                }
                
                if (Date.now() - startTime > timeout) {
                    reject(new Error(`Timeout waiting for library to be ready`));
                    return;
                }
                
                setTimeout(checkReady, 50);
            };
            
            checkReady();
        });
    }
    
    /**
     * 인라인 CSS 주입
     * @param {string} css - CSS 내용
     * @param {string} id - 스타일 요소 ID
     * @param {number} priority - 우선순위 (높을수록 나중에 로드)
     */
    static injectInlineCSS(css, id, priority = 0) {
        // 기존 스타일 제거
        const existing = document.getElementById(id);
        if (existing) {
            existing.remove();
        }
        
        const style = document.createElement('style');
        style.id = id;
        style.textContent = css;
        style.setAttribute('data-priority', priority.toString());
        
        this._insertStyleElement(style);
        this._styleElements.set(id, style);
    }
    
    /**
     * 조건부 CSS 로드
     * @param {Function} condition - 로드 조건 함수
     * @param {Function} loader - 로더 함수
     * @param {number} checkInterval - 체크 간격 (ms)
     */
    static async loadConditionalCSS(condition, loader, checkInterval = 100) {
        return new Promise((resolve) => {
            const checkCondition = () => {
                if (condition()) {
                    loader().then(resolve).catch(resolve);
                } else {
                    setTimeout(checkCondition, checkInterval);
                }
            };
            
            checkCondition();
        });
    }
    
    /**
     * 라이브러리 언로드
     */
    static unloadLibrary(libraryName) {
        const config = this._dependencyGraph.get(libraryName);
        if (!config) return;
        
        // 관련 스타일 요소들 제거
        config.cssUrls.forEach((_, index) => {
            const id = `${libraryName}-css-${index}`;
            const element = this._styleElements.get(id);
            if (element) {
                element.remove();
                this._styleElements.delete(id);
            }
        });
        
        config.loaded = false;
        this._loadedLibraries.delete(libraryName);
    }
    
    /**
     * CSS 우선순위 재정렬
     */
    static reorderStyles() {
        const head = document.head;
        const styleElements = Array.from(this._styleElements.values());
        
        // 우선순위순으로 정렬
        styleElements.sort((a, b) => {
            const priorityA = parseInt(a.getAttribute('data-priority') || '0');
            const priorityB = parseInt(b.getAttribute('data-priority') || '0');
            return priorityA - priorityB;
        });
        
        // 다시 DOM에 추가 (순서대로)
        styleElements.forEach(element => {
            if (element.parentNode) {
                head.appendChild(element);
            }
        });
    }
    
    /**
     * 미리 정의된 라이브러리들 등록
     */
    static registerCommonLibraries() {
        // Flatpickr
        this.registerLibrary('flatpickr', {
            cssUrls: [
                'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css'
            ],
            checkFunction: () => {
                return Array.from(document.styleSheets).some(sheet => {
                    try {
                        return sheet.href && sheet.href.includes('flatpickr');
                    } catch (e) {
                        return false;
                    }
                });
            },
            priority: 1
        });
        
        // Flatpickr Month Select Plugin
        this.registerLibrary('flatpickr-monthselect', {
            cssUrls: [
                'https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/style.css'
            ],
            dependencies: ['flatpickr'],
            checkFunction: () => {
                return document.querySelector('style, link')?.textContent?.includes('flatpickr-monthSelect') ||
                       Array.from(document.styleSheets).some(sheet => {
                           try {
                               return sheet.href && sheet.href.includes('monthSelect');
                           } catch (e) {
                               return false;
                           }
                       });
            },
            priority: 2
        });
    }
    
    /**
     * 로드된 라이브러리 확인
     */
    static isLibraryLoaded(libraryName) {
        return this._loadedLibraries.has(libraryName);
    }
    
    /**
     * 모든 스타일 정리
     */
    static clearAllStyles() {
        this._styleElements.forEach(element => {
            if (element.parentNode) {
                element.remove();
            }
        });
        
        this._styleElements.clear();
        this._loadedLibraries.clear();
        this._loadingPromises.clear();
    }
    
    /**
     * 디버깅 정보
     */
    static getDebugInfo() {
        return {
            loadedLibraries: Array.from(this._loadedLibraries.keys()),
            loadingPromises: Array.from(this._loadingPromises.keys()),
            registeredLibraries: Array.from(this._dependencyGraph.keys()),
            styleElements: Array.from(this._styleElements.keys())
        };
    }
}

// 공통 라이브러리들 자동 등록
ExternalStyleLoader.registerCommonLibraries();

export { ExternalStyleLoader };