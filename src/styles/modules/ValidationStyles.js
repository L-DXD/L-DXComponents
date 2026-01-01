import {css} from 'lit';

/**
 * 폼 검증 상태 스타일 모듈
 * 폼 컨트롤의 유효성 검증 상태(valid, invalid)와 관련된 모든 스타일을 포함
 * 
 * 사용법:
 * import {ValidationStyles} from '@/styles/modules/ValidationStyles.js';
 * static styles = [ValidationStyles.all, ...];
 */
export class ValidationStyles {
    
    /**
     * CSS 커스텀 프로퍼티 (검증 관련 테마 변수)
     */
    static get variables() {
        return css`
            :host {
                /* 성공(Valid) 상태 변수 */
                --bs-form-valid-color: #198754;
                --bs-form-valid-border-color: #198754;
                --bs-success-text: #0f5132;
                --bs-success-rgb: 25, 135, 84;
                --bs-success-bg-subtle: #d1e7dd;
                --bs-success-border-subtle: #a3cfbb;
                
                /* 오류(Invalid) 상태 변수 */
                --bs-form-invalid-color: #dc3545;
                --bs-form-invalid-border-color: #dc3545;
                --bs-danger: #dc3545;
                --bs-danger-text: #842029;
                --bs-danger-rgb: 220, 53, 69;
                --bs-danger-bg-subtle: #f8d7da;
                --bs-danger-border-subtle: #f1aeb5;
                
                /* 피드백 스타일 변수 */
                --bs-feedback-font-size: 0.875em;
                --bs-feedback-margin-top: 0.25rem;
                --bs-feedback-width: 100%;
                
                /* 검증 아이콘 변수 */
                --bs-form-valid-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.94-.94 1.44 1.44L7.34 4.56l.94.94L4.62 9.16 2.3 6.73z'/%3e%3c/svg%3e");
                --bs-form-invalid-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
                
                /* Select 검증 아이콘 변수 */
                --bs-form-select-invalid-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
                --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
                
                /* 검증 상태 박스 섀도우 */
                --bs-form-valid-box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
                --bs-form-invalid-box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
                
                /* 아이콘 크기 및 위치 */
                --bs-form-validation-icon-size: calc(0.75em + 0.375rem);
                --bs-form-validation-icon-position: right calc(0.375em + 0.1875rem) center;
                --bs-form-validation-padding-right: calc(1.5em + 0.75rem);
            }
        `;
    }

    /**
     * 기본 검증 상태 스타일
     */
    static get basic() {
        return css`
            /* 검증 완료 상태 기본 클래스 */
            .was-validated {
                /* 검증이 완료된 폼의 컨테이너 */
            }

            /* Valid 상태 기본 스타일 */
            .is-valid {
                border-color: var(--bs-form-valid-border-color) !important;
            }

            /* Invalid 상태 기본 스타일 */
            .is-invalid {
                border-color: var(--bs-form-invalid-border-color) !important;
            }
        `;
    }

    /**
     * 피드백 메시지 스타일
     */
    static get feedback() {
        return css`
            /* Valid 피드백 기본 스타일 */
            .valid-feedback {
                display: none;
                width: var(--bs-feedback-width);
                margin-top: var(--bs-feedback-margin-top);
                font-size: var(--bs-feedback-font-size);
                color: var(--bs-success-text);
            }

            /* Invalid 피드백 기본 스타일 */
            .invalid-feedback {
                display: none;
                width: var(--bs-feedback-width);
                margin-top: var(--bs-feedback-margin-top);
                font-size: var(--bs-feedback-font-size);
                color: var(--bs-form-invalid-color);
            }

            /* Valid 툴팁 스타일 */
            .valid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: 0.25rem 0.5rem;
                margin-top: 0.1rem;
                font-size: 0.765625rem;
                color: #fff;
                background-color: var(--bs-success-bg-subtle);
                border-radius: var(--bs-border-radius-sm, 0.25rem);
            }

            /* Invalid 툴팁 스타일 */
            .invalid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: 0.25rem 0.5rem;
                margin-top: 0.1rem;
                font-size: 0.765625rem;
                color: #fff;
                background-color: var(--bs-danger);
                border-radius: var(--bs-border-radius-sm, 0.25rem);
            }

            /* 피드백 표시 조건 */
            .is-valid ~ .valid-feedback,
            .is-valid ~ .valid-tooltip,
            .was-validated :valid ~ .valid-feedback,
            .was-validated :valid ~ .valid-tooltip {
                display: block;
            }

            .is-invalid ~ .invalid-feedback,
            .is-invalid ~ .invalid-tooltip,
            .was-validated :invalid ~ .invalid-feedback,
            .was-validated :invalid ~ .invalid-tooltip {
                display: block;
            }
        `;
    }

    /**
     * Form Control 검증 스타일
     */
    static get formControl() {
        return css`
            /* Valid Form Control */
            .form-control.is-valid,
            .was-validated .form-control:valid {
                border-color: var(--bs-form-valid-border-color);
                padding-right: var(--bs-form-validation-padding-right);
                background-image: var(--bs-form-valid-icon);
                background-repeat: no-repeat;
                background-position: var(--bs-form-validation-icon-position);
                background-size: var(--bs-form-validation-icon-size) var(--bs-form-validation-icon-size);
            }

            .form-control.is-valid:focus,
            .was-validated .form-control:valid:focus {
                border-color: var(--bs-form-valid-border-color);
                box-shadow: var(--bs-form-valid-box-shadow);
            }

            /* Invalid Form Control */
            .form-control.is-invalid,
            .was-validated .form-control:invalid {
                border-color: var(--bs-form-invalid-border-color);
                padding-right: var(--bs-form-validation-padding-right);
                background-image: var(--bs-form-invalid-icon);
                background-repeat: no-repeat;
                background-position: var(--bs-form-validation-icon-position);
                background-size: var(--bs-form-validation-icon-size) var(--bs-form-validation-icon-size);
            }

            .form-control.is-invalid:focus,
            .was-validated .form-control:invalid:focus {
                border-color: var(--bs-form-invalid-border-color);
                box-shadow: var(--bs-form-invalid-box-shadow);
            }
        `;
    }

    /**
     * Textarea 검증 스타일
     */
    static get textarea() {
        return css`
            /* Textarea Valid */
            .was-validated textarea.form-control:valid,
            textarea.form-control.is-valid {
                padding-right: var(--bs-form-validation-padding-right);
                background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
            }

            /* Textarea Invalid */
            .was-validated textarea.form-control:invalid,
            textarea.form-control.is-invalid {
                padding-right: var(--bs-form-validation-padding-right);
                background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
            }
        `;
    }

    /**
     * Form Select 검증 스타일
     */
    static get formSelect() {
        return css`
            /* Valid Form Select */
            .form-select.is-valid,
            .was-validated .form-select:valid {
                border-color: var(--bs-form-valid-border-color);
            }

            .form-select.is-valid:not([multiple]):not([size]),
            .form-select.is-valid:not([multiple])[size="1"],
            .was-validated .form-select:valid:not([multiple]):not([size]),
            .was-validated .form-select:valid:not([multiple])[size="1"] {
                --bs-form-select-bg-img: var(--bs-form-select-bg-icon), var(--bs-form-valid-icon);
                padding-right: 4.125rem;
                background-position: right 0.75rem center, center right 2.25rem;
                background-size: 16px 12px, var(--bs-form-validation-icon-size) var(--bs-form-validation-icon-size);
            }

            .form-select.is-valid:focus,
            .was-validated .form-select:valid:focus {
                border-color: var(--bs-form-valid-border-color);
                box-shadow: var(--bs-form-valid-box-shadow);
            }

            /* Invalid Form Select */
            .form-select.is-invalid,
            .was-validated .form-select:invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            .form-select.is-invalid:not([multiple]):not([size]),
            .form-select.is-invalid:not([multiple])[size="1"],
            .was-validated .form-select:invalid:not([multiple]):not([size]),
            .was-validated .form-select:invalid:not([multiple])[size="1"] {
                --bs-form-select-bg-img: var(--bs-form-select-bg-icon), var(--bs-form-select-invalid-icon);
                padding-right: 4.125rem;
                background-position: right 0.75rem center, center right 2.25rem;
                background-size: 16px 12px, var(--bs-form-validation-icon-size) var(--bs-form-validation-icon-size);
            }

            .form-select.is-invalid:focus,
            .was-validated .form-select:invalid:focus {
                border-color: var(--bs-form-invalid-border-color);
                box-shadow: var(--bs-form-invalid-box-shadow);
            }
        `;
    }

    /**
     * Form Check (Radio/Checkbox) 검증 스타일
     */
    static get formCheck() {
        return css`
            /* Valid Form Check */
            .form-check-input.is-valid,
            .was-validated .form-check-input:valid {
                border-color: var(--bs-form-valid-border-color);
            }

            .form-check-input.is-valid:checked,
            .was-validated .form-check-input:valid:checked {
                background-color: var(--bs-form-valid-color);
            }

            .form-check-input.is-valid:focus,
            .was-validated .form-check-input:valid:focus {
                box-shadow: var(--bs-form-valid-box-shadow);
            }

            .form-check-input.is-valid ~ .form-check-label,
            .was-validated .form-check-input:valid ~ .form-check-label {
                color: var(--bs-form-valid-color);
            }

            /* Invalid Form Check */
            .form-check-input.is-invalid,
            .was-validated .form-check-input:invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            .form-check-input.is-invalid:checked,
            .was-validated .form-check-input:invalid:checked {
                background-color: var(--bs-danger-text);
            }

            .form-check-input.is-invalid:focus,
            .was-validated .form-check-input:invalid:focus {
                box-shadow: var(--bs-form-invalid-box-shadow);
            }

            .form-check-input.is-invalid ~ .form-check-label,
            .was-validated .form-check-input:invalid ~ .form-check-label {
                color: var(--bs-danger-text);
            }

            /* Form Check Inline 피드백 */
            .form-check-inline .form-check-input ~ .valid-feedback {
                margin-left: 0.5em;
            }

            .form-check-inline .form-check-input ~ .invalid-feedback {
                margin-left: 0.5em;
            }
        `;
    }

    /**
     * Input Group 검증 스타일
     */
    static get inputGroup() {
        return css`
            .input-group > .form-control:not(:focus).is-valid,
            .input-group > .form-floating:not(:focus-within).is-valid,
            .input-group > .form-select:not(:focus).is-valid,
            .was-validated .input-group > .form-control:not(:focus):valid,
            .was-validated .input-group > .form-floating:not(:focus-within):valid,
            .was-validated .input-group > .form-select:not(:focus):valid {
                z-index: 3;
            }

            .input-group > .form-control:not(:focus).is-invalid,
            .input-group > .form-floating:not(:focus-within).is-invalid,
            .input-group > .form-select:not(:focus).is-invalid,
            .was-validated .input-group > .form-control:not(:focus):invalid,
            .was-validated .input-group > .form-floating:not(:focus-within):invalid,
            .was-validated .input-group > .form-select:not(:focus):invalid {
                z-index: 4;
            }
        `;
    }

    /**
     * Color Input 검증 스타일
     */
    static get colorInput() {
        return css`
            .form-control-color.is-valid,
            .was-validated .form-control-color:valid {
                width: calc(3rem + var(--bs-form-validation-padding-right));
            }

            .form-control-color.is-invalid,
            .was-validated .form-control-color:invalid {
                width: calc(3rem + var(--bs-form-validation-padding-right));
            }
        `;
    }

    /**
     * 다크 테마 지원
     */
    static get darkTheme() {
        return css`
            [data-bs-theme="dark"] .valid-feedback {
                color: #75b798;
            }

            [data-bs-theme="dark"] .invalid-feedback {
                color: #ea868f;
            }

            [data-bs-theme="dark"] .valid-tooltip {
                background-color: #198754;
            }

            [data-bs-theme="dark"] .invalid-tooltip {
                background-color: #dc3545;
            }
        `;
    }

    /**
     * 모든 검증 스타일을 통합한 전체 스타일
     */
    static get all() {
        return css`
            ${this.variables}
            ${this.basic}
            ${this.feedback}
            ${this.formControl}
            ${this.textarea}
            ${this.formSelect}
            ${this.formCheck}
            ${this.inputGroup}
            ${this.colorInput}
            ${this.darkTheme}
        `;
    }
}