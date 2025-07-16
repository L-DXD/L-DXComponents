import {css, html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {LitElement} from 'lit';
import {InputStyles} from '../../styles/modules/InputStyles.js';

class LInputSimple extends LitElement {

    static styles = [
        InputStyles.all,
        css`
            :host {
                display: block;
                width: 100%;
            }
        `
    ];

    static get properties() {
        return {
            type: {type: String},
            size: {type: String},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            value: {type: String},
            placeholder: {type: String},
        };
    }

    render() {
        let isSearchLeft = (this['type'] === 'search' && !this['disabled'] && !this['readonly']);
        
        const classes = {
            'form-control': true,
            'form-control-lg': this['size'] === 'large',
            'form-control-sm': this['size'] === 'small',
            'search-input-left': isSearchLeft,
            'has-icon': isSearchLeft
        };
        
        console.log('Input_Simple classes:', classes, 'size:', this['size']);

        return html`
            <div style="width: 100%;">
                <input
                        type="${this['type'] || 'text'}"
                        class="${classMap(classes)}"
                        ?disabled=${this['disabled']}
                        ?readonly=${this['readonly']}
                        placeholder="${ifDefined(this['placeholder'])}"
                        value="${ifDefined(this['value'])}"
                >
            </div>
        `;
    }
}

customElements.define('l-input-simple', LInputSimple);
