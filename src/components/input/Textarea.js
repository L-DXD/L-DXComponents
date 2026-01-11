import {css, html, nothing} from 'lit';
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {FormControlStyles} from '../../styles/modules/FormControlStyles.js';
import {ValidationStyles} from '../../styles/modules/ValidationStyles.js';

class LTextarea extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('textarea');
    }

    static styles = [
        ...super.styles,
        FormControlStyles.all,
        ValidationStyles.all,
        css`
            :host {
                display: block;
            }
            
            /* Textarea 스타일 적용 - SharedStyles.js와 동일한 높이 공식 사용 */
            textarea.form-control {
                display: block;
                width: 100%;
                padding: 0.375rem 0.75rem;
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color, #212529);
                background-color: var(--bs-component-bg, #fff);
                background-clip: padding-box;
                border: var(--bs-border-width, 1px) solid var(--bs-border-color, #dee2e6);
                border-radius: 8px;
                box-sizing: border-box;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                resize: vertical;
                min-height: calc(1.5em + .75rem + calc(var(--bs-border-width, 1px) * 2));
            }
            
            textarea.form-control:focus {
                color: var(--bs-body-color, #212529);
                background-color: var(--bs-component-bg, #fff);
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25);
            }
            
            textarea.form-control::placeholder {
                color: var(--bs-secondary-color, #6c757d);
                opacity: 1;
            }
            
            textarea.form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg, #e9ecef);
                opacity: 1;
            }
            
            /* 크기 변형 - SharedStyles.js와 동일한 공식 */
            textarea.form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width, 1px) * 2));
                padding: 0.25rem 0.5rem;
                font-size: 0.765625rem;
                border-radius: 6px;
            }
            
            textarea.form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width, 1px) * 2));
                padding: 0.5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px;
            }
        `
    ];

    static get properties() {
        return {
            // textarea properties
            name: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            pattern: {type: String},
            placeholder: {type: String},
            maxlength: {type: String},
            minlength: {type: String},
            'valid-length-type': {type: String},
            'component-style': {type: String},
            rows: {type: Number},
            autocomplete: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        return html`
            <l-label-feed-container
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
                                    'form-control': true
                                    , 'form-left-control': isLabelLeft
                                    , 'form-control-plaintext': this['type'] === 'planText'
                                    , 'form-control-lg': this['size'] === 'large'
                                    , 'form-control-sm': this['size'] === 'small'
                                })
                        }"
                        style="${this['component-style']}"
                        
                        id="${ifDefined(this['id'])}"
                        name="${ifDefined(this['name'])}"
                        
                        maxlength="${(this['valid-length-type'] != 'byte' ? ifDefined(this['maxlength']) : null) ?? nothing}"
                        minlength="${(this['valid-length-type'] != 'byte' ? ifDefined(this['minlength']) : null) ?? nothing}"
                        
                        rows="${this['rows'] || 2}"
                        
                        ?required=${this['required']}
                        ?disabled=${this['disabled']}
                        ?readonly=${this['readonly']}
                        placeholder="${ifDefined(this['placeholder'])}"
                        @blur="${this.validate}"
                        @keyup="${(this['valid-length-type'] != 'byte' ? null : this.createChangeHandler(ifDefined(this['maxlength']))) ?? nothing}"
                        autocomplete="${ifDefined(this['autocomplete'])}"
                >${ifDefined(this['value'])}</textarea>
                
            </l-label-feed-container>

        `;
    }
}

customElements.define('l-textarea', LTextarea);