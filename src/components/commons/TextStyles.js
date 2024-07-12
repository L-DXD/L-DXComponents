// SharedStyles.js
import { css } from 'lit';

class TextStyles {
    static get styles() {
        return css`
            .text-bg-default {
                color: #000 !important;
                background-color: RGBA(var(--bs-default-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-theme {
                color: #fff !important;
                background-color: RGBA(var(--bs-theme-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-theme-color {
                color: #000 !important;
                background-color: RGBA(var(--bs-theme-color-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-primary {
                color: #fff !important;
                background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-secondary {
                color: #fff !important;
                background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-warning {
                color: #000 !important;
                background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-danger {
                color: #fff !important;
                background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-success {
                color: #fff !important;
                background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-info {
                color: #000 !important;
                background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-dark {
                color: #fff !important;
                background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-black {
                color: #fff !important;
                background-color: RGBA(var(--bs-black-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-white {
                color: #000 !important;
                background-color: RGBA(var(--bs-white-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-purple {
                color: #fff !important;
                background-color: RGBA(var(--bs-purple-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-indigo {
                color: #fff !important;
                background-color: RGBA(var(--bs-indigo-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-red {
                color: #fff !important;
                background-color: RGBA(var(--bs-red-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-pink {
                color: #fff !important;
                background-color: RGBA(var(--bs-pink-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-green {
                color: #fff !important;
                background-color: RGBA(var(--bs-green-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-yellow {
                color: #000 !important;
                background-color: RGBA(var(--bs-yellow-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-teal {
                color: #000 !important;
                background-color: RGBA(var(--bs-teal-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-muted {
                color: #fff !important;
                background-color: RGBA(var(--bs-muted-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-light {
                color: #000 !important;
                background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-lime {
                color: #000 !important;
                background-color: RGBA(var(--bs-lime-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-100 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-100-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-200 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-200-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-300 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-300-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-400 {
                color: #000 !important;
                background-color: RGBA(var(--bs-gray-400-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-500 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-500-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-600 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-600-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-700 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-700-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-800 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-800-rgb), var(--bs-bg-opacity, 1)) !important
            }

            .text-bg-gray-900 {
                color: #fff !important;
                background-color: RGBA(var(--bs-gray-900-rgb), var(--bs-bg-opacity, 1)) !important
            }


            .text-truncate {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap
            }


            .text-start {
                text-align: left !important
            }

            .text-end {
                text-align: right !important
            }

            .text-center {
                text-align: center !important
            }

            .text-decoration-none {
                text-decoration: none !important
            }

            .text-decoration-underline {
                text-decoration: underline !important
            }

            .text-decoration-line-through {
                text-decoration: line-through !important
            }

            .text-lowercase {
                text-transform: lowercase !important
            }

            .text-uppercase {
                text-transform: uppercase !important
            }

            .text-capitalize {
                text-transform: capitalize !important
            }

            .text-wrap {
                white-space: normal !important
            }

            .text-nowrap {
                white-space: nowrap !important
            }

            .text-break {
                word-wrap: break-word !important;
                word-break: break-word !important
            }

            .text-default {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-default-rgb), var(--bs-text-opacity)) !important
            }

            .text-theme {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-theme-rgb), var(--bs-text-opacity)) !important
            }

            .text-theme-color {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-theme-color-rgb), var(--bs-text-opacity)) !important
            }

            .text-primary {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important
            }

            .text-secondary {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important
            }

            .text-warning {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important
            }

            .text-danger {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important
            }

            .text-success {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important
            }

            .text-info {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important
            }

            .text-dark {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important
            }

            .text-black {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important
            }

            .text-white {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important
            }

            .text-purple {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-purple-rgb), var(--bs-text-opacity)) !important
            }

            .text-indigo {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-indigo-rgb), var(--bs-text-opacity)) !important
            }

            .text-red {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-red-rgb), var(--bs-text-opacity)) !important
            }

            .text-pink {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-pink-rgb), var(--bs-text-opacity)) !important
            }

            .text-green {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-green-rgb), var(--bs-text-opacity)) !important
            }

            .text-yellow {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-yellow-rgb), var(--bs-text-opacity)) !important
            }

            .text-teal {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-teal-rgb), var(--bs-text-opacity)) !important
            }

            .text-muted {
                --bs-text-opacity: 1;
                color: var(--bs-secondary-color) !important
            }

            .text-light {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important
            }

            .text-lime {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-lime-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-100 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-100-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-200 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-200-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-300 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-300-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-400 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-400-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-500 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-500-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-600 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-600-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-700 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-700-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-800 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-800-rgb), var(--bs-text-opacity)) !important
            }

            .text-gray-900 {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-gray-900-rgb), var(--bs-text-opacity)) !important
            }

            .text-body {
                --bs-text-opacity: 1;
                color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important
            }

            .text-black-50 {
                --bs-text-opacity: 1;
                color: rgba(0, 0, 0, .5) !important
            }

            .text-white-50 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, .5) !important
            }

            .text-body-secondary {
                --bs-text-opacity: 1;
                color: var(--bs-secondary-color) !important
            }

            .text-body-tertiary {
                --bs-text-opacity: 1;
                color: var(--bs-tertiary-color) !important
            }

            .text-body-emphasis {
                --bs-text-opacity: 1;
                color: var(--bs-emphasis-color) !important
            }

            .text-reset {
                --bs-text-opacity: 1;
                color: inherit !important
            }

            .text-opacity-25 {
                --bs-text-opacity: 0.25
            }

            .text-opacity-50 {
                --bs-text-opacity: 0.5
            }

            .text-opacity-75 {
                --bs-text-opacity: 0.75
            }

            .text-opacity-100 {
                --bs-text-opacity: 1
            }

            .text-primary-emphasis {
                color: var(--bs-primary-text-emphasis) !important
            }

            .text-secondary-emphasis {
                color: var(--bs-secondary-text-emphasis) !important
            }

            .text-success-emphasis {
                color: var(--bs-success-text-emphasis) !important
            }

            .text-info-emphasis {
                color: var(--bs-info-text-emphasis) !important
            }

            .text-warning-emphasis {
                color: var(--bs-warning-text-emphasis) !important
            }

            .text-danger-emphasis {
                color: var(--bs-danger-text-emphasis) !important
            }

            .text-light-emphasis {
                color: var(--bs-light-text-emphasis) !important
            }

            .text-dark-emphasis {
                color: var(--bs-dark-text-emphasis) !important
            }


            @media (min-width: 576px) {
                .text-sm-start {
                    text-align: left !important
                }

                .text-sm-end {
                    text-align: right !important
                }

                .text-sm-center {
                    text-align: center !important
                }
            }

            @media (min-width: 768px) {
                

                .text-md-start {
                    text-align: left !important
                }

                .text-md-end {
                    text-align: right !important
                }

                .text-md-center {
                    text-align: center !important
                }
            }

            @media (min-width: 992px) {
                
                .text-lg-start {
                    text-align: left !important
                }

                .text-lg-end {
                    text-align: right !important
                }

                .text-lg-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1200px) {
                
                .text-xl-start {
                    text-align: left !important
                }

                .text-xl-end {
                    text-align: right !important
                }

                .text-xl-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1660px) {
                

                .text-xxl-start {
                    text-align: left !important
                }

                .text-xxl-end {
                    text-align: right !important
                }

                .text-xxl-center {
                    text-align: center !important
                }
            }

            @media (min-width: 1900px) {
                

                .text-xxxl-start {
                    text-align: left !important
                }

                .text-xxxl-end {
                    text-align: right !important
                }

                .text-xxxl-center {
                    text-align: center !important
                }
            }

            .text-gradient {
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important
            }

            .theme-default .text-bg-theme {
                color: #000 !important;
                background-color: rgba(255, 255, 255, var(--bs-bg-opacity, 1)) !important
            }


            .text-default-100 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-600 {
                --bs-text-opacity: 1;
                color: rgba(204, 204, 204, var(--bs-text-opacity)) !important
            }

            .text-default-200 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-700 {
                --bs-text-opacity: 1;
                color: rgba(153, 153, 153, var(--bs-text-opacity)) !important
            }

            .text-default-300 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-800 {
                --bs-text-opacity: 1;
                color: rgba(102, 102, 102, var(--bs-text-opacity)) !important
            }

            .text-default-400 {
                --bs-text-opacity: 1;
                color: rgba(255, 255, 255, var(--bs-text-opacity)) !important
            }

            .text-default-900 {
                --bs-text-opacity: 1;
                color: rgba(51, 51, 51, var(--bs-text-opacity)) !important
            }

            .form-text {
                margin-top: .25rem;
                font-size: .875em;
                color: #808588
            }
        `;
    }
}

export { TextStyles };
