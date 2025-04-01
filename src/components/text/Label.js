import {css, html, LitElement} from 'lit';
import '../../styles/common.css';
import {customElement} from "lit/decorators.js";


@customElement('l-label')
export class LLabel extends LitElement {
    static styles =
        [
            // component css
            css`
                label {
                    display: inline-block;
                }

                .form-label {
                    margin-bottom: .5rem
                }

                .col-form-label {
                    padding-top: calc(.375rem + var(--bs-border-width));
                    padding-bottom: calc(.375rem + var(--bs-border-width));
                    margin-bottom: 0;
                    font-size: inherit;
                    line-height: 1.5
                }

                .col-form-label-lg {
                    padding-top: calc(.5rem + var(--bs-border-width));
                    padding-bottom: calc(.5rem + var(--bs-border-width));
                    font-size: 1.09375rem
                }

                .col-form-label-sm {
                    padding-top: calc(.25rem + var(--bs-border-width));
                    padding-bottom: calc(.25rem + var(--bs-border-width));
                    font-size: .765625rem
                }

                .l-label {
                    margin-bottom: .5rem;
                }

                .form-left-label {
                    margin-right: 10px;
                    white-space: nowrap; /* Prevents label text from wrapping */
                }
            `
        ]
    ;


    static get properties() {
        return {
            label: {type: String},
            id: {type: String},
            'label-align': {type: String},
            'label-width': {type: String},
            'label-text-align': {type: String},
            required: {type: String},
        };
    }

    render() {
        if (!this['label'])
            return '';
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        return html`
            <label
                    class="${(isLabelLeft && this['label']) ? 'form-left-label' : 'form-label'}"
                    for="${this['id']}"
                    style="
                        width: ${this['label-width'] || 'auto'};
                        text-align: ${this['label-text-align'] || 'left'}
                    "
            >
                ${this['required'] == 'true'
                        ? (isLabelLeft
                                ? html`<span style="color: #df1414;margin-right: 2px">*</span>${this['label']}`
                                : html`${this['label']}<span style="color: #df1414;margin-left: 2px">*</span>`)
                        : this['label']} 
            </label>
        `
    }
}