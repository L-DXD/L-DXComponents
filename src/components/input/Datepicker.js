import {html, LitElement} from 'lit';
import '../commons/common.css';
import {customElement} from 'lit/decorators.js';
import '/assets/css/Input.css';
import '/assets/css/flatpickr.min.css'
import DateUtils from '../commons/Date.js'
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import flatpickr from "flatpickr";

@customElement('l-c-datepicker')
class LDatepicker extends LitElement {

    constructor() {
        super();
        this._isOpen = false;
    }

    // Shadow DOM을 사용하지 않거나, 외부 DOM 요소에 접근할 수 있도록 설정
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            id: {type: String},
            name: {type: String},
            size: {type: String},

            format: {type: String},

            // label properties
            label: {type: String},
            'label-align': {type: String},
            'label-width': {type: String},
            'label-text-align': {type: String},

            // feedback properties
            feedback: {type: String},
            'feedback-type': {type: String},
            'feedback-visible-type': {type: String},

            // input properties
            width: {type: String},
            required: {type: Boolean},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            showAlways: {type: Boolean},
            invisible: {type: Boolean},

            'start-year-offset': {type: Number},
            'start-month-offset': {type: Number},
            'start-day-offset': {type: Number},
        };
    }

    get getSelector() {
        const inputId = `${this['id']}-input`;
        return document.querySelector(`#${inputId}`);
    }

    initDatePicker() {
        this._datepicker = flatpickr(this.getSelector, {});
    }

    firstUpdated() {
        this.initDatePicker();


        // this.setValue(this['value']);
        //
        // this.datePicker.on('change', (_) => {
        //     this.validate();
        // });
        // this.datePicker.on('open', (_) => {
        //     this._isOpen = true;
        // });
        // this.datePicker.on('close', (_) => {
        //     this._isOpen = false;
        // });

    }


    getValue() {
        // const inputId = `${this['id']}-input`;
        //
        // const inputElement = this.querySelector(`#${inputId}`);
        // return inputElement ? inputElement.value : null;
    }

    setValue(value) {
        // if (this.datePicker && value) {
        //     const format = this['format'] || 'yyyy-MM-dd'; // 포맷 확인 및 기본값
        //
        //     // 날짜 형식 검사
        //     const dateFormatRegex = this._getDateFormatRegex(format); // 포맷별 정규식
        //     if (!dateFormatRegex || !dateFormatRegex.test(value)) {
        //         console.error(`id : ${this['id']} >> Invalid date format: ${value}. Expected format is ${format}.`);
        //         return; // 유효하지 않은 경우 처리 중단
        //     }
        //
        //     // Date 객체 변환
        //     const newDate = this._parseDateStrByFormat(value, format);
        //     if (!newDate || isNaN(newDate)) { // 날짜 변환 실패 시
        //         console.error(`id : ${this['id']} >> Invalid date value: ${value}.`);
        //         return; // 유효하지 않은 경우 처리 중단
        //     }
        //
        //     // 유효한 경우 DatePicker에 값 설정
        //     this.datePicker.setDate(newDate);
        // }
    }


    render() {
        const inputId = `${this['id']}-input`;
        const feedbackId = `${this['id']}-feedback`;

        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        const feedbackHtml = {
                'normal': html`
                    <div class="valid-feedback">${this['feedback']}</div>`,
                'hint': html`
                    <div class="form-group"><small class="form-hint form-text text-muted">${this['feedback']}</small>
                    </div>`,
                'error': html`
                    <div class="invalid-feedback">${this['feedback']}</div>`
            }
        ;

        return html`
            <div
                    style="width: ${this['width'] ? this['width'] : 'auto'}"
            >
                <div
                        class="${
                                classMap({
                                    'container': isLabelLeft
                                })
                        }"
                >
                    <label
                            class="${
                                    classMap({
                                        'form-left-label': (isLabelLeft && this['label']),
                                        'form-label': !(isLabelLeft && this['label']),
                                        'hidden': this['invisible']
                                    })
                            }"
                            for="${this['id']}"
                            style="
                        width: ${this['label-width'] || 'auto'};
                        text-align: ${this['label-text-align'] || 'left'}
                    "
                    >
                        ${this['required']
                                ? (isLabelLeft
                                        ? html`<span style="color: #df1414;margin-right: 2px">*</span>${this['label']}`
                                        : html`${this['label']}<span style="color: #df1414;margin-left: 2px">*</span>`)
                                : this['label']}
                    </label>
                    <div class="">
                        <!-- Wrapper 영역 -->
                        <div class="input-container">
                            <input type="text"
                                   class="${classMap({
                                       'form-control': true,
                                       'form-left-control': isLabelLeft,
                                       'form-control-lg': this['size'] === 'large',
                                       'form-control-sm': this['size'] === 'small',
                                       'input-right': true,
                                       'hidden': this['invisible'],
                                   })}"
                                   id="${inputId}"
                                   name="${ifDefined(this['name'])}"
                                   aria-label="Date-Time"
                                   ?required=${this['required']}
                                   ?disabled=${this['disabled']}
                                   ?readonly=${this['readonly']}
                                   @blur="${this.validate}"
                                   autocomplete="off"
                            >
                            <div @click="${this._handleClick}"
                                 class="${classMap({
                                     'icon-right': true,
                                     'hidden': this['disabled']
                                    })}"
                                 id="rightIcon"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                    id="${feedbackId}"
                    style="
                    padding-left: calc(${this['label-width']} + ${isLabelLeft ? `15px` : '0px'})
                    ;width: ${this['width'] ? this['width'] : 'auto'}
                    ;display: flex;   
                "
            >
                ${feedbackHtml[this['feedback-type']]}

            </div>

        `;
    }

    isValid(value, format = 'yyyy-MM-dd', required) {
        // const dateObj = this.datePicker.getDate();        // DatePicker의 현재 값 (Date 객체) 가져오기
        //
        // if (!dateObj) {
        //     if (required) {
        //         console.error("Validation failed: Value is required but missing.");
        //         return false;
        //     }
        // }
        //
        // const dateFormatRegex = this._getDateFormatRegex(format); // 포맷별 정규식
        // if (value && (!dateFormatRegex || !dateFormatRegex.test(value))) {
        //     console.error(`Invalid date format: ${value}. Expected format is ${format}.`);
        //     return false; // 유효하지 않은 경우 처리 중단
        // }
        //
        // // 모든 조건 충족
        // return true;
    }

    validate() {
        // const inputId = `${this['id']}-input`;
        // const feedbackId = `${this['id']}-feedback`;
        // const value = this.getValue().trim();
        // const $feedbackElement = this.querySelector(`#${feedbackId}`);
        // const $inputElement = this.querySelector(`#${inputId}`);
        // const isFlag = this.isValid(value, this['format'], this['required']);
        // const feedbackVisibleType = this['feedback-visible-type'];
        //
        // $inputElement.classList.toggle('is-invalid', !isFlag); // Toggle 'is-invalid' based on validity
        //
        // if (feedbackVisibleType == 'visible') {
        //     return;
        // }
        //
        // $feedbackElement.setAttribute('hidden', true); // Assume hidden first
        // if ((isFlag && feedbackVisibleType == 'valid') || (!isFlag && feedbackVisibleType == 'invalid')) {
        //     $feedbackElement.removeAttribute('hidden');
        // }
    }

    checkValidity() {
        this.validate();
    }

    initTodayDate() {
        const format = this['format'] || 'yyyy-MM-dd';
        const today = new Date();
        const todayStr = DateUtils.parseDateByFormat(today, format);
        this.value = todayStr;
        this.text = todayStr;
        if (this.datePicker) {
            this.datePicker.setDate(today);
        }
    }

    _handleClick = (_) => this._datepicker.open();
}