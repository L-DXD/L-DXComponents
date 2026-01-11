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
}