import { css } from 'lit';

/**
 * ButtonStyles.js
 * 
 * Button 컴포넌트 전용 스타일 모듈
 * SharedStyles.js에서 추출한 버튼 관련 스타일을 포함
 */
export class ButtonStyles {
    
    /**
     * 기본 버튼 스타일
     * Bootstrap 기반 버튼 스타일 정의
     */
    static get base() {
        return css`
            .btn {
                --bs-btn-padding-x: 0.75rem;
                --bs-btn-padding-y: 0.375rem;
                --bs-btn-font-size: 0.875rem;
                --bs-btn-font-weight: 400;
                --bs-btn-line-height: 1.5;
                --bs-btn-color: var(--bs-body-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-width: var(--bs-border-width);
                --bs-btn-border-color: transparent;
                --bs-btn-border-radius: 8px;
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

            @media (prefers-reduced-motion: reduce) {
                .btn {
                    transition: none;
                }
            }

            .btn:hover {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
            }

            .btn:focus-visible {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow);
            }

            .btn:active,
            .btn.active,
            .btn.show {
                color: var(--bs-btn-active-color);
                background-color: var(--bs-btn-active-bg);
                border-color: var(--bs-btn-active-border-color);
            }

            .btn:active:focus-visible,
            .btn.active:focus-visible,
            .btn.show:focus-visible {
                box-shadow: var(--bs-btn-focus-box-shadow);
            }

            .btn.disabled,
            .btn:disabled {
                color: var(--bs-btn-disabled-color);
                pointer-events: none;
                background-color: var(--bs-btn-disabled-bg);
                border-color: var(--bs-btn-disabled-border-color);
                opacity: var(--bs-btn-disabled-opacity);
            }
        `;
    }

    /**
     * 버튼 사이즈 스타일
     */
    static get sizes() {
        return css`
            .btn-lg {
                --bs-btn-padding-y: 0.5rem;
                --bs-btn-padding-x: 1rem;
                --bs-btn-font-size: 1.09375rem;
                --bs-btn-border-radius: 12px;
            }

            .btn-sm {
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.765625rem;
                --bs-btn-border-radius: 6px;
            }
        `;
    }

    /**
     * 버튼 테마 스타일 - Solid 버전
     */
    static get themes() {
        return css`
            .btn-default {
                --bs-btn-color: var(--bs-component-color);
                --bs-btn-bg: var(--bs-component-bg);
                --bs-btn-border-color: var(--bs-border-color);
                --bs-btn-hover-color: var(--bs-component-color);
                --bs-btn-hover-bg: var(--bs-border-color);
                --bs-btn-hover-border-color: var(--bs-border-color);
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: var(--bs-component-color);
                --bs-btn-active-bg: var(--bs-border-color);
                --bs-btn-active-border-color: var(--bs-border-color);
                --bs-btn-disabled-color: var(--bs-component-color);
                --bs-btn-disabled-bg: var(--bs-component-bg);
                --bs-btn-disabled-border-color: var(--bs-border-color);
            }

            .btn-primary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0040a0;
                --bs-btn-active-border-color: #0040a0;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff;
            }

            .btn-secondary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #3a3e41;
                --bs-btn-active-border-color: #3a3e41;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60;
            }

            .btn-light {
                --bs-btn-color: #000000;
                --bs-btn-bg: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a0a1a1;
                --bs-btn-hover-border-color: #a0a1a1;
                --bs-btn-focus-shadow-rgb: 181, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #8a8b8c;
                --bs-btn-active-border-color: #8a8b8c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #d5d6d7;
                --bs-btn-disabled-border-color: #d5d6d7;
            }

            .btn-dark {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #212529;
                --bs-btn-border-color: #212529;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1c1f23;
                --bs-btn-hover-border-color: #1a1e21;
                --bs-btn-focus-shadow-rgb: 66, 70, 73;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1a1e21;
                --bs-btn-active-border-color: #181b1e;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #212529;
                --bs-btn-disabled-border-color: #212529;
            }

            .btn-info {
                --bs-btn-color: #000000;
                --bs-btn-bg: #0dcaf0;
                --bs-btn-border-color: #0dcaf0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #31d2f2;
                --bs-btn-hover-border-color: #25cff2;
                --bs-btn-focus-shadow-rgb: 11, 172, 204;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #3dd5f3;
                --bs-btn-active-border-color: #25cff2;
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #0dcaf0;
                --bs-btn-disabled-border-color: #0dcaf0;
            }

            .btn-purple {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #6f42c1;
                --bs-btn-border-color: #6f42c1;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #5e359a;
                --bs-btn-hover-border-color: #59329a;
                --bs-btn-focus-shadow-rgb: 134, 94, 206;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #59329a;
                --bs-btn-active-border-color: #533093;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #6f42c1;
                --bs-btn-disabled-border-color: #6f42c1;
            }

            .btn-indigo {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #6610f2;
                --bs-btn-border-color: #6610f2;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #560dc7;
                --bs-btn-hover-border-color: #520dc2;
                --bs-btn-focus-shadow-rgb: 125, 52, 244;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #520dc2;
                --bs-btn-active-border-color: #4d0cb8;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #6610f2;
                --bs-btn-disabled-border-color: #6610f2;
            }

            .btn-link {
                --bs-btn-font-weight: 400;
                --bs-btn-color: var(--bs-link-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-color: transparent;
                --bs-btn-hover-color: var(--bs-link-hover-color);
                --bs-btn-hover-border-color: transparent;
                --bs-btn-active-color: var(--bs-link-hover-color);
                --bs-btn-active-border-color: transparent;
                --bs-btn-disabled-color: #404548;
                --bs-btn-disabled-border-color: transparent;
                --bs-btn-box-shadow: 0 0 0 #000;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                text-decoration: underline;
            }

            .btn-link:focus-visible {
                color: var(--bs-btn-color);
            }

            .btn-link:hover {
                color: var(--bs-btn-hover-color);
            }

            .btn-danger {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #dc3545;
                --bs-btn-border-color: #dc3545;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #bb2d3b;
                --bs-btn-hover-border-color: #b02a37;
                --bs-btn-focus-shadow-rgb: 225, 83, 97;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #b02a37;
                --bs-btn-active-border-color: #a52834;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #dc3545;
                --bs-btn-disabled-border-color: #dc3545;
            }

            .btn-pink {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #d63384;
                --bs-btn-border-color: #d63384;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #b02a60;
                --bs-btn-hover-border-color: #a52758;
                --bs-btn-focus-shadow-rgb: 220, 83, 148;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #a52758;
                --bs-btn-active-border-color: #9a2550;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #d63384;
                --bs-btn-disabled-border-color: #d63384;
            }

            .btn-orange {
                --bs-btn-color: #ffffff;
                --bs-btn-bg: #ff9f0c;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffb749;
                --bs-btn-hover-border-color: #ffb749;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffc161;
                --bs-btn-active-border-color: #ffc161;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #ff9f0c;
                --bs-btn-disabled-border-color: #ff9f0c;
            }

            .btn-light-orange {
                --bs-btn-color: #ffae2d;
                --bs-btn-bg: #fff1dd;
                --bs-btn-border-color: #fff1dd;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #fff1dd;
                --bs-btn-disabled-border-color: #fff1dd;
            }

            .btn-yellow {
                --bs-btn-color: #000000;
                --bs-btn-bg: #ffc107;
                --bs-btn-border-color: #ffc107;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffca2c;
                --bs-btn-hover-border-color: #ffc720;
                --bs-btn-focus-shadow-rgb: 217, 164, 6;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffcd39;
                --bs-btn-active-border-color: #ffc720;
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #ffc107;
                --bs-btn-disabled-border-color: #ffc107;
            }

            .btn-lime {
                --bs-btn-color: #000000;
                --bs-btn-bg: #20c997;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #1dd1a1;
                --bs-btn-hover-border-color: #1ccf9e;
                --bs-btn-focus-shadow-rgb: 32, 170, 128;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #1ed5a6;
                --bs-btn-active-border-color: #1ccf9e;
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #20c997;
                --bs-btn-disabled-border-color: #20c997;
            }

            .btn-teal {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #20c997;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1ba97c;
                --bs-btn-hover-border-color: #1aa179;
                --bs-btn-focus-shadow-rgb: 64, 208, 160;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1aa179;
                --bs-btn-active-border-color: #199975;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #20c997;
                --bs-btn-disabled-border-color: #20c997;
            }

            .btn-green {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #198754;
                --bs-btn-border-color: #198754;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #157347;
                --bs-btn-hover-border-color: #146c43;
                --bs-btn-focus-shadow-rgb: 60, 153, 110;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #146c43;
                --bs-btn-active-border-color: #13653f;
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #198754;
                --bs-btn-disabled-border-color: #198754;
            }

            .btn-success {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #146628;
                --bs-btn-hover-border-color: #146628;
                --bs-btn-focus-shadow-rgb: 61, 154, 83;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #125822;
                --bs-btn-active-border-color: #125822;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #1b8835;
                --bs-btn-disabled-border-color: #1b8835;
            }

            .btn-theme {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0042a6;
                --bs-btn-active-border-color: #0042a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff;
            }

            .btn-theme-color {
                --bs-btn-color: #000000;
                --bs-btn-bg: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: white;
                --bs-btn-hover-border-color: white;
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: white;
                --bs-btn-active-border-color: white;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
                --bs-btn-disabled-border-color: #FFFFFF;
            }
        `;
    }

    /**
     * 버튼 테마 스타일 - Outline 버전
     */
    static get outlineThemes() {
        return css`
            .btn-outline-primary {
                --bs-btn-color: #0066ff;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
            }

            .btn-outline-secondary {
                --bs-btn-color: #555c60;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
            }

            .btn-outline-light {
                --bs-btn-color: #d5d6d7;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #d5d6d7;
                --bs-btn-hover-border-color: #d5d6d7;
                --bs-btn-focus-shadow-rgb: 213, 214, 215;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #d5d6d7;
                --bs-btn-active-border-color: #d5d6d7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d5d6d7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d5d6d7;
                --bs-gradient: none;
            }

            .btn-outline-dark {
                --bs-btn-color: #212529;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #212529;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #212529;
                --bs-btn-hover-border-color: #212529;
                --bs-btn-focus-shadow-rgb: 33, 37, 41;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #212529;
                --bs-btn-active-border-color: #212529;
                --bs-btn-disabled-color: #212529;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #212529;
            }

            .btn-outline-info {
                --bs-btn-color: #0dcaf0;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #0dcaf0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #0dcaf0;
                --bs-btn-hover-border-color: #0dcaf0;
                --bs-btn-focus-shadow-rgb: 13, 202, 240;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #0dcaf0;
                --bs-btn-active-border-color: #0dcaf0;
                --bs-btn-disabled-color: #0dcaf0;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0dcaf0;
            }

            .btn-outline-purple {
                --bs-btn-color: #6f42c1;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #6f42c1;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #6f42c1;
                --bs-btn-hover-border-color: #6f42c1;
                --bs-btn-focus-shadow-rgb: 111, 66, 193;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #6f42c1;
                --bs-btn-active-border-color: #6f42c1;
                --bs-btn-disabled-color: #6f42c1;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #6f42c1;
            }

            .btn-outline-indigo {
                --bs-btn-color: #6610f2;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #6610f2;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #6610f2;
                --bs-btn-hover-border-color: #6610f2;
                --bs-btn-focus-shadow-rgb: 102, 16, 242;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #6610f2;
                --bs-btn-active-border-color: #6610f2;
                --bs-btn-disabled-color: #6610f2;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #6610f2;
            }

            .btn-outline-link {
                --bs-btn-color: var(--bs-link-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-color: var(--bs-link-color);
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: var(--bs-link-color);
                --bs-btn-hover-border-color: var(--bs-link-color);
                --bs-btn-focus-shadow-rgb: 49, 132, 253;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: var(--bs-link-color);
                --bs-btn-active-border-color: var(--bs-link-color);
                --bs-btn-disabled-color: var(--bs-link-color);
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: var(--bs-link-color);
            }

            .btn-outline-danger {
                --bs-btn-color: #dc3545;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #dc3545;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #dc3545;
                --bs-btn-hover-border-color: #dc3545;
                --bs-btn-focus-shadow-rgb: 220, 53, 69;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #dc3545;
                --bs-btn-active-border-color: #dc3545;
                --bs-btn-disabled-color: #dc3545;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #dc3545;
            }

            .btn-outline-pink {
                --bs-btn-color: #d63384;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #d63384;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #d63384;
                --bs-btn-hover-border-color: #d63384;
                --bs-btn-focus-shadow-rgb: 214, 51, 132;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #d63384;
                --bs-btn-active-border-color: #d63384;
                --bs-btn-disabled-color: #d63384;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d63384;
            }

            .btn-outline-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ff9f0c;
                --bs-btn-hover-border-color: #ff9f0c;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ff9f0c;
                --bs-btn-active-border-color: #ff9f0c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ff9f0c;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ff9f0c;
                --bs-gradient: none;
            }

            .btn-outline-light-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #ffdeac;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ffdeac;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ffdeac;
                --bs-gradient: none;
            }

            .btn-outline-yellow {
                --bs-btn-color: #ffc107;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #ffc107;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffc107;
                --bs-btn-hover-border-color: #ffc107;
                --bs-btn-focus-shadow-rgb: 255, 193, 7;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffc107;
                --bs-btn-active-border-color: #ffc107;
                --bs-btn-disabled-color: #ffc107;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ffc107;
            }

            .btn-outline-lime {
                --bs-btn-color: #20c997;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #20c997;
                --bs-btn-hover-border-color: #20c997;
                --bs-btn-focus-shadow-rgb: 32, 201, 151;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #20c997;
                --bs-btn-active-border-color: #20c997;
                --bs-btn-disabled-color: #20c997;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #20c997;
            }

            .btn-outline-teal {
                --bs-btn-color: #20c997;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #20c997;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #20c997;
                --bs-btn-hover-border-color: #20c997;
                --bs-btn-focus-shadow-rgb: 32, 201, 151;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #20c997;
                --bs-btn-active-border-color: #20c997;
                --bs-btn-disabled-color: #20c997;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #20c997;
            }

            .btn-outline-green {
                --bs-btn-color: #198754;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #198754;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #198754;
                --bs-btn-hover-border-color: #198754;
                --bs-btn-focus-shadow-rgb: 25, 135, 84;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #198754;
                --bs-btn-active-border-color: #198754;
                --bs-btn-disabled-color: #198754;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #198754;
            }

            .btn-outline-success {
                --bs-btn-color: #1b8835;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1b8835;
                --bs-btn-hover-border-color: #1b8835;
                --bs-btn-focus-shadow-rgb: 27, 136, 53;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1b8835;
                --bs-btn-active-border-color: #1b8835;
                --bs-btn-disabled-color: #1b8835;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #1b8835;
            }

            .btn-outline-theme {
                --bs-btn-color: #0066ff;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
            }

            .btn-outline-theme-color {
                --bs-btn-color: #000000;
                --bs-btn-bg: transparent;
                --bs-btn-border-color: #000000;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #000000;
                --bs-btn-hover-border-color: #000000;
                --bs-btn-focus-shadow-rgb: 0, 0, 0;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #000000;
                --bs-btn-active-border-color: #000000;
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #000000;
            }
        `;
    }

    /**
     * 버튼 유틸리티 스타일
     */
    static get utilities() {
        return css`
            .has-icon {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
            }

            .btn-icon {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }

            .is-invalid {
                border-color: #dc3545;
            }
        `;
    }

    /**
     * 모든 버튼 스타일을 통합한 전체 스타일
     */
    static get all() {
        return css`
            ${this.base}
            ${this.sizes}
            ${this.themes}
            ${this.outlineThemes}
            ${this.utilities}
        `;
    }
}