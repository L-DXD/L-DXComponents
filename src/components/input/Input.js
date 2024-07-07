import {css, html, LitElement, render} from 'lit';
import {LLabel} from '../text/Label.js';
import {LFeedback} from "../text/Feedback.js";
import {InputContainer} from "../group/InputContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";
import {LitParents} from "../commons/LitParents.js";


class LInput extends LitParents {

    constructor() {
        super();

        super.setSelector('input');
    }

    static styles =
        [
            // common css
            SharedStyles.styles

            // component css
            , css`
          *, ::after, ::before {
            box-sizing: border-box;
          }


          .l-input {

            width: 100%;
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


          .l-left-input {
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

          .is-valid {
            border-color: var(--bs-success);
            padding-right: calc(1.5em + .75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(.375em + .1875rem) center;
            background-size: calc(.75em + .375rem) calc(.75em + .375rem)
          }

          .is-invalid {
            border-color: var(--bs-danger);
            padding-right: calc(1.5em + .75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(.375em + .1875rem) center;
            background-size: calc(.75em + .375rem) calc(.75em + .375rem)
          }

          .l-input::file-selector-button {
            padding: .375rem .75rem;
            margin: -.375rem -.75rem;
            -webkit-margin-end: .75rem;
            margin-inline-end: .75rem;
            color: var(--bs-body-color);
            background-color: var(--bs-tertiary-bg);
            pointer-events: none;
            border-color: inherit;
            border-style: solid;
            border-width: 0;
            border-inline-end-width: var(--bs-border-width);
            border-radius: 0;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
          }
          ::file-selector-button {
            font: inherit;
            -webkit-appearance: button;
          }

        `
        ];


    formatValue(value) {
        // 예시: 숫자 포맷팅 (쉼표 추가)
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    isValid() {
        const regex = new RegExp(this.pattern);
        const value = this.getValue();

        if (!value && this.required) {
            return false;
        } else return !(regex && !regex.test(value));
    }

    validate() {
        if (this.isValid()) {
            this.shadowRoot.querySelector(this.selector).classList.remove('is-invalid');
        } else {
            this.shadowRoot.querySelector(this.selector).classList.add('is-invalid');
        }
    }


    static get properties() {
        return {
            type: {type: String},
            id: {type: String},
            name: {type: String},
            width: {type: String},
            label: {type: String},
            feedback: {type: String},
            feedbackType: {type: String},
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
                    width="${this.width}"
            >
                <l-label
                        slot="label"
                        label="${this.label}"
                        id="${this.id}"
                        labelAlign="${this.labelAlign}"
                        labelWidth="${this.labelWidth}"
                        labelTextAlign="${this.labelTextAlign}"
                        required="${this.required}"
                >

                </l-label>
                <input
                        slot="input"
                        type="${this.type}"
                        class="${
                                classMap({
                                    'l-input': !isLabelLeft
                                    , 'l-left-input': isLabelLeft
                                })
                        }"
                        id=" ${this.id}"
                        name="${this.name}"
                        minlength="${this.minlength}"
                        maxlength="${this.maxlength}"
                        ?required=${this.required}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        placeholder="${this.placeholder}"
                        pattern="${this.pattern}"
                        value="${this.value}"
                        @blur="${this.validate}"
                >
            </l-input-container>
            <l-feedback
                    feedback="${this.feedback}"
                    feedbackType="${this.feedbackType}"
                    width="${this.width}"
                    labelAlign="${this.labelAlign}"
                    leftMargin="${this.labelWidth}"
            >

            </l-feedback>
        `;
    }
}

customElements.define('l-input', LInput);