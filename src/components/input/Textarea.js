import {html, nothing} from 'lit';
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../../styles/common.css';
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-c-textarea')
class LTextarea extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('textarea');
    }

    static styles = [
        ...super.styles
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
            'valid-length-type': {type: String},
            'component-style': {type: String},

            autocomplete: {type: String},
        };
    }


    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        // type, pattern 삭제
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
                        
                        ?required=${this['required']}
                        ?disabled=${this['disabled']}
                        ?readonly=${this['readonly']}
                        placeholder="${ifDefined(this['placeholder'])}"
                        @blur="${super.validate}"
                        @keyup="${(this['valid-length-type'] != 'byte' ? null : super.createChangeHandler(ifDefined(this['maxlength']))) ?? nothing}"
                        autocomplete="${ifDefined(this['autocomplete'])}"
                >${ifDefined(this['value'])}</textarea>
                
            </l-label-feed-container>

        `;
    }
}