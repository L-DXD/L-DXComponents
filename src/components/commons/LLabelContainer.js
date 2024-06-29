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
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');
        return html`
            <div class="${isLabelLeft && 'container'}">
                <slot></slot>
            </div>
        `
    }
}

customElements.define('l-label-container', LLabelContainer);
export {LLabelContainer};