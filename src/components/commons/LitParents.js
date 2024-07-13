// EventManager.js
import {css, LitElement} from "lit";
import {SharedStyles} from "@/components/commons/SharedStyles.js";
import {TextStyles} from "@/components/commons/TextStyles.js";

class LitParents extends LitElement {

    constructor() {
        super();

    }

    static styles = [
        SharedStyles.styles
        , TextStyles.styles];

    static get properties() {
        return {
            // common properties
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


    setSelector(selector) {
        this.selector = selector;
    }

    getValue() {
        const inputElement = this.shadowRoot.querySelector(this.selector);
        return inputElement ? inputElement.value : null;
    }

    setValue(value) {
        const inputElement = this.shadowRoot.querySelector(this.selector);
        if (inputElement) {
            inputElement.value = value;
        }
    }

    isValid(value, pattern, required) {
        const regex = new RegExp(pattern);

        if (!value && required) {
            return false;
        } else return !((regex && value) && !regex.test(value));
    }

    validate() {
        const value = this.getValue().trim();
        const feedbackElement = this.shadowRoot.querySelector('l-feedback');
        const inputElement = this.shadowRoot.querySelector(this.selector);
        const isValid = this.isValid(value, this.pattern, this.required);
        const feedbackVisibleType = this['feedback-visible-type'];

        inputElement.classList.toggle('is-invalid', !isValid); // Toggle 'is-invalid' based on validity

        if(feedbackVisibleType == 'visible') {
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

    addEventListener(type, listener, options) {
        this.shadowRoot.querySelector(this.selector).addEventListener(type, listener, options);
    }

    removeEventListener(type, listener, options) {
        this.shadowRoot.querySelector(this.selector).removeEventListener(type, listener, options);
    }

    connectedCallback() {
        super.connectedCallback();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    attributeChangedCallback(name, oldVal, newVal) {

        super.attributeChangedCallback(name, oldVal, newVal);
    }
}

export {LitParents};