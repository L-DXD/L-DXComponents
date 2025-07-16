import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParentsIsolated} from "../container/LitDatepickerParents_Isolated.js";

class LMonthpickerIsolated extends LitDatepickerParentsIsolated {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.MONTH);
    }
}

customElements.define('l-c-monthpicker-isolated', LMonthpickerIsolated);

export {LMonthpickerIsolated};