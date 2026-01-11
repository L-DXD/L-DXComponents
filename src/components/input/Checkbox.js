import {css, html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {LitParents} from "../container/LitParents.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {RadioCheckboxStyles} from '../../styles/modules/RadioCheckboxStyles.js';

class LCheckbox extends LitParents {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles,
        RadioCheckboxStyles.all,
        css`
            :host {
                display: block;
            }
        `
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

    /**
     * 공통적으로 name 속성을 기반으로 같은 그룹의 체크된 값들을 가져오는 함수
     * @param {string} key - 가져올 데이터 유형 ('label' | 'value')
     * @param {boolean} onlyChecked - 체크된 항목만 가져올지 여부
     * @returns {Array<{id: string, value: string}>} 체크된 항목 리스트
     */
    _getCheckboxGroupData(key, onlyChecked = false) {
        const name = this.getAttribute("name");

        if (!name) {
            console.warn("이 체크박스에는 name 속성이 없습니다.");
            return [];
        }

        return Array.from(document.querySelectorAll(`l-checkbox[name="${name}"]`))
            .map(lCheckbox => {
                const checkbox = lCheckbox.shadowRoot
                    ? lCheckbox.shadowRoot.querySelector('input[type="checkbox"]')
                    : lCheckbox.querySelector('input[type="checkbox"]');

                if (!checkbox || (onlyChecked && !checkbox.checked)) return null;

                return {
                    id: lCheckbox.id,
                    value: key === "label" ? lCheckbox.getAttribute("label") : lCheckbox.value
                };
            })
            .filter(Boolean); // null 값 제거
    }

    getCheckedTextsByNameGroup() {
        return this._getCheckboxGroupData("label", true);
    }

    getCheckedValuesByNameGroup() {
        return this._getCheckboxGroupData("value", true);
    }

    getTextsByNameGroup() {
        return this._getCheckboxGroupData("label", false);
    }

    getValuesByNameGroup() {
        return this._getCheckboxGroupData("value", false);
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
        
        // Checkbox의 경우 checked 상태를 확인해야 함
        const $inputElement = this.shadowRoot.querySelector(this.selector);
        return $inputElement ? $inputElement.checked : false;
    }

    validate() {
        const isFlag = this.isValid();

        const $inputElement = this.shadowRoot.querySelector(this.selector);
        $inputElement.classList.toggle('is-invalid', !isFlag); // Toggle 'is-invalid' based on validity
    }

    checkValidity() {
        this.validate();
    }

    render() {
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
                       @change=${this.validate}
                       @blur=${this.validate}
                >
                <label class="form-check-label" for="${ifDefined(this['id'])}">${ifDefined(this['label'])}</label>
            </div>
        `;
    }
}

customElements.define('l-checkbox', LCheckbox);