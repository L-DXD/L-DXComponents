import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParentsIsolated} from "../container/ListRangeDatepickerParents.js";

class LRangemonthpickerIsolated extends ListRangeDatepickerParentsIsolated {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.MONTH);
    }

}

customElements.define('l-c-range-monthpicker', LRangemonthpickerIsolated);

export {LRangemonthpickerIsolated};