import {css} from 'lit';

export class TriggerInputStyles {
    
    static container = css`
        .search-input-container {
            position: relative;
            display: flex;
            align-items: center;
            flex-grow: 1;
        }
    `;
    
    static triggerInput = css`
        .search-input-right {
            padding-right: 2rem;
            background-color: #fff;
        }
    `;
    
    static triggerIcon = css`
        .search-icon-right {
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            background-image: url("data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            cursor: pointer;
            pointer-events: auto;
        }
        
        .search-icon-right.hidden {
            display: none;
        }
    `;
    
    static validation = css`
        .form-control.is-invalid, 
        .was-validated .form-control:invalid {
            border-color: var(--bs-danger, #dc3545);
            padding-right: calc(1.5em + .75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(.375em + .1875rem) center;
            background-size: calc(3em + .375rem) calc(.75em + .375rem);
        }
        
        .form-control.is-invalid:focus,
        .was-validated .form-control:invalid:focus {
            border-color: var(--bs-danger, #dc3545);
            box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb, 220, 53, 69), .25);
        }
    `;
    
    static utilities = css`
        .hidden {
            display: none !important;
        }
    `;
    
    static get all() {
        return [
            this.container,
            this.triggerInput,
            this.triggerIcon,
            this.validation,
            this.utilities
        ];
    }
}