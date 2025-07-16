import { css } from 'lit';

/**
 * InputStyles.js
 * 
 * Input 컴포넌트 전용 스타일 모듈
 * SharedStyles.js에서 추출한 form-control 관련 스타일을 포함
 */
export class InputStyles {
    
    /**
     * 기본 form-control 스타일
     */
    static get base() {
        return css`
            .form-control {
                display: block;
                width: 100%;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                appearance: none;
                background-color: var(--bs-component-bg);
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                box-sizing: border-box;
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
                background-color: var(--bs-component-bg);
                outline: 0;
                border-color: #80b3ff;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25);
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

            .form-control::-moz-placeholder {
                color: var(--bs-secondary-color);
                opacity: 1;
            }

            .form-control::placeholder {
                color: var(--bs-secondary-color);
                opacity: 1;
            }

            .form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg);
                opacity: 1;
            }

            .form-control::-webkit-file-upload-button {
                padding: .375rem .75rem;
                margin: -.375rem -.75rem;
                margin-inline-end: .75rem;
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

            .form-control::file-selector-button {
                padding: .5rem .75rem;
                margin: -.375rem -.75rem;
                margin-inline-end: .75rem;
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
                .form-control::-webkit-file-upload-button {
                    transition: none;
                }
                .form-control::file-selector-button {
                    transition: none;
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
                background-color: var(--bs-secondary-bg);
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-secondary-bg);
            }
        `;
    }

    /**
     * form-control 변형 스타일들
     */
    static get variants() {
        return css`
            .form-left-control {
                text-align: left;
            }

            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: .375rem 0;
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

            .form-control-plaintext.form-control-lg, 
            .form-control-plaintext.form-control-sm {
                padding-right: 0;
                padding-left: 0;
            }
        `;
    }

    /**
     * form-control 크기 변형들
     */
    static get sizes() {
        return css`
            .form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));
                padding: .25rem .5rem;
                font-size: .765625rem;
                border-radius: 6px;
                box-sizing: border-box;
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
                padding: .5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px;
                box-sizing: border-box;
            }

            .form-control-sm::file-selector-button {
                padding: .4rem .5rem;
                margin: -.25rem -.5rem;
                margin-inline-end: .5rem;
            }

            .form-control-lg::file-selector-button {
                padding: .7rem 1rem;
                margin: -.5rem -1rem;
                margin-inline-end: 1rem;
            }
        `;
    }

    /**
     * 검색 입력 특화 스타일
     */
    static get search() {
        return css`
            .search-input-left {
                padding-left: 2rem;
                background-color: #fff;
            }

            .search-input-left.has-icon {
                background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: 0.5rem center;
                background-size: 16px 16px;
            }

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }

            input::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url("data:image/svg+xml,%3Csvg fill='%23000000' width='800px' height='800px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Ecancel2%3C/title%3E%3Cpath d='M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z'%3E%3C/path%3E%3C/svg%3E");
                background-size: contain;
                cursor: pointer;
            }

            input::-ms-clear {
                width: 0;
                height: 0;
            }
        `;
    }

    /**
     * 검증 상태 스타일
     */
    static get validation() {
        return css`
            .form-control.is-valid {
                border-color: var(--bs-form-valid-border-color);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2315d063' d='m2.3 6.73.5-.5a.75.75 0 0 1 1.06 0l.5.5a.75.75 0 0 1 0 1.06l-.5.5a.75.75 0 0 1-1.06 0l-.5-.5a.75.75 0 0 1 0-1.06z'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem);
            }

            .form-control.is-valid:focus {
                border-color: var(--bs-form-valid-border-color);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25);
            }

            .form-control.is-invalid {
                border-color: var(--bs-danger);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem);
            }

            .form-control.is-invalid:focus {
                border-color: var(--bs-danger);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25);
            }
        `;
    }

    /**
     * 유틸리티 스타일
     */
    static get utilities() {
        return css`
            .has-icon {
                position: relative;
            }

            .hidden {
                display: none !important;
            }
        `;
    }

    /**
     * 모든 Input 스타일을 통합한 전체 스타일
     */
    static get all() {
        return css`
            ${this.base}
            ${this.variants}
            ${this.sizes}
            ${this.search}
            ${this.validation}
            ${this.utilities}
        `;
    }
}