
// SharedStyles.js 의존성을 제거한 LitParents 버전
import {css, LitElement} from "lit";

class LitParentsIsolated extends LitElement {

    constructor() {
        super();
    }

    // 스타일 의존성 제거 - 각 컴포넌트에서 필요한 스타일을 직접 정의
    static styles = [
        css`
            /* 기본 스타일만 포함 - 각 컴포넌트에서 필요한 스타일을 추가해야 함 */
            :host {
                display: block;
            }
        `
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

export {LitParentsIsolated};