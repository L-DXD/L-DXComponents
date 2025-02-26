import {css, html, LitElement, nothing, render} from 'lit';
import {LFeedback} from "../text/Feedback.js";
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {SharedStyles} from "../commons/SharedStyles.js";
import {TextStyles} from "../commons/TextStyles.js";
import {LitParents} from "../commons/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-checkbox')
class LCheckbox extends LitParents {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles
    ];

    static get properties() {
        return {
            // input properties
            size: {type: String},
            id: {type: String},
            class: {type: String},
            name: {type: String},
            width: {type: String},
            label: {type: String},
            'label-align': {type: String},
            checked: {type: Boolean},
            required: {type: Boolean},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String}
        };
    }

    render() {
        let isLabelRight = (this['label-align'] && this['label-align'] === 'right');
        return html`
            <div
                    style="width: ${this['width'] ? this['width'] : nothing}"
                    class="${
                            classMap({
                                'form-check': true
                                , 'form-check-inline': true
                                , 'form-control-lg': this['size'] === 'large'
                                , 'form-control-sm': this['size'] === 'small'
                            })
                    }">
                <input class="form-check-input"
                       type="checkbox"
                       value="${ifDefined(this['value'])}"
                       id="${ifDefined(this['id'])}"
                       name="${ifDefined(this['name'])}"
                       ?required=${this['required']}
                       ?checked=${this['checked']}
                       ?disabled=${this['disabled']}
                >
                <label class="form-check-label" for="${ifDefined(this['id'])}">${ifDefined(this['label'])}</label>
            </div>
        `;
    }
}