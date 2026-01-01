import {css, html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {LabelAndFeedContainerIsolated} from '../container/LabelAndFeedContainer_Isolated.js';
import {InputStyles} from '../../styles/modules/InputStyles.js';
import '../../styles/common.css';

class LInputIsolated extends LabelAndFeedContainerIsolated {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        ...super.styles,
        InputStyles.all,
        css`
            :host {
                display: block;
            }
            
            /* InputStyles에서 정의된 크기 스타일을 사용 */
            
            .search-input-left {
                padding-left: 2rem;
                background-color: #fff;
            }

            .search-input-left.has-icon {
                background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: 0.5rem center;
                background-size: 16px 16px;
            }

            .search-input-container {
                position: relative;
                display: flex;
                align-items: center;
                flex-grow: 1;
            }

            input::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url("data:image/svg+xml,%3Csvg fill='%23000000' width='800px' height='800px' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Ecancel2%3C/title%3E%3Cpath d='M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z'%3E%3C/path%3E%3C/svg%3E");
                background-size: contain;
                cursor: pointer;
            }

            input::-ms-clear {
                width: 0;
                height: 0;
            }
        `
    ];

    get files() {
        return this.shadowRoot.querySelector(this.selector).files;
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
            'pattern-block': {type: Boolean},
            placeholder: {type: String},
            maxlength: {type: String},
            minlength: {type: String},
            'valid-length-type': {type: String},
            'component-style': {type: String},
            autocomplete: {type: String},
            step: {type: Number},
        };
    }

    firstUpdated() {
        if(this['pattern-block']) {
            const $input = this.shadowRoot.querySelector(super.getSelector);

            $input.addEventListener('compositionend', (e) => {
                handleInput(e.target);
            });

            $input.addEventListener('input', (e) => {
                if (e.isComposing || e.keyCode === 229) return;
                handleInput(e.target);
            });

            const handleInput = (input) => {
                const original = input.value;
                const pattern = this['pattern'];

                try {
                    // 패턴에서 '가-힣'을 '가-힣ㄱ-ㅎㅏ-ㅣ'로 확장
                    const expandedPattern = pattern.replace('가-힣', '가-힣ㄱ-ㅎㅏ-ㅣ');
                    const charClassMatch = expandedPattern.match(/\[(.*?)\]/);

                    if (charClassMatch) {
                        const charClass = charClassMatch[1];
                        const negativePattern = new RegExp(`[^${charClass}]`, 'g');

                        const filtered = original.replace(negativePattern, '');
                        if (original !== filtered) {
                            input.value = filtered;
                        }
                    }
                } catch (e) {
                    console.warn('패턴 처리 중 오류 발생:', e);
                }
            };
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');
        let isSearchLeft = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);

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
                            type="${this['type'] === 'planText' ? 'text' : this['type']}"
                            style="${this['component-style']}"
                            class="${classMap({
                                'form-control': true,
                                'form-left-control': isLabelLeft,
                                'form-control-plaintext': this['type'] === 'planText',
                                'form-control-lg': this['size'] === 'large',
                                'form-control-sm': this['size'] === 'small',
                                'search-input-left': isSearchLeft,
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
                            @keyup="${
                                (this['valid-length-type'] != 'byte' ? null : super.createChangeHandler(ifDefined(this['maxlength']))) ?? nothing
                            }"
                         
                            autocomplete="${ifDefined(this['autocomplete'])}"
                            step="${ifDefined(this['step'])}"
                    >
                </div>

            </l-label-feed-container-isolated>

        `;
    }
}

customElements.define('l-input', LInputIsolated);
