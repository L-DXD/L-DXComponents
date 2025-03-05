import {css, html, LitElement} from 'lit';
import '../commons/common.css';
import {customElement} from 'lit/decorators.js';

import './tui-date-picker.css';
import DatePicker from "tui-date-picker";
import './Input.css';
import {ifDefined} from "lit/directives/if-defined.js";
import {classMap} from "lit/directives/class-map.js";
import {LitParents} from "@/components/commons/LitParents.js";

@customElement('l-c-datepicker')
class LDatepicker extends LitParents{

    // Shadow DOM을 사용하지 않거나, 외부 DOM 요소에 접근할 수 있도록 설정
    createRenderRoot() {
        return this;
    }

    static get properties() {
        return {
            id: {type: String},
            class: {type: String},
            width: {type: String},
            required: {type: Boolean},

            // feedback properties
            feedback: {type: String},
            'feedback-type': {type: String},
            'feedback-visible-type': {type: String},

            // label properties
            label: {type: String},
            'label-align': {type: String},
            'label-width': {type: String},
            'label-text-align': {type: String},

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


    firstUpdated() {
        // TOAST UI DatePicker 초기화
        const datePicker = new DatePicker('#wrapper', {
            date: new Date(),
            input: {
                element: '#datepicker-input',
                format: 'yyyy-MM-dd',
            }
        });

        // datePicker를 인스턴스 변수로 저장 가능 (필요 시 접근)
        this.datePicker = datePicker;
    }

    _handleSearchClick(event) {
        // const inputElement = this.shadowRoot.querySelector('input');
        //
        // // inputClear가 true이거나 type이 search가 아닐 경우 검색 초기화 기능 활성화
        // if (this.inputClear === true) {
        //     if (inputElement && inputElement.value !== '') {
        //         inputElement.value = ''; // 입력값 초기화
        //         inputElement.dispatchEvent(new Event('input')); // input 이벤트 트리거
        //     }
        //
        //     this.dispatchEvent(new CustomEvent('search-click', {
        //         detail: {
        //             name: this.name,
        //             value: inputElement?.value || '',
        //         },
        //     }));
        // } else {
        //     console.log('Clear button 기능이 비활성화되었습니다.');
        // }
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        const feedbackHtml = {
                'normal': html`<div class="valid-feedback">${this['feedback']}</div>`,
                'hint': html`<div class="form-group"><small class="form-hint form-text text-muted">${this['feedback']}</small></div>`,
                'error': html`<div class="invalid-feedback">${this['feedback']}</div>`
            }
        ;

        return html`
            <label
                    class="${(isLabelLeft && this['label']) ? 'form-left-label' : 'form-label'}"
                    for="${this['id']}"
                    style="
                        width: ${this['label-width'] || 'auto'};
                        text-align: ${this['label-text-align'] || 'left'}
                    "
            >
                ${this['required'] == 'true'
                        ? (isLabelLeft
                                ? html`<span style="color: #df1414;margin-right: 2px">*</span>${this['label']}`
                                : html`${this['label']}<span style="color: #df1414;margin-left: 2px">*</span>`)
                        : this['label']}
            </label>
            <div class="search-input-container">
                <!-- Wrapper 영역 -->
                <div class="tui-has-focus">
                    <input type="text"
                           class="${classMap({
                               'form-control': true,
                               'form-left-control': isLabelLeft,
                               'form-control-lg': this['size'] === 'large',
                               'form-control-sm': this['size'] === 'small',
                           })}"
                           id="datepicker-input"
                           aria-label="Date-Time"
                           ?required=${this['required']}
                           ?disabled=${this['disabled']}
                           ?readonly=${this['readonly']}
                    >
                    <!--                        <span class="tui-ico-date"></span>-->
                </div>
                <div id="wrapper" style="margin-top: -1px;"></div>

                <div @click="${this._handleSearchClick}"
                     class="search-icon-right" id="rightIcon"></div>
                <div
                        style="
                    padding-left: calc(${this['left-margin']} + ${isLabelLeft ? `15px` : '0px'})
                    ;width: ${this['width'] ? this['width'] : 'auto'}
                    ;display: flex;   
                "
                >
                    ${feedbackHtml[this['feedback-type']]}
                    
                </div>
            </div>

        `;
    }
}