import {customElement, property} from "lit/decorators.js";
import {LitElement} from "lit";

@customElement("lit-tomato")
class Tomato extends LitElement {
    @property() name = "tomato1";

    connectedCallback() {
        super.connectedCallback();

        setTimeout(() => {
            this.name = "tomato2";
        }, 2000);
    }
}