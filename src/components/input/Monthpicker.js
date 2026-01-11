import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParentsIsolated} from "@/components/container/LitDatepickerParents.js";

@customElement('l-c-monthpicker')
class LMonthpicker extends LitDatepickerParentsIsolated {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.MONTH);
    }
}