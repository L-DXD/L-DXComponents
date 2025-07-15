import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import flatpickr from "flatpickr";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

// CSS-in-JS 모듈 imports
import {DatepickerStyles} from '../../styles/modules/DatepickerStyles.js';
import {FormControlStyles} from '../../styles/modules/FormControlStyles.js';
import {ValidationStyles} from '../../styles/modules/ValidationStyles.js';

// 외부 CSS는 여전히 필요 (Flatpickr 라이브러리)
import 'flatpickr/dist/flatpickr.min.css'
import 'flatpickr/dist/plugins/monthSelect/style.css'
import '../../../assets/css/Flatpickr.css'; // 커스텀 Flatpickr 테마

class LitDatepickerParentsCSSinJS extends LitElement {

    constructor() {
        super();
    }

    /**
     * CSS-in-JS 방식으로 스타일 적용
     * Input.css 대신 모듈화된 스타일 사용
     */
    static styles = [
        DatepickerStyles.all,
        FormControlStyles.variables,
        ValidationStyles.all,
    ];

    setDateType(dateType) {
        this._dateType = dateType;
    }

    get getDateType() {
        return this._dateType;
    }

    // Shadow DOM을 사용하지 않거나, 외부 DOM 요소에 접근할 수 있도록 설정
    // Flatpickr 라이브러리 호환성을 위해 필요
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

            'component-style': {type: String},

            'start-year-offset': {type: Number},
            'start-month-offset': {type: Number},
            'start-day-offset': {type: Number},

            autocomplete: {type: String},
            placeholder: {type: String},

            'disable-date-from': {type: String},
            'disable-date-to': {type: String},
            'disable-day-from': {type: Number}, // 추가
            'disable-day-to': {type: Number},   // 추가
        };
    }

    get getSelector() {
        const inputId = `${this['id']}-input`;
        return document.querySelector(`#${inputId}`);
    }

    initDatePicker() {

        this._datepicker = flatpickr(this.getSelector, this.getOptions());

        const value = this['value'];
        this.setValue(value);
    }

    firstUpdated() {
        this.initDatePicker();
    }

    getValue = () => this._datepicker ? this._datepicker.input.value : null;

    isValidDateFormat(value, format) {
        const dateFormatRegex = DateUtils.getDateFormatRegex(format); // 포맷별 정규식
        if (value && (!dateFormatRegex || !dateFormatRegex.test(value))) {
            console.error(`id : ${this['id']} >> Invalid date format: ${value}. Expected format is ${format}.`);
            return false;
        }
        return true;
    }

    getOptions() {
        const format = this['format'] || DateUtils.getDefaultFormat(this.getDateType);
        const plugins = [];
        const dateType = this.getDateType;
        if (dateType === DateUtils.DATE_TYPE.MONTH) {
            plugins.push(new monthSelectPlugin({
                shorthand: true, //defaults to false
                dateFormat: format, //defaults to "F Y"
                altFormat: format
            }));
        }

        let options = {
            dateFormat: format, onChange: (_) => {
                this.validate();
            }, inline: this['showAlways'], onDayCreate: function (dObj, dStr, fp, dayElem) {
                if (dayElem.classList.contains("flatpickr-disabled") || dayElem.classList.contains("prevMonthDay") || dayElem.classList.contains("nextMonthDay") || dateType === DateUtils.DATE_TYPE.MONTH) return;

                const day = dayElem.dateObj.getDay(); // 0: 일요일, 6: 토요일

                if (day === 0) {
                    // 일요일: 빨간색 텍스트
                    dayElem.style.color = "#ff4d4d";
                } else if (day === 6) {
                    // 토요일: 파란색 텍스트
                    dayElem.style.color = "#4d79ff";
                }
            }, plugins: plugins
        };

        // disable 설정 초기화
        let disableRules = [];

        // 특정 일자 범위 비활성화 설정
        const disableDayFrom = this['disable-day-from'];
        const disableDayTo = this['disable-day-to'];
        if (disableDayFrom !== undefined && disableDayTo !== undefined && dateType !== DateUtils.DATE_TYPE.MONTH) {
            disableRules.push(function (date) {
                const dayOfMonth = date.getDate();
                return dayOfMonth >= disableDayFrom && dayOfMonth <= disableDayTo;
            });
        }

        // 특정 날짜 범위 비활성화 설정
        const disableDateFrom = this['disable-date-from'];
        const disableDateTo = this['disable-date-to'];
        if (disableDateFrom && disableDateTo) {
            disableRules.push({
                from: disableDateFrom, to: disableDateTo
            });
        }

        // disable 규칙이 있는 경우에만 options에 추가
        if (disableRules.length > 0) {
            options.disable = disableRules;
        }

        return options;
    }

    setEnableFromTo(enableFrom, enableTo) {
        if (this._datepicker) {
            // monthSelectPlugin issue로 redraw가 안되는 현상
            if (this.getDateType === DateUtils.DATE_TYPE.MONTH) {
                this._datepicker.destroy();

                let options = this.getOptions();
                options.enable = [{
                    from: enableFrom,
                    to: enableTo
                }];

                this._datepicker = flatpickr(this.getSelector, options);
            } else {
                this._datepicker.set('enable', [
                    {
                        from: enableFrom,
                        to: enableTo
                    }
                ])
            }
        }
    }

    setValue(value) {
        if (this._datepicker && value) {
            const format = this['format'] || DateUtils.getDefaultFormat(this.getDateType); // 포맷 확인 및 기본값

            // 날짜 형식 검사
            if (!this.isValidDateFormat(value, format)) return;

            // Date 객체 변환
            const newDate = DateUtils.parseDateStrByFormat(value, format);
            if (!newDate || isNaN(newDate)) { // 날짜 변환 실패 시
                console.error(`id : ${this['id']} >> Invalid date value: ${value}.`);
                return; // 유효하지 않은 경우 처리 중단
            }

            // 유효한 경우 DatePicker에 값 설정
            this._datepicker.setDate(newDate);

            this._datepicker.redraw();
        }
    }


    render() {
        const inputId = `${this['id']}-input`;
        const feedbackId = `${this['id']}-feedback`;

        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');


        const feedbackHtml = {
            'normal': html`
                <div class="valid-feedback">${this['feedback']}</div>`, 'hint': html`
                <div class="form-group"><small class="form-hint form-text text-muted">${this['feedback']}</small>
                </div>`, 'error': html`
                <div class="invalid-feedback">${this['feedback']}</div>`
        };

        return html`
            <div
                    style="width: ${this['width'] ? this['width'] : 'auto'}"
            >
                <div
                        class="${classMap({
                            'container': isLabelLeft
                        })}"
                >
                    <label
                            class="${classMap({
                                'form-left-label': (isLabelLeft && this['label']),
                                'form-label': !(isLabelLeft && this['label']),
                                'hidden': this['invisible']
                            })}"
                            for="${this['id']}"
                            style="
                        width: ${this['label-width'] || 'auto'};
                        text-align: ${this['label-text-align'] || 'left'}
                    "
                    >
                        ${this['required'] ? (isLabelLeft ? html`<span
                                style="color: #df1414;margin-right: 2px">*</span>${this['label']}` : html`${this['label']}
                        <span style="color: #df1414;margin-left: 2px">*</span>`) : this['label']}
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
                                   style="${this['component-style']}"
                                   id="${inputId}"
                                   name="${ifDefined(this['name'])}"
                                   aria-label="Date-Time"
                                   ?required=${this['required']}
                                   ?disabled=${this['disabled']}
                                   ?readonly=${this['readonly']}
                                   @blur="${this.validate}"
                                   autocomplete="${ifDefined(this['autocomplete']) || "off"}"
                            >
                            <div @click="${this._handleClick}"
                                 class="${classMap({
                                     'icon-right': true, 'hidden': this['invisible']
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

    isValid() {
        const value = this.getValue();
        const format = this['format'] || DateUtils.getDefaultFormat(this.getDateType);
        const required = this['required'];

        if (!value && required) {
            console.error("Validation failed: Value is required but missing.");
            return false;
        }

        if (!this.isValidDateFormat(value, format)) return false;

        // 모든 조건 충족
        return true;
    }


    checkValidity() {
        this.validate();
    }

    initCurrentMonth = () => {
        this.initTodayDate();
    }

    initTodayDate = () => {
        const startYearOffset = this['start-year-offset'] || 0;
        const startMonthOffset = this['start-month-offset'] || 0;
        const startDayOffset = this['start-day-offset'] || 0;

        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() + startYearOffset);
        startDate.setMonth(startDate.getMonth() + startMonthOffset);
        startDate.setDate(startDate.getDate() + startDayOffset);

        this._datepicker.setDate(startDate);
    }

    _handleClick = (_) => this.getSelector.click();


    validate() {
        const isFlag = this.isValid();
        this.setSelectorValid(!isFlag);

        const feedbackVisibleType = this['feedback-visible-type'];
        if (feedbackVisibleType == 'visible') {
            return;
        }

        const feedbackId = `${this['id']}-feedback`;
        const $feedbackElement = this.querySelector(`#${feedbackId}`);
        $feedbackElement.setAttribute('hidden', true); // Assume hidden first
        if ((isFlag && feedbackVisibleType == 'valid') || (!isFlag && feedbackVisibleType == 'invalid')) {
            $feedbackElement.removeAttribute('hidden');
        }
    }

    setSelectorValid(flag) {
        const inputId = `${this['id']}-input`;
        const $inputElement = this.querySelector(`#${inputId}`);
        $inputElement.classList.toggle('is-invalid', flag);
    }

    setValid() {
        this.setSelectorValid(false);
    }

    inValid() {
        this.setSelectorValid(true);
    }
}

export {LitDatepickerParentsCSSinJS};