import '/src/components/input/Checkbox.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {getComponentArgs} from "../commons/CommonArgs.js";


export default {
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    component: 'l-checkbox',
    argTypes: {
        ...getComponentArgs('commons', 'size', 'required'),
        label: {
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'right'},
                subcategory: "text"
            },
            description: "todo:개발예정.",
        },
        checked: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },

        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "value",
            },
            description: "checked일때 불러올 값.",
        },

        getText: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return new String)"},

            },
            description: "Text값을 가져옵니다.",
        },
        setText: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "function(value)"},
            },
            description: "Text값을 설정합니다.",
        },

        getCheckedTextsByNameGroup: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return [])"},

            },
            description: "선택된 체크박스와 같은 이름의 체크된 Text값들을 가져옵니다.",
        },

        getTextsByNameGroup: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return [])"},

            },
            description: "선택된 체크박스와 같은 이름의 Text값들을 가져옵니다.",
        },

        getCheckedValuesByNameGroup: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return [])"},

            },
            description: "선택된 체크박스와 같은 이름의 체크된 Value값들을 가져옵니다.",
        },

        getValuesByNameGroup: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return [])"},

            },
            description: "선택된 체크박스와 같은 이름의 Value값들을 가져옵니다.",
        },

        isValid: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "validate",
                type: {summary: "(()=> return new Boolean) "},
            },
            description: "입력값의 유효성을 체크합니다.",
        },


    },
};


const Template = (args) => {
    return html`
        <l-checkbox
                size=${ifDefined(args.size)}
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                label=${ifDefined(args.label)}
                label-align=${ifDefined(args['label-align'])}
                value="${ifDefined(args.value)}"
                ?checked=${args.checked}
                ?required=${args.required}
                ?disabled=${args.disabled}
        >
        </l-checkbox>`
}

export const CheckboxDefault = Template.bind({});
CheckboxDefault.args = {
    id: 'input01',
    name: 'name',
    width: '100%',
    label: 'label',
    'label-align': 'right',
    required: false,
    disabled: false
};


const sizeTemplate = (args) => {
    return html`
        <l-checkbox label="default size" value="default"></l-checkbox>

        <div style="margin: 16px"></div>

        <l-checkbox size='large' label="large size" value="large"></l-checkbox>
        <div style="margin: 16px"></div>

        <l-checkbox size='small' label="small size" value="small"></l-checkbox>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};

const horizontalTemplate = (args) => {
    return html`
        <l-checkbox label="chk1" value="1" id="chk1"></l-checkbox>
        <l-checkbox label="chk2" value="1" id="chk2"></l-checkbox>
        <l-checkbox label="chk3" value="1" id="chk3"></l-checkbox>
    `
}

export const horizontal = horizontalTemplate.bind({});
horizontal.args = {

};

const verticalTemplate = (args) => {
    return html`
        <l-checkbox label="chk1" value="1" width="100%" id="chk1"></l-checkbox>
        <l-checkbox label="chk2" value="1" width="100%" id="chk2"></l-checkbox>
        <l-checkbox label="chk3" value="1" width="100%" id="chk3"></l-checkbox>
    `
}

export const vertical = verticalTemplate.bind({});
vertical.args = {

};