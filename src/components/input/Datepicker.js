import DateUtils from '../commons/Date.js'
import {LitDatepickerParents} from "@/components/container/LitDatepickerParents.js";

class LDatepicker extends LitDatepickerParents {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.DATE);
    }
}

customElements.define('l-c-datepicker', LDatepicker);
