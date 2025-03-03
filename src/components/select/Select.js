import {css, html, nothing} from 'lit';
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-c-select')
class LSelect extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('select');
    }

    static styles = [
        ...super.styles
    ];

    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        this.observer.disconnect();
    }

    static get properties() {
        return {
            name: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            value: {type: String},
            text: {type: String},
            options: {type: Array},
            'default-type': {type: String},
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
                <div slot="input" class="search-input-container">
                    <select
                            width="${ifDefined(this['width'])}"
                            class="${classMap({
                                'form-select': true,
                                'form-left-control': isLabelLeft,
                                'form-select-lg': this['size'] === 'large',
                                'form-select-sm': this['size'] === 'small',
                            })}"
                            id="${ifDefined(this['id'])}"
                            name="${ifDefined(this['name'])}"
                            value="${ifDefined(this['value'])}"
                            ?required=${this['required']}
                            ?disabled=${this['disabled']}
                            ?readonly=${this['readonly']}
                            @change="${this._handleChange}"
                            @blur="${super.validate}"
                    >
                        ${this.options?.map(
                                (option) =>
                                        html`
                                            <option value="${option.value}" ?selected=${option.value === this.value} ?disabled=${option?.disabled}>
                                                ${option.label}
                                            </option>`
                        )}
                    </select>
                </div>
            </l-label-feed-container>
        `;
    }

    _handleChange(e) {
        this.value = e.target.value;
        // find the selected option label from options array
        const selectedOption = this.options?.find(opt => opt.value === this.value);
        this.text = selectedOption ? selectedOption.label : '';
    }

    /**
     * 현재 선택된 값을 반환합니다.
     * this.value가 설정되어 있지 않으면 options 배열의 첫 번째 옵션의 value를 반환합니다.
     * @returns {string}
     */
    getValue() {
        console.log('this getValue called : ' + this.value);
        if (this.value) return this.value;
        if (this.options && this.options.length > 0) {
            return this.options[0].value;
        }
        return '';
    }

    /**
     * 현재 선택된 텍스트를 반환합니다.
     * this.text가 설정되어 있지 않으면 options 배열의 첫 번째 옵션의 label을 반환합니다.
     * @returns {string}
     */
    getText() {
        if (this.text) return this.text;
        if (this.options && this.options.length > 0) {
            return this.options[0].label;
        }
        return '';
    }

    /**
     * 현재 선택된 옵션의 인덱스를 반환합니다.
     * 선택된 값(this.value)이 없으면 기본적으로 첫 번째 옵션(인덱스 0)을 반환합니다.
     * @returns {number}
     */
    getSelectedIndex() {
        if (this.options && this.options.length > 0) {
            const index = this.options.findIndex(opt => opt.value === this.value);
            return index !== -1 ? index : 0;
        }
        return -1;
    }

    /**
     * 현재 선택된 옵션 객체를 반환합니다.
     * 선택된 값(this.value)이 없으면 options 배열의 첫 번째 옵션 객체를 반환합니다.
     * @returns {Object|null}
     */
    getSelectedOption() {
        if (this.options && this.options.length > 0) {
            const selectedOption = this.options.find(opt => opt.value === this.value);
            return selectedOption ? selectedOption : this.options[0];
        }
        return null;
    }

    getOptions() {
        return this.options;
    }

    setValue(value) {
        console.log('not supported');
    }

    updated(changedProperties) {
        if ((changedProperties.has('options') || changedProperties.has('default-type')) && this.options && this.options.length > 0) {
            if (this['default-type'] === 'select') {
                if (this.options[0].label !== "Choose an option") {
                    this.options = [{ value: '', label: "Choose an option", disabled: true }, ...this.options];
                }
                // 기본 옵션의 값과 텍스트로 초기화
                this.value = '';
                this.text = "Choose an option";
            } else if (this['default-type'] === 'all') {
                if (this.options[0].label !== "All options") {
                    this.options = [{ value: "all", label: "All options" }, ...this.options];
                }
                this.value = "all";
                this.text = "All options";
            }
        }
    }
}