import {css, html, LitElement} from 'lit';

class LLabelContainer extends LitElement {
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

    constructor({labelAlign}) {
        super();
        this.labelAlign = labelAlign;
    }

    static get properties() {
        return {
            labelAlign: {type: String},
        };
    }

    render() {
        let isLabelFront = (this.labelAlign && this.labelAlign == 'front');
        return html`
            <div class="${isLabelFront && 'container'}">
                <slot></slot>
            </div>
        `
    }
}

customElements.define('l-label-container', LLabelContainer);
export {LLabelContainer};