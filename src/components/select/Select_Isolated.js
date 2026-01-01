import {css, html, nothing} from 'lit';
import {LabelAndFeedContainerIsolated} from "../container/LabelAndFeedContainer_Isolated.js";
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {SelectStyles} from '../../styles/modules/SelectStyles.js';

class LSelectIsolated extends LabelAndFeedContainerIsolated {

    constructor() {
        super();
        super.setSelector('select');
    }

    static styles = [
        ...super.styles,
        ...SelectStyles.all,
        css`
            :host {
                display: block;
            }
            
            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }
        `
    ];

    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        // this.observer.disconnect();
    }

    static get properties() {
        return {
            placeholder: {type: String},
            name: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            value: {type: String},
            text: {type: String},
            options: {type: Array},
            'default-type': {type: String},
            'component-style': {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');
        const options = this.options;

        return html`
            <l-label-feed-container-isolated
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
                            style="${this['component-style']}"
                            
                            id="${ifDefined(this['id'])}"
                            name="${ifDefined(this['name'])}"
                            value="${ifDefined(this['value'])}"
                            ?required=${this['required']}
                            ?disabled=${this['disabled']}
                            ?readonly=${this['readonly']}
                            @change="${this._handleChange}"
                            @blur="${this.validate}"
                    >
                        ${options?.map(
                                (option) =>
                                        html`
                                            <option value="${option.value}" ?selected=${option.value === this.value} ?disabled=${option?.disabled}>
                                                ${option.label}
                                            </option>`
                        )}
                    </select>
                </div>
            </l-label-feed-container-isolated>
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
        // options 배열에 주어진 value와 일치하는 값이 있는지 확인
        const matchingOption = this.options?.find(opt => opt.value === value);

        if (matchingOption) {
            // 일치하는 옵션이 있을 경우 value와 text를 업데이트
            this.value = matchingOption.value;
            this.text = matchingOption.label;
        } else {
            // 일치하는 옵션이 없을 경우 value와 text를 초기화
            this.value = '';
            this.text = '';
            console.warn(`Value "${value}" does not match any option`);
        }
    }

    updated(changedProperties) {

        if ((changedProperties.has('options') || changedProperties.has('default-type')) && this.options && this.options.length > 0) {
            if (this['default-type'] === 'select') {
                const defaultValue = this['placeholder'] || "Choose an option";

                if (this.options[0].label !== defaultValue) {
                    this.options = [{ value: '', label: defaultValue, disabled: true }, ...this.options];
                }
                // 기본 옵션의 값과 텍스트로 초기화
                this.value = '';
                this.text = defaultValue;
            } else if (this['default-type'] === 'all') {
                const defaultValue = this['placeholder'] || "All options";

                if (this.options[0].label !== defaultValue) {
                    this.options = [{ value: "all", label: defaultValue }, ...this.options];
                }
                this.value = "all";
                this.text = defaultValue;
            }
        }
    }
}

customElements.define('l-select', LSelectIsolated);