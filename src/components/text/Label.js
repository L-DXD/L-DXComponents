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

    constructor({label, id, labelAlign, labelWidth, labelTextAlign, required}) {
        super();

        this.label = label;
        this.id = id;
        this.labelAlign = labelAlign;
        this.labelWidth = labelWidth;
        this.labelTextAlign = labelTextAlign;
        this.required = required;
    }

    static get properties() {
        return {
            label: {type: String},
            id: {type: String},
            labelAlign: {type: String},
            labelWidth: {type: String},
            labelTextAlign: {type: String},
            required: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');

        return html`
            <label
                    class="${(isLabelLeft && this.label) ? 'l-flex-label' : 'l-label'}"
                    for="${this.id}"
                    style="
                        width: ${this.labelWidth ?? 'auto'};
                        text-align: ${this.labelTextAlign ?? 'left'}
                    "
            >
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