import '/src/components/input/Input.js'
import {html} from "lit";
import {fn} from "@storybook/test";

export default {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: 'l-input',
    argTypes: {
        type: {
            control: {type: 'select'},
            options: ['text', 'number', 'password', 'hidden'],
            table: {
                category: "properties",
                defaultValue: {summary: 'text'}
            }
        },
        id: {table: {category: "properties",}},
        label: {table: {category: "properties",}},
        placeholder: {table: {category: "properties",}},
        labelAlign: {
            control: {type: 'select'},
            options: ['front', 'top'],
            table: {
                category: "properties",
                defaultValue: {summary: 'top'}
            }
        },
        required: {
            control: {type: 'select'},
            options: ['false', 'true'],
            table: {
                category: "properties",
                defaultValue: {summary: 'false'}
            }
        },
        getValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return new String)"},

            },
            description: "input값을 가져옵니다.",
        },
        setValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "function(value)"},
            },
            description: "input값을 설정합니다.",
        }

    },
};

const Template = (args) => {
    console.log(args);
    return html`
        <l-input type=${args.type} label=${args.label} id=${args.id} labelAlign=${args.labelAlign} required=${args.required} placeholder="${args.placeholder}"></l-input>`
}

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    id: 'input01',
    label: 'label',
    labelAlign: 'top',
    required: 'false',
    placeholder: ''

};
