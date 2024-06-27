import {css, html, LitElement, render} from 'lit';
import {LLabel} from '../text/Label.js';
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";
import {LitParents} from "../commons/LitParents.js";

class LInput extends LitParents {

    constructor() {
        super('input');
    }

    static styles =
        [
            // common css
            SharedStyles.styles

            // component css
            , css`
              *, ::after, ::before {
                box-sizing: border-box;
              }
              .l-input {
                width: 100%;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                outline: none;
              }

              .l-flex-input {
                flex-grow: 1;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                outline: none;
                transition: all 0.3s ease-in-out;
              }
            `
        ];

    static get properties() {
        return {
            type: {type: String},
            label: {type: String},
            id: {type: String},
            labelAlign: {type: String},
            required: {type: String},
            placeholder: {type: String},
        };
    }

    render() {
        let isLabelFront = (this.labelAlign && this.labelAlign == 'front');

        return html`
            <div class="${isLabelFront ? 'container':''}">
                ${new LLabel({
                    label: `${this.label}`,
                    id: `${this.id}`,
                    labelAlign: `${this.labelAlign}`,
                    required: `${this.required}`
                })}
                <input type="${this.type}" class="${isLabelFront ? 'l-flex-input' : 'l-input'}" id="${this.id}"
                       required=${this.required} placeholder="${this.placeholder}">
            </div>
        `;
    }

}


customElements.define('l-input', LInput);