import {html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import '../../styles/common.css';
import {LitParents} from "../container/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';
import '../../../assets/css/Radio.css';
import {LitParentsIsolated} from "@/components/container/LitParents_Isolated.js";

@customElement('l-radio')
class LRadio extends LitParentsIsolated {

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

    isValid() {
        const required = this['required'];
        if (!required) return true;
        
        // Radio의 경우 같은 name 그룹에서 하나라도 선택되어 있으면 유효
        const name = this.getAttribute('name');
        if (!name) return true;
        
        const radioGroup = document.querySelectorAll(`l-radio[name="${name}"]`);
        return Array.from(radioGroup).some(radio => {
            const input = radio.querySelector('input[type="radio"]');
            return input && input.checked;
        });
    }

    validate() {
        const $inputElement = this.querySelector(this.selector);
        const isFlag = this.isValid();

        $inputElement.classList.toggle('is-invalid', !isFlag); // Toggle 'is-invalid' based on validity
        
        // Radio 그룹의 다른 요소들도 같은 상태로 업데이트
        const name = this.getAttribute('name');
        if (name) {
            const radioGroup = document.querySelectorAll(`l-radio[name="${name}"]`);
            radioGroup.forEach(radio => {
                const input = radio.querySelector('input[type="radio"]');
                if (input) {
                    input.classList.toggle('is-invalid', !isFlag);
                }
            });
        }
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
                       @change=${this.validate}
                       @blur=${this.validate}
                >
                <label class="form-check-label" for="${ifDefined(this['id'])}">${ifDefined(this['label'])}</label>
            </div>
        `;
    }
}