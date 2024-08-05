import {css, html, LitElement} from 'lit';
import {LLabel} from '../text/Label.js';
import {LFeedback} from "../text/Feedback.js";
import {SharedStyles} from "@/components/commons/SharedStyles.js";
import {classMap} from "lit/directives/class-map.js";
import {customElement} from "lit/decorators.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {LitParents} from "@/components/commons/LitParents.js";

@customElement('l-input-container')
export class InputContainer extends LitParents {

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

    isValid(value, pattern, required) {
        const regex = new RegExp(pattern);

        if (!value && required) {
            return false;
        } else return !((regex && value) && !regex.test(value));
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



    validate() {
        const value = this.getValue().trim();
        const $container = this.shadowRoot.querySelector('l-input-container');
        const $feedbackElement = $container.shadowRoot.querySelector('l-feedback');
        const $inputElement = this.shadowRoot.querySelector(this.selector);
        const isFlag = this.isValid(value, this['pattern'], this['required']);
        const feedbackVisibleType = this['feedback-visible-type'];

        $inputElement.classList.toggle('is-invalid', !isFlag); // Toggle 'is-invalid' based on validity

        if (feedbackVisibleType == 'visible') {
            return;
        }
        $feedbackElement.setAttribute('hidden', true); // Assume hidden first
        if ((isFlag && feedbackVisibleType == 'valid') || (!isFlag && feedbackVisibleType == 'invalid')) {
            $feedbackElement.removeAttribute('hidden');
        }
    }

    checkValidity() {
        this.validate();
    }

    static get properties() {
        return {
            id: {type: String},
            class: {type: String},
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
                    class="${this['class']}"
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