// EventManager.js
import {css, LitElement} from "lit";
import {SharedStyles} from "@/components/commons/SharedStyles.js";

class LitParents extends LitElement{

    constructor() {
        super();

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
            this.inputValue = value;  // Update the reactive property
        }
    }

    isValid() {
        return !!getValue();
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