import {css} from 'lit';

/**
 * Datepicker 컴포넌트 전용 스타일 모듈
 * Input.css와 Flatpickr.css의 스타일을 CSS-in-JS로 변환한 모듈
 * LitDatepickerParents 컴포넌트에서 사용
 * 
 * 사용법:
 * import {DatepickerStyles} from '@/styles/modules/DatepickerStyles.js';
 * static styles = [DatepickerStyles.all, ...];
 */
export class DatepickerStyles {
    
    /**
     * CSS 커스텀 프로퍼티 (Datepicker 테마 변수)
     */
    static get variables() {
        return css`
            :host {
                /* Datepicker 기본 변수 */
                --bs-datepicker-border-radius: 8px;
                --bs-datepicker-border-radius-sm: 6px;
                --bs-datepicker-border-radius-lg: 12px;
                --bs-datepicker-font-size: 0.875rem;
                --bs-datepicker-padding: 0.375rem 0.75rem;
                --bs-datepicker-padding-sm: 0.25rem 0.5rem;
                --bs-datepicker-padding-lg: 0.5rem 1rem;
                
                /* Flatpickr 테마 변수 */
                --bs-flatpickr-hover-bg: #bcd6fb;
                --bs-flatpickr-hover-border: #bcd6fb;
                --bs-flatpickr-today-bg: #80b3ff;
                --bs-flatpickr-today-border: #267fff;
                --bs-flatpickr-text-color: #fff;
                
                /* Input Group 변수 */
                --bs-input-group-text-bg: var(--bs-tertiary-bg, #f8f9fa);
                --bs-input-group-addon-bg: var(--bs-tertiary-bg, #f8f9fa);
                
                /* Calendar Icon 변수 */
                --bs-calendar-icon: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                
                /* Hint 아이콘 변수 */
                --bs-hint-icon: url(/assets/ico_hint_20.svg);
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
            
            button, input, optgroup, select, textarea {
                margin: 0;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
            }
        `;
    }

    /**
     * 컨테이너 레이아웃 스타일
     */
    static get layout() {
        return css`
            .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }

            .input-container {
                position: relative;
                display: flex;
                align-items: center;
            }

            .form-group {
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
                width: 100%;
                flex: 9;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .is-flex {
                flex: 1;
            }
            
            .hidden {
                display: none;
            }
        `;
    }

    /**
     * Form Control 기본 스타일 (Input.css에서 추출)
     */
    static get formControl() {
        return css`
            .form-control {
                display: block;
                width: 100%;
                padding: var(--bs-datepicker-padding, 0.375rem 0.75rem);
                font-size: var(--bs-datepicker-font-size, 0.875rem);
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                appearance: none;
                background-color: var(--bs-component-bg);
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: var(--bs-datepicker-border-radius, 8px);
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none;
                }
            }

            .form-control:focus {
                color: var(--bs-body-color);
                background-color: var(--bs-component-bg);
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 0.25rem rgba(0, 102, 255, 0.25);
            }

            .form-control::placeholder {
                color: var(--bs-secondary-color);
                opacity: 1;
            }

            .form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg);
                opacity: 1;
            }

            /* Left-aligned form control */
            .form-left-control {
                text-align: left;
            }
        `;
    }

    /**
     * Form Control 크기 변형
     */
    static get sizes() {
        return css`
            .form-control-sm {
                min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
                padding: var(--bs-datepicker-padding-sm, 0.25rem 0.5rem);
                font-size: 0.765625rem;
                border-radius: var(--bs-datepicker-border-radius-sm, 6px);
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
                padding: var(--bs-datepicker-padding-lg, 0.5rem 1rem);
                font-size: 1.09375rem;
                border-radius: var(--bs-datepicker-border-radius-lg, 12px);
            }
        `;
    }

    /**
     * Plaintext 스타일
     */
    static get plaintext() {
        return css`
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

            .form-control-plaintext.form-control-lg,
            .form-control-plaintext.form-control-sm {
                padding-right: 0;
                padding-left: 0;
            }
        `;
    }

    /**
     * File Input 스타일
     */
    static get fileInput() {
        return css`
            .form-control[type="file"] {
                overflow: hidden;
            }

            .form-control[type="file"]:not(:disabled):not([readonly]) {
                cursor: pointer;
            }

            .form-control::file-selector-button {
                padding: 0.375rem 0.75rem;
                margin: -0.375rem -0.75rem;
                margin-inline-end: 0.75rem;
                color: var(--bs-body-color);
                background-color: var(--bs-tertiary-bg);
                pointer-events: none;
                border-color: inherit;
                border-style: solid;
                border-width: 0;
                border-inline-end-width: var(--bs-border-width);
                border-radius: 0;
                transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, 
                           border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control::file-selector-button {
                    transition: none;
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-border-color);
            }
        `;
    }

    /**
     * Textarea 스타일
     */
    static get textarea() {
        return css`
            textarea.form-control {
                min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
            }

            textarea.form-control-sm {
                min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
            }

            textarea.form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
            }
            
            .textarea-count {
                font-size: var(--bs-body-font-size);
                width: 100%;
                margin-top: 0.25rem;
                margin-bottom: 0rem;
                text-align: right;
                flex: 1;
                display: none;
            }
        `;
    }

    /**
     * Color Input 스타일
     */
    static get colorInput() {
        return css`
            .form-control-color {
                width: 3rem;
                height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));
                padding: 0.375rem;
            }

            .form-control-color:not(:disabled):not([readonly]) {
                cursor: pointer;
            }

            .form-control-color::-moz-color-swatch {
                border: 0 !important;
                border-radius: 8px;
            }

            .form-control-color::-webkit-color-swatch {
                border: 0 !important;
                border-radius: 8px;
            }

            .form-control-color.form-control-sm {
                height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));
            }

            .form-control-color.form-control-lg {
                height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
            }
        `;
    }

    /**
     * WebKit 특화 스타일
     */
    static get webkit() {
        return css`
            .form-control::-webkit-date-and-time-value {
                min-width: 85px;
                height: 1.5em;
                margin: 0;
            }

            .form-control::-webkit-datetime-edit {
                display: block;
                padding: 0;
            }
        `;
    }

    /**
     * Input Group 스타일
     */
    static get inputGroup() {
        return css`
            .input-group {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                width: 100%;
            }

            .input-group-text {
                display: flex;
                align-items: center;
                padding: 0.375rem 0.75rem;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                text-align: center;
                white-space: nowrap;
                background-color: var(--bs-input-group-text-bg);
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
            }

            .right-border {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            .left-border {
                margin-left: calc(var(--bs-border-width) * -1);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        `;
    }

    /**
     * Label 스타일
     */
    static get labels() {
        return css`
            label {
                display: inline-block;
            }

            .form-label {
                margin-bottom: 0.5rem;
            }

            .l-label {
                margin-bottom: 0.5rem;
            }

            .form-left-label {
                margin-right: 10px;
                white-space: nowrap;
            }

            .col-form-label {
                padding-top: calc(0.375rem + var(--bs-border-width));
                padding-bottom: calc(0.375rem + var(--bs-border-width));
                margin-bottom: 0;
                font-size: inherit;
                line-height: 1.5;
            }

            .col-form-label-lg {
                padding-top: calc(0.5rem + var(--bs-border-width));
                padding-bottom: calc(0.5rem + var(--bs-border-width));
                font-size: 1.09375rem;
            }

            .col-form-label-sm {
                padding-top: calc(0.25rem + var(--bs-border-width));
                padding-bottom: calc(0.25rem + var(--bs-border-width));
                font-size: 0.765625rem;
            }
        `;
    }

    /**
     * Hint 메시지 스타일
     */
    static get hints() {
        return css`
            .form-group [class^="form-hint"] {
                margin-top: 0.25rem;
                color: var(--bs-gray-500);
                padding-left: calc(2rem + 0.4rem);
            }

            .form-group [class^="form-hint"]::before {
                display: inline-flex;
                width: 1rem;
                height: 1rem;
                flex-shrink: 0;
                flex-grow: 0;
                content: "";
                margin-left: calc((2rem + 0.4rem) * -1);
                margin-right: 2px;
                vertical-align: top;
                background: var(--bs-hint-icon) no-repeat center;
                background-size: contain;
            }
        `;
    }

    /**
     * Datepicker 전용 스타일 (아이콘, 버튼 등)
     */
    static get datepicker() {
        return css`
            .input-right {
                padding-right: 2rem;
                background-color: #fff;
            }

            .icon-right {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                background-image: var(--bs-calendar-icon);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }
        `;
    }

    /**
     * Flatpickr 테마 스타일
     */
    static get flatpickr() {
        return css`
            /* Flatpickr 기본 호버/포커스 스타일 */
            .flatpickr-day:hover,
            .flatpickr-day:focus {
                border-color: var(--bs-flatpickr-hover-border);
                background: var(--bs-flatpickr-hover-bg);
                color: var(--bs-flatpickr-text-color);
            }

            /* 오늘 날짜 호버/포커스 스타일 */
            .flatpickr-day.today:hover,
            .flatpickr-day.today:focus {
                border-color: var(--bs-flatpickr-today-bg);
                background: var(--bs-flatpickr-today-bg);
                color: var(--bs-flatpickr-text-color);
            }

            .flatpickr-day.today {
                border-color: var(--bs-flatpickr-today-border);
            }

            /* 월 선택 호버/포커스 스타일 */
            .flatpickr-monthSelect-month:hover,
            .flatpickr-monthSelect-month:focus {
                border-color: var(--bs-flatpickr-hover-border);
                background: var(--bs-flatpickr-hover-bg);
                color: var(--bs-flatpickr-text-color);
            }

            .flatpickr-monthSelect-month.today {
                border-color: var(--bs-flatpickr-today-border);
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
            ${this.layout}
            ${this.formControl}
            ${this.sizes}
            ${this.plaintext}
            ${this.fileInput}
            ${this.textarea}
            ${this.colorInput}
            ${this.webkit}
            ${this.inputGroup}
            ${this.labels}
            ${this.hints}
            ${this.datepicker}
            ${this.flatpickr}
        `;
    }
}