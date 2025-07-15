import {css} from 'lit';

/**
 * Layout/Container 컴포넌트들에 필요한 최소한의 CSS만 포함한 SharedStyles
 * 원본 파일: SharedStyles.js
 * 생성일: 2025-07-01
 * 포함된 클래스: Container, Feedback, Validation 관련 클래스만 선별
 */
export class MinimalSharedStyles_Layout {
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
                --bs-success-text: #0f5132;
                --bs-danger-text: #842029;
            }

            /* Container 클래스 */
            .container {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 576px) {
                .container {
                    max-width: 540px;
                }
            }

            @media (min-width: 768px) {
                .container {
                    max-width: 720px;
                }
            }

            @media (min-width: 992px) {
                .container {
                    max-width: 960px;
                }
            }

            @media (min-width: 1200px) {
                .container {
                    max-width: 1140px;
                }
            }

            @media (min-width: 1400px) {
                .container {
                    max-width: 1320px;
                }
            }

            /* Feedback 관련 클래스 */
            .valid-feedback {
                display: none;
                width: 100%;
                margin-top: 0.25rem;
                font-size: 0.875em;
                color: var(--bs-success-text);
            }

            .invalid-feedback {
                display: none;
                width: 100%;
                margin-top: 0.25rem;
                font-size: 0.875em;
                color: var(--bs-form-invalid-color);
            }

            /* Valid/Invalid 상태에서 피드백 표시 */
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

            /* Form Check Inline Feedback */
            .form-check-inline .form-check-input ~ .valid-feedback {
                margin-left: 0.5em;
            }

            .form-check-inline .form-check-input ~ .invalid-feedback {
                margin-left: 0.5em;
            }

            /* Form Group (Feedback 컴포넌트에서 사용) */
            .form-group {
                margin-bottom: 1rem;
            }

            /* Form Text (Hint 텍스트) */
            .form-text {
                margin-top: 0.25rem;
                font-size: 0.875em;
                color: var(--bs-secondary-color);
            }

            /* Text 유틸리티 클래스들 */
            .text-muted {
                --bs-text-opacity: 1;
                color: var(--bs-secondary-color) !important;
            }

            .text-num {
                font-variant-numeric: tabular-nums;
            }

            /* Input Group (Feedback 컴포넌트에서 사용) */
            .input-group {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                width: 100%;
            }

            .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                margin-left: calc(var(--bs-border-width) * -1);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            /* Validation States */
            .was-validated {
                /* 검증된 상태의 폼 컨테이너 */
            }

            .is-valid {
                border-color: var(--bs-form-valid-border-color);
            }

            .is-invalid {
                border-color: var(--bs-form-invalid-border-color);
            }

            /* Show 상태 (애니메이션에 사용) */
            .show {
                display: block !important;
            }

            /* Dark Theme Support */
            [data-bs-theme=dark] .text-muted {
                color: var(--bs-gray-400) !important;
            }

            [data-bs-theme=dark] .form-text {
                color: var(--bs-gray-400);
            }

            [data-bs-theme=dark] .valid-feedback {
                color: #75b798;
            }

            [data-bs-theme=dark] .invalid-feedback {
                color: #ea868f;
            }

            /* 반응형 컨테이너 */
            .container-fluid {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            .container-sm {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 576px) {
                .container-sm {
                    max-width: 540px;
                }
            }

            .container-md {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 768px) {
                .container-md {
                    max-width: 720px;
                }
            }

            .container-lg {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 992px) {
                .container-lg {
                    max-width: 960px;
                }
            }

            .container-xl {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 1200px) {
                .container-xl {
                    max-width: 1140px;
                }
            }

            .container-xxl {
                --bs-gutter-x: 1.5rem;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto;
            }

            @media (min-width: 1400px) {
                .container-xxl {
                    max-width: 1320px;
                }
            }
        `;
    }
}