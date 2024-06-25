import {html, render} from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './common.css';
import './label.css';

/**
 * Primary UI component for user interaction
 */
export const DXLabel = ({ label, masterId, labelAlign}) => {
  let isLabelFront = (labelAlign && labelAlign == 'front');
  return html`
      <label class="${isLabelFront ? 'dx-flex-label' : 'dx-label'}" for="${masterId}">${label}</label>
  `;
};
