import {css, html, LitElement} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {setupAttributeValidation} from "../commons/attributeValidation.js";
import {FeedbackStyles} from '../../styles/modules/FeedbackStyles.js';

class LFeedback extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        if (!this._attributeValidationCleanup) {
            this._attributeValidationCleanup = setupAttributeValidation(this);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._attributeValidationCleanup) {
            this._attributeValidationCleanup();
            this._attributeValidationCleanup = null;
        }
    }

    static styles = [
        ...FeedbackStyles.all,
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            feedback: {type: String},
            'feedback-type': {type: String},
            width: {type: String},
            'label-align': {type: String},
            'left-margin': {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        const feedbackHtml = {
                'normal': html`<div class="valid-feedback">${this['feedback']}</div>`,
                'hint': html`<div class="form-group"><small class="form-hint form-text text-muted">${this['feedback']}</small></div>`,
                'error': html`<div class="invalid-feedback">${this['feedback']}</div>`
            }
        ;

        return html`
            <div
                 style="
                    padding-left: calc(${this['left-margin'] || '0px'} + ${isLabelLeft ? `15px` : '0px'});
                    width: ${this['width'] ? this['width'] : 'auto'};
                    display: flex;   
                "
            >
                ${feedbackHtml[this['feedback-type']] || feedbackHtml['normal']}
                <p slot="count" class="textarea-count">
                    <span class="text-num">0</span><span class="text-num">/100</span>
                </p>
            </div>
        `
    }
}

customElements.define('l-feedback', LFeedback);
