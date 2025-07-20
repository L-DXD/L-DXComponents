import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParentsIsolated} from "../container/ListRangeDatepickerParents_Isolated.js";

class LRangemonthpickerIsolated extends ListRangeDatepickerParentsIsolated {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.MONTH);
    }

}

customElements.define('l-c-range-monthpicker-isolated', LRangemonthpickerIsolated);

export {LRangemonthpickerIsolated};