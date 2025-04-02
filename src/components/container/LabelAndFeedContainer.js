import {css, html, LitElement} from 'lit';
import {LLabel} from '../text/Label.js';
import {LFeedback} from "../text/Feedback.js";
import {classMap} from "lit/directives/class-map.js";
import {customElement} from "lit/decorators.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {LitParents} from "@/components/container/LitParents.js";

@customElement('l-label-feed-container')
export class LabelAndFeedContainer extends LitParents {

    constructor() {
        super();
    }

    static styles =
        [
            ...super.styles,
            // component css
            css`
              .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
              }
            `
        ];


    getByteLength(str) {
        const contents = str;
        let str_character;
        let int_char_count = 0;
        let int_contents_length = contents.length;

        for (let k = 0; k < int_contents_length; k++) {
            str_character = contents.charAt(k);
            if (escape(str_character).length > 4)
                int_char_count += 2;
            else
                int_char_count++;
        }

        return int_char_count;
    }

    /**
     * 패턴 유효성 검사
     * @param {string} value - 검사할 값
     * @returns {boolean} - 패턴 일치 여부
     */
    isPatternValid(value) {
        const pattern = this['pattern'];
        if (!pattern || !value) return true;

        try {
            const regex = new RegExp(pattern);
            return regex.test(value);
        } catch (e) {
            console.warn('Invalid pattern:', pattern);
            return true;
        }
    }

    /**
     * required 유효성 검사
     * @param {string} value - 검사할 값
     * @returns {boolean} - required 조건 만족 여부
     */
    isRequiredValid(value) {
        const required = this['required'];
        if (!required) return true;

        return value.trim().length > 0;
    }

    /**
     * 전체 유효성 검사
     * @returns {boolean} - 전체 유효성 검사 결과
     */
    isValid() {
        const value = this.getValue().trim();

        return this.isRequiredValid(value) && this.isPatternValid(value);
    }


    // change 이벤트 핸들러
    createChangeHandler(maxBytes) {
        if(!(((typeof maxBytes) == 'string') && parseInt(maxBytes) == maxBytes)) return;

        return function handleChange(event) {
            const input = event.target;
            let value = input.value;
            let byteLength = this.getByteLength(value);

            if (byteLength > maxBytes) {
                // 입력된 내용이 최대 바이트 수를 초과한 경우 자르기
                let cutIndex = value.length;
                while (byteLength > maxBytes && cutIndex > 0) {
                    cutIndex--;
                    byteLength = this.getByteLength(value.substring(0, cutIndex));
                }
                input.value = value.substring(0, cutIndex);
            }
        };
    }

    // 입력값 미리보기 생성 함수
    getNewInputValue(input, key) {
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const currentValue = input.value;

        // 선택된 텍스트가 있는 경우 해당 부분을 새로운 키로 대체
        return currentValue.substring(0, start) + key + currentValue.substring(end);
    }

    validate() {
        const value = this.getValue().trim();

        const isFlag = this.isValid();
        this.setSelectorValid(!isFlag);

        const feedbackVisibleType = this['feedback-visible-type'];
        if (feedbackVisibleType == 'visible') {
            return;
        }

        const $container = this.shadowRoot.querySelector('l-label-feed-container');
        const $feedbackElement = $container.shadowRoot.querySelector('l-feedback');
        $feedbackElement.setAttribute('hidden', true); // Assume hidden first
        if ((isFlag && feedbackVisibleType == 'valid') || (!isFlag && feedbackVisibleType == 'invalid')) {
            $feedbackElement.removeAttribute('hidden');
        }
    }

    setSelectorValid(flag) {
        const $inputElement = this.shadowRoot.querySelector(this.selector);
        $inputElement.classList.toggle('is-invalid', flag);
    }

    setValid() {
        this.setSelectorValid(false);
    }
    inValid() {
        this.setSelectorValid(true);
    }

    checkValidity() {
        this.validate();
    }

    static get properties() {
        return {
            id: {type: String},
            width: {type: String},
            required: {type: Boolean},

            // feedback properties
            feedback: {type: String},
            'feedback-type': {type: String},
            'feedback-visible-type': {type: String},

            // label properties
            label: {type: String},
            'label-align': {type: String},
            'label-width': {type: String},
            'label-text-align': {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');


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
                    <l-label
                            label="${ifDefined(this['label'])}"
                            id="${this['id']}"
                            label-align="${ifDefined(this['label-align'])}"
                            label-width="${ifDefined(this['label-width'])}"
                            label-text-align="${ifDefined(this['label-text-align'])}"
                            required="${ifDefined(this['required'])}"
                    >
                    </l-label>
                    <slot name="input"></slot>
                    <slot name="count"></slot>
                </div>

            </div>

            <l-feedback
                    feedback="${ifDefined(this['feedback'])}"
                    feedback-type="${ifDefined(this['feedback-type'])}"
                    width="${ifDefined(this['width'])}"
                    label-align="${ifDefined(this['label-align'])}"
                    left-margin="${ifDefined(this['label-width'])}"
                    ?hidden="${this['feedback-visible-type'] !== 'visible'}"
            >
                

            </l-feedback>
        `
    }
}