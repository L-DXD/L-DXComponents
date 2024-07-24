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

@customElement('l-checkbox')
class LCheckbox extends InputContainer {

    constructor() {
        super();
        super.setSelector('input');
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
            type: {type: String},
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
                <div class="form-group mb-4" slot="input">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked="">
                        <label class="form-check-label" for="defaultCheck2">Checked checkbox</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" disabled="">
                        <label class="form-check-label" for="defaultCheck3">Disabled checkbox</label>
                    </div>
                </div>

                <div class="form-group mb-3" slot="input">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked="">
                        <label class="form-check-label" for="inlineCheckbox2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
                               disabled="">
                        <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                    </div>
                </div>
                
            </l-input-container>

        `;
    }
}