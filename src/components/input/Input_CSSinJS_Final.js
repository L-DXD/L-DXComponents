import {html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

// 통합 테마 시스템 및 모듈화된 스타일 imports
import {ThemeSystem} from '../../styles/modules/ThemeSystem.js';
import {FormControlStyles} from '../../styles/modules/FormControlStyles.js';
import {ValidationStyles} from '../../styles/modules/ValidationStyles.js';

@customElement('l-input-final')
class LInputFinal extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('input');
    }

    /**
     * 통합 테마 시스템을 사용한 CSS-in-JS 스타일
     * 모든 테마 변수와 컴포넌트별 스타일을 통합
     */
    static styles = [
        ThemeSystem.all,           // 통합 테마 시스템
        FormControlStyles.all,     // 폼 컨트롤 스타일
        ValidationStyles.all,      // 검증 상태 스타일
    ];

    static get properties() {
        return {
            // input properties
            size: {type: String},
            id: {type: String},
            class: {type: String},
            name: {type: String},
            width: {type: String},
            type: {type: String},
            min: {type: String},
            max: {type: String},
            step: {type: String},
            value: {type: String},
            maxlength: {type: Number},
            minlength: {type: Number},
            pattern: {type: String},
            autocomplete: {type: String},
            placeholder: {type: String},
            required: {type: Boolean},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
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

    isValid() {
        const value = this.getValue();
        const required = this['required'];
        const minlength = this['minlength'];
        const maxlength = this['maxlength'];
        const pattern = this['pattern'];

        // Required validation
        if (!value && required) {
            return false;
        }

        // Skip other validations if value is empty and not required
        if (!value && !required) {
            return true;
        }

        // Length validations
        if (minlength && value.length < minlength) {
            return false;
        }

        if (maxlength && value.length > maxlength) {
            return false;
        }

        // Pattern validation
        if (pattern) {
            const regex = new RegExp(pattern);
            if (!regex.test(value)) {
                return false;
            }
        }

        return true;
    }

    validate() {
        const $inputElement = this.querySelector(this.selector);
        const isFlag = this.isValid();

        $inputElement.classList.toggle('is-invalid', !isFlag);
        $inputElement.classList.toggle('is-valid', isFlag);
    }

    checkValidity() {
        this.validate();
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        return html`
            <div
                style="width: ${this['width'] ? this['width'] : nothing}"
                class="${classMap({
                    'form-group': true
                })}"
            >
                <div
                    class="${classMap({
                        'container': isLabelLeft
                    })}"
                >
                    ${this.renderLabel(isLabelLeft)}
                    <div class="${classMap({
                        'form-left-control': isLabelLeft,
                        'is-flex': isLabelLeft
                    })}">
                        <input class="${classMap({
                            'form-control': true,
                            'form-control-lg': this['size'] === 'large',
                            'form-control-sm': this['size'] === 'small'
                        })}"
                               type="${this['type'] || 'text'}"
                               id="${ifDefined(this['id'])}"
                               name="${ifDefined(this['name'])}"
                               value="${ifDefined(this['value'])}"
                               min="${ifDefined(this['min'])}"
                               max="${ifDefined(this['max'])}"
                               step="${ifDefined(this['step'])}"
                               maxlength="${ifDefined(this['maxlength'])}"
                               minlength="${ifDefined(this['minlength'])}"
                               pattern="${ifDefined(this['pattern'])}"
                               autocomplete="${ifDefined(this['autocomplete'])}"
                               placeholder="${ifDefined(this['placeholder'])}"
                               ?required=${this['required']}
                               ?disabled=${this['disabled']}
                               ?readonly=${this['readonly']}
                               @blur="${this.validate}"
                        >
                    </div>
                </div>
                ${this.renderFeedback(isLabelLeft)}
            </div>
        `;
    }
}