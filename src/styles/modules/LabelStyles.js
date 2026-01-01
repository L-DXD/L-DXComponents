import {css} from 'lit';

export class LabelStyles {
    
    static baseLabel = css`
        label {
            display: inline-block;
        }
    `;
    
    static formLabel = css`
        .form-label {
            margin-bottom: .5rem;
        }
        
        .l-label {
            margin-bottom: .5rem;
        }
        
        .form-left-label {
            margin-right: 10px;
            white-space: nowrap; /* Prevents label text from wrapping */
        }
    `;
    
    static columnFormLabel = css`
        .col-form-label {
            padding-top: calc(.375rem + var(--bs-border-width, 1px));
            padding-bottom: calc(.375rem + var(--bs-border-width, 1px));
            margin-bottom: 0;
            font-size: inherit;
            line-height: 1.5;
        }
        
        .col-form-label-lg {
            padding-top: calc(.5rem + var(--bs-border-width, 1px));
            padding-bottom: calc(.5rem + var(--bs-border-width, 1px));
            font-size: 1.09375rem;
        }
        
        .col-form-label-sm {
            padding-top: calc(.25rem + var(--bs-border-width, 1px));
            padding-bottom: calc(.25rem + var(--bs-border-width, 1px));
            font-size: .765625rem;
        }
    `;
    
    static get all() {
        return [
            this.baseLabel,
            this.formLabel,
            this.columnFormLabel
        ];
    }
}