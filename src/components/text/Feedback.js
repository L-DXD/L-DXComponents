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

    static get properties() {
        return {
            feedback: {type: String},
            width: {type: String},
            labelAlign: {type: String},
            leftMargin: {type: String},
        };
    }

    render() {
        let isLabelLeft = (this.labelAlign && this.labelAlign == 'left');
        return html`
            <div class="valid-feedback"
                style="
                    padding-left: calc(${this.leftMargin} + ${isLabelLeft ? `15px` : '0px'})
                    ;width: ${this.width ? this.width : 'auto'};
                "
            >
                ${this.feedback}
            </div>
        `
    }
}

customElements.define('l-feedback', LFeedback);
export {LFeedback};