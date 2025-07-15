import {css} from 'lit';

/**
 * 통합 CSS 커스텀 프로퍼티 테마 시스템
 * 모든 컴포넌트에서 일관되게 사용할 수 있는 CSS 변수 정의
 * 
 * 사용법:
 * import {ThemeSystem} from '@/styles/modules/ThemeSystem.js';
 * static styles = [ThemeSystem.base, ThemeSystem.light, ...];
 */
export class ThemeSystem {
    
    /**
     * 기본 CSS 커스텀 프로퍼티 (Base Theme Variables)
     * 모든 컴포넌트에서 공통으로 사용되는 변수들
     */
    static get base() {
        return css`
            :host {
                /* ===== 색상 팔레트 (Color Palette) ===== */
                
                /* Primary Colors */
                --bs-primary: #0d6efd;
                --bs-primary-rgb: 13, 110, 253;
                --bs-primary-text: #084298;
                --bs-primary-bg-subtle: #cfe2ff;
                --bs-primary-border-subtle: #9ec5fe;
                
                /* Secondary Colors */
                --bs-secondary: #6c757d;
                --bs-secondary-rgb: 108, 117, 125;
                --bs-secondary-text: #495057;
                --bs-secondary-bg-subtle: #e2e3e5;
                --bs-secondary-border-subtle: #c4c8cb;
                
                /* Success Colors */
                --bs-success: #198754;
                --bs-success-rgb: 25, 135, 84;
                --bs-success-text: #0f5132;
                --bs-success-bg-subtle: #d1e7dd;
                --bs-success-border-subtle: #a3cfbb;
                
                /* Danger Colors */
                --bs-danger: #dc3545;
                --bs-danger-rgb: 220, 53, 69;
                --bs-danger-text: #842029;
                --bs-danger-bg-subtle: #f8d7da;
                --bs-danger-border-subtle: #f1aeb5;
                
                /* Warning Colors */
                --bs-warning: #ffc107;
                --bs-warning-rgb: 255, 193, 7;
                --bs-warning-text: #664d03;
                --bs-warning-bg-subtle: #fff3cd;
                --bs-warning-border-subtle: #ffda6a;
                
                /* Info Colors */
                --bs-info: #0dcaf0;
                --bs-info-rgb: 13, 202, 240;
                --bs-info-text: #055160;
                --bs-info-bg-subtle: #cff4fc;
                --bs-info-border-subtle: #9eeaf9;
                
                /* Gray Scale */
                --bs-white: #fff;
                --bs-gray-100: #f8f9fa;
                --bs-gray-200: #e9ecef;
                --bs-gray-300: #dee2e6;
                --bs-gray-400: #ced4da;
                --bs-gray-500: #adb5bd;
                --bs-gray-600: #6c757d;
                --bs-gray-700: #495057;
                --bs-gray-800: #343a40;
                --bs-gray-900: #212529;
                --bs-black: #000;
                
                /* ===== 기본 컬러 시스템 ===== */
                --bs-body-color: var(--bs-gray-900);
                --bs-body-bg: var(--bs-white);
                --bs-component-bg: var(--bs-white);
                --bs-tertiary-bg: var(--bs-gray-100);
                
                /* ===== 보더 시스템 ===== */
                --bs-border-width: 1px;
                --bs-border-style: solid;
                --bs-border-color: var(--bs-gray-300);
                --bs-border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
                
                /* Border Radius */
                --bs-border-radius: 0.375rem;
                --bs-border-radius-sm: 0.25rem;
                --bs-border-radius-lg: 0.5rem;
                --bs-border-radius-xl: 1rem;
                --bs-border-radius-xxl: 2rem;
                --bs-border-radius-pill: 50rem;
                
                /* ===== 타이포그래피 ===== */
                --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                
                /* Font Sizes */
                --bs-body-font-size: 1rem;
                --bs-body-font-weight: 400;
                --bs-body-line-height: 1.5;
                
                /* ===== Spacing System ===== */
                --bs-spacer: 1rem;
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                
                /* ===== Box Shadow System ===== */
                --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
                --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
                
                /* ===== Focus System ===== */
                --bs-focus-ring-width: 0.25rem;
                --bs-focus-ring-opacity: 0.25;
                --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));
                --bs-focus-ring-box-shadow: 0 0 0 var(--bs-focus-ring-width) var(--bs-focus-ring-color);
            }
        `;
    }
    
    /**
     * 라이트 테마 (Light Theme)
     * 기본 라이트 모드 색상 변수들
     */
    static get light() {
        return css`
            :host {
                /* Light Mode Specific Variables */
                --bs-theme-body-color: var(--bs-gray-900);
                --bs-theme-body-bg: var(--bs-white);
                --bs-theme-component-bg: var(--bs-white);
                --bs-theme-border-color: var(--bs-gray-300);
                --bs-theme-text-muted: var(--bs-gray-600);
                
                /* Override base colors for light theme */
                --bs-body-color: var(--bs-theme-body-color);
                --bs-body-bg: var(--bs-theme-body-bg);
                --bs-component-bg: var(--bs-theme-component-bg);
                --bs-border-color: var(--bs-theme-border-color);
                --bs-secondary-color: var(--bs-theme-text-muted);
            }
        `;
    }
    
    /**
     * 다크 테마 (Dark Theme)
     * 다크 모드 색상 변수들
     */
    static get dark() {
        return css`
            :host([data-bs-theme="dark"]),
            [data-bs-theme="dark"] :host {
                /* Dark Mode Color Overrides */
                --bs-theme-body-color: var(--bs-gray-300);
                --bs-theme-body-bg: var(--bs-gray-900);
                --bs-theme-component-bg: var(--bs-gray-800);
                --bs-theme-border-color: var(--bs-gray-600);
                --bs-theme-text-muted: var(--bs-gray-400);
                
                /* Apply dark theme colors */
                --bs-body-color: var(--bs-theme-body-color);
                --bs-body-bg: var(--bs-theme-body-bg);
                --bs-component-bg: var(--bs-theme-component-bg);
                --bs-border-color: var(--bs-theme-border-color);
                --bs-secondary-color: var(--bs-theme-text-muted);
                
                /* Dark theme specific adjustments */
                --bs-tertiary-bg: var(--bs-gray-700);
                --bs-form-control-disabled-bg: var(--bs-gray-700);
            }
        `;
    }
    
    /**
     * 폼 컨트롤 테마 변수
     */
    static get formControls() {
        return css`
            :host {
                /* ===== Form Control Variables ===== */
                --bs-form-control-bg: var(--bs-component-bg);
                --bs-form-control-color: var(--bs-body-color);
                --bs-form-control-border-color: var(--bs-border-color);
                --bs-form-control-border-width: var(--bs-border-width);
                --bs-form-control-border-radius: var(--bs-border-radius);
                --bs-form-control-padding-x: 0.75rem;
                --bs-form-control-padding-y: 0.375rem;
                --bs-form-control-font-size: var(--bs-body-font-size);
                --bs-form-control-font-weight: var(--bs-body-font-weight);
                --bs-form-control-line-height: var(--bs-body-line-height);
                
                /* Focus States */
                --bs-form-control-focus-border-color: #86b7fe;
                --bs-form-control-focus-box-shadow: var(--bs-focus-ring-box-shadow);
                
                /* Disabled States */
                --bs-form-control-disabled-bg: var(--bs-gray-200);
                --bs-form-control-disabled-opacity: 1;
                
                /* Placeholder */
                --bs-form-control-placeholder-color: var(--bs-secondary-color);
                --bs-form-control-placeholder-opacity: 1;
            }
        `;
    }
    
    /**
     * 검증 상태 테마 변수
     */
    static get validation() {
        return css`
            :host {
                /* ===== Validation Variables ===== */
                --bs-form-valid-color: var(--bs-success);
                --bs-form-valid-border-color: var(--bs-success);
                --bs-form-invalid-color: var(--bs-danger);
                --bs-form-invalid-border-color: var(--bs-danger);
                
                /* Validation Box Shadows */
                --bs-form-valid-box-shadow: 0 0 0 var(--bs-focus-ring-width) rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));
                --bs-form-invalid-box-shadow: 0 0 0 var(--bs-focus-ring-width) rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));
                
                /* Feedback Colors */
                --bs-valid-feedback-color: var(--bs-success-text);
                --bs-invalid-feedback-color: var(--bs-danger-text);
                
                /* Validation Icons */
                --bs-form-valid-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.94-.94 1.44 1.44L7.34 4.56l.94.94L4.62 9.16 2.3 6.73z'/%3e%3c/svg%3e");
                --bs-form-invalid-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
            }
        `;
    }
    
    /**
     * Radio/Checkbox 테마 변수
     */
    static get formCheck() {
        return css`
            :host {
                /* ===== Form Check Variables ===== */
                --bs-form-check-bg: var(--bs-component-bg);
                --bs-form-check-border-color: var(--bs-border-color);
                --bs-form-check-border-width: var(--bs-border-width);
                --bs-form-check-border-radius: 0.25em;
                --bs-form-check-size: 1.3em;
                --bs-form-check-margin-top: 0.1em;
                --bs-form-check-padding-left: 1.8em;
                --bs-form-check-margin-bottom: 0.125rem;
                
                /* Checked States */
                --bs-form-check-checked-bg: var(--bs-primary);
                --bs-form-check-checked-border-color: var(--bs-primary);
                
                /* Focus States */
                --bs-form-check-focus-border-color: #80b3ff;
                --bs-form-check-focus-box-shadow: var(--bs-focus-ring-box-shadow);
                
                /* Disabled States */
                --bs-form-check-disabled-opacity: 0.5;
                
                /* Check Icons */
                --bs-form-check-checkbox-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
                --bs-form-check-radio-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFFFFF'/%3e%3c/svg%3e");
                --bs-form-check-indeterminate-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
            }
        `;
    }
    
    /**
     * Datepicker 테마 변수
     */
    static get datepicker() {
        return css`
            :host {
                /* ===== Datepicker Variables ===== */
                --bs-datepicker-border-radius: var(--bs-border-radius);
                --bs-datepicker-border-radius-sm: var(--bs-border-radius-sm);
                --bs-datepicker-border-radius-lg: var(--bs-border-radius-lg);
                --bs-datepicker-font-size: 0.875rem;
                --bs-datepicker-padding: var(--bs-form-control-padding-y) var(--bs-form-control-padding-x);
                --bs-datepicker-padding-sm: 0.25rem 0.5rem;
                --bs-datepicker-padding-lg: 0.5rem 1rem;
                
                /* Flatpickr Theme Colors */
                --bs-flatpickr-hover-bg: #bcd6fb;
                --bs-flatpickr-hover-border: #bcd6fb;
                --bs-flatpickr-today-bg: #80b3ff;
                --bs-flatpickr-today-border: #267fff;
                --bs-flatpickr-text-color: #fff;
                
                /* Calendar Icon */
                --bs-calendar-icon: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.71569 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                
                /* Hint Icon */
                --bs-hint-icon: url(/assets/ico_hint_20.svg);
            }
        `;
    }
    
    /**
     * 모든 테마 변수를 통합한 전체 테마 시스템
     */
    static get all() {
        return css`
            ${this.base}
            ${this.light}
            ${this.dark}
            ${this.formControls}
            ${this.validation}
            ${this.formCheck}
            ${this.datepicker}
        `;
    }
    
    /**
     * 라이트 테마만 포함한 기본 시스템
     */
    static get lightTheme() {
        return css`
            ${this.base}
            ${this.light}
            ${this.formControls}
            ${this.validation}
            ${this.formCheck}
            ${this.datepicker}
        `;
    }
}