import {css, html, LitElement, render} from 'lit';
import {LLabel} from '../text/Label.js';
import {LFeedback} from "../text/Feedback.js";
import {InputContainer} from "../group/InputContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";
import {TextStyles} from "../commons/TextStyles.js";
import {LitParents} from "../commons/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";


class LInput extends LitParents {

    constructor() {
        super();

        super.setSelector('input');
    }

    static styles =
        [
            // common css
            SharedStyles.styles,
            // text css
            TextStyles.styles,
            // component css
             css`
                 
                 .form-left-control {
                     flex-grow: 1;
                     padding: .375rem .75rem;
                     font-size: .875rem;
                     font-weight: 400;
                     line-height: 1.5;
                     color: var(--bs-body-color);
                     -webkit-appearance: none;
                     -moz-appearance: none;
                     border: var(--bs-border-width) solid var(--bs-border-color);
                     border-radius: 8px;
                     outline: none;
                     transition: all 0.3s ease-in-out;
                 }


             `
        ];


    formatValue(value) {
        // 예시: 숫자 포맷팅 (쉼표 추가)
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    isValid(pattern, required) {
        const regex = new RegExp(pattern);
        const value = this.getValue().trim();

        console.log(regex, regex.test(value), !(regex && !regex.test(value)))

        if (!value && required) {
            return false;
        } else return !((regex && value) && !regex.test(value));
    }

    validate() {
        if(this.feedbackVisibleType !== 'visible') {
            this.shadowRoot.querySelector('l-feedback').setAttribute('hidden',true);
        }

        if (this.isValid(this.pattern, this.required)) {
            this.shadowRoot.querySelector(this.selector).classList.remove('is-invalid');
            if(this.feedbackVisibleType === 'valid') {
                this.shadowRoot.querySelector('l-feedback').removeAttribute('hidden');
            }
        } else {
            this.shadowRoot.querySelector(this.selector).classList.add('is-invalid');
            if(this.feedbackVisibleType === 'invalid') {
                this.shadowRoot.querySelector('l-feedback').removeAttribute('hidden');
            }
        }
    }

    checkValidity() {
        this.validate();
    }


    static get properties() {
        return {
            type: {type: String},
            size: {type: String},
            id: {type: String},
            name: {type: String},
            width: {type: String},
            label: {type: String},
            feedback: {type: String},
            feedbackType: {type: String},
            feedbackVisibleType: {type: String},
            labelAlign: {type: String},
            labelWidth: {type: String},
            labelTextAlign: {type: String},
            required: {type: Boolean},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            pattern: {type: String},
            placeholder: {type: String},
            maxlength: {type: String},
            minlength: {type: String},
        };
    }


    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');

        return html`
            <l-input-container
                    class="${
                            classMap({
                                'container': isLabelLeft
                            })
                    }"
                    width="${ifDefined(this.width)}"
            >
                <l-label
                        slot="label"
                        label="${ifDefined(this.label)}"
                        id="${this.id}"
                        labelAlign="${ifDefined(this.labelAlign)}"
                        labelWidth="${ifDefined(this.labelWidth)}"
                        labelTextAlign="${ifDefined(this.labelTextAlign)}"
                        required="${ifDefined(this.required)}"
                >

                </l-label>
                <input
                        slot="input"
                        type="${this.type === 'planText' ? 'text' : this.type}"
                        class="${
                                classMap({
                                    'form-control': !isLabelLeft
                                    , 'form-left-control': isLabelLeft
                                    , 'form-control-plaintext': this.type === 'planText'
                                    , 'form-control-lg': this.size === 'large'
                                    , 'form-control-sm': this.size === 'small'
                                })
                        }"
                        id="${ifDefined(this.id)}"
                        name="${ifDefined(this.name)}"
                        minlength="${ifDefined(this.minlength)}"
                        maxlength="${ifDefined(this.maxlength)}"
                        ?required=${this.required}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        placeholder="${ifDefined(this.placeholder)}"
                        pattern="${ifDefined(this.pattern)}"
                        value="${ifDefined(this.value)}"
                        @blur="${this.validate}"
                >
            </l-input-container>
            <l-feedback
                    feedback="${ifDefined(this.feedback)}"
                    feedbackType="${ifDefined(this.feedbackType)}"
                    width="${ifDefined(this.width)}"
                    labelAlign="${ifDefined(this.labelAlign)}"
                    leftMargin="${ifDefined(this.labelWidth)}"
                    ?hidden="${this.feedbackVisibleType !== 'visible'}"
            >

            </l-feedback>
        `;
    }
}

customElements.define('l-input', LInput);