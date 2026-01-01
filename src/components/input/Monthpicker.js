import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "../container/LitDatepickerParents.js";
import {LitDatepickerParentsIsolated} from "@/components/container/LitDatepickerParents_Isolated.js";

@customElement('l-c-monthpicker')
class LMonthpicker extends LitDatepickerParentsIsolated {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.MONTH);
    }
}