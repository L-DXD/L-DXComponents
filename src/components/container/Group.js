import {css, html, nothing} from 'lit';
import {LabelAndFeedContainerIsolated} from "./LabelAndFeedContainer.js";
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';

class LGroupIsolated extends LabelAndFeedContainerIsolated {

    constructor() {
        super();
        super.setSelector('div');
    }

    static styles = [
        ...super.styles
    ];


    disconnectedCallback() {
        super.disconnectedCallback();
        // MutationObserver 연결 해제
        if (this.observer) {
            this.observer.disconnect();
        }
    }



    static get properties() {
        return {
            // input properties
            type: {type: String}
        };
    }


    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');
        return html`
            <div
                class="${classMap({
                    'form-control': true,
                    'form-left-control': isLabelLeft,
                    'form-control-plaintext': this['type'] === 'planText',
                    'form-control-lg': this['size'] === 'large',
                    'form-control-sm': this['size'] === 'small',
                })}"
            >
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('l-group-isolated', LGroupIsolated);

export {LGroupIsolated};