import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {ListRangeDatepickerParents} from "@/components/container/ListRangeDatepickerParents.js";

@customElement('l-c-range-monthpicker')
class LRangemonthpicker extends ListRangeDatepickerParents {

    constructor() {
        super();
        this.setDateType(DateUtils.DATE_TYPE.MONTH);
    }

}