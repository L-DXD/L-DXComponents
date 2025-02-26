import {html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {LitParents} from "../commons/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';
import './Radio.css';
import '../commons/common.css';

@customElement('l-radio')
class LRadio extends LitParents {

    constructor() {
        super();
        super.setSelector('input');
    }

    /**
     *  Radio가 그룹으로 묶이지 않는 이슈가 있어 shadowroot 사용안함
     * @returns {LRadio}
     */
    createRenderRoot() {
        return this;
    }

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

    getValue() {
        const inputElement = this.querySelector(this.selector);
        return inputElement ? inputElement.value : null;
    }

    setValue(value) {
        const inputElement = this.querySelector(this.selector);
        if (inputElement) {
            inputElement.value = value;
        }
    }

    getText() {
        return this.getAttribute("label") || "";
    }

    setText(newLabel) {
        if (typeof newLabel !== "string") {
            console.warn("setText의 인자는 문자열이어야 합니다.");
            return;
        }
        this.setAttribute("label", newLabel);
        this.requestUpdate();
    }

    isValid(value, required) {
        if (!value && required) {
            return false;
        }
    }

    validate() {
        console.log('validate')
        const value = this.getValue().trim();
        const $inputElement = this.querySelector(this.selector);
        const isFlag = this.isValid(value, this['required']);

        $inputElement.classList.toggle('is-invalid', !isFlag); // Toggle 'is-invalid' based on validity
    }

    checkValidity() {
        this.validate();
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
                       type="radio"
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