import {css, html, LitElement} from 'lit';
import '../commons/common.css';

class LFeedback extends LitElement {
    static styles =
        [
            // component css
             css`
                 .is-valid~.valid-feedback, .is-valid~.valid-tooltip, .was-validated :valid~.valid-feedback, .was-validated :valid~.valid-tooltip {
                     display: block;
                 }
                 
                 .valid-feedback {
                     display: block;
                     width: 100%;
                     margin-top: .25rem;
                     font-size: .875em;
                     color: var(--bs-success-text);
                 }
            `
        ]
    ;

    constructor({feedback}) {
        super();

        this.feedback = feedback;
    }

    static get properties() {
        return {
            feedback: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');
        return html`
            <div class="valid-feedback">
                ${this.feedback}
            </div>
        `
    }
}

customElements.define('l-feedback', LFeedback);
export {LFeedback};