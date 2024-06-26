import {css, html, LitElement, render} from 'lit';
import { LLabel } from './Label.js';
import './common.css';

class LInput extends LitElement {
  static styles = css`

    body {
      margin: 0;
      font-family: var(--bs-body-font-family);
      font-size: var(--bs-body-font-size);
      font-weight: var(--bs-body-font-weight);
      line-height: var(--bs-body-line-height);
      color: var(--bs-body-color);

      background-color: var(--bs-body-bg);
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }

    button, input, optgroup, select, textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    label {
      display: inline-block;
    }

    .l-label {
      margin-bottom: .5rem;
    }

    .l-flex-label {
      margin-right: 10px;
      white-space: nowrap; /* Prevents label text from wrapping */
    }


    .container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    *, ::after, ::before {
      box-sizing: border-box;
    }
    
    input:focus {
      border-color: #3399ff;
      box-shadow: 0 0 0 5px rgba(51, 153, 255, 0.3);
    }

    .l-input {
      width: 100%;
      padding: .375rem .75rem;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--bs-body-color);
      -webkit-appearance: none;
      -moz-appearance: none;
      border: var(--bs-border-width) solid var(--bs-border-color);
      border-radius: 8px;
      outline: none;
    }

    .l-flex-input {
      flex-grow: 1;
      padding: .375rem .75rem;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--bs-body-color);
      -webkit-appearance: none;
      -moz-appearance: none;
      border: var(--bs-border-width) solid var(--bs-border-color);
      border-radius: 8px;
      outline: none;
      transition: all 0.3s ease-in-out;
    }
  `;


  static get properties() {
    return {
      label: { type: String },
      id: { type: String },
      labelAlign: { type: String },
      isRequired: { type: String },
    };
  }

  render() {
    let isLabelFront = (this.labelAlign && this.labelAlign == 'front');


    return html`
      <div class="${isLabelFront && 'container'}">
        ${LLabel({
          label: `${this.label}`,
          masterId: `${this.id}`,
          labelAlign: `${this.labelAlign}`,
          isRequired: `${this.isRequired}`
        })}
        <input type="text" class="${isLabelFront ? 'l-flex-input' : 'l-input'}" id="${this.id}" required=${this.isRequired} >
      </div>
    `;
  }

  getValue() {
    const inputElement = this.shadowRoot.querySelector('input');
    return inputElement ? inputElement.value : null;
  }

  setValue(value) {
    const inputElement = this.shadowRoot.querySelector('input');
    if (inputElement) {
      inputElement.value = value;
      this.inputValue = value;  // Update the reactive property
    }
  }

  addEventListener(type, listener, options) {
    console.log('ddd');
    this.shadowRoot.querySelector('input').addEventListener(type, listener, options);
  }

  removeEventListener(type, listener, options) {
    this.shadowRoot.querySelector('input').removeEventListener(type, listener, options);
  }

  connectedCallback() {
    console.log('connectedCallback');
    super.connectedCallback();

  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
    super.disconnectedCallback();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log(name, oldVal, newVal);
  }
}


customElements.define('l-input', LInput);