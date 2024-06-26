import {html} from 'lit';
import './common.css';
import './label.css';

/**
 * Primary UI component for user interaction
 */
export const LLabel = ({ label, masterId, labelAlign, isRequired}) => {
  let isLabelFront = (labelAlign && labelAlign == 'front');
  return html`
    <label class="${(isLabelFront&&label) ? 'l-flex-label' : 'l-label'}" for="${masterId}">
      ${isRequired == 'true'
          ? (isLabelFront
              ? html`<span style="color: #df1414;margin-right: 2px">*</span>${label}`
              : html`${label}<span style="color: #df1414;margin-left: 2px">*</span>`)
          : label}
    </label>
  `;
};
