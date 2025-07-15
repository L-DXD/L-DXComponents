// EventManager.js
import {css, LitElement} from "lit";
import {SharedStyles} from "@/styles/SharedStyles_Phase1.js";
import {TextStyles} from "@/styles/TextStyles.js";

class LitParents_Phase1Test extends LitElement {

    constructor() {
        super();
    }

    static styles = [
        SharedStyles.styles
        , TextStyles.styles
    ];

    setSelector(selector) {
        this.selector = selector;
    }

    get getSelector() {
        return this.selector;
    }

    getComponent() {
        return this.shadowRoot.querySelector(this.selector);
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

export {LitParents_Phase1Test};