import {css, html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {LitParentsIsolated} from '../container/LitParents_Isolated.js';
import {InputStyles} from '../../styles/modules/InputStyles.js';

class LInputMinimal extends LitParentsIsolated {

    constructor() {
        super();
        super.setSelector('input');
    }

    static styles = [
        InputStyles.all,
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            type: {type: String},
            name: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            placeholder: {type: String},
            'component-style': {type: String},
        };
    }

    render() {
        let isSearchLeft = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);

        return html`
            <input
                type="${this['type'] || 'text'}"
                style="${this['component-style'] || ''}"
                class="${classMap({
                    'form-control': true,
                    'form-control-lg': this['size'] === 'large',
                    'form-control-sm': this['size'] === 'small',
                    'search-input-left': isSearchLeft,
                    'has-icon': isSearchLeft
                })}"
                name="${ifDefined(this['name'])}"
                ?disabled=${this['disabled']}
                ?readonly=${this['readonly']}
                placeholder="${ifDefined(this['placeholder'])}"
                value="${ifDefined(this['value'])}"
            >
        `;
    }
}

customElements.define('l-input-minimal', LInputMinimal);
