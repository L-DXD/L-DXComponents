import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "@/components/container/LitDatepickerParents.js";

class LMonthpicker extends LitDatepickerParents {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.MONTH);
    }
}

customElements.define('l-c-monthpicker', LMonthpicker);
