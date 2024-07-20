import {css, html, LitElement} from 'lit';
import {SharedStyles} from "@/components/commons/SharedStyles.js";

class InputContainer extends LitElement {

    static styles =
        [

            // component css
            css`
              .container {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
              }

            `
        ];

    static get properties() {
        return {
            class: {type: String},
            width: {type: String},
            'label-align': {type: String},
        };
    }

    render() {
        return html`
            <div
                    class="${this['class']}"
                    style="width: ${this['width'] ? this['width'] : 'auto'}"
            >
                <slot name="label"></slot>
                <slot name="input"></slot>
            </div>
        `
    }
}

customElements.define('l-input-container', InputContainer);
export {InputContainer};