import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "../container/LitDatepickerParents.js";

@customElement('l-c-monthpicker')
class LMonthpicker extends LitDatepickerParents {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.MONTH);
    }
}