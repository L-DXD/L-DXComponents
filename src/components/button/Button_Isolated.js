import {css, html, nothing} from 'lit';
import {classMap} from "lit/directives/class-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {customElement} from 'lit/decorators.js';
import {LitParentsIsolated} from '../container/LitParents_Isolated.js';
import {ButtonStyles} from '../../styles/modules/ButtonStyles.js';

const THEME_CLASSES = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
    'light': 'btn-light',
    'dark': 'btn-dark',
    'info': 'btn-info',
    'purple': 'btn-purple',
    'indigo': 'btn-indigo',
    'link': 'btn-link',
    'danger': 'btn-danger',
    'pink': 'btn-pink',
    'orange': 'btn-orange',
    'light-orange': 'btn-light-orange',
    'yellow': 'btn-yellow',
    'lime': 'btn-lime',
    'teal': 'btn-teal',
    'green': 'btn-green',
    'success': 'btn-success',
    'theme': 'btn-theme',
    'theme-color': 'btn-theme-color',
};

const OUTLINE_THEME_CLASSES = {
    'primary': 'btn-outline-primary',
    'secondary': 'btn-outline-secondary',
    'light': 'btn-outline-light',
    'dark': 'btn-outline-dark',
    'info': 'btn-outline-info',
    'purple': 'btn-outline-purple',
    'indigo': 'btn-outline-indigo',
    'link': 'btn-outline-link',
    'danger': 'btn-outline-danger',
    'pink': 'btn-outline-pink',
    'orange': 'btn-outline-orange',
    'light-orange': 'btn-outline-light-orange',
    'yellow': 'btn-outline-yellow',
    'lime': 'btn-outline-lime',
    'teal': 'btn-outline-teal',
    'green': 'btn-outline-green',
    'success': 'btn-outline-success',
    'theme': 'btn-outline-theme',
    'theme-color': 'btn-outline-theme-color',
};

@customElement('l-button')
class LButtonIsolated extends LitParentsIsolated {

    constructor() {
        super();
        super.setSelector('button');
    }

    static styles = [
        ButtonStyles.all,
        css`
            :host {
                display: inline-block;
            }
            
            .btn-icon {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
        `
    ];

    static get properties() {
        return {
            // button properties
            theme: {type: String},
            size: {type: String},
            id: {type: String},
            name: {type: String},
            width: {type: String},
            label: {type: String},
            value: {type: String},
            'icon-path': {type: String},
            outline: {type: Boolean},
            disabled: {type: Boolean},
            readonly: {type: Boolean},
            required: {type: Boolean}
        };
    }

    // 검증 메서드들 (LitParents와 동일한 API 유지)
    isValid() {
        const value = this.getValue();
        const required = this['required'];

        if (!value && required) {
            return false;
        }
        
        return true;
    }

    validate() {
        const isFlag = this.isValid();
        
        const $buttonElement = this.shadowRoot.querySelector(this.selector);
        $buttonElement.classList.toggle('is-invalid', !isFlag);
        
        return isFlag;
    }

    checkValidity() {
        return this.validate();
    }

    render() {
        const { outline, theme, size, 'icon-path': iconPath, label } = this;
        const baseClass = 'btn';
        const themeClass = outline ? OUTLINE_THEME_CLASSES[theme] : THEME_CLASSES[theme];
        const sizeClass = size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '';

        const classes = {
            [baseClass]: true,
            [themeClass || 'btn-default']: true,
            [sizeClass]: !!sizeClass,
            'has-icon': !!(iconPath),
        };

        return html`
            <button
                    class="${classMap(classes)}"
                    id="${ifDefined(this['id'])}"
                    name="${ifDefined(this['name'])}"
                    value="${ifDefined(this['value'])}"
                    ?disabled="${this.disabled}"
                    ?readonly="${this.readonly}"
                    style="width: ${this['width'] ? this['width'] : 'auto'}"
            >
                ${(iconPath)
                        ? html`<img src="${iconPath}" class="btn-icon" alt="icon" />`
                        : ''}
                ${ifDefined(label)}
            </button>
        `;
    }
}