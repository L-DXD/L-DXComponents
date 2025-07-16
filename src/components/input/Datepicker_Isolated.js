import {customElement} from 'lit/decorators.js';
import DateUtils from '../commons/Date.js'
import {LitDatepickerParentsIsolated} from "../container/LitDatepickerParents_Isolated.js";

class LDatepickerIsolated extends LitDatepickerParentsIsolated {

    constructor() {
        super();
        super.setDateType(DateUtils.DATE_TYPE.DATE);
    }
}

customElements.define('l-c-datepicker-isolated', LDatepickerIsolated);

export {LDatepickerIsolated};