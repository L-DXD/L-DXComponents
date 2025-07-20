/**
 * CSSScoper - Light DOM 컴포넌트용 CSS 스코핑 유틸리티
 * 
 * Shadow DOM을 사용할 수 없는 컴포넌트들(Radio, Checkbox 등)을 위한
 * CSS 격리 시스템을 제공합니다.
 */

class CSSScoper {
    static _scopedComponents = new Map(); // 스코프된 컴포넌트 추적
    static _generatedScopes = new Set();  // 생성된 스코프 이름 추적
    
    /**
     * 컴포넌트에 고유한 CSS 스코프 생성 및 적용
     * @param {string} componentName - 컴포넌트 이름
     * @param {CSSResult|string} styles - 원본 스타일
     * @param {Object} options - 스코핑 옵션
     * @returns {string} 스코프된 CSS 문자열
     */
    static createScopedStyles(componentName, styles, options = {}) {
        const {
            scopePrefix = 'scoped',
            includeHost = true,
            preserveGlobalSelectors = true
        } = options;
        
        // 고유 스코프 이름 생성
        const scopeName = this._generateScopeId(componentName, scopePrefix);
        
        // 스타일 내용 추출
        const cssContent = this._extractCSSContent(styles);
        
        // CSS 스코핑 적용
        const scopedCSS = this._applyScopeToCSS(cssContent, scopeName, {
            includeHost,
            preserveGlobalSelectors
        });
        
        // 스코프 정보 저장
        this._scopedComponents.set(componentName, {
            scopeName,
            originalStyles: styles,
            scopedCSS
        });
        
        return scopedCSS;
    }
    
    /**
     * 컴포넌트 인스턴스에 스코프 클래스 적용
     * @param {HTMLElement} element - 컴포넌트 엘리먼트
     * @param {string} componentName - 컴포넌트 이름
     */
    static applyScopeToElement(element, componentName) {
        const scopeInfo = this._scopedComponents.get(componentName);
        if (!scopeInfo) {
            console.warn(`No scope found for component: ${componentName}`);\n            return;\n        }\n        \n        // 스코프 클래스 추가\n        element.classList.add(scopeInfo.scopeName);\n        \n        // 자식 요소들에도 필요한 경우 스코프 적용\n        this._applyScopeToChildren(element, scopeInfo.scopeName);\n    }\n    \n    /**\n     * 고유 스코프 ID 생성\n     */\n    static _generateScopeId(componentName, prefix) {\n        let scopeName;\n        let counter = 0;\n        \n        do {\n            scopeName = `${prefix}-${componentName.toLowerCase()}${counter > 0 ? `-${counter}` : ''}`;\n            counter++;\n        } while (this._generatedScopes.has(scopeName));\n        \n        this._generatedScopes.add(scopeName);\n        return scopeName;\n    }\n    \n    /**\n     * CSS 내용 추출\n     */\n    static _extractCSSContent(styles) {\n        if (typeof styles === 'string') {\n            return styles;\n        }\n        if (styles && styles.cssText) {\n            return styles.cssText;\n        }\n        if (Array.isArray(styles)) {\n            return styles.map(style => this._extractCSSContent(style)).join('\\n');\n        }\n        return '';\n    }\n    \n    /**\n     * CSS에 스코프 적용\n     */\n    static _applyScopeToCSS(cssContent, scopeName, options) {\n        const { includeHost, preserveGlobalSelectors } = options;\n        \n        // CSS 규칙을 파싱하고 스코프 적용\n        return cssContent.replace(/([^{}]+)\\s*{([^}]*)}/g, (match, selectors, declarations) => {\n            const processedSelectors = this._processSelectorGroup(selectors, scopeName, {\n                includeHost,\n                preserveGlobalSelectors\n            });\n            \n            return `${processedSelectors} {${declarations}}`;\n        });\n    }\n    \n    /**\n     * 선택자 그룹 처리\n     */\n    static _processSelectorGroup(selectors, scopeName, options) {\n        return selectors\n            .split(',')\n            .map(selector => this._processSingleSelector(selector.trim(), scopeName, options))\n            .join(', ');\n    }\n    \n    /**\n     * 개별 선택자 처리\n     */\n    static _processSingleSelector(selector, scopeName, options) {\n        const { includeHost, preserveGlobalSelectors } = options;\n        \n        // 특수 선택자 처리\n        if (this._isSpecialSelector(selector)) {\n            return this._handleSpecialSelector(selector, scopeName, includeHost);\n        }\n        \n        // 전역 선택자 보존 옵션\n        if (preserveGlobalSelectors && this._isGlobalSelector(selector)) {\n            return selector;\n        }\n        \n        // 일반 선택자에 스코프 적용\n        return this._addScopeToSelector(selector, scopeName);\n    }\n    \n    /**\n     * 특수 선택자 확인 (:host, :root, @media 등)\n     */\n    static _isSpecialSelector(selector) {\n        return /^\\s*(@|:host|:root)/.test(selector);\n    }\n    \n    /**\n     * 전역 선택자 확인 (html, body, * 등)\n     */\n    static _isGlobalSelector(selector) {\n        return /^\\s*(html|body|\\*|\\[|\\.|#)/.test(selector) && \n               !/^\\s*\\./.test(selector); // 클래스 선택자는 제외\n    }\n    \n    /**\n     * 특수 선택자 처리\n     */\n    static _handleSpecialSelector(selector, scopeName, includeHost) {\n        // @media, @keyframes 등은 그대로 유지\n        if (selector.startsWith('@')) {\n            return selector;\n        }\n        \n        // :host를 스코프 클래스로 변환\n        if (selector.includes(':host')) {\n            if (includeHost) {\n                return selector.replace(/:host/g, `.${scopeName}`);\n            } else {\n                return selector.replace(/:host\\s*/g, '');\n            }\n        }\n        \n        // :root는 그대로 유지하거나 제거\n        if (selector.includes(':root')) {\n            return selector;\n        }\n        \n        return selector;\n    }\n    \n    /**\n     * 일반 선택자에 스코프 추가\n     */\n    static _addScopeToSelector(selector, scopeName) {\n        // 이미 스코프가 적용된 경우 스킵\n        if (selector.includes(`.${scopeName}`)) {\n            return selector;\n        }\n        \n        // 복합 선택자 처리\n        if (selector.includes(' ')) {\n            const parts = selector.split(/\\s+/);\n            parts[0] = `.${scopeName} ${parts[0]}`;\n            return parts.join(' ');\n        }\n        \n        // 단일 선택자에 스코프 추가\n        return `.${scopeName} ${selector}`;\n    }\n    \n    /**\n     * 자식 요소들에 스코프 적용\n     */\n    static _applyScopeToChildren(element, scopeName) {\n        // 특정 자식 요소들에만 스코프 적용이 필요한 경우\n        const childrenNeedingScope = element.querySelectorAll('input, label, div, span');\n        childrenNeedingScope.forEach(child => {\n            if (!child.classList.contains(scopeName)) {\n                child.classList.add(`${scopeName}-child`);\n            }\n        });\n    }\n    \n    /**\n     * 컴포넌트 스코프 제거\n     */\n    static removeScopeFromElement(element, componentName) {\n        const scopeInfo = this._scopedComponents.get(componentName);\n        if (!scopeInfo) return;\n        \n        element.classList.remove(scopeInfo.scopeName);\n        \n        // 자식 요소들의 스코프도 제거\n        const childrenWithScope = element.querySelectorAll(`[class*=\"${scopeInfo.scopeName}\"]`);\n        childrenWithScope.forEach(child => {\n            child.classList.remove(`${scopeInfo.scopeName}-child`);\n        });\n    }\n    \n    /**\n     * 스코프 정보 조회\n     */\n    static getScopeInfo(componentName) {\n        return this._scopedComponents.get(componentName);\n    }\n    \n    /**\n     * 모든 스코프 정리 (개발환경용)\n     */\n    static clearAllScopes() {\n        this._scopedComponents.clear();\n        this._generatedScopes.clear();\n    }\n    \n    /**\n     * 디버깅 정보\n     */\n    static getDebugInfo() {\n        return {\n            scopedComponents: Array.from(this._scopedComponents.keys()),\n            generatedScopes: Array.from(this._generatedScopes),\n            totalScopes: this._scopedComponents.size\n        };\n    }\n}\n\nexport { CSSScoper };