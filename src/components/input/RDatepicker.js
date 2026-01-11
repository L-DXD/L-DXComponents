import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParents} from "../container/ListRangeDatepickerParents.js";

class LRangedatepicker extends ListRangeDatepickerParents {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.DATE);
    }

}

customElements.define('l-c-range-datepicker', LRangedatepicker);

export {LRangedatepicker};