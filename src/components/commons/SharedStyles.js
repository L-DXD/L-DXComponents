// SharedStyles.js
import { css } from 'lit';

class SharedStyles {
    static get styles() {
        return css`
          :host {
            margin: 0;
            font-family: var(--bs-body-font-family);
            font-size: var(--bs-body-font-size);
            font-weight: var(--bs-body-font-weight);
            line-height: var(--bs-body-line-height);
            color: var(--bs-body-color);

            background-color: var(--bs-body-bg);
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: transparent;
          }

          button, input, optgroup, select, textarea {
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          .container {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          input:focus {
            border-color: #3399ff;
            box-shadow: 0 0 0 5px rgba(51, 153, 255, 0.3);
          }
        `;
    }
}

export { SharedStyles };
