import {css, html, LitElement} from 'lit';
import {LabelStyles} from '../../styles/modules/LabelStyles.js';

class LLabelIsolated extends LitElement {
    static styles = [
        ...LabelStyles.all,
        css`
            :host {
                display: block;
            }
        `
    ];

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

customElements.define('l-label-isolated', LLabelIsolated);