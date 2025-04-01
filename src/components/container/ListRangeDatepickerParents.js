import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "@/components/container/LitDatepickerParents.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import flatpickr from "flatpickr";


class ListRangeDatepickerParents extends LitDatepickerParents {

    constructor() {
        super();
    }

    static get properties() {
        return {
            'rel-year': {type: Number},
            'rel-month': {type: Number},
            'rel-day': {type: Number},
        };
    }

    firstUpdated() {
        this.initDatePicker();
    }

    initDatePicker() {
        const format = this['format'] || DateUtils.getDefaultFormat(this.getDateType);

        let options = {
            mode: 'range',
            dateFormat: format,
            onChange: (_) => {
                this.validate();
            },
            inline: this['showAlways'],
        }
        if (this.getDateType === DateUtils.DATE_TYPE.MONTH) {
            options.plugins = [new monthSelectPlugin({
                shorthand: true, //defaults to false
                dateFormat: format, //defaults to "F Y"
                altFormat: format
            })];
        }

        const relYear = this['rel-year'];
        const relMonth = this['rel-month'];
        const relDay = this['rel-day'];
        const isRelativeDateFuture = this.isRelativeDateFuture(relYear, relMonth, relDay);


        if (relYear || relMonth || relDay) {
            const fromDate = isRelativeDateFuture ? this._getInitDate() : this._calculateInitDate(relYear, relMonth, relDay);
            const toDate = isRelativeDateFuture ? this._calculateInitDate(relYear, relMonth, relDay) : this._getInitDate();
            options.enable = [
                {
                    from: isRelativeDateFuture ? this._getInitDate() : this._calculateInitDate(relYear, relMonth, relDay),
                    to: isRelativeDateFuture ? this._calculateInitDate(relYear, relMonth, relDay) : this._getInitDate(),
                },
            ];

            // console.log('fromdate', DateUtils.parseDateByFormat(fromDate,DateUtils.getDefaultFormat(this.getDateType)));
            // console.log('todate', DateUtils.parseDateByFormat(toDate,DateUtils.getDefaultFormat(this.getDateType)));
        }

        super._datepicker = flatpickr(this.getSelector, options);

    }

    /**
     * 계산된 날짜가 기준일보다 과거인지 미래인지 확인
     * @param {number} relYear - 상대적 연도 값
     * @param {number} relMonth - 상대적 월 값
     * @param {number} relDay - 상대적 일 값
     * @returns {boolean} true: 미래, false: 과거
     */

    _calculateInitDate(relYear, relMonth, relDay) {
        const baseDate = this._getInitDate();
        return new Date(
            baseDate.getFullYear() + (relYear || 0),
            baseDate.getMonth() + (relMonth || 0),
            baseDate.getDate() + (relDay || 0),
        )
    }

    isRelativeDateFuture = (relYear = 0, relMonth = 0, relDay = 0) => {
        const today = this._getInitDate();
        const calculatedDate = new Date();

        calculatedDate.setFullYear(calculatedDate.getFullYear() + (relYear || 0));
        calculatedDate.setMonth(calculatedDate.getMonth() + (relMonth || 0));
        calculatedDate.setDate(calculatedDate.getDate() + (relDay || 0));


        return calculatedDate > today;
    };

    isValid() {
        const fromValue = this.getFromValue();
        const toValue = this.getToValue();
        const format = this['format'] || DateUtils.getDefaultFormat(this.getDateType);
        const required = this['required'];

        if (!fromValue && required) {
            console.error("Validation failed: From Value is required but missing.");
            return false;
        }

        if (!toValue && required) {
            console.error("Validation failed: to Value is required but missing.");
            return false;
        }

        if (!this.isValidDateFormat(fromValue, format)) return false;

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
        this._datepicker.setDate(this._getInitDate());
    }

    _getInitDate() {
        const startYearOffset = this['start-year-offset'] || 0;
        const startMonthOffset = this['start-month-offset'] || 0;
        const startDayOffset = this['start-day-offset'] || 0;

        const startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() + startYearOffset);
        startDate.setMonth(startDate.getMonth() + startMonthOffset);
        startDate.setDate(startDate.getDate() + startDayOffset);

        return startDate;
    }

    setValue = (value) => {
        this._datepicker.setDate(value);
    }

    getValue = () => this._datepicker ? this._datepicker.input.value : null;

    getFromValue() {
        return this.getValue().split(DateUtils.RANGE_INFIX)[0].trim();
    }

    getToValue() {
        return this.getValue().split(DateUtils.RANGE_INFIX)[1]?.trim() || '';
    }
}

export {ListRangeDatepickerParents};