import '/src/components/select/Select.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'LABEL & FEEDBACK & COMPONENTS/Select',
    tags: ['autodocs'],
    component: 'l-c-select',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder', 'valid'),
        options: {
            control: 'Array',
            table: {
                category: "instance",
                subcategory: "property",
            },
            description: "Select 컴포넌트에 표시될 옵션 목록을 배열 형태로 제공하는 인스턴스 프로퍼티입니다. 각 옵션 객체는 반드시 value와 label 프로퍼티를 포함하며, 그 외 추가적인 값들도 객체 형태로 반환됩니다.",
        },
        'default-type': {
            control: {type: 'select'},
            options: ['default', 'select', 'all'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'default'}
            },
            description: "default : 기본<br/>" +
                "select : 선택<br/>" +
                "all : 전체"
        },


        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
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
            description: "선택된 텍스트를 가져옵니다.",
        },
        getSelectedIndex: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return new String)"},

            },
            description: "선택된 Index를 가져옵니다.",
        },
        getOptions: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return [])"},

            },
            description: "전체 항목을 가져옵니다.",
        },
        getSelectedOption: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return {})"},

            },
            description: "선택된 항목을 가져옵니다.",
        },

    },
};


const Template = (args) => {
    return html`
<l-c-select
        type=${ifDefined(args.type)}
        size=${ifDefined(args.size)}
        label=${ifDefined(args.label)}
        label-align=${ifDefined(args['label-align'])}
        label-width=${ifDefined(args['label-width'])}
        label-text-align=${ifDefined(args['label-text-align'])}
        feedback=${ifDefined(args.feedback)}
        feedback-type=${ifDefined(args['feedback-type'])}
        feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
        component-style=${ifDefined(args['component-style'])}

        placeholder=${ifDefined(args.placeholder)}
        id=${ifDefined(args.id)}
        name=${ifDefined(args.name)}
        width=${ifDefined(args.width)}
        default-type=${ifDefined(args['default-type'])}
        
        ?required=${args.required}
        ?disabled=${args.disabled}
>
</l-c-select>
<script type="application/javascript">
    document.getElementById('select01').options = [
        { value: '1', label: 'Apple' },
        { value: '2', label: 'Banana' },
        { value: '3', label: 'Orange' }
    ];
</script>
`
}

export const SelectWithTopLabelAndFeedback = Template.bind({});
SelectWithTopLabelAndFeedback.args = {

    id: 'select01',
    name: 'name',
    width: '100%',
    label: 'label',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: 'feedback',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    required: false,
    disabled: false,
};



export const SelectWithLeftLabelAndFeedback = Template.bind({});
SelectWithLeftLabelAndFeedback.args = {
    
    id: 'select01',
    name: 'name',
    width: 'auto',
    label: 'label : ',
    'label-align': 'left',
    'label-width': '50px',
    'label-text-align': 'left',
    feedback: 'feedback',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    required: false,
    disabled: false,
};


export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
    
    id: 'select01',
    name: 'name',
    'label-align': 'top',
    required: false,
    disabled: false,
};

export const SelectRequireValidity = Template.bind({});
SelectRequireValidity.args = {
    
    id: 'select01',
    name: 'name',
    width: '100%',
    label: 'label',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: '필수 값 입니다.',
    'feedback-type': 'error',
    'feedback-visible-type': 'invalid',
    required: true,
    disabled: false,
};

const sizeTemplate = (args) => {
    return html`
        <l-c-select label="default size"></l-c-select>

        <div style="margin: 16px"></div>

        <l-c-select size='large' label="large size"></l-c-select>
        <div style="margin: 16px"></div>

        <l-c-select size='small' label="small size"></l-c-select>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};