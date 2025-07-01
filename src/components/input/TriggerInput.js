import {css, html, nothing} from 'lit';
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../../styles/common.css';
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-c-triggerinput')
class TriggerInput extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles
        , css`
            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }

            .search-input-right {
                padding-right: 2rem;
                background-color: #fff;
            }

            .search-icon-right {
                position: absolute;
                right: 0.5rem;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }

            .form-control.is-invalid, .was-validated .form-control:invalid {
                border-color: var(--bs-danger);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(3.00em + .375rem) calc(.75em + .375rem)
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
        this.observer.disconnect();
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
                                this.shadowRoot.querySelector('.search-icon-right')?.classList.toggle('hidden', !e.target.value);
                            }}"
                            @blur="${super.validate}"
                            @keyup="${(this['valid-length-type'] != 'byte' ? null : super.createChangeHandler(ifDefined(this['maxlength']))) ?? nothing}"
                            autocomplete="${ifDefined(this['autocomplete'])}"
                    >
                    <div @click="${!this['trigger-disabled'] ? this._handleSearchClick : this._nothing}"
                         class="search-icon-right ${this.value ? '' : 'hidden'}"
                         id="rightIcon"></div>
                    
                </div>

            </l-label-feed-container>

        `;
    }
}