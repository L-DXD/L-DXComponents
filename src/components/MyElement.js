import { LitElement, html, css } from 'lit';

class MyElement extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            content: { type: String },
        };
    }


    render() {
        return html`
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    `;
    }
}

customElements.define('my-element', MyElement);
