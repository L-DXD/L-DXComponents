import {css, html, nothing} from 'lit';
import {LabelAndFeedContainerIsolated} from "../container/LabelAndFeedContainer_Isolated.js";
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {InputStyles} from '../../styles/modules/InputStyles.js';
import {TriggerInputStyles} from '../../styles/modules/TriggerInputStyles.js';

class TriggerInputIsolated extends LabelAndFeedContainerIsolated {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles,
        InputStyles.all,
        ...TriggerInputStyles.all,
        css`
            :host {
                display: block;
            }
        `
    ];

    setKeydownEventListener() {
        const inputElement = this.shadowRoot.querySelector(super.getSelector);

        if (inputElement) {
            // 기존 키다운 이벤트 핸들러가 이미 등록되어 있으면 제거
            if (this._keydownHandler) {
                inputElement.removeEventListener('keydown', this._keydownHandler);
            }

            // 새로운 키다운 이벤트 핸들러를 생성하고 저장
            this._keydownHandler = (event) => this._handleKeydown(event);
            inputElement.addEventListener('keydown', this._keydownHandler);
        }
    }

    _handleSearchClick(event) {
        this.triggerPop();
    }

    _nothing(event) {
    }

    /**
     * 키다운 이벤트 핸들러
     * @param {KeyboardEvent} event
     */
    _handleKeydown(event) {
        const {key} = event;

        if (key === 'Enter' && !this['trigger-disabled']) {
            this.triggerPop();
        }
    }

    triggerPop() {
        const inputElement = this.shadowRoot.querySelector(super.getSelector);
        this.handleTrigger && this.handleTrigger(inputElement.value);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        if (this.observer) {
            this.observer.disconnect();
        }
    }

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
            handleTrigger: { type: Function },
            'component-style': {type: String},
            'trigger-disabled': {type: Boolean},
            autocomplete: {type: String},
        };
    }

    firstUpdated() {
        this.setKeydownEventListener();
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');
        let isSearchRight = (!this['disabled'] && !this['readonly']);

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
                    <input
                            class="${classMap({
                                'form-control': true,
                                'form-left-control': isLabelLeft,
                                'form-control-lg': this['size'] === 'large',
                                'form-control-sm': this['size'] === 'small',
                                'search-input-right': isSearchRight
                            })}"
                            style="${this['component-style']}"
                            id="${ifDefined(this['id'])}"
                            name="${ifDefined(this['name'])}"
                            maxlength="${(this['valid-length-type'] != 'byte' ? ifDefined(this['maxlength']) : null) ?? nothing}"
                            minlength="${(this['valid-length-type'] != 'byte' ? ifDefined(this['minlength']) : null) ?? nothing}"
                            ?required=${this['required']}
                            ?disabled=${this['disabled']}
                            ?readonly=${this['readonly']}
                            placeholder="${ifDefined(this['placeholder'])}"
                            pattern="${ifDefined(this['pattern'])}"
                            value="${ifDefined(this['value'])}"
                            @input="${(e) => {
                                // 아이콘은 항상 표시
                            }}"
                            @blur="${this.validate}"
                            @keyup="${(this['valid-length-type'] != 'byte' ? null : this.createChangeHandler(ifDefined(this['maxlength']))) ?? nothing}"
                            autocomplete="${ifDefined(this['autocomplete'])}"
                    >
                    <div @click="${!this['trigger-disabled'] ? this._handleSearchClick : this._nothing}"
                         class="search-icon-right"
                         id="rightIcon"></div>
                    
                </div>

            </l-label-feed-container-isolated>

        `;
    }
}

customElements.define('l-triggerinput', TriggerInputIsolated);