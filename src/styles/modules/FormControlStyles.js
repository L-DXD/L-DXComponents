import {css} from 'lit';

/**
 * 공통 폼 컨트롤 스타일 모듈
 * Input, Textarea, Select 등에서 공통으로 사용되는 스타일들을 모아놓은 모듈
 * 
 * 사용법:
 * import {FormControlStyles} from '@/styles/modules/FormControlStyles.js';
 * static styles = [FormControlStyles.basic, FormControlStyles.sizes, ...];
 */
export class FormControlStyles {
    
    /**
     * CSS 커스텀 프로퍼티 (테마 변수)
     * ThemeSystem에서 정의된 변수들을 사용
     */
    static get variables() {
        return css`
            :host {
                /* Form Control 변수는 ThemeSystem.formControls에서 정의됨 */
                /* 추가적인 컴포넌트별 변수만 여기서 정의 */
                --bs-form-control-min-height: calc(1.5em + calc(var(--bs-form-control-padding-y) * 2) + calc(var(--bs-form-control-border-width) * 2));
            }
        `;
    }

    /**
     * 기본 폼 컨트롤 스타일
     */
    static get basic() {
        return css`
            .form-control {
                display: block;
                width: 100%;
                padding: var(--bs-form-control-padding-y) var(--bs-form-control-padding-x);
                font-size: var(--bs-form-control-font-size);
                font-weight: var(--bs-form-control-font-weight);
                line-height: var(--bs-form-control-line-height);
                color: var(--bs-form-control-color);
                background-color: var(--bs-form-control-bg);
                background-image: none;
                border: var(--bs-form-control-border-width) solid var(--bs-form-control-border-color);
                border-radius: var(--bs-form-control-border-radius);
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none;
                }
            }

            .form-control:focus {
                color: var(--bs-form-control-color);
                background-color: var(--bs-form-control-bg);
                border-color: var(--bs-form-control-focus-border-color);
                outline: 0;
                box-shadow: var(--bs-form-control-focus-box-shadow);
            }

            .form-control::placeholder {
                color: var(--bs-form-control-placeholder-color);
                opacity: var(--bs-form-control-placeholder-opacity);
            }

            .form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg);
                opacity: var(--bs-form-control-disabled-opacity);
            }

            /* 파일 입력 관련 스타일 */
            .form-control[type="file"] {
                overflow: hidden;
            }

            .form-control[type="file"]:not(:disabled):not([readonly]) {
                cursor: pointer;
            }

            .form-control::file-selector-button {
                padding: var(--bs-form-control-padding-y) var(--bs-form-control-padding-x);
                margin: calc(var(--bs-form-control-padding-y) * -1) calc(var(--bs-form-control-padding-x) * -1);
                margin-inline-end: var(--bs-form-control-padding-x);
                color: var(--bs-form-control-color);
                background-color: var(--bs-tertiary-bg, #f8f9fa);
                pointer-events: none;
                border-color: inherit;
                border-style: solid;
                border-width: 0;
                border-inline-end-width: var(--bs-form-control-border-width);
                border-radius: 0;
                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control::file-selector-button {
                    transition: none;
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-secondary-bg, #e9ecef);
            }
        `;
    }

    /**
     * 폼 컨트롤 크기 변형 (sm, lg)
     */
    static get sizes() {
        return css`
            .form-control-sm {
                min-height: calc(1.5em + 0.5rem + calc(var(--bs-form-control-border-width) * 2));
                padding: 0.25rem 0.5rem;
                font-size: 0.765625rem;
                border-radius: var(--bs-border-radius-sm, 0.25rem);
            }

            .form-control-sm::file-selector-button {
                padding: 0.25rem 0.5rem;
                margin: -0.25rem -0.5rem;
                margin-inline-end: 0.5rem;
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-form-control-border-width) * 2));
                padding: 0.5rem 1rem;
                font-size: 1.09375rem;
                border-radius: var(--bs-border-radius-lg, 0.5rem);
            }

            .form-control-lg::file-selector-button {
                padding: 0.5rem 1rem;
                margin: -0.5rem -1rem;
                margin-inline-end: 1rem;
            }
        `;
    }

    /**
     * Plaintext 스타일 (읽기 전용 텍스트)
     */
    static get plaintext() {
        return css`
            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: var(--bs-form-control-padding-y) 0;
                margin-bottom: 0;
                line-height: var(--bs-form-control-line-height);
                color: var(--bs-form-control-color);
                background-color: transparent;
                border: solid transparent;
                border-width: var(--bs-form-control-border-width) 0;
            }

            .form-control-plaintext:focus {
                outline: 0;
            }

            .form-control-plaintext.form-control-sm,
            .form-control-plaintext.form-control-lg {
                padding-right: 0;
                padding-left: 0;
            }
        `;
    }

    /**
     * 레이아웃 관련 스타일 (left alignment 등)
     */
    static get layout() {
        return css`
            /* 왼쪽 정렬된 라벨과 함께 사용되는 컨트롤 */
            .form-left-control {
                flex: 1;
                text-align: left;
            }

            /* 그룹 컨테이너 */
            .form-group {
                margin-bottom: 1rem;
            }

            /* 컨테이너 스타일 */
            .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
        `;
    }

    /**
     * Select 전용 스타일
     */
    static get select() {
        return css`
            .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
                display: block;
                width: 100%;
                padding: var(--bs-form-control-padding-y) 2.25rem var(--bs-form-control-padding-y) var(--bs-form-control-padding-x);
                font-size: var(--bs-form-control-font-size);
                font-weight: var(--bs-form-control-font-weight);
                line-height: var(--bs-form-control-line-height);
                color: var(--bs-form-control-color);
                background-color: var(--bs-form-control-bg);
                background-image: var(--bs-form-select-bg-img);
                background-repeat: no-repeat;
                background-position: right var(--bs-form-control-padding-x) center;
                background-size: 16px 12px;
                border: var(--bs-form-control-border-width) solid var(--bs-form-control-border-color);
                border-radius: var(--bs-form-control-border-radius);
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-select {
                    transition: none;
                }
            }

            .form-select:focus {
                border-color: var(--bs-form-control-focus-border-color);
                outline: 0;
                box-shadow: var(--bs-form-control-focus-box-shadow);
            }

            .form-select[multiple],
            .form-select[size]:not([size="1"]) {
                padding-right: var(--bs-form-control-padding-x);
                background-image: none;
            }

            .form-select:disabled {
                background-color: var(--bs-form-control-disabled-bg);
            }

            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--bs-form-control-color);
            }

            /* Select 크기 변형 */
            .form-select-sm {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 0.5rem;
                font-size: 0.765625rem;
                border-radius: var(--bs-border-radius-sm, 0.25rem);
            }

            .form-select-lg {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 1rem;
                font-size: 1.09375rem;
                border-radius: var(--bs-border-radius-lg, 0.5rem);
            }
        `;
    }

    /**
     * Textarea 전용 스타일 확장
     */
    static get textarea() {
        return css`
            textarea.form-control {
                min-height: calc(1.5em + calc(var(--bs-form-control-padding-y) * 2) + calc(var(--bs-form-control-border-width) * 2));
            }

            textarea.form-control-sm {
                min-height: calc(1.5em + 0.5rem + calc(var(--bs-form-control-border-width) * 2));
            }

            textarea.form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-form-control-border-width) * 2));
            }
        `;
    }

    /**
     * 다크 테마 지원
     */
    static get darkTheme() {
        return css`
            [data-bs-theme="dark"] .form-control {
                color: var(--bs-gray-300, #adb5bd);
                background-color: var(--bs-gray-800, #343a40);
                border-color: var(--bs-gray-600, #6c757d);
            }

            [data-bs-theme="dark"] .form-control:focus {
                color: var(--bs-gray-300, #adb5bd);
                background-color: var(--bs-gray-800, #343a40);
                border-color: var(--bs-form-control-focus-border-color);
                box-shadow: var(--bs-form-control-focus-box-shadow);
            }

            [data-bs-theme="dark"] .form-control::placeholder {
                color: var(--bs-gray-400, #ced4da);
            }

            [data-bs-theme="dark"] .form-control:disabled {
                background-color: var(--bs-gray-700, #495057);
            }

            [data-bs-theme="dark"] .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
                color: var(--bs-gray-300, #adb5bd);
                background-color: var(--bs-gray-800, #343a40);
                border-color: var(--bs-gray-600, #6c757d);
            }

            [data-bs-theme="dark"] .form-select:focus {
                border-color: var(--bs-form-control-focus-border-color);
                box-shadow: var(--bs-form-control-focus-box-shadow);
            }

            [data-bs-theme="dark"] .form-select:disabled {
                background-color: var(--bs-gray-700, #495057);
            }
        `;
    }

    /**
     * 모든 스타일을 통합한 전체 스타일
     */
    static get all() {
        return css`
            ${this.variables}
            ${this.basic}
            ${this.sizes}
            ${this.plaintext}
            ${this.layout}
            ${this.select}
            ${this.textarea}
            ${this.darkTheme}
        `;
    }
}