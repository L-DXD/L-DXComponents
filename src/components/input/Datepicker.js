import {html, LitElement} from 'lit';
import '../commons/common.css';
import {customElement} from 'lit/decorators.js';

import './tui-date-picker.css';
import DatePicker from "tui-date-picker";

@customElement('l-c-datepicker')
class LDatepicker extends LitElement{

    // Shadow DOM을 사용하지 않거나, 외부 DOM 요소에 접근할 수 있도록 설정
    createRenderRoot() {
        return this;
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

    render() {
        return html`
            <!-- Wrapper 영역 -->
            <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
                <input type="text" id="datepicker-input" aria-label="Date-Time">
                <span class="tui-ico-date"></span>
            </div>
            <div id="wrapper" style="margin-top: -1px;"></div>
        `;
    }
}