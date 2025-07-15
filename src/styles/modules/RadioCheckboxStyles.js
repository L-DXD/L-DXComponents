import {css} from 'lit';

/**
 * Radio/Checkbox 컴포넌트 전용 스타일 모듈
 * Radio.css의 모든 스타일을 CSS-in-JS로 변환한 모듈
 * 
 * 사용법:
 * import {RadioCheckboxStyles} from '@/styles/modules/RadioCheckboxStyles.js';
 * static styles = [RadioCheckboxStyles.all, ...];
 */
export class RadioCheckboxStyles {
    
    /**
     * CSS 커스텀 프로퍼티 (Radio/Checkbox 테마 변수)
     */
    static get variables() {
        return css`
            :host {
                /* Form Check 관련 변수 */
                --bs-form-check-bg: var(--bs-component-bg, var(--bs-body-bg, #fff));
                --bs-form-check-border-color: var(--bs-border-color, #dee2e6);
                --bs-form-check-border-width: var(--bs-border-width, 1px);
                --bs-form-check-border-radius: 0.25em;
                --bs-form-check-size: 1.3em;
                --bs-form-check-margin-top: 0.1em;
                --bs-form-check-padding-left: 1.8em;
                --bs-form-check-margin-bottom: 0.125rem;
                
                /* 체크된 상태 변수 */
                --bs-form-check-checked-bg: #06f;
                --bs-form-check-checked-border-color: #06f;
                
                /* 포커스 상태 변수 */
                --bs-form-check-focus-border-color: #80b3ff;
                --bs-form-check-focus-box-shadow: 0 0 0 0.25rem rgba(0, 102, 255, 0.25);
                
                /* 비활성 상태 변수 */
                --bs-form-check-disabled-opacity: 0.5;
                
                /* Switch 관련 변수 */
                --bs-form-switch-width: 2.3em;
                --bs-form-switch-padding-left: 2.8em;
                --bs-form-switch-border-radius: 2.3em;
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
                --bs-form-switch-focus-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2380b3ff'/%3e%3c/svg%3e");
                --bs-form-switch-checked-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFFFFF'/%3e%3c/svg%3e");
                
                /* SVG 아이콘 변수 */
                --bs-form-check-checkbox-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
                --bs-form-check-radio-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFFFFF'/%3e%3c/svg%3e");
                --bs-form-check-indeterminate-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
            }
        `;
    }

    /**
     * 기본 박스 사이징 설정
     */
    static get reset() {
        return css`
            *, ::after, ::before {
                box-sizing: border-box;
            }
        `;
    }

    /**
     * 기본 Form Check 스타일
     */
    static get basic() {
        return css`
            .form-check {
                min-height: var(--bs-form-check-size);
                padding-left: var(--bs-form-check-padding-left);
                margin-bottom: var(--bs-form-check-margin-bottom);
            }

            .form-check .form-check-input {
                float: left;
                margin-left: calc(var(--bs-form-check-padding-left) * -1);
            }

            .form-check-input {
                --bs-form-check-bg-image: var(--bs-form-check-bg-image, none);
                flex-shrink: 0;
                width: var(--bs-form-check-size);
                height: var(--bs-form-check-size);
                margin-top: var(--bs-form-check-margin-top);
                vertical-align: top;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: var(--bs-form-check-bg);
                background-image: var(--bs-form-check-bg-image);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border: var(--bs-form-check-border-width) solid var(--bs-form-check-border-color);
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
                print-color-adjust: exact;
            }

            .form-check-input[type="checkbox"] {
                border-radius: var(--bs-form-check-border-radius);
            }

            .form-check-input[type="radio"] {
                border-radius: 50%;
            }

            .form-check-input:active {
                filter: brightness(90%);
            }

            .form-check-input:focus {
                border-color: var(--bs-form-check-focus-border-color);
                outline: 0;
                box-shadow: var(--bs-form-check-focus-box-shadow);
            }

            .form-check-input:checked {
                background-color: var(--bs-form-check-checked-bg);
                border-color: var(--bs-form-check-checked-border-color);
            }

            .form-check-input:checked[type="checkbox"] {
                --bs-form-check-bg-image: var(--bs-form-check-checkbox-icon);
            }

            .form-check-input:checked[type="radio"] {
                --bs-form-check-bg-image: var(--bs-form-check-radio-icon);
            }

            .form-check-input[type="checkbox"]:indeterminate {
                background-color: var(--bs-form-check-checked-bg);
                border-color: var(--bs-form-check-checked-border-color);
                --bs-form-check-bg-image: var(--bs-form-check-indeterminate-icon);
            }

            .form-check-input:disabled {
                pointer-events: none;
                filter: none;
                opacity: var(--bs-form-check-disabled-opacity);
            }

            .form-check-input:disabled ~ .form-check-label,
            .form-check-input[disabled] ~ .form-check-label {
                cursor: default;
                opacity: var(--bs-form-check-disabled-opacity);
            }

            .form-check-label {
                cursor: pointer;
            }
        `;
    }

    /**
     * Form Check 레이아웃 변형 (inline, reverse)
     */
    static get layout() {
        return css`
            .form-check-inline {
                display: inline-block;
                margin-right: 1rem;
            }

            .form-check-reverse {
                padding-right: var(--bs-form-check-padding-left);
                padding-left: 0;
                text-align: right;
            }

            .form-check-reverse .form-check-input {
                float: right;
                margin-right: calc(var(--bs-form-check-padding-left) * -1);
                margin-left: 0;
            }
        `;
    }

    /**
     * Form Switch 스타일
     */
    static get switch() {
        return css`
            .form-switch {
                padding-left: var(--bs-form-switch-padding-left);
            }

            .form-switch .form-check-input {
                width: var(--bs-form-switch-width);
                margin-left: calc(var(--bs-form-switch-padding-left) * -1);
                background-image: var(--bs-form-switch-bg);
                background-position: left center;
                border-radius: var(--bs-form-switch-border-radius);
                transition: background-position 0.15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-switch .form-check-input {
                    transition: none;
                }
            }

            .form-switch .form-check-input:focus {
                --bs-form-switch-bg: var(--bs-form-switch-focus-bg);
            }

            .form-switch .form-check-input:checked {
                background-position: right center;
                --bs-form-switch-bg: var(--bs-form-switch-checked-bg);
            }

            .form-switch.form-check-reverse {
                padding-right: var(--bs-form-switch-padding-left);
                padding-left: 0;
            }

            .form-switch.form-check-reverse .form-check-input {
                margin-right: calc(var(--bs-form-switch-padding-left) * -1);
                margin-left: 0;
            }
        `;
    }

    /**
     * Button Check 스타일 (버튼 형태의 체크박스)
     */
    static get buttonCheck() {
        return css`
            .btn-check {
                position: absolute;
                clip: rect(0, 0, 0, 0);
                pointer-events: none;
            }

            .btn-check:disabled + .btn,
            .btn-check[disabled] + .btn {
                pointer-events: none;
                filter: none;
                opacity: 0.65;
            }
        `;
    }

    /**
     * 다크 테마 지원
     */
    static get darkTheme() {
        return css`
            [data-bs-theme="dark"] .form-check-input {
                background-color: var(--bs-gray-800, #343a40);
                border-color: var(--bs-gray-600, #6c757d);
            }

            [data-bs-theme="dark"] .form-check-input:focus {
                border-color: var(--bs-form-check-focus-border-color);
                box-shadow: var(--bs-form-check-focus-box-shadow);
            }

            [data-bs-theme="dark"] .form-check-input:checked {
                background-color: var(--bs-form-check-checked-bg);
                border-color: var(--bs-form-check-checked-border-color);
            }

            [data-bs-theme="dark"] .form-switch .form-check-input:not(:checked):not(:focus) {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e");
            }
        `;
    }

    /**
     * 모든 스타일을 통합한 전체 스타일
     */
    static get all() {
        return css`
            ${this.variables}
            ${this.reset}
            ${this.basic}
            ${this.layout}
            ${this.switch}
            ${this.buttonCheck}
            ${this.darkTheme}
        `;
    }
}