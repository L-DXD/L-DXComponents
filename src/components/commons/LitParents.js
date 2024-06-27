// EventManager.js
import {LitElement} from "lit";

class LitParents extends LitElement{

    constructor(selector) {
        super();
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
            this.inputValue = value;  // Update the reactive property
        }
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

export { LitParents };