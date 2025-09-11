import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParentsIsolated} from "../container/ListRangeDatepickerParents_Isolated.js";

class LRangedatepickerIsolated extends ListRangeDatepickerParentsIsolated {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.DATE);
    }

}

customElements.define('l-c-range-datepicker', LRangedatepickerIsolated);

export {LRangedatepickerIsolated};