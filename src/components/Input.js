import {html, render} from 'lit';
import { DXLabel } from './Label.js';
import './common.css';
import './container.css';
import './input.css';

/**
 * Primary UI component for user interaction
 */
export const DXInput = ({ label, id, labelAlign, isRequired }) => {
  let isLabelFront = (labelAlign && labelAlign == 'front');
  console.log(isRequired)
  console.log(`${isRequired && 'required'}`)
  return html`
    <div class="${isLabelFront && 'container'}">
    ${DXLabel({
      label: `${label}`,
      masterId: `${id}`,
      labelAlign: `${labelAlign}`
      })}
      <input type="text" class="${isLabelFront ? 'dx-flex-input' : 'dx-input'}" id="${id}" >
    </div>
  `;
};
