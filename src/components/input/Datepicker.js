import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "../commons/LitDatepickerParents.js";

@customElement('l-c-datepicker')
class LDatepicker extends LitDatepickerParents {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.DATE);
    }
}
