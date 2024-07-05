import {css, html, LitElement} from 'lit';

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
        ]
    ;

    static get properties() {
        return {
            width: {type: String},
            labelAlign: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');

        return html`
            <div
                class="${isLabelLeft ? 'container' : ''}"
                style="width: ${this.width ? this.width : 'auto'}"
            >
                <slot></slot>
            </div>
        `
    }
}

customElements.define('l-input-container', InputContainer);
export {InputContainer};