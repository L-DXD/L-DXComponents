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

    isValid(value, pattern, required) {
        const regex = new RegExp(pattern);

        if (!value && required) {
            return false;
        } else return !((regex && value) && !regex.test(value));
    }

    validate() {
        const value = this.getValue().trim();
        const $container = this.shadowRoot.querySelector('l-input-container');
        const feedbackElement = $container.shadowRoot.querySelector('l-feedback');
        const inputElement = this.shadowRoot.querySelector(this.selector);
        const isValid = this.isValid(value, this['pattern'], this['required']);
        const feedbackVisibleType = this['feedback-visible-type'];

        inputElement.classList.toggle('is-invalid', !isValid); // Toggle 'is-invalid' based on validity

        if (feedbackVisibleType == 'visible') {
            return;
        }
        feedbackElement.setAttribute('hidden', true); // Assume hidden first
        if ((isValid && feedbackVisibleType == 'valid') || (!isValid && feedbackVisibleType == 'invalid')) {
            feedbackElement.removeAttribute('hidden');
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