import {css} from 'lit';

/**
 * Button 컴포넌트에 필요한 최소한의 CSS만 포함한 SharedStyles
 * 원본 파일: SharedStyles.js
 * 생성일: 2025-07-01
 * 포함된 클래스: Button 관련 클래스만 선별
 */
export class MinimalSharedStyles_Button {
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
                --bs-primary-text-emphasis: #052c65;
                --bs-secondary-text-emphasis: #2b2f32;
                --bs-success-text-emphasis: #0a3622;
                --bs-info-text-emphasis: #055160;
                --bs-warning-text-emphasis: #664d03;
                --bs-danger-text-emphasis: #58151c;
                --bs-light-text-emphasis: #495057;
                --bs-dark-text-emphasis: #495057;
                --bs-primary-bg-subtle: #cfe2ff;
                --bs-secondary-bg-subtle: #e2e3e5;
                --bs-success-bg-subtle: #d1e7dd;
                --bs-info-bg-subtle: #cff4fc;
                --bs-warning-bg-subtle: #fff3cd;
                --bs-danger-bg-subtle: #f8d7da;
                --bs-light-bg-subtle: #fcfcfd;
                --bs-dark-bg-subtle: #ced4da;
                --bs-primary-border-subtle: #9ec5fe;
                --bs-secondary-border-subtle: #c4c8cb;
                --bs-success-border-subtle: #a3cfbb;
                --bs-info-border-subtle: #9eeaf9;
                --bs-warning-border-subtle: #ffe69c;
                --bs-danger-border-subtle: #f1aeb5;
                --bs-light-border-subtle: #e9ecef;
                --bs-dark-border-subtle: #adb5bd;
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

            /* Button 기본 스타일 */
            .btn {
                --bs-btn-padding-x: 0.75rem;
                --bs-btn-padding-y: 0.375rem;
                --bs-btn-font-family: ;
                --bs-btn-font-size: 1rem;
                --bs-btn-font-weight: 400;
                --bs-btn-line-height: 1.5;
                --bs-btn-color: var(--bs-body-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-width: var(--bs-border-width);
                --bs-btn-border-color: transparent;
                --bs-btn-border-radius: var(--bs-border-radius);
                --bs-btn-hover-border-color: transparent;
                --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
                --bs-btn-disabled-opacity: 0.65;
                --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
                display: inline-block;
                padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
                font-family: var(--bs-btn-font-family);
                font-size: var(--bs-btn-font-size);
                font-weight: var(--bs-btn-font-weight);
                line-height: var(--bs-btn-line-height);
                color: var(--bs-btn-color);
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
                border-radius: var(--bs-btn-border-radius);
                background-color: var(--bs-btn-bg);
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            .btn:hover {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
            }

            .btn-check:focus + .btn, .btn:focus {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow);
            }

            .btn-check:checked + .btn, .btn-check:active + .btn, .btn:active, .btn.active, .show > .btn.dropdown-toggle {
                color: var(--bs-btn-active-color);
                background-color: var(--bs-btn-active-bg);
                border-color: var(--bs-btn-active-border-color);
            }

            .btn-check:checked + .btn:focus, .btn-check:active + .btn:focus, .btn:active:focus, .btn.active:focus, .show > .btn.dropdown-toggle:focus {
                box-shadow: var(--bs-btn-focus-box-shadow);
            }

            .btn:disabled, .btn.disabled, fieldset:disabled .btn {
                color: var(--bs-btn-disabled-color);
                pointer-events: none;
                background-color: var(--bs-btn-disabled-bg);
                border-color: var(--bs-btn-disabled-border-color);
                opacity: var(--bs-btn-disabled-opacity);
            }

            /* Button 크기 */
            .btn-lg {
                --bs-btn-padding-y: 0.5rem;
                --bs-btn-padding-x: 1rem;
                --bs-btn-font-size: 1.09375rem;
                --bs-btn-border-radius: var(--bs-border-radius-lg);
            }

            .btn-sm {
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.765625rem;
                --bs-btn-border-radius: var(--bs-border-radius-sm);
            }

            /* Button 테마 - Primary */
            .btn-primary {
                --bs-btn-color: #fff;
                --bs-btn-bg: #0d6efd;
                --bs-btn-border-color: #0d6efd;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #0b5ed7;
                --bs-btn-hover-border-color: #0a58ca;
                --bs-btn-focus-shadow-rgb: 49, 132, 253;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #0a58ca;
                --bs-btn-active-border-color: #0a53be;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #0d6efd;
                --bs-btn-disabled-border-color: #0d6efd;
            }

            /* Button 테마 - Secondary */
            .btn-secondary {
                --bs-btn-color: #fff;
                --bs-btn-bg: #6c757d;
                --bs-btn-border-color: #6c757d;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #5c636a;
                --bs-btn-hover-border-color: #565e64;
                --bs-btn-focus-shadow-rgb: 130, 138, 145;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #565e64;
                --bs-btn-active-border-color: #51585e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #6c757d;
                --bs-btn-disabled-border-color: #6c757d;
            }

            /* Button 테마 - Light */
            .btn-light {
                --bs-btn-color: #000;
                --bs-btn-bg: #f8f9fa;
                --bs-btn-border-color: #f8f9fa;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #d3d4d5;
                --bs-btn-hover-border-color: #c6c7c8;
                --bs-btn-focus-shadow-rgb: 211, 212, 213;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #c6c7c8;
                --bs-btn-active-border-color: #babbbc;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #f8f9fa;
                --bs-btn-disabled-border-color: #f8f9fa;
            }

            /* Button 테마 - Dark */
            .btn-dark {
                --bs-btn-color: #fff;
                --bs-btn-bg: #212529;
                --bs-btn-border-color: #212529;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #424649;
                --bs-btn-hover-border-color: #373b3e;
                --bs-btn-focus-shadow-rgb: 66, 70, 73;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #4d5154;
                --bs-btn-active-border-color: #373b3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #212529;
                --bs-btn-disabled-border-color: #212529;
            }

            /* Button 테마 - Info */
            .btn-info {
                --bs-btn-color: #000;
                --bs-btn-bg: #0dcaf0;
                --bs-btn-border-color: #0dcaf0;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #31d2f2;
                --bs-btn-hover-border-color: #25cff2;
                --bs-btn-focus-shadow-rgb: 11, 172, 204;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #3dd5f3;
                --bs-btn-active-border-color: #25cff2;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #0dcaf0;
                --bs-btn-disabled-border-color: #0dcaf0;
            }

            /* Button 테마 - Purple */
            .btn-purple {
                --bs-btn-color: #fff;
                --bs-btn-bg: #6f42c1;
                --bs-btn-border-color: #6f42c1;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #5e37a6;
                --bs-btn-hover-border-color: #59359a;
                --bs-btn-focus-shadow-rgb: 130, 96, 207;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #59359a;
                --bs-btn-active-border-color: #54328e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #6f42c1;
                --bs-btn-disabled-border-color: #6f42c1;
            }

            /* Button 테마 - Indigo */
            .btn-indigo {
                --bs-btn-color: #fff;
                --bs-btn-bg: #6610f2;
                --bs-btn-border-color: #6610f2;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #560bd0;
                --bs-btn-hover-border-color: #510bc4;
                --bs-btn-focus-shadow-rgb: 125, 52, 244;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #510bc4;
                --bs-btn-active-border-color: #4c0ab8;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #6610f2;
                --bs-btn-disabled-border-color: #6610f2;
            }

            /* Button 테마 - Danger */
            .btn-danger {
                --bs-btn-color: #fff;
                --bs-btn-bg: #dc3545;
                --bs-btn-border-color: #dc3545;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #bb2d3b;
                --bs-btn-hover-border-color: #b02a37;
                --bs-btn-focus-shadow-rgb: 225, 83, 97;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #b02a37;
                --bs-btn-active-border-color: #a52834;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #dc3545;
                --bs-btn-disabled-border-color: #dc3545;
            }

            /* Button 테마 - Pink */
            .btn-pink {
                --bs-btn-color: #fff;
                --bs-btn-bg: #d63384;
                --bs-btn-border-color: #d63384;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #b52d70;
                --bs-btn-hover-border-color: #aa2a6a;
                --bs-btn-focus-shadow-rgb: 220, 79, 150;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #aa2a6a;
                --bs-btn-active-border-color: #9f2763;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #d63384;
                --bs-btn-disabled-border-color: #d63384;
            }

            /* Button 테마 - Orange */
            .btn-orange {
                --bs-btn-color: #000;
                --bs-btn-bg: #fd7e14;
                --bs-btn-border-color: #fd7e14;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #fc6c02;
                --bs-btn-hover-border-color: #eb6502;
                --bs-btn-focus-shadow-rgb: 215, 107, 18;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #eb6502;
                --bs-btn-active-border-color: #dc5f02;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #fd7e14;
                --bs-btn-disabled-border-color: #fd7e14;
            }

            /* Button 테마 - Light Orange */
            .btn-light-orange {
                --bs-btn-color: #000;
                --bs-btn-bg: #ff9f43;
                --bs-btn-border-color: #ff9f43;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #ff8c1a;
                --bs-btn-hover-border-color: #ff8710;
                --bs-btn-focus-shadow-rgb: 217, 135, 58;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #ff8710;
                --bs-btn-active-border-color: #f0800f;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #ff9f43;
                --bs-btn-disabled-border-color: #ff9f43;
            }

            /* Button 테마 - Yellow */
            .btn-yellow {
                --bs-btn-color: #000;
                --bs-btn-bg: #ffc107;
                --bs-btn-border-color: #ffc107;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #ffcd39;
                --bs-btn-hover-border-color: #ffca2c;
                --bs-btn-focus-shadow-rgb: 217, 164, 6;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #ffcd39;
                --bs-btn-active-border-color: #ffca2c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #ffc107;
                --bs-btn-disabled-border-color: #ffc107;
            }

            /* Button 테마 - Lime */
            .btn-lime {
                --bs-btn-color: #000;
                --bs-btn-bg: #32d74b;
                --bs-btn-border-color: #32d74b;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #2bc840;
                --bs-btn-hover-border-color: #28bb3c;
                --bs-btn-focus-shadow-rgb: 43, 183, 64;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #28bb3c;
                --bs-btn-active-border-color: #26ad38;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #32d74b;
                --bs-btn-disabled-border-color: #32d74b;
            }

            /* Button 테마 - Teal */
            .btn-teal {
                --bs-btn-color: #000;
                --bs-btn-bg: #20c997;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #1ca085;
                --bs-btn-hover-border-color: #1a9680;
                --bs-btn-focus-shadow-rgb: 28, 171, 129;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #1a9680;
                --bs-btn-active-border-color: #188c7a;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000;
                --bs-btn-disabled-bg: #20c997;
                --bs-btn-disabled-border-color: #20c997;
            }

            /* Button 테마 - Green */
            .btn-green {
                --bs-btn-color: #fff;
                --bs-btn-bg: #198754;
                --bs-btn-border-color: #198754;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #157347;
                --bs-btn-hover-border-color: #146c43;
                --bs-btn-focus-shadow-rgb: 60, 153, 110;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #146c43;
                --bs-btn-active-border-color: #13653f;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fff;
                --bs-btn-disabled-bg: #198754;
                --bs-btn-disabled-border-color: #198754;
            }

            /* Button 테마 - Default */
            .btn-default {
                --bs-btn-color: #212529;
                --bs-btn-bg: #e9ecef;
                --bs-btn-border-color: #e9ecef;
                --bs-btn-hover-color: #212529;
                --bs-btn-hover-bg: #d3d4d5;
                --bs-btn-hover-border-color: #c6c7c8;
                --bs-btn-focus-shadow-rgb: 199, 200, 201;
                --bs-btn-active-color: #212529;
                --bs-btn-active-bg: #c6c7c8;
                --bs-btn-active-border-color: #babbbc;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #212529;
                --bs-btn-disabled-bg: #e9ecef;
                --bs-btn-disabled-border-color: #e9ecef;
            }

            /* Outline Button 테마들 */
            .btn-outline-primary {
                --bs-btn-color: #0d6efd;
                --bs-btn-border-color: #0d6efd;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #0d6efd;
                --bs-btn-hover-border-color: #0d6efd;
                --bs-btn-focus-shadow-rgb: 13, 110, 253;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #0d6efd;
                --bs-btn-active-border-color: #0d6efd;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0d6efd;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0d6efd;
                --bs-gradient: none;
            }

            .btn-outline-secondary {
                --bs-btn-color: #6c757d;
                --bs-btn-border-color: #6c757d;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #6c757d;
                --bs-btn-hover-border-color: #6c757d;
                --bs-btn-focus-shadow-rgb: 108, 117, 125;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #6c757d;
                --bs-btn-active-border-color: #6c757d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #6c757d;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #6c757d;
                --bs-gradient: none;
            }

            .btn-outline-light {
                --bs-btn-color: #f8f9fa;
                --bs-btn-border-color: #f8f9fa;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #f8f9fa;
                --bs-btn-hover-border-color: #f8f9fa;
                --bs-btn-focus-shadow-rgb: 248, 249, 250;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #f8f9fa;
                --bs-btn-active-border-color: #f8f9fa;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #f8f9fa;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #f8f9fa;
                --bs-gradient: none;
            }

            .btn-outline-dark {
                --bs-btn-color: #212529;
                --bs-btn-border-color: #212529;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #212529;
                --bs-btn-hover-border-color: #212529;
                --bs-btn-focus-shadow-rgb: 33, 37, 41;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #212529;
                --bs-btn-active-border-color: #212529;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #212529;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #212529;
                --bs-gradient: none;
            }

            .btn-outline-info {
                --bs-btn-color: #0dcaf0;
                --bs-btn-border-color: #0dcaf0;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #0dcaf0;
                --bs-btn-hover-border-color: #0dcaf0;
                --bs-btn-focus-shadow-rgb: 13, 202, 240;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #0dcaf0;
                --bs-btn-active-border-color: #0dcaf0;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0dcaf0;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0dcaf0;
                --bs-gradient: none;
            }

            .btn-outline-purple {
                --bs-btn-color: #6f42c1;
                --bs-btn-border-color: #6f42c1;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #6f42c1;
                --bs-btn-hover-border-color: #6f42c1;
                --bs-btn-focus-shadow-rgb: 111, 66, 193;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #6f42c1;
                --bs-btn-active-border-color: #6f42c1;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #6f42c1;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #6f42c1;
                --bs-gradient: none;
            }

            .btn-outline-indigo {
                --bs-btn-color: #6610f2;
                --bs-btn-border-color: #6610f2;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #6610f2;
                --bs-btn-hover-border-color: #6610f2;
                --bs-btn-focus-shadow-rgb: 102, 16, 242;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #6610f2;
                --bs-btn-active-border-color: #6610f2;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #6610f2;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #6610f2;
                --bs-gradient: none;
            }

            .btn-outline-danger {
                --bs-btn-color: #dc3545;
                --bs-btn-border-color: #dc3545;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #dc3545;
                --bs-btn-hover-border-color: #dc3545;
                --bs-btn-focus-shadow-rgb: 220, 53, 69;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #dc3545;
                --bs-btn-active-border-color: #dc3545;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #dc3545;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #dc3545;
                --bs-gradient: none;
            }

            .btn-outline-pink {
                --bs-btn-color: #d63384;
                --bs-btn-border-color: #d63384;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #d63384;
                --bs-btn-hover-border-color: #d63384;
                --bs-btn-focus-shadow-rgb: 214, 51, 132;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #d63384;
                --bs-btn-active-border-color: #d63384;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d63384;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d63384;
                --bs-gradient: none;
            }

            .btn-outline-orange {
                --bs-btn-color: #fd7e14;
                --bs-btn-border-color: #fd7e14;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #fd7e14;
                --bs-btn-hover-border-color: #fd7e14;
                --bs-btn-focus-shadow-rgb: 253, 126, 20;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #fd7e14;
                --bs-btn-active-border-color: #fd7e14;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #fd7e14;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #fd7e14;
                --bs-gradient: none;
            }

            .btn-outline-light-orange {
                --bs-btn-color: #ff9f43;
                --bs-btn-border-color: #ff9f43;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #ff9f43;
                --bs-btn-hover-border-color: #ff9f43;
                --bs-btn-focus-shadow-rgb: 255, 159, 67;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #ff9f43;
                --bs-btn-active-border-color: #ff9f43;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ff9f43;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ff9f43;
                --bs-gradient: none;
            }

            .btn-outline-yellow {
                --bs-btn-color: #ffc107;
                --bs-btn-border-color: #ffc107;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #ffc107;
                --bs-btn-hover-border-color: #ffc107;
                --bs-btn-focus-shadow-rgb: 255, 193, 7;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #ffc107;
                --bs-btn-active-border-color: #ffc107;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ffc107;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ffc107;
                --bs-gradient: none;
            }

            .btn-outline-lime {
                --bs-btn-color: #32d74b;
                --bs-btn-border-color: #32d74b;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #32d74b;
                --bs-btn-hover-border-color: #32d74b;
                --bs-btn-focus-shadow-rgb: 50, 215, 75;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #32d74b;
                --bs-btn-active-border-color: #32d74b;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #32d74b;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #32d74b;
                --bs-gradient: none;
            }

            .btn-outline-teal {
                --bs-btn-color: #20c997;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #000;
                --bs-btn-hover-bg: #20c997;
                --bs-btn-hover-border-color: #20c997;
                --bs-btn-focus-shadow-rgb: 32, 201, 151;
                --bs-btn-active-color: #000;
                --bs-btn-active-bg: #20c997;
                --bs-btn-active-border-color: #20c997;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #20c997;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #20c997;
                --bs-gradient: none;
            }

            .btn-outline-green {
                --bs-btn-color: #198754;
                --bs-btn-border-color: #198754;
                --bs-btn-hover-color: #fff;
                --bs-btn-hover-bg: #198754;
                --bs-btn-hover-border-color: #198754;
                --bs-btn-focus-shadow-rgb: 25, 135, 84;
                --bs-btn-active-color: #fff;
                --bs-btn-active-bg: #198754;
                --bs-btn-active-border-color: #198754;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #198754;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #198754;
                --bs-gradient: none;
            }

            /* 커스텀 클래스 - has-icon */
            .has-icon {
                display: inline-flex;
                align-items: center;
                gap: 0.25rem;
            }

            /* 검증 상태 */
            .is-invalid {
                border-color: var(--bs-form-invalid-border-color);
            }
        `;
    }
}