import {css, html, LitElement, render} from 'lit';
import {LFeedback} from "../text/Feedback.js";
import {InputContainer} from "../container/InputContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";
import {TextStyles} from "../commons/TextStyles.js";
import {LitParents} from "../commons/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-textarea')
class LTextarea extends InputContainer {

    constructor() {
        super();
        super.setSelector('textarea');
    }

    static styles = [
        ...super.styles,
        css`
          .form-left-control {
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
            // input properties
            name: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            pattern: {type: String},
            placeholder: {type: String},
            maxlength: {type: String},
            minlength: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        return html`
            <l-input-container
                    width="${ifDefined(this['width'])}"
                    id="${this['id']}"
                    label="${ifDefined(this['label'])}"
                    label-align="${ifDefined(this['label-align'])}"
                    label-width="${ifDefined(this['label-width'])}"
                    label-text-align="${ifDefined(this['label-text-align'])}"
                    required="${ifDefined(this['required'])}"
                    feedback="${ifDefined(this['feedback'])}"
                    feedback-type="${ifDefined(this['feedback-type'])}"
                    feedback-visible-type="${ifDefined(this['feedback-visible-type'])}"
            >
                
                <textarea
                        slot="input"
                        class="${
                                classMap({
                                    'form-control': !isLabelLeft
                                    , 'form-left-control': isLabelLeft
                                    , 'form-control-plaintext': this['type'] === 'planText'
                                    , 'form-control-lg': this['size'] === 'large'
                                    , 'form-control-sm': this['size'] === 'small'
                                })
                        }"
                        id="${ifDefined(this['id'])}"
                        name="${ifDefined(this['name'])}"
                        minlength="${ifDefined(this['minlength'])}"
                        maxlength="${ifDefined(this['maxlength'])}"
                        ?required=${this['required']}
                        ?disabled=${this['disabled']}
                        ?readonly=${this['readonly']}
                        placeholder="${ifDefined(this['placeholder'])}"
                        pattern="${ifDefined(this['pattern'])}"
                        value="${ifDefined(this['value'])}"
                        @blur="${this['validate']}"
                ></textarea>
            </l-input-container>

        `;
    }
}