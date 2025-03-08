import {css, html, nothing} from 'lit';
import {LabelAndFeedContainer} from "../container/LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import '../commons/common.css';
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

@customElement('l-c-input')
class LInput extends LabelAndFeedContainer {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles
        , css`
            .search-input-left {
                padding-left: 2rem; /* 아이콘 자리 확보 */
                background-color: #fff;
            }

            .search-input-left.has-icon {
                background-image: url('../../assets/svg/search-svgrepo-com.svg'); /* 아이콘 경로 */
                background-repeat: no-repeat;
                background-position: 0.5rem center; /* 아이콘 위치 */
                background-size: 16px 16px; /* 아이콘 크기 (적절히 조절) */
            }

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
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
                background-image: url('../../assets/svg/search-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }


            input::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url('../../assets/svg/cancel2-svgrepo-com.svg'); /* 취소 아이콘 경로 */
                background-size: contain;
                cursor: pointer;
            }

            input::-ms-clear {
                width: 0;
                height: 0;
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


    /**
     * 키다운 이벤트 핸들러
     * @param {KeyboardEvent} event
     */
    _handleKeydown(event) {
        const {key} = event;

        // type이 'pop'이고 Enter 키가 눌렸을 경우
        if (this['type'] === 'pop' && key === 'Enter') {
            this.triggerPop();
        }
    }

    triggerPop() {
        const inputElement = this.shadowRoot.querySelector(super.getSelector);

    }


    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        this.observer.disconnect();
    }


    static get properties() {
        return {
            // input properties
            type: {type: String},
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
        };
    }


    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');
        let isSearchLeft = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);
        let isSearchRight = (this['type'] === 'pop' && !this['disabled'] && !this['readonly']);

        if (this['type'] === 'pop') {
            this.setKeydownEventListener();
        }

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
                            type="${this['type'] === 'planText' ? 'text' : this['type']}"
                            class="${classMap({
                                'form-control': true,
                                'form-left-control': isLabelLeft,
                                'form-control-plaintext': this['type'] === 'planText',
                                'form-control-lg': this['size'] === 'large',
                                'form-control-sm': this['size'] === 'small',
                                'search-input-left': isSearchLeft,
                                'search-input-right': isSearchRight,
                                'has-icon': isSearchLeft
                            })}"
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
                    >
                    ${isSearchRight ? html
                            `
                                <div @click="${this._handleSearchClick}"
                                     class="search-icon-right ${this.value ? '' : 'hidden'}"
                                     id="rightIcon"></div>` : nothing
                    }
                </div>

            </l-label-feed-container>

        `;
    }
}