import {css, html, LitElement} from 'lit';
import '../commons/common.css';
import {classMap} from "lit/directives/class-map.js";
import {SharedStyles as TextStyles} from "@/components/commons/SharedStyles.js";
import {customElement} from "lit/decorators.js";

@customElement('l-feedback')
export class LFeedback extends LitElement {
    static styles =
        [
            // text css
            TextStyles.styles,
            // component css
            css`
                .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
                    margin-left: calc(var(--bs-border-width) * -1);
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0
                }

                .valid-feedback {
                    //display: none;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: .875em;
                    color: var(--bs-success-text)
                }

                .is-valid ~ .valid-feedback, .is-valid ~ .valid-tooltip, .was-validated :valid ~ .valid-feedback, .was-validated :valid ~ .valid-tooltip {
                    display: block;
                }

                .form-check-inline .form-check-input ~ .valid-feedback {
                    margin-left: .5em
                }

                .invalid-feedback {
                    //display: none;
                    width: 100%;
                    margin-top: .25rem;
                    font-size: .875em;
                    color: var(--bs-danger)
                }

                .is-invalid ~ .invalid-feedback, .is-invalid ~ .invalid-tooltip, .was-validated :invalid ~ .invalid-feedback, .was-validated :invalid ~ .invalid-tooltip {
                    display: block
                }

                .form-check-inline .form-check-input ~ .invalid-feedback {
                    margin-left: .5em
                }


                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                    width: 100%;
                }

                .form-group [class^=form-hint] {
                    margin-top: .25rem;
                    color: var(--bs-gray-500);
                    padding-left: calc(2rem + 0.4rem);
                }

                .form-group [class^=form-hint]::before {
                    display: inline-flex;
                    width: 1rem;
                    height: 1rem;
                    flex-shrink: 0;
                    flex-grow: 0;
                    content: "";
                    margin-left: calc((2rem + 0.4rem) * -1);
                    margin-right: 2px;
                    vertical-align: top;

                    background: url(/assets/ico_hint_20.svg) no-repeat center;
                    background-size: contain;
                }

            `
        ]
    ;

    static get properties() {
        return {
            feedback: {type: String},
            'feedback-type': {type: String},
            width: {type: String},
            'label-align': {type: String},
            'left-margin': {type: String},
        };
    }

    render() {
        let isLabelLeft = (this['label-align'] && this['label-align'] === 'left');

        const feedbackHtml = {
                'normal': html`<div class="valid-feedback">${this['feedback']}</div>`,
                'hint': html`<div class="form-group"><small class="form-hint form-text text-muted">${this['feedback']}</small></div>`,
                'error': html`<div class="invalid-feedback">${this['feedback']}</div>`
            }
        ;

        return html`
            <div
                 style="
                    padding-left: calc(${this['left-margin']} + ${isLabelLeft ? `15px` : '0px'})
                    ;width: ${this['width'] ? this['width'] : 'auto'};
                "
            >
                ${feedbackHtml[this['feedback-type']]}
            </div>
        `
    }
}