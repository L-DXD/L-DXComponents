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
                background-image: url('../../assets/svg/cancel2-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                cursor: pointer;
                pointer-events: auto;
            }

            .search-input-both {
                padding-left: 2rem;
                padding-right: 2rem; /* 오른쪽 아이콘 자리도 확보 */
                background-color: #fff;
            }

            .search-input-both.has-left-icon {
                background-image: url('../../assets/svg/search-svgrepo-com.svg');
                background-repeat: no-repeat;
                background-position: left 0.5rem center;
                background-size: 16px 16px;
            }

            .search-input-both .search-icon-right {
                right: 0.5rem;
                pointer-events: auto;
            }

            .search-icon-right.hidden {
                display: none;
            }

            input[type="search"]::-webkit-search-cancel-button {
                -webkit-appearance: none;
                appearance: none;
                height: 16px;
                width: 16px;
                background-image: url('../../assets/svg/cancel2-svgrepo-com.svg'); /* 취소 아이콘 경로 */
                background-size: contain;
                cursor: pointer;
            }

            input[type="search"]::-ms-clear {
                width: 0;
                height: 0;
            }
        `
    ];

    firstUpdated() {
        super.firstUpdated();
        this.shadowRoot.querySelector('.search-icon-right')?.addEventListener('click', this._handleSearchClick.bind(this));
    }

    _handleSearchClick() {
        // 검색 아이콘 클릭 시 동작
        console.log('검색 아이콘 클릭!');
        // 이곳에 검색 기능을 수행하는 코드를 추가
        const inputElement = this.shadowRoot.querySelector('input');
        if (inputElement) {
            //예시로, input 에 입력된 값을 가져오는 방법
            const inputValue = inputElement.value;
            console.log("검색어", inputValue)
        }

        this.dispatchEvent(new CustomEvent('search-click', {
            detail: {
                name: this.name,
                value: this.shadowRoot.querySelector('input').value
            }
        }));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        this.observer.disconnect();
    }


    _handleSearchClick(event) {
        // 검색 아이콘 클릭 시 동작
        console.log('검색 아이콘 클릭!');
        // 이곳에 검색 기능을 수행하는 코드를 추가
        const inputElement = this.shadowRoot.querySelector('input');
        if (inputElement) {
            //예시로, input 에 입력된 값을 가져오는 방법
            const inputValue = inputElement.value;
            console.log("검색어", inputValue)
        }

        const iconType = event.target.classList.contains('search-icon-right') ? 'search' : '';

        if(iconType == 'search'){
            if (inputElement.value != '') {
                inputElement.value = '';
                inputElement.dispatchEvent(new Event('input'));
            }
        }

        this.dispatchEvent(new CustomEvent('search-click', {
            detail: {
                name: this.name,
                value: this.shadowRoot.querySelector('input').value
            }
        }));
    }

    static get properties() {
        return {
            // input properties
            type: {type: String},
            name: {type: String},
            size: {type: String},
            inputClear: {type: Boolean},
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

        let isSearchRight = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);
        let isSearchLeft = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);
        let isSearchBoth = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);

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
                                'search-input-right': isSearchRight,
                                'search-input-left' : isSearchLeft,
                                'search-input-both' : isSearchBoth,
                                'has-icon' : isSearchLeft || isSearchBoth
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
                    ${(this['inputClear']) ? html`<div class="search-icon-right ${this.value? '' : 'hidden'}" id="rightIcon"></div>` : nothing}
                </div>

            </l-label-feed-container>

        `;
    }
}