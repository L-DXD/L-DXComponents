// SharedStyles.js
import { css } from 'lit';

class SharedStyles {
    static get styles() {
        return css`
            *, ::after, ::before {
                box-sizing: border-box
            }

            hr {
                margin: 1rem 0;
                color: inherit;
                border: 0;
                border-top: var(--bs-border-width) solid;
                opacity: .25
            }

            p {
                margin-top: 0;
                margin-bottom: 1rem
            }

            abbr[title] {
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
                cursor: help;
                -webkit-text-decoration-skip-ink: none;
                text-decoration-skip-ink: none
            }

            address {
                margin-bottom: 1rem;
                font-style: normal;
                line-height: inherit
            }

            ol, ul {
                padding-left: 2rem
            }

            dl, ol, ul {
                margin-top: 0;
                margin-bottom: 1rem
            }

            ol ol, ol ul, ul ol, ul ul {
                margin-bottom: 0
            }

            dt {
                font-weight: 600
            }

            dd {
                margin-bottom: .5rem;
                margin-left: 0
            }

            blockquote {
                margin: 0 0 1rem
            }

            b, strong {
                font-weight: 800
            }

            sub, sup {
                position: relative;
                font-size: .75em;
                line-height: 0;
                vertical-align: baseline
            }

            sub {
                bottom: -.25em
            }

            sup {
                top: -.5em
            }

            a {
                color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
                text-decoration: underline
            }

            a:hover {
                --bs-link-color-rgb: var(--bs-link-hover-color-rgb)
            }

            a:not([href]):not([class]), a:not([href]):not([class]):hover {
                color: inherit;
                text-decoration: none
            }

            code, kbd, pre, samp {
                font-family: var(--bs-font-monospace);
                font-size: 1em
            }

            pre {
                display: block;
                margin-top: 0;
                margin-bottom: 1rem;
                overflow: auto;
                font-size: .875em
            }

            pre code {
                font-size: inherit;
                color: inherit;
                word-break: normal
            }

            code {
                font-size: .875em;
                color: var(--bs-code-color);
                word-wrap: break-word
            }

            a > code {
                color: inherit
            }

            kbd {
                padding: .1875rem .375rem;
                font-size: .875em;
                color: var(--bs-body-bg);
                background-color: var(--bs-body-color);
                border-radius: 6px
            }

            kbd kbd {
                padding: 0;
                font-size: 1em
            }

            figure {
                margin: 0 0 1rem
            }

            img, svg {
                vertical-align: middle
            }

            table {
                caption-side: bottom;
                border-collapse: collapse
            }

            caption {
                padding-top: .5rem;
                padding-bottom: .5rem;
                color: #808588;
                text-align: left
            }

            th {
                text-align: inherit;
                text-align: -webkit-match-parent
            }

            tbody, td, tfoot, th, thead, tr {
                border-color: inherit;
                border-style: solid;
                border-width: 0
            }

            label {
                display: inline-block
            }

            button {
                border-radius: 0
            }

            button:focus:not(:focus-visible) {
                outline: 0
            }

            button, input, optgroup, select, textarea {
                margin: 0;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit
            }

            button, select {
                text-transform: none
            }

            [role=button] {
                cursor: pointer
            }

            select {
                word-wrap: normal
            }

            select:disabled {
                opacity: 1
            }

            [list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
                display: none !important
            }

            [type=button], [type=reset], [type=submit], button {
                -webkit-appearance: button
            }

            [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
                cursor: pointer
            }

            ::-moz-focus-inner {
                padding: 0;
                border-style: none
            }

            textarea {
                resize: vertical
            }

            fieldset {
                min-width: 0;
                padding: 0;
                margin: 0;
                border: 0
            }

            legend {
                float: left;
                width: 100%;
                padding: 0;
                margin-bottom: .5rem;
                font-size: calc(1.275rem + .3vw);
                line-height: inherit
            }

            @media (min-width: 1200px) {
                legend {
                    font-size: 1.5rem
                }
            }

            legend + * {
                clear: left
            }

            ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-fields-wrapper, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-text, ::-webkit-datetime-edit-year-field {
                padding: 0
            }

            ::-webkit-inner-spin-button {
                height: auto
            }

            [type=search] {
                -webkit-appearance: textfield;
                outline-offset: -2px
            }

            ::-webkit-search-decoration {
                -webkit-appearance: none
            }

            ::-webkit-color-swatch-wrapper {
                padding: 0
            }

            ::file-selector-button {
                font: inherit;
                -webkit-appearance: button
            }

            output {
                display: inline-block
            }

            iframe {
                border: 0
            }

            summary {
                display: list-item;
                cursor: pointer
            }

            progress {
                vertical-align: baseline
            }

            [hidden] {
                display: none !important
            }

            .container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                //--bs-gutter-x: 20px;
                --bs-gutter-y: 0;
                width: 100%;
                padding-right: calc(var(--bs-gutter-x) * .5);
                padding-left: calc(var(--bs-gutter-x) * .5);
                margin-right: auto;
                margin-left: auto
            }

            @media (min-width: 576px) {
                .container, .container-sm {
                    max-width: 540px
                }
            }

            @media (min-width: 768px) {
                .container, .container-md, .container-sm {
                    max-width: 720px
                }
            }

            @media (min-width: 992px) {
                .container, .container-lg, .container-md, .container-sm {
                    max-width: 960px
                }
            }

            @media (min-width: 1200px) {
                .container, .container-lg, .container-md, .container-sm, .container-xl {
                    max-width: 1140px
                }
            }

            @media (min-width: 1660px) {
                .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
                    max-width: 1320px
                }
            }

            :root {
                --bs-breakpoint-xs: 0;
                --bs-breakpoint-sm: 576px;
                --bs-breakpoint-md: 768px;
                --bs-breakpoint-lg: 992px;
                --bs-breakpoint-xl: 1200px;
                --bs-breakpoint-xxl: 1660px;
                --bs-breakpoint-xxxl: 1900px
            }

            [data-bs-theme=dark] {
                --bs-component-bg: #28292b;
                --bs-component-bg-rgb: 40, 41, 43;
                --bs-component-color: #aaaaaa;
                --bs-component-color-rgb: 170, 170, 170;
                --bs-app-header-bg: #28292b;
                --bs-app-header-color: #FFFFFF;
                --bs-app-header-color-rgb: 255, 255, 255;
                --bs-app-header-border-color: rgba(185, 185, 185, 0.1);
                --bs-app-sidebar-link-color: #aaaaaa;
                --bs-app-sidebar-link-hover-color: #aaaaaa;
                --bs-app-sidebar-link-hover-bg: #444950;
                --bs-app-sidebar-link-active-color: #66a3ff;
                --bs-app-sidebar-link-active-bg: rgba(var(--bs-theme-rgb), 0.5);
                --bs-app-sidebar-mobile-bg: rgba(51, 55, 58, 0.98);
                --bs-theme-bg-subtle: #001433
            }

            body:not(.app-init) * {
                transition: none !important;
                animation: none !important
            }

            .form-label {
                margin-bottom: .5rem
            }

            .col-form-label {
                padding-top: calc(.375rem + var(--bs-border-width));
                padding-bottom: calc(.375rem + var(--bs-border-width));
                margin-bottom: 0;
                font-size: inherit;
                line-height: 1.5
            }

            .col-form-label-lg {
                padding-top: calc(.5rem + var(--bs-border-width));
                padding-bottom: calc(.5rem + var(--bs-border-width));
                font-size: 1.09375rem
            }

            .col-form-label-sm {
                padding-top: calc(.25rem + var(--bs-border-width));
                padding-bottom: calc(.25rem + var(--bs-border-width));
                font-size: .765625rem
            }

            /* 기존 form-control 스타일 (공통) */

            .form-control {
                display: block;
                width: 100%;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                appearance: none;
                background-color: var(--bs-component-bg);
                background-clip: padding-box;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            /* form-left-control은 공통 form-control 스타일을 기반으로 추가 속성만 포함 */

            .form-left-control {
                text-align: left; /* 왼쪽 정렬 */
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control {
                    transition: none
                }
            }

            .form-control[type=file] {
                overflow: hidden
            }

            .form-control[type=file]:not(:disabled):not([readonly]) {
                cursor: pointer
            }

            .form-control:focus {
                color: var(--bs-body-color);
                background-color: var(--bs-component-bg);
                outline: 0;
                border-color: #80b3ff;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-control::-webkit-date-and-time-value {
                min-width: 85px;
                height: 1.5em;
                margin: 0
            }

            .form-control::-webkit-datetime-edit {
                display: block;
                padding: 0
            }

            .form-control::-moz-placeholder {
                color: var(--bs-secondary-color);
                opacity: 1
            }

            .form-control::placeholder {
                color: var(--bs-secondary-color);
                opacity: 1
            }

            .form-control:disabled {
                background-color: var(--bs-form-control-disabled-bg);
                opacity: 1
            }

            .form-control::file-selector-button {
                padding: .375rem .75rem;
                margin: -.375rem -.75rem;
                margin-inline-end: .75rem;
                color: var(--bs-body-color);
                background-color: var(--bs-tertiary-bg);
                pointer-events: none;
                border-color: inherit;
                border-style: solid;
                border-width: 0;
                border-inline-end-width: var(--bs-border-width);
                border-radius: 0;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-control::file-selector-button {
                    transition: none
                }
            }

            .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
                background-color: var(--bs-border-color)
            }

            .form-control-plaintext {
                display: block;
                width: 100%;
                padding: .375rem 0;
                margin-bottom: 0;
                line-height: 1.5;
                color: var(--bs-body-color);
                background-color: transparent;
                border: solid transparent;
                border-width: var(--bs-border-width) 0
            }

            .form-control-plaintext:focus {
                outline: 0
            }

            .form-control-plaintext.form-control-lg, .form-control-plaintext.form-control-sm {
                padding-right: 0;
                padding-left: 0
            }

            .form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));
                padding: .25rem .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .form-control-sm::file-selector-button {
                padding: .25rem .5rem;
                margin: -.25rem -.5rem;
                margin-inline-end: .5rem
            }

            .form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));
                padding: .5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            .form-control-lg::file-selector-button {
                padding: .5rem 1rem;
                margin: -.5rem -1rem;
                margin-inline-end: 1rem
            }

            textarea.form-control {
                min-height: calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))
            }

            textarea.form-control-sm {
                min-height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))
            }

            textarea.form-control-lg {
                min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))
            }

            .form-control-color {
                width: 3rem;
                height: calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));
                padding: .375rem
            }

            .form-control-color:not(:disabled):not([readonly]) {
                cursor: pointer
            }

            .form-control-color::-moz-color-swatch {
                border: 0 !important;
                border-radius: 8px
            }

            .form-control-color::-webkit-color-swatch {
                border: 0 !important;
                border-radius: 8px
            }

            .form-control-color.form-control-sm {
                height: calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))
            }

            .form-control-color.form-control-lg {
                height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))
            }

            .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%2326292b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
                display: block;
                width: 100%;
                padding: .375rem 2.25rem .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: var(--bs-component-bg);
                background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
                background-repeat: no-repeat;
                background-position: right .75rem center;
                background-size: 16px 12px;
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-select {
                    transition: none
                }
            }

            .form-select:focus {
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-select[multiple], .form-select[size]:not([size="1"]) {
                padding-right: .75rem;
                background-image: none
            }

            .form-select:disabled {
                background-color: var(--bs-form-control-disabled-bg)
            }

            .form-select:-moz-focusring {
                color: transparent;
                text-shadow: 0 0 0 var(--bs-body-color)
            }

            .form-select-sm {
                padding-top: .25rem;
                padding-bottom: .25rem;
                padding-left: .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .form-select-lg {
                padding-top: .5rem;
                padding-bottom: .5rem;
                padding-left: 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            [data-bs-theme=dark] .form-select {
                --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23aaaaaa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")
            }

            .form-check {
                display: block;
                min-height: 1.3em;
                padding-left: 1.8em;
                margin-bottom: .125rem
            }

            .form-check .form-check-input {
                float: left;
                margin-left: -1.8em
            }

            .form-check-reverse {
                padding-right: 1.8em;
                padding-left: 0;
                text-align: right
            }

            .form-check-reverse .form-check-input {
                float: right;
                margin-right: -1.8em;
                margin-left: 0
            }

            .form-check-input {
                --bs-form-check-bg: var(--bs-component-bg);
                flex-shrink: 0;
                width: 1.3em;
                height: 1.3em;
                margin-top: .1em;
                vertical-align: top;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: var(--bs-form-check-bg);
                background-image: var(--bs-form-check-bg-image);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                border: var(--bs-border-width) solid var(--bs-border-color);
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact
            }

            .form-check-input[type=checkbox] {
                border-radius: .25em
            }

            .form-check-input[type=radio] {
                border-radius: 50%
            }

            .form-check-input:active {
                filter: brightness(90%)
            }

            .form-check-input:focus {
                border-color: #80b3ff;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-check-input:checked {
                background-color: #06f;
                border-color: #06f
            }

            .form-check-input:checked[type=checkbox] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")
            }

            .form-check-input:checked[type=radio] {
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23FFFFFF'/%3e%3c/svg%3e")
            }

            .form-check-input[type=checkbox]:indeterminate {
                background-color: #06f;
                border-color: #06f;
                --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")
            }

            .form-check-input:disabled {
                pointer-events: none;
                filter: none;
                opacity: .5
            }

            .form-check-input:disabled ~ .form-check-label, .form-check-input[disabled] ~ .form-check-label {
                cursor: default;
                opacity: .5
            }

            .form-switch {
                padding-left: 2.8em
            }

            .form-switch .form-check-input {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
                width: 2.3em;
                margin-left: -2.8em;
                background-image: var(--bs-form-switch-bg);
                background-position: left center;
                border-radius: 2.3em;
                transition: background-position .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-switch .form-check-input {
                    transition: none
                }
            }

            .form-switch .form-check-input:focus {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2380b3ff'/%3e%3c/svg%3e")
            }

            .form-switch .form-check-input:checked {
                background-position: right center;
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23FFFFFF'/%3e%3c/svg%3e")
            }

            .form-switch.form-check-reverse {
                padding-right: 2.8em;
                padding-left: 0
            }

            .form-switch.form-check-reverse .form-check-input {
                margin-right: -2.8em;
                margin-left: 0
            }

            .form-check-inline {
                display: inline-block;
                margin-right: 1rem
            }

            .btn-check {
                position: absolute;
                clip: rect(0, 0, 0, 0);
                pointer-events: none
            }

            .btn-check:disabled + .btn, .btn-check[disabled] + .btn {
                pointer-events: none;
                filter: none;
                opacity: .65
            }

            [data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {
                --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e")
            }

            .form-range {
                width: 100%;
                height: 1.5rem;
                padding: 0;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: transparent
            }

            .form-range:focus {
                outline: 0
            }

            .form-range:focus::-webkit-slider-thumb {
                box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-range:focus::-moz-range-thumb {
                box-shadow: 0 0 0 1px #f1f3f4, 0 0 0 .25rem rgba(0, 102, 255, .25)
            }

            .form-range::-moz-focus-outer {
                border: 0
            }

            .form-range::-webkit-slider-thumb {
                width: 1rem;
                height: 1rem;
                margin-top: -.25rem;
                -webkit-appearance: none;
                appearance: none;
                background-color: #06f;
                border: 0;
                border-radius: 1rem;
                -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-range::-webkit-slider-thumb {
                    -webkit-transition: none;
                    transition: none
                }
            }

            .form-range::-webkit-slider-thumb:active {
                background-color: #b3d1ff
            }

            .form-range::-webkit-slider-runnable-track {
                width: 100%;
                height: .5rem;
                color: transparent;
                cursor: pointer;
                background-color: var(--bs-tertiary-bg);
                border-color: transparent;
                border-radius: 1rem
            }

            .form-range::-moz-range-thumb {
                width: 1rem;
                height: 1rem;
                -moz-appearance: none;
                appearance: none;
                background-color: #06f;
                border: 0;
                border-radius: 1rem;
                -moz-transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-range::-moz-range-thumb {
                    -moz-transition: none;
                    transition: none
                }
            }

            .form-range::-moz-range-thumb:active {
                background-color: #b3d1ff
            }

            .form-range::-moz-range-track {
                width: 100%;
                height: .5rem;
                color: transparent;
                cursor: pointer;
                background-color: var(--bs-tertiary-bg);
                border-color: transparent;
                border-radius: 1rem
            }

            .form-range:disabled {
                pointer-events: none
            }

            .form-range:disabled::-webkit-slider-thumb {
                background-color: var(--bs-secondary-color)
            }

            .form-range:disabled::-moz-range-thumb {
                background-color: var(--bs-secondary-color)
            }

            .form-floating {
                position: relative
            }

            .form-floating > .form-control, .form-floating > .form-control-plaintext, .form-floating > .form-select {
                height: calc(3.5rem + calc(var(--bs-border-width) * 2));
                min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));
                line-height: 1.25
            }

            .form-floating > label {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
                height: 100%;
                padding: 1rem .75rem;
                overflow: hidden;
                text-align: start;
                text-overflow: ellipsis;
                white-space: nowrap;
                pointer-events: none;
                border: var(--bs-border-width) solid transparent;
                transform-origin: 0 0;
                transition: opacity .1s ease-in-out, transform .1s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .form-floating > label {
                    transition: none
                }
            }

            .form-floating > .form-control, .form-floating > .form-control-plaintext {
                padding: 1rem .75rem
            }

            .form-floating > .form-control-plaintext::-moz-placeholder, .form-floating > .form-control::-moz-placeholder {
                color: transparent
            }

            .form-floating > .form-control-plaintext::placeholder, .form-floating > .form-control::placeholder {
                color: transparent
            }

            .form-floating > .form-control-plaintext:not(:-moz-placeholder-shown), .form-floating > .form-control:not(:-moz-placeholder-shown) {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control-plaintext:focus, .form-floating > .form-control-plaintext:not(:placeholder-shown), .form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control-plaintext:-webkit-autofill, .form-floating > .form-control:-webkit-autofill {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-select {
                padding-top: 1.625rem;
                padding-bottom: .625rem
            }

            .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control-plaintext ~ label, .form-floating > .form-control:focus ~ label, .form-floating > .form-control:not(:placeholder-shown) ~ label, .form-floating > .form-select ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label::after {
                position: absolute;
                inset: 1rem .375rem;
                z-index: -1;
                height: 1.875em;
                content: "";
                background-color: var(--bs-component-bg);
                border-radius: 8px
            }

            .form-floating > .form-control-plaintext ~ label::after, .form-floating > .form-control:focus ~ label::after, .form-floating > .form-control:not(:placeholder-shown) ~ label::after, .form-floating > .form-select ~ label::after {
                position: absolute;
                inset: 1rem .375rem;
                z-index: -1;
                height: 1.875em;
                content: "";
                background-color: var(--bs-component-bg);
                border-radius: 8px
            }

            .form-floating > .form-control:-webkit-autofill ~ label {
                color: rgba(var(--bs-body-color-rgb), .65);
                transform: scale(.85) translateY(-.5rem) translateX(.15rem)
            }

            .form-floating > .form-control-plaintext ~ label {
                border-width: var(--bs-border-width) 0
            }

            .form-floating > .form-control:disabled ~ label, .form-floating > :disabled ~ label {
                color: #404548
            }

            .form-floating > .form-control:disabled ~ label::after, .form-floating > :disabled ~ label::after {
                background-color: var(--bs-form-control-disabled-bg)
            }

            .input-group {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                width: 100%
            }

            .input-group > .form-control, .input-group > .form-floating, .input-group > .form-select {
                position: relative;
                flex: 1 1 auto;
                width: 1%;
                min-width: 0
            }

            .input-group > .form-control:focus, .input-group > .form-floating:focus-within, .input-group > .form-select:focus {
                z-index: 5
            }

            .input-group .btn {
                position: relative;
                z-index: 2
            }

            .input-group .btn:focus {
                z-index: 5
            }

            .input-group-text {
                display: flex;
                align-items: center;
                padding: .375rem .75rem;
                font-size: .875rem;
                font-weight: 400;
                line-height: 1.5;
                color: var(--bs-body-color);
                text-align: center;
                white-space: nowrap;
                background-color: var(--bs-tertiary-bg);
                border: var(--bs-border-width) solid var(--bs-border-color);
                border-radius: 8px
            }

            .input-group-lg > .btn, .input-group-lg > .form-control, .input-group-lg > .form-select, .input-group-lg > .input-group-text {
                padding: .5rem 1rem;
                font-size: 1.09375rem;
                border-radius: 12px
            }

            .input-group-sm > .btn, .input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text {
                padding: .25rem .5rem;
                font-size: .765625rem;
                border-radius: 6px
            }

            .input-group-lg > .form-select, .input-group-sm > .form-select {
                padding-right: 3rem
            }

            .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control, .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select, .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4), .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control, .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select, .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .input-group > .form-floating:not(:first-child) > .form-control, .input-group > .form-floating:not(:first-child) > .form-select {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0
            }

            .valid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: .25rem .5rem;
                margin-top: .1rem;
                font-size: .765625rem;
                color: #fff;
                background-color: var(--bs-success);
                border-radius: var(--bs-border-radius)
            }

            .form-control.is-valid, .was-validated .form-control:valid {
                border-color: var(--bs-success);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-control.is-valid:focus, .was-validated .form-control:valid:focus {
                border-color: var(--bs-success);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .was-validated textarea.form-control:valid, textarea.form-control.is-valid {
                padding-right: calc(1.5em + .75rem);
                background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
            }

            .form-select.is-valid, .was-validated .form-select:valid {
                border-color: var(--bs-success)
            }

            .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"] {
                --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%231b8835' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
                padding-right: 4.125rem;
                background-position: right .75rem center, center right 2.25rem;
                background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-select.is-valid:focus, .was-validated .form-select:valid:focus {
                border-color: var(--bs-success);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .form-control-color.is-valid, .was-validated .form-control-color:valid {
                width: calc(3rem + calc(1.5em + .75rem))
            }

            .form-check-input.is-valid, .was-validated .form-check-input:valid {
                border-color: var(--bs-success)
            }

            .form-check-input.is-valid:checked, .was-validated .form-check-input:valid:checked {
                background-color: var(--bs-success-text)
            }

            .form-check-input.is-valid:focus, .was-validated .form-check-input:valid:focus {
                box-shadow: 0 0 0 .25rem rgba(var(--bs-success-rgb), .25)
            }

            .form-check-input.is-valid ~ .form-check-label, .was-validated .form-check-input:valid ~ .form-check-label {
                color: var(--bs-success-text)
            }

            .input-group > .form-control:not(:focus).is-valid, .input-group > .form-floating:not(:focus-within).is-valid, .input-group > .form-select:not(:focus).is-valid, .was-validated .input-group > .form-control:not(:focus):valid, .was-validated .input-group > .form-floating:not(:focus-within):valid, .was-validated .input-group > .form-select:not(:focus):valid {
                z-index: 3
            }

            .invalid-tooltip {
                position: absolute;
                top: 100%;
                z-index: 5;
                display: none;
                max-width: 100%;
                padding: .25rem .5rem;
                margin-top: .1rem;
                font-size: .765625rem;
                color: #fff;
                background-color: var(--bs-danger);
                border-radius: var(--bs-border-radius)
            }

            .form-control.is-invalid, .was-validated .form-control:invalid {
                border-color: var(--bs-danger);
                padding-right: calc(1.5em + .75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(.375em + .1875rem) center;
                background-size: calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-control.is-invalid:focus, .was-validated .form-control:invalid:focus {
                border-color: var(--bs-danger);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
                padding-right: calc(1.5em + .75rem);
                background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem)
            }

            .form-select.is-invalid, .was-validated .form-select:invalid {
                border-color: var(--bs-danger)
            }

            .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"] {
                --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23df1414'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23df1414' stroke='none'/%3e%3c/svg%3e");
                padding-right: 4.125rem;
                background-position: right .75rem center, center right 2.25rem;
                background-size: 16px 12px, calc(.75em + .375rem) calc(.75em + .375rem)
            }

            .form-select.is-invalid:focus, .was-validated .form-select:invalid:focus {
                border-color: var(--bs-danger);
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .form-control-color.is-invalid, .was-validated .form-control-color:invalid {
                width: calc(3rem + calc(1.5em + .75rem))
            }

            .form-check-input.is-invalid, .was-validated .form-check-input:invalid {
                border-color: var(--bs-danger)
            }

            .form-check-input.is-invalid:checked, .was-validated .form-check-input:invalid:checked {
                background-color: var(--bs-danger-text)
            }

            .form-check-input.is-invalid:focus, .was-validated .form-check-input:invalid:focus {
                box-shadow: 0 0 0 .25rem rgba(var(--bs-danger-rgb), .25)
            }

            .form-check-input.is-invalid ~ .form-check-label, .was-validated .form-check-input:invalid ~ .form-check-label {
                color: var(--bs-danger-text)
            }

            .input-group > .form-control:not(:focus).is-invalid, .input-group > .form-floating:not(:focus-within).is-invalid, .input-group > .form-select:not(:focus).is-invalid, .was-validated .input-group > .form-control:not(:focus):invalid, .was-validated .input-group > .form-floating:not(:focus-within):invalid, .was-validated .input-group > .form-select:not(:focus):invalid {
                z-index: 4
            }

            /* (1) SCSS에서 & .typeahead__field는 "부모요소 .typeahead__field"로 확장 */

            .parent-selector .typeahead__field .typeahead__query input {
                background: none;
                border-color: var(--input-border-color);
                /* $enable-rtl = false 시 가정: 0 $border-radius $border-radius 0 */
                border-radius: 0 var(--border-radius) var(--border-radius) 0;
            }

            .parent-selector .typeahead__field .typeahead__query input:focus {
                border-color: var(--input-focus-border-color);
                box-shadow: var(--input-focus-box-shadow);
            }

            .parent-selector .typeahead__field .typeahead__query .typeahead__cancel-button {
                color: transparent;
                top: 0;
                bottom: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 100;
            }

            .parent-selector .typeahead__field .typeahead__query .typeahead__cancel-button:before {
                content: '\\f00d';
                position: absolute;
                /* var(--#{$prefix}body-color) => var(--prefix-body-color) 로 가정 */
                color: var(--prefix-body-color);
                /* @include fontawesome(); => 직접 font-family, font-weight 등 정의 필요 */
                font-family: "FontAwesome";
            }

            .btn {
                --bs-btn-padding-x: 0.75rem;
                --bs-btn-padding-y: 0.375rem;
                --bs-btn-font-size: 0.875rem;
                --bs-btn-font-weight: 400;
                --bs-btn-line-height: 1.5;
                --bs-btn-color: var(--bs-body-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-width: var(--bs-border-width);
                --bs-btn-border-color: transparent;
                --bs-btn-border-radius: 8px;
                --bs-btn-hover-border-color: transparent;
                --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
                --bs-btn-disabled-opacity: 0.65;
                --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
                display: inline-block;
                padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
                font-family: var(--bs-btn-font-family);
                font-size: var(--bs-btn-font-size);
                font-weight: var(--bs-btn-font-weight);
                line-height: var(--bs-btn-line-height);
                color: var(--bs-btn-color);
                text-align: center;
                text-decoration: none;
                vertical-align: middle;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
                border-radius: var(--bs-btn-border-radius);
                background-color: var(--bs-btn-bg);
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
            }

            @media (prefers-reduced-motion: reduce) {
                .btn {
                    transition: none
                }
            }

            .btn:hover {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color)
            }

            .btn-check + .btn:hover {
                color: var(--bs-btn-color);
                background-color: var(--bs-btn-bg);
                border-color: var(--bs-btn-border-color)
            }

            .btn:focus-visible {
                color: var(--bs-btn-hover-color);
                background-color: var(--bs-btn-hover-bg);
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:focus-visible + .btn {
                border-color: var(--bs-btn-hover-border-color);
                outline: 0;
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:checked + .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
                color: var(--bs-btn-active-color);
                background-color: var(--bs-btn-active-bg);
                border-color: var(--bs-btn-active-border-color)
            }

            .btn-check:checked + .btn:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible, .btn:first-child:active:focus-visible, :not(.btn-check) + .btn:active:focus-visible {
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn-check:checked:focus-visible + .btn {
                box-shadow: var(--bs-btn-focus-box-shadow)
            }

            .btn.disabled, .btn:disabled, fieldset:disabled .btn {
                color: var(--bs-btn-disabled-color);
                pointer-events: none;
                background-color: var(--bs-btn-disabled-bg);
                border-color: var(--bs-btn-disabled-border-color);
                opacity: var(--bs-btn-disabled-opacity)
            }

            .btn-default {
                --bs-btn-color: var(--bs-component-color);
                --bs-btn-bg: var(--bs-component-bg);
                --bs-btn-border-color: var(--bs-border-color);
                --bs-btn-hover-color: var(--bs-component-color);
                --bs-btn-hover-bg: var(--bs-border-color);
                --bs-btn-hover-border-color: var(--bs-border-color);
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: var(--bs-component-color);
                --bs-btn-active-bg: var(--bs-border-color);
                --bs-btn-active-border-color: var(--bs-border-color);
                --bs-btn-disabled-border-color: var(--bs-border-color);
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
            }

            .btn-theme {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0042a6;
                --bs-btn-active-border-color: #0042a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff
            }

            .btn-theme-color {
                --bs-btn-color: #000000;
                --bs-btn-bg: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: white;
                --bs-btn-hover-border-color: white;
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: white;
                --bs-btn-active-border-color: white;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
                --bs-btn-disabled-border-color: #FFFFFF
            }

            .btn-primary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #004dbf;
                --bs-btn-hover-border-color: #004dbf;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0042a6;
                --bs-btn-active-border-color: #0042a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #0066ff;
                --bs-btn-disabled-border-color: #0066ff
            }

            .btn-secondary {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-orange {
                --bs-btn-color: #ffffff;
                --bs-btn-bg: #ff9f0c;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffb749;
                --bs-btn-hover-border-color: #ffb749;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffc161;
                --bs-btn-active-border-color: #ffc161;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #ff9f0c;
                --bs-btn-disabled-border-color: #ff9f0c
            }

            .btn-light-orange {
                --bs-btn-color: #ffae2d;
                --bs-btn-bg: #fff1dd;
                --bs-btn-border-color: #fff1dd;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 217, 135, 10;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #fff1dd;
                --bs-btn-disabled-border-color: #fff1dd
            }

            .btn-danger {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a70f0f;
                --bs-btn-hover-border-color: #a70f0f;
                --bs-btn-focus-shadow-rgb: 228, 55, 55;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910d0d;
                --bs-btn-active-border-color: #910d0d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1414;
                --bs-btn-disabled-border-color: #df1414
            }

            .btn-success {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #146628;
                --bs-btn-hover-border-color: #146628;
                --bs-btn-focus-shadow-rgb: 61, 154, 83;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #125822;
                --bs-btn-active-border-color: #125822;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #1b8835;
                --bs-btn-disabled-border-color: #1b8835
            }

            .btn-info {
                --bs-btn-color: #000000;
                --bs-btn-bg: #0eb3ff;
                --bs-btn-border-color: #0eb3ff;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #4ac6ff;
                --bs-btn-hover-border-color: #4ac6ff;
                --bs-btn-focus-shadow-rgb: 12, 152, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #62ceff;
                --bs-btn-active-border-color: #62ceff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #0eb3ff;
                --bs-btn-disabled-border-color: #0eb3ff
            }

            .btn-dark {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #161616;
                --bs-btn-border-color: #161616;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #505050;
                --bs-btn-hover-border-color: #505050;
                --bs-btn-focus-shadow-rgb: 57, 57, 57;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #686868;
                --bs-btn-active-border-color: #686868;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #161616;
                --bs-btn-disabled-border-color: #161616
            }

            .btn-black {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #000000;
                --bs-btn-border-color: #000000;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: black;
                --bs-btn-hover-border-color: black;
                --bs-btn-focus-shadow-rgb: 38, 38, 38;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: black;
                --bs-btn-active-border-color: black;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #000000;
                --bs-btn-disabled-border-color: #000000
            }

            .btn-white {
                --bs-btn-color: #000000;
                --bs-btn-bg: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: white;
                --bs-btn-hover-border-color: white;
                --bs-btn-focus-shadow-rgb: 217, 217, 217;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: white;
                --bs-btn-active-border-color: white;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #FFFFFF;
                --bs-btn-disabled-border-color: #FFFFFF
            }

            .btn-purple {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #a104ff;
                --bs-btn-border-color: #a104ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #7903bf;
                --bs-btn-hover-border-color: #7903bf;
                --bs-btn-focus-shadow-rgb: 175, 42, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #6903a6;
                --bs-btn-active-border-color: #6903a6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #a104ff;
                --bs-btn-disabled-border-color: #a104ff
            }

            .btn-indigo {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #612bff;
                --bs-btn-border-color: #612bff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #4920bf;
                --bs-btn-hover-border-color: #4920bf;
                --bs-btn-focus-shadow-rgb: 121, 75, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #3f1ca6;
                --bs-btn-active-border-color: #3f1ca6;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #612bff;
                --bs-btn-disabled-border-color: #612bff
            }

            .btn-red {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a70f0f;
                --bs-btn-hover-border-color: #a70f0f;
                --bs-btn-focus-shadow-rgb: 228, 55, 55;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910d0d;
                --bs-btn-active-border-color: #910d0d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1414;
                --bs-btn-disabled-border-color: #df1414
            }

            .btn-pink {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #df1578;
                --bs-btn-border-color: #df1578;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a7105a;
                --bs-btn-hover-border-color: #a7105a;
                --bs-btn-focus-shadow-rgb: 228, 56, 140;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #910e4e;
                --bs-btn-active-border-color: #910e4e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #df1578;
                --bs-btn-disabled-border-color: #df1578
            }

            .btn-green {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #146628;
                --bs-btn-hover-border-color: #146628;
                --bs-btn-focus-shadow-rgb: 61, 154, 83;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #125822;
                --bs-btn-active-border-color: #125822;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #1b8835;
                --bs-btn-disabled-border-color: #1b8835
            }

            .btn-yellow {
                --bs-btn-color: #000000;
                --bs-btn-bg: #f9e80d;
                --bs-btn-border-color: #f9e80d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #fbee4a;
                --bs-btn-hover-border-color: #fbee4a;
                --bs-btn-focus-shadow-rgb: 212, 197, 11;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #fbf062;
                --bs-btn-active-border-color: #fbf062;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #f9e80d;
                --bs-btn-disabled-border-color: #f9e80d
            }

            .btn-teal {
                --bs-btn-color: #000000;
                --bs-btn-bg: #3cd2a5;
                --bs-btn-border-color: #3cd2a5;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #6dddbc;
                --bs-btn-hover-border-color: #6dddbc;
                --bs-btn-focus-shadow-rgb: 51, 179, 140;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #80e2c5;
                --bs-btn-active-border-color: #80e2c5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #3cd2a5;
                --bs-btn-disabled-border-color: #3cd2a5
            }

            .btn-muted {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-light {
                --bs-btn-color: #000000;
                --bs-btn-bg: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a0a1a1;
                --bs-btn-hover-border-color: #a0a1a1;
                --bs-btn-focus-shadow-rgb: 181, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #8a8b8c;
                --bs-btn-active-border-color: #8a8b8c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #d5d6d7;
                --bs-btn-disabled-border-color: #d5d6d7
            }

            .btn-lime {
                --bs-btn-color: #000000;
                --bs-btn-bg: #81f32d;
                --bs-btn-border-color: #81f32d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a1f662;
                --bs-btn-hover-border-color: #a1f662;
                --bs-btn-focus-shadow-rgb: 110, 207, 38;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #adf777;
                --bs-btn-active-border-color: #adf777;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #81f32d;
                --bs-btn-disabled-border-color: #81f32d
            }

            .btn-gray-100 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #e0e0e1;
                --bs-btn-hover-border-color: #e0e0e1;
                --bs-btn-focus-shadow-rgb: 181, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #e4e4e5;
                --bs-btn-active-border-color: #e4e4e5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #d5d6d7;
                --bs-btn-disabled-border-color: #d5d6d7
            }

            .btn-gray-200 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #b3b6b7;
                --bs-btn-border-color: #b3b6b7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #c6c8c9;
                --bs-btn-hover-border-color: #c6c8c9;
                --bs-btn-focus-shadow-rgb: 152, 155, 156;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ced0d0;
                --bs-btn-active-border-color: #ced0d0;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #b3b6b7;
                --bs-btn-disabled-border-color: #b3b6b7
            }

            .btn-gray-300 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #999da0;
                --bs-btn-border-color: #999da0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #b3b6b8;
                --bs-btn-hover-border-color: #b3b6b8;
                --bs-btn-focus-shadow-rgb: 130, 133, 136;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #bdbfc1;
                --bs-btn-active-border-color: #bdbfc1;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #999da0;
                --bs-btn-disabled-border-color: #999da0
            }

            .btn-gray-400 {
                --bs-btn-color: #000000;
                --bs-btn-bg: #808588;
                --bs-btn-border-color: #808588;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #a0a4a6;
                --bs-btn-hover-border-color: #a0a4a6;
                --bs-btn-focus-shadow-rgb: 109, 113, 116;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #acb0b2;
                --bs-btn-active-border-color: #acb0b2;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: #808588;
                --bs-btn-disabled-border-color: #808588
            }

            .btn-gray-500 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 111, 116, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #373c3e;
                --bs-btn-active-border-color: #373c3e;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #555c60;
                --bs-btn-disabled-border-color: #555c60
            }

            .btn-gray-600 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #404548;
                --bs-btn-border-color: #404548;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #303436;
                --bs-btn-hover-border-color: #303436;
                --bs-btn-focus-shadow-rgb: 93, 97, 99;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #2a2d2f;
                --bs-btn-active-border-color: #2a2d2f;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #404548;
                --bs-btn-disabled-border-color: #404548
            }

            .btn-gray-700 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #33373a;
                --bs-btn-border-color: #33373a;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #26292c;
                --bs-btn-hover-border-color: #26292c;
                --bs-btn-focus-shadow-rgb: 82, 85, 88;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #212426;
                --bs-btn-active-border-color: #212426;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #33373a;
                --bs-btn-disabled-border-color: #33373a
            }

            .btn-gray-800 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #26292b;
                --bs-btn-border-color: #26292b;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1d1f20;
                --bs-btn-hover-border-color: #1d1f20;
                --bs-btn-focus-shadow-rgb: 71, 73, 75;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #191b1c;
                --bs-btn-active-border-color: #191b1c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #26292b;
                --bs-btn-disabled-border-color: #26292b
            }

            .btn-gray-900 {
                --bs-btn-color: #FFFFFF;
                --bs-btn-bg: #151718;
                --bs-btn-border-color: #151718;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #101112;
                --bs-btn-hover-border-color: #101112;
                --bs-btn-focus-shadow-rgb: 56, 58, 59;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0e0f10;
                --bs-btn-active-border-color: #0e0f10;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: #151718;
                --bs-btn-disabled-border-color: #151718
            }

            .btn-outline-default {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-theme {
                --bs-btn-color: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
                --bs-gradient: none
            }

            .btn-outline-theme-color {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-primary {
                --bs-btn-color: #0066ff;
                --bs-btn-border-color: #0066ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #0066ff;
                --bs-btn-hover-border-color: #0066ff;
                --bs-btn-focus-shadow-rgb: 0, 102, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #0066ff;
                --bs-btn-active-border-color: #0066ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0066ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0066ff;
                --bs-gradient: none
            }

            .btn-outline-secondary {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-border-color: #ff9f0c;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ff9f0c;
                --bs-btn-hover-border-color: #ff9f0c;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ff9f0c;
                --bs-btn-active-border-color: #ff9f0c;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ff9f0c;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ff9f0c;
                --bs-gradient: none
            }

            .btn-outline-light-orange {
                --bs-btn-color: #ff9f0c;
                --bs-btn-border-color: #ffdeac;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #ffdeac;
                --bs-btn-hover-border-color: #ffdeac;
                --bs-btn-focus-shadow-rgb: 255, 159, 12;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #ffdeac;
                --bs-btn-active-border-color: #ffdeac;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #ffdeac;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #ffdeac;
                --bs-gradient: none
            }

            .btn-outline-danger {
                --bs-btn-color: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1414;
                --bs-btn-hover-border-color: #df1414;
                --bs-btn-focus-shadow-rgb: 223, 20, 20;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1414;
                --bs-btn-active-border-color: #df1414;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1414;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1414;
                --bs-gradient: none
            }

            .btn-outline-success {
                --bs-btn-color: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1b8835;
                --bs-btn-hover-border-color: #1b8835;
                --bs-btn-focus-shadow-rgb: 27, 136, 53;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1b8835;
                --bs-btn-active-border-color: #1b8835;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #1b8835;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #1b8835;
                --bs-gradient: none
            }

            .btn-outline-info {
                --bs-btn-color: #0eb3ff;
                --bs-btn-border-color: #0eb3ff;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #0eb3ff;
                --bs-btn-hover-border-color: #0eb3ff;
                --bs-btn-focus-shadow-rgb: 14, 179, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #0eb3ff;
                --bs-btn-active-border-color: #0eb3ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #0eb3ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #0eb3ff;
                --bs-gradient: none
            }

            .btn-outline-dark {
                --bs-btn-color: #161616;
                --bs-btn-border-color: #161616;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #161616;
                --bs-btn-hover-border-color: #161616;
                --bs-btn-focus-shadow-rgb: 22, 22, 22;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #161616;
                --bs-btn-active-border-color: #161616;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #161616;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #161616;
                --bs-gradient: none
            }

            .btn-outline-black {
                --bs-btn-color: #000000;
                --bs-btn-border-color: #000000;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #000000;
                --bs-btn-hover-border-color: #000000;
                --bs-btn-focus-shadow-rgb: 0, 0, 0;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #000000;
                --bs-btn-active-border-color: #000000;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #000000;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #000000;
                --bs-gradient: none
            }

            .btn-outline-white {
                --bs-btn-color: #FFFFFF;
                --bs-btn-border-color: #FFFFFF;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #FFFFFF;
                --bs-btn-hover-border-color: #FFFFFF;
                --bs-btn-focus-shadow-rgb: 255, 255, 255;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #FFFFFF;
                --bs-btn-active-border-color: #FFFFFF;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #FFFFFF;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #FFFFFF;
                --bs-gradient: none
            }

            .btn-outline-purple {
                --bs-btn-color: #a104ff;
                --bs-btn-border-color: #a104ff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #a104ff;
                --bs-btn-hover-border-color: #a104ff;
                --bs-btn-focus-shadow-rgb: 161, 4, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #a104ff;
                --bs-btn-active-border-color: #a104ff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #a104ff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #a104ff;
                --bs-gradient: none
            }

            .btn-outline-indigo {
                --bs-btn-color: #612bff;
                --bs-btn-border-color: #612bff;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #612bff;
                --bs-btn-hover-border-color: #612bff;
                --bs-btn-focus-shadow-rgb: 97, 43, 255;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #612bff;
                --bs-btn-active-border-color: #612bff;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #612bff;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #612bff;
                --bs-gradient: none
            }

            .btn-outline-red {
                --bs-btn-color: #df1414;
                --bs-btn-border-color: #df1414;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1414;
                --bs-btn-hover-border-color: #df1414;
                --bs-btn-focus-shadow-rgb: 223, 20, 20;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1414;
                --bs-btn-active-border-color: #df1414;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1414;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1414;
                --bs-gradient: none
            }

            .btn-outline-pink {
                --bs-btn-color: #df1578;
                --bs-btn-border-color: #df1578;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #df1578;
                --bs-btn-hover-border-color: #df1578;
                --bs-btn-focus-shadow-rgb: 223, 21, 120;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #df1578;
                --bs-btn-active-border-color: #df1578;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #df1578;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #df1578;
                --bs-gradient: none
            }

            .btn-outline-green {
                --bs-btn-color: #1b8835;
                --bs-btn-border-color: #1b8835;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #1b8835;
                --bs-btn-hover-border-color: #1b8835;
                --bs-btn-focus-shadow-rgb: 27, 136, 53;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #1b8835;
                --bs-btn-active-border-color: #1b8835;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #1b8835;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #1b8835;
                --bs-gradient: none
            }

            .btn-outline-yellow {
                --bs-btn-color: #f9e80d;
                --bs-btn-border-color: #f9e80d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #f9e80d;
                --bs-btn-hover-border-color: #f9e80d;
                --bs-btn-focus-shadow-rgb: 249, 232, 13;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #f9e80d;
                --bs-btn-active-border-color: #f9e80d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #f9e80d;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #f9e80d;
                --bs-gradient: none
            }

            .btn-outline-teal {
                --bs-btn-color: #3cd2a5;
                --bs-btn-border-color: #3cd2a5;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #3cd2a5;
                --bs-btn-hover-border-color: #3cd2a5;
                --bs-btn-focus-shadow-rgb: 60, 210, 165;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #3cd2a5;
                --bs-btn-active-border-color: #3cd2a5;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #3cd2a5;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #3cd2a5;
                --bs-gradient: none
            }

            .btn-outline-muted {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-light {
                --bs-btn-color: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #d5d6d7;
                --bs-btn-hover-border-color: #d5d6d7;
                --bs-btn-focus-shadow-rgb: 213, 214, 215;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #d5d6d7;
                --bs-btn-active-border-color: #d5d6d7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d5d6d7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d5d6d7;
                --bs-gradient: none
            }

            .btn-outline-lime {
                --bs-btn-color: #81f32d;
                --bs-btn-border-color: #81f32d;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #81f32d;
                --bs-btn-hover-border-color: #81f32d;
                --bs-btn-focus-shadow-rgb: 129, 243, 45;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #81f32d;
                --bs-btn-active-border-color: #81f32d;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #81f32d;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #81f32d;
                --bs-gradient: none
            }

            .btn-outline-gray-100 {
                --bs-btn-color: #d5d6d7;
                --bs-btn-border-color: #d5d6d7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #d5d6d7;
                --bs-btn-hover-border-color: #d5d6d7;
                --bs-btn-focus-shadow-rgb: 213, 214, 215;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #d5d6d7;
                --bs-btn-active-border-color: #d5d6d7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #d5d6d7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #d5d6d7;
                --bs-gradient: none
            }

            .btn-outline-gray-200 {
                --bs-btn-color: #b3b6b7;
                --bs-btn-border-color: #b3b6b7;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #b3b6b7;
                --bs-btn-hover-border-color: #b3b6b7;
                --bs-btn-focus-shadow-rgb: 179, 182, 183;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #b3b6b7;
                --bs-btn-active-border-color: #b3b6b7;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #b3b6b7;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #b3b6b7;
                --bs-gradient: none
            }

            .btn-outline-gray-300 {
                --bs-btn-color: #999da0;
                --bs-btn-border-color: #999da0;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #999da0;
                --bs-btn-hover-border-color: #999da0;
                --bs-btn-focus-shadow-rgb: 153, 157, 160;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #999da0;
                --bs-btn-active-border-color: #999da0;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #999da0;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #999da0;
                --bs-gradient: none
            }

            .btn-outline-gray-400 {
                --bs-btn-color: #808588;
                --bs-btn-border-color: #808588;
                --bs-btn-hover-color: #000000;
                --bs-btn-hover-bg: #808588;
                --bs-btn-hover-border-color: #808588;
                --bs-btn-focus-shadow-rgb: 128, 133, 136;
                --bs-btn-active-color: #000000;
                --bs-btn-active-bg: #808588;
                --bs-btn-active-border-color: #808588;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #808588;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #808588;
                --bs-gradient: none
            }

            .btn-outline-gray-500 {
                --bs-btn-color: #555c60;
                --bs-btn-border-color: #555c60;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #555c60;
                --bs-btn-hover-border-color: #555c60;
                --bs-btn-focus-shadow-rgb: 85, 92, 96;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #555c60;
                --bs-btn-active-border-color: #555c60;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #555c60;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #555c60;
                --bs-gradient: none
            }

            .btn-outline-gray-600 {
                --bs-btn-color: #404548;
                --bs-btn-border-color: #404548;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #404548;
                --bs-btn-hover-border-color: #404548;
                --bs-btn-focus-shadow-rgb: 64, 69, 72;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #404548;
                --bs-btn-active-border-color: #404548;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #404548;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #404548;
                --bs-gradient: none
            }

            .btn-outline-gray-700 {
                --bs-btn-color: #33373a;
                --bs-btn-border-color: #33373a;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #33373a;
                --bs-btn-hover-border-color: #33373a;
                --bs-btn-focus-shadow-rgb: 51, 55, 58;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #33373a;
                --bs-btn-active-border-color: #33373a;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #33373a;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #33373a;
                --bs-gradient: none
            }

            .btn-outline-gray-800 {
                --bs-btn-color: #26292b;
                --bs-btn-border-color: #26292b;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #26292b;
                --bs-btn-hover-border-color: #26292b;
                --bs-btn-focus-shadow-rgb: 38, 41, 43;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #26292b;
                --bs-btn-active-border-color: #26292b;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #26292b;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #26292b;
                --bs-gradient: none
            }

            .btn-outline-gray-900 {
                --bs-btn-color: #151718;
                --bs-btn-border-color: #151718;
                --bs-btn-hover-color: #FFFFFF;
                --bs-btn-hover-bg: #151718;
                --bs-btn-hover-border-color: #151718;
                --bs-btn-focus-shadow-rgb: 21, 23, 24;
                --bs-btn-active-color: #FFFFFF;
                --bs-btn-active-bg: #151718;
                --bs-btn-active-border-color: #151718;
                --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                --bs-btn-disabled-color: #151718;
                --bs-btn-disabled-bg: transparent;
                --bs-btn-disabled-border-color: #151718;
                --bs-gradient: none
            }

            .btn-link {
                --bs-btn-font-weight: 400;
                --bs-btn-color: var(--bs-link-color);
                --bs-btn-bg: transparent;
                --bs-btn-border-color: transparent;
                --bs-btn-hover-color: var(--bs-link-hover-color);
                --bs-btn-hover-border-color: transparent;
                --bs-btn-active-color: var(--bs-link-hover-color);
                --bs-btn-active-border-color: transparent;
                --bs-btn-disabled-color: #404548;
                --bs-btn-disabled-border-color: transparent;
                --bs-btn-box-shadow: 0 0 0 #000;
                --bs-btn-focus-shadow-rgb: 38, 125, 255;
                text-decoration: underline
            }

            .btn-link:focus-visible {
                color: var(--bs-btn-color)
            }

            .btn-link:hover {
                color: var(--bs-btn-hover-color)
            }

            .btn-group-lg > .btn, .btn-lg {
                --bs-btn-padding-y: 0.5rem;
                --bs-btn-padding-x: 1rem;
                --bs-btn-font-size: 1.09375rem;
                --bs-btn-border-radius: 12px
            }

            .btn-group-sm > .btn, .btn-sm {
                --bs-btn-padding-y: 0.25rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-font-size: 0.765625rem;
                --bs-btn-border-radius: 6px
            }

            .fade {
                transition: opacity .15s linear
            }

            @media (prefers-reduced-motion: reduce) {
                .fade {
                    transition: none
                }
            }

            .fade:not(.show) {
                opacity: 0
            }

            .collapse:not(.show) {
                display: none
            }

            .collapsing {
                height: 0;
                overflow: hidden;
                transition: height .35s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .collapsing {
                    transition: none
                }
            }

            .collapsing.collapse-horizontal {
                width: 0;
                height: auto;
                transition: width .35s ease
            }

            @media (prefers-reduced-motion: reduce) {
                .collapsing.collapse-horizontal {
                    transition: none
                }
            }

            .dropdown-toggle::after {
                display: inline-block;
                margin-left: .255em;
                vertical-align: .255em;
                content: "";
                border-top: .3em solid;
                border-right: .3em solid transparent;
                border-bottom: 0;
                border-left: .3em solid transparent
            }

            .dropdown-toggle:empty::after {
                margin-left: 0
            }

            .dropdown-menu[data-bs-popper] {
                top: 100%;
                left: 0;
                margin-top: var(--bs-dropdown-spacer)
            }

            @media (min-width: 576px) {
                .dropdown-menu-sm-start {
                    --bs-position: start
                }

                .dropdown-menu-sm-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-sm-end {
                    --bs-position: end
                }

                .dropdown-menu-sm-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 768px) {
                .dropdown-menu-md-start {
                    --bs-position: start
                }

                .dropdown-menu-md-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-md-end {
                    --bs-position: end
                }

                .dropdown-menu-md-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 992px) {
                .dropdown-menu-lg-start {
                    --bs-position: start
                }

                .dropdown-menu-lg-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-lg-end {
                    --bs-position: end
                }

                .dropdown-menu-lg-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1200px) {
                .dropdown-menu-xl-start {
                    --bs-position: start
                }

                .dropdown-menu-xl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xl-end {
                    --bs-position: end
                }

                .dropdown-menu-xl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1660px) {
                .dropdown-menu-xxl-start {
                    --bs-position: start
                }

                .dropdown-menu-xxl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xxl-end {
                    --bs-position: end
                }

                .dropdown-menu-xxl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            @media (min-width: 1900px) {
                .dropdown-menu-xxxl-start {
                    --bs-position: start
                }

                .dropdown-menu-xxxl-start[data-bs-popper] {
                    right: auto;
                    left: 0
                }

                .dropdown-menu-xxxl-end {
                    --bs-position: end
                }

                .dropdown-menu-xxxl-end[data-bs-popper] {
                    right: 0;
                    left: auto
                }
            }

            .dropdown-menu.show {
                display: block
            }

            .btn-group, .btn-group-vertical {
                position: relative;
                display: inline-flex;
                vertical-align: middle
            }

            .btn-group-vertical > .btn, .btn-group > .btn {
                position: relative;
                flex: 1 1 auto
            }

            .btn-group-vertical > .btn-check:checked + .btn, .btn-group-vertical > .btn-check:focus + .btn, .btn-group-vertical > .btn.active, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:hover, .btn-group > .btn-check:checked + .btn, .btn-group > .btn-check:focus + .btn, .btn-group > .btn.active, .btn-group > .btn:active, .btn-group > .btn:focus, .btn-group > .btn:hover {
                z-index: 1
            }

            .btn-toolbar {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start
            }

            .btn-toolbar .input-group {
                width: auto
            }

            .btn-group {
                border-radius: 8px
            }

            .btn-group > .btn-group:not(:first-child), .btn-group > :not(.btn-check:first-child) + .btn {
                margin-left: calc(var(--bs-border-width) * -1)
            }

            .btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn.dropdown-toggle-split:first-child, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .btn-group > .btn-group:not(:first-child) > .btn, .btn-group > .btn:nth-child(n+3), .btn-group > :not(.btn-check) + .btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0
            }

            .btn-group-sm > .btn + .dropdown-toggle-split, .btn-sm + .dropdown-toggle-split {
                padding-right: .375rem;
                padding-left: .375rem
            }

            .btn-group-lg > .btn + .dropdown-toggle-split, .btn-lg + .dropdown-toggle-split {
                padding-right: .75rem;
                padding-left: .75rem
            }

            .btn-group-vertical {
                flex-direction: column;
                align-items: flex-start;
                justify-content: center
            }

            .btn-group-vertical > .btn, .btn-group-vertical > .btn-group {
                width: 100%
            }

            .btn-group-vertical > .btn-group:not(:first-child), .btn-group-vertical > .btn:not(:first-child) {
                margin-top: calc(var(--bs-border-width) * -1)
            }

            .btn-group-vertical > .btn-group:not(:last-child) > .btn, .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle) {
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0
            }

            .btn-group-vertical > .btn-group:not(:first-child) > .btn, .btn-group-vertical > .btn ~ .btn {
                border-top-left-radius: 0;
                border-top-right-radius: 0
            }

            .nav {
                --bs-nav-link-padding-x: 1rem;
                --bs-nav-link-padding-y: 0.5rem;
                --bs-nav-link-color: var(--bs-link-color);
                --bs-nav-link-hover-color: var(--bs-link-hover-color);
                --bs-nav-link-disabled-color: var(--bs-tertiary-color);
                display: flex;
                flex-wrap: wrap;
                padding-left: 0;
                margin-bottom: 0;
                list-style: none
            }

            .nav-link {
                display: block;
                padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
                font-size: var(--bs-nav-link-font-size);
                font-weight: var(--bs-nav-link-font-weight);
                color: var(--bs-nav-link-color);
                text-decoration: none;
                background: 0 0;
                border: 0;
                transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
            }

            .border-theme {
                border-color: var(--bs-theme) !important
            }

        `;
    }
}

export { SharedStyles };
