import {css} from 'lit';

/**
 * Form 컴포넌트들에 필요한 최소한의 CSS만 포함한 SharedStyles
 * 원본 파일: SharedStyles.js
 * 생성일: 2025-07-01
 * 포함된 클래스: Form Control, Check/Radio, Select, Validation 관련 클래스만 선별
 */
export class MinimalSharedStyles_Form {
    static get styles() {
        return css`
            /* CSS 변수 정의 */
            :host {
                --bs-blue: #0d6efd;
                --bs-indigo: #6610f2;
                --bs-purple: #6f42c1;
                --bs-pink: #d63384;
                --bs-red: #dc3545;
                --bs-orange: #fd7e14;
                --bs-yellow: #ffc107;
                --bs-green: #198754;
                --bs-teal: #20c997;
                --bs-cyan: #0dcaf0;
                --bs-black: #000;
                --bs-white: #fff;
                --bs-gray: #6c757d;
                --bs-gray-dark: #343a40;
                --bs-gray-100: #f8f9fa;
                --bs-gray-200: #e9ecef;
                --bs-gray-300: #dee2e6;
                --bs-gray-400: #ced4da;
                --bs-gray-500: #adb5bd;
                --bs-gray-600: #6c757d;
                --bs-gray-700: #495057;
                --bs-gray-800: #343a40;
                --bs-gray-900: #212529;
                --bs-primary: #0d6efd;
                --bs-secondary: #6c757d;
                --bs-success: #198754;
                --bs-info: #0dcaf0;
                --bs-warning: #ffc107;
                --bs-danger: #dc3545;
                --bs-light: #f8f9fa;
                --bs-dark: #212529;
                --bs-primary-rgb: 13, 110, 253;
                --bs-secondary-rgb: 108, 117, 125;
                --bs-success-rgb: 25, 135, 84;
                --bs-info-rgb: 13, 202, 240;
                --bs-warning-rgb: 255, 193, 7;
                --bs-danger-rgb: 220, 53, 69;
                --bs-light-rgb: 248, 249, 250;
                --bs-dark-rgb: 33, 37, 41;
                --bs-white-rgb: 255, 255, 255;
                --bs-black-rgb: 0, 0, 0;
                --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
                --bs-body-font-family: var(--bs-font-sans-serif);
                --bs-body-font-size: 1rem;
                --bs-body-font-weight: 400;
                --bs-body-line-height: 1.5;
                --bs-body-color: #212529;
                --bs-body-color-rgb: 33, 37, 41;
                --bs-body-bg: #fff;
                --bs-body-bg-rgb: 255, 255, 255;
                --bs-emphasis-color: #000;
                --bs-emphasis-color-rgb: 0, 0, 0;
                --bs-secondary-color: rgba(33, 37, 41, 0.75);
                --bs-secondary-color-rgb: 33, 37, 41;
                --bs-secondary-bg: #e9ecef;
                --bs-secondary-bg-rgb: 233, 236, 239;
                --bs-tertiary-color: rgba(33, 37, 41, 0.5);
                --bs-tertiary-color-rgb: 33, 37, 41;
                --bs-tertiary-bg: #f8f9fa;
                --bs-tertiary-bg-rgb: 248, 249, 250;
                --bs-heading-color: inherit;
                --bs-link-color: #0d6efd;
                --bs-link-color-rgb: 13, 110, 253;
                --bs-link-decoration: underline;
                --bs-link-hover-color: #0a58ca;
                --bs-link-hover-color-rgb: 10, 88, 202;
                --bs-code-color: #d63384;
                --bs-highlight-color: #212529;
                --bs-highlight-bg: #fff3cd;
                --bs-border-width: 1px;
                --bs-border-style: solid;
                --bs-border-color: #dee2e6;
                --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
                --bs-border-radius: 0.375rem;
                --bs-border-radius-sm: 0.25rem;
                --bs-border-radius-lg: 0.5rem;
                --bs-border-radius-xl: 1rem;
                --bs-border-radius-xxl: 2rem;
                --bs-border-radius-2xl: var(--bs-border-radius-xxl);
                --bs-border-radius-pill: 50rem;
                --bs-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
                --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
                --bs-focus-ring-width: 0.25rem;
                --bs-focus-ring-opacity: 0.25;
                --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
                --bs-form-valid-color: #198754;
                --bs-form-valid-border-color: #198754;
                --bs-form-invalid-color: #dc3545;
                --bs-form-invalid-border-color: #dc3545;
            }

            /* Form Control 기본 스타일 */
            .form-control {
                display: block;
                width: 100%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                background-color: var(--bs-body-bg);
                background-image: none;
                border: var(--bs-border-width) solid var(--bs-border-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border-radius: var(--bs-border-radius);
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none;
                }
            }

            .form-control[type=file] {
                overflow: hidden;
            }

            .form-control[type=file]:not(:disabled):not([readonly]) {
                cursor: pointer;
            }

            .form-control:focus {
                color: var(--bs-body-color);
                background-color: var(--bs-body-bg);
                border-color: #86b7fe;
                outline: 0;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            .form-control::-webkit-date-and-time-value {
                min-width: 85px;
                height: 1.5em;
                margin: 0;
            }

            .form-control::-webkit-datetime-edit {
                display: block;
                padding: 0;
            }

            .form-control::placeholder {
                color: var(--bs-secondary-color);
                opacity: 1;
            }

            .form-control:disabled {
                background-color: var(--bs-secondary-bg);
                opacity: 1;
            }

            .form-control::file-selector-button {
                padding: 0.375rem 0.75rem;
                margin: -0.375rem -0.75rem;
                -webkit-margin-end: 0.75rem;
                margin-inline-end: 0.75rem;
                color: var(--bs-body-color);
                background-color: var(--bs-tertiary-bg);
                pointer-events: none;
                border-color: inherit;
                border-style: solid;
                border-width: 0;
                border-inline-end-width: var(--bs-border-width);
                border-radius: 0;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control::file-selector-button {
                    transition: none;
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-secondary-bg);
            }

            /* Form Control 크기 */
            .form-control-sm {
                min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
                padding: 0.25rem 0.5rem;
                font-size: 0.765625rem;
                border-radius: var(--bs-border-radius-sm);
            }

            .form-control-sm::file-selector-button {
                padding: 0.25rem 0.5rem;
                margin: -0.25rem -0.5rem;
                -webkit-margin-end: 0.5rem;
                margin-inline-end: 0.5rem;
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
                padding: 0.5rem 1rem;
                font-size: 1.09375rem;
                border-radius: var(--bs-border-radius-lg);
            }

            .form-control-lg::file-selector-button {
                padding: 0.5rem 1rem;
                margin: -0.5rem -1rem;
                -webkit-margin-end: 1rem;
                margin-inline-end: 1rem;
            }

            /* Form Control Plaintext */
            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: 0.375rem 0;
                margin-bottom: 0;
                line-height: 1.5;
                color: var(--bs-body-color);
                background-color: transparent;
                border: solid transparent;
                border-width: var(--bs-border-width) 0;
            }

            .form-control-plaintext:focus {
                outline: 0;
            }

            .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
                padding-right: 0;
                padding-left: 0;
            }

            /* Form Control Left (커스텀 클래스) */
            .form-left-control {
                flex: 1;
            }

            /* Form Select */
            .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
                display: block;
                width: 100%;
                padding: 0.375rem 2.25rem 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                background-color: var(--bs-body-bg);
                background-image: var(--bs-form-select-bg-img);
                background-repeat: no-repeat;
                background-position: right 0.75rem center;
                background-size: 16px 12px;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: var(--bs-border-radius);
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
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
                border-color: #86b7fe;
                outline: 0;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            .form-select[multiple], .form-select[size]:not([size="1"]) {
                padding-right: 0.75rem;
                background-image: none;
            }

            .form-select:disabled {
                background-color: var(--bs-secondary-bg);
            }

            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--bs-body-color);
            }

            /* Form Select 크기 */
            .form-select-sm {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 0.5rem;
                font-size: 0.765625rem;
                border-radius: var(--bs-border-radius-sm);
            }

            .form-select-lg {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 1rem;
                font-size: 1.09375rem;
                border-radius: var(--bs-border-radius-lg);
            }

            [data-bs-theme=dark] .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e");
            }

            /* Form Check (Checkbox/Radio) */
            .form-check {
                display: block;
                min-height: 1.5rem;
                padding-left: 1.5em;
                margin-bottom: 0.125rem;
            }

            .form-check .form-check-input {
                float: left;
                margin-left: -1.5em;
            }

            .form-check-reverse {
                padding-right: 1.5em;
                padding-left: 0;
                text-align: right;
            }

            .form-check-reverse .form-check-input {
                float: right;
                margin-right: -1.5em;
                margin-left: 0;
            }

            .form-check-input {
                --bs-form-check-bg: var(--bs-body-bg);
                width: 1em;
                height: 1em;
                margin-top: 0.25em;
                vertical-align: top;
                background-color: var(--bs-form-check-bg);
                background-image: var(--bs-form-check-bg-image);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border: var(--bs-border-width) solid var(--bs-border-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
                print-color-adjust: exact;
            }

            .form-check-input[type=checkbox] {
                border-radius: 0.25em;
            }

            .form-check-input[type=radio] {
                border-radius: 50%;
            }

            .form-check-input:active {
                filter: brightness(90%);
            }

            .form-check-input:focus {
                border-color: #86b7fe;
                outline: 0;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            .form-check-input:checked {
                background-color: #0d6efd;
                border-color: #0d6efd;
            }

            .form-check-input:checked[type=checkbox] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
            }

            .form-check-input:checked[type=radio] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
            }

            .form-check-input[type=checkbox]:indeterminate {
                background-color: #0d6efd;
                border-color: #0d6efd;
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
            }

            .form-check-input:disabled {
                pointer-events: none;
                filter: none;
                opacity: 0.5;
            }

            .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
                cursor: default;
                opacity: 0.5;
            }

            /* Form Check Inline */
            .form-check-inline {
                display: inline-block;
                margin-right: 1rem;
            }

            /* Form Check Label */
            .form-check-label {
                cursor: pointer;
            }

            /* 검증 상태 */
            .is-valid {
                border-color: var(--bs-form-valid-border-color);
            }

            .is-invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            .form-control.is-invalid, .was-validated .form-control:invalid {
                border-color: var(--bs-form-invalid-border-color);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem);
            }

            .form-control.is-invalid:focus, .was-validated .form-control:invalid:focus {
                border-color: var(--bs-form-invalid-border-color);
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, .25);
            }

            .form-control.is-valid, .was-validated .form-control:valid {
                border-color: var(--bs-form-valid-border-color);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.94-.94 1.44 1.44L7.34 4.56l.94.94L4.62 9.16 2.3 6.73z'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem);
            }

            .form-control.is-valid:focus, .was-validated .form-control:valid:focus {
                border-color: var(--bs-form-valid-border-color);
                box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, .25);
            }

            .form-select.is-invalid, .was-validated .form-select:invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"] {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 6 7 7 7-7'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
                background-position: right 0.75rem center, center right 2.25rem;
                background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem);
            }

            .form-select.is-invalid:focus, .was-validated .form-select:invalid:focus {
                border-color: var(--bs-form-invalid-border-color);
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, .25);
            }

            .form-check-input.is-invalid, .was-validated .form-check-input:invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            .form-check-input.is-invalid:checked, .was-validated .form-check-input:invalid:checked {
                background-color: var(--bs-form-invalid-color);
            }

            .form-check-input.is-invalid:focus, .was-validated .form-check-input:invalid:focus {
                box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, .25);
            }

            .form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label {
                color: var(--bs-form-invalid-color);
            }

            /* Dark theme support */
            [data-bs-theme=dark] .form-control {
                color: var(--bs-gray-300);
                background-color: var(--bs-gray-800);
                border-color: var(--bs-gray-600);
            }

            [data-bs-theme=dark] .form-control:focus {
                color: var(--bs-gray-300);
                background-color: var(--bs-gray-800);
                border-color: #86b7fe;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            [data-bs-theme=dark] .form-control::placeholder {
                color: var(--bs-gray-400);
            }

            [data-bs-theme=dark] .form-control:disabled {
                background-color: var(--bs-gray-700);
            }

            [data-bs-theme=dark] .form-select {
                color: var(--bs-gray-300);
                background-color: var(--bs-gray-800);
                border-color: var(--bs-gray-600);
            }

            [data-bs-theme=dark] .form-select:focus {
                border-color: #86b7fe;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            [data-bs-theme=dark] .form-select:disabled {
                background-color: var(--bs-gray-700);
            }

            [data-bs-theme=dark] .form-check-input {
                background-color: var(--bs-gray-800);
                border-color: var(--bs-gray-600);
            }

            [data-bs-theme=dark] .form-check-input:focus {
                border-color: #86b7fe;
                box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
            }

            [data-bs-theme=dark] .form-check-input:checked {
                background-color: #0d6efd;
                border-color: #0d6efd;
            }
        `;
    }
}