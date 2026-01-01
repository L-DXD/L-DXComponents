import {css} from 'lit';

export class SelectStyles {
    
    static base = css`
        .form-select {
            --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2326292b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
            display: block;
            width: 100%;
            padding: .375rem 2.25rem .375rem .75rem;
            font-size: .875rem;
            font-weight: 400;
            line-height: 1.5;
            color: var(--bs-body-color, #212529);
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: var(--bs-component-bg, #fff);
            background-image: var(--bs-form-select-bg-img, none);
            background-repeat: no-repeat;
            background-position: right .75rem center;
            background-size: 16px 12px;
            border: var(--bs-border-width, 1px) solid var(--bs-border-color, #dee2e6);
            border-radius: 8px;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            box-sizing: border-box;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .form-select {
                transition: none;
            }
        }
        
        .form-select:focus {
            border-color: #80b3ff;
            outline: 0;
            box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25);
        }
        
        .form-select[multiple], .form-select[size]:not([size="1"]) {
            padding-right: .75rem;
            background-image: none;
        }
        
        .form-select:disabled {
            background-color: var(--bs-form-control-disabled-bg, #e9ecef);
            opacity: 1;
        }
        
        .form-select:-moz-focusring {
            color: transparent;
            text-shadow: 0 0 0 var(--bs-body-color, #212529);
        }
    `;
    
    static sizes = css`
        .form-select-sm {
            padding-top: .25rem;
            padding-bottom: .25rem;
            padding-left: .5rem;
            padding-right: 2rem;
            font-size: .765625rem;
            border-radius: 6px;
        }
        
        .form-select-lg {
            padding-top: .5rem;
            padding-bottom: .5rem;
            padding-left: 1rem;
            padding-right: 2.75rem;
            font-size: 1.09375rem;
            border-radius: 12px;
        }
    `;
    
    static themes = css`
        [data-bs-theme=dark] .form-select {
            --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23aaaaaa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
        }
    `;
    
    static validation = css`
        .form-select.is-valid {
            border-color: var(--bs-success, #198754);
        }
        
        .form-select.is-valid:not([multiple]):not([size]), 
        .form-select.is-valid:not([multiple])[size="1"] {
            --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
            padding-right: 4.125rem;
            background-position: right .75rem center, center right 2.25rem;
            background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem);
        }
        
        .form-select.is-valid:focus {
            border-color: var(--bs-success, #198754);
            box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb, 25, 135, 84), .25);
        }
        
        .form-select.is-invalid {
            border-color: var(--bs-danger, #dc3545);
        }
        
        .form-select.is-invalid:not([multiple]):not([size]), 
        .form-select.is-invalid:not([multiple])[size="1"] {
            --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
            padding-right: 4.125rem;
            background-position: right .75rem center, center right 2.25rem;
            background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem);
        }
        
        .form-select.is-invalid:focus {
            border-color: var(--bs-danger, #dc3545);
            box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb, 220, 53, 69), .25);
        }
    `;
    
    static leftLabel = css`
        .form-left-control {
            border-radius: 8px 8px 8px 8px;
        }
        
        .form-left-control.form-select-sm {
            border-radius: 0 6px 6px 0;
        }
        
        .form-left-control.form-select-lg {
            border-radius: 0 12px 12px 0;
        }
    `;
    
    static get all() {
        return [
            this.base,
            this.sizes,
            this.themes,
            this.validation,
            this.leftLabel
        ];
    }
}