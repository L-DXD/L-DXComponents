import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParents} from "../container/ListRangeDatepickerParents.js";

class LRangemonthpicker extends ListRangeDatepickerParents {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.MONTH);
    }

}

customElements.define('l-c-range-monthpicker', LRangemonthpicker);

export {LRangemonthpicker};