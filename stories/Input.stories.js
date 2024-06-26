import '/src/components/Input.js'
import {html} from "lit";

export default {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: 'l-input',
    argTypes: {
        labelAlign: {
            control: {type: 'select'},
            options: ['front', 'top'],
            table: {
                defaultValue: {summary: 'top'}
            }
        },
        isRequired: {
          control: {type: 'select'},
          options: ['false', 'true'],
          table: {
            defaultValue: {summary: 'false'}
          }
        },
    },
};

const Template = (args) => {
  console.log(args);
    return html`
        <l-input label=${args.label} id=${args.id} labelAlign=${args.labelAlign} isRequired=${args.isRequired} ></l-input>`
}

export const Default = Template.bind({});
Default.args = {
    label: 'label',
    id: 'input01',
    labelAlign: 'top',
    isRequired: 'false'
};
