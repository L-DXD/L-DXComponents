import {css} from 'lit';

export class FeedbackStyles {
    
    static inputGroup = css`
        .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
            margin-left: calc(var(--bs-border-width, 1px) * -1);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    `;
    
    static validFeedback = css`
        .valid-feedback {
            width: 100%;
            margin-top: .25rem;
            font-size: .875em;
            color: var(--bs-success-text, #000000);
            flex: 9;
            white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
            overflow: hidden;    /* 넘치는 내용을 숨김 */
            text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
        }

        .is-valid ~ .valid-feedback, 
        .is-valid ~ .valid-tooltip, 
        .was-validated :valid ~ .valid-feedback, 
        .was-validated :valid ~ .valid-tooltip {
            display: block;
        }

        .form-check-inline .form-check-input ~ .valid-feedback {
            margin-left: .5em;
        }
    `;
    
    static invalidFeedback = css`
        .invalid-feedback {
            width: 100%;
            margin-top: .25rem;
            font-size: .875em;
            color: var(--bs-danger, #dc3545);
            flex: 9;
            white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
            overflow: hidden;    /* 넘치는 내용을 숨김 */
            text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
        }

        .is-invalid ~ .invalid-feedback, 
        .is-invalid ~ .invalid-tooltip, 
        .was-validated :invalid ~ .invalid-feedback, 
        .was-validated :invalid ~ .invalid-tooltip {
            display: block;
        }

        .form-check-inline .form-check-input ~ .invalid-feedback {
            margin-left: .5em;
        }
    `;
    
    static formGroup = css`
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            width: 100%;
            flex: 9;
            white-space: nowrap; /* 텍스트를 단일 줄로 표시 */
            overflow: hidden;    /* 넘치는 내용을 숨김 */
            text-overflow: ellipsis; /* 넘치는 부분을 '...'으로 표시 */
        }

        .form-group [class^=form-hint] {
            margin-top: .25rem;
            color: var(--bs-gray-500, #6c757d);
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
    `;
    
    static textareaCount = css`
        .textarea-count {
            font-size: var(--bs-body-font-size, 0.875rem);
            width: 100%;
            margin-top: .25rem;
            margin-bottom: 0rem;
            text-align: right;
            flex: 1;
            display: none;
        }
    `;
    
    static utilities = css`
        .text-muted {
            color: var(--bs-secondary-color, #6c757d) !important;
        }
        
        .form-text {
            margin-top: .25rem;
            font-size: .875em;
            color: var(--bs-secondary-color, #6c757d);
        }
    `;
    
    static get all() {
        return [
            this.inputGroup,
            this.validFeedback,
            this.invalidFeedback,
            this.formGroup,
            this.textareaCount,
            this.utilities
        ];
    }
}