import {css, html, LitElement} from 'lit';
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";

class LLabel extends LitElement {
    static styles =
        [
            // component css
             css`
              label {
                display: inline-block;
              }

              .l-label {
                margin-bottom: .5rem;
              }

              .l-flex-label {
                margin-right: 10px;
                white-space: nowrap; /* Prevents label text from wrapping */
              }
            `
        ]
    ;

    constructor({label, id, labelAlign, required}) {
        super();

        this.label = label;
        this.id = id;
        this.labelAlign = labelAlign;
        this.required = required;
    }

    static get properties() {
        return {
            label: {type: String},
            id: {type: String},
            labelAlign: {type: String},
            required: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');

        return html`
            <label class="${(isLabelLeft && this.label) ? 'l-flex-label' : 'l-label'}" for="${this.id}">
                ${this.required == 'true'
                        ? (isLabelLeft
                                ? html`<span style="color: #df1414;margin-right: 2px">*</span>${this.label}`
                                : html`${this.label}<span style="color: #df1414;margin-left: 2px">*</span>`)
                        : this.label}
            </label>
        `
    }
}

customElements.define('l-label', LLabel);
export {LLabel};