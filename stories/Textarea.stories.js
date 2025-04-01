import '/src/components/input/Textarea.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {argsCommons, argsValue, argsSize, argsLabel, argsFeedback} from "./commons/CommonArgs.js";

export default {
    title: 'LABEL & FEEDBACK & COMPONENTS/Textarea',
    tags: ['autodocs'],
    component: 'l-c-textarea',
    argTypes: {
        ...argsCommons, ...argsValue, ...argsSize,
        ...argsLabel, ...argsFeedback,
        placeholder: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        'valid-length-type': {
            control: {type: 'select'},
            options: ['length', 'byte'],
            table: {
                category: "attributes",
                subcategory: "validate",
                defaultValue: {summary: 'length'},
            }
        },
        maxlength: {
            control: {type: 'number'},
            table: {
                category: "attributes",
                subcategory: "validate",
            }
        },
        minlength: {
            control: {type: 'number'},
            table: {
                category: "attributes",
                subcategory: "validate",
            }
        },

        required: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        readonly: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
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
        checkValidity: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "validate",
                type: {summary: "function()"},
            },
            description: "입력값의 유효성을 체크합니다.",
        },
        setValid: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "validate",
                type: {summary: "(()=> return false) "},
            },
            description: "유효한 상태로 표시합니다.",
        },
        inValid: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "validate",
                type: {summary: "(()=> return false) "},
            },
            description: "유효하지 않은 상태로 표시합니다.",
        },

    },
};


const Template = (args) => {
    return html`
        <l-c-textarea
                size=${ifDefined(args.size)}
                label=${ifDefined(args.label)}
                label-align=${ifDefined(args['label-align'])}
                label-width=${ifDefined(args['label-width'])}
                label-text-align=${ifDefined(args['label-text-align'])}
                feedback=${ifDefined(args.feedback)}
                feedback-type=${ifDefined(args['feedback-type'])}
                feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                component-style=${ifDefined(args['component-style'])}
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                valid-length-type=${ifDefined(args['valid-length-type'])}
                maxlength=${ifDefined(args.maxlength)}
                minlength=${ifDefined(args.minlength)}
                ?required=${args.required}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
                placeholder="${ifDefined(args.placeholder)}"
                pattern="${ifDefined(args.pattern)}"
                value="${ifDefined(args.value)}"
        >
        </l-c-textarea>`
}

export const InputWithTopLabelAndFeedback = Template.bind({});
InputWithTopLabelAndFeedback.args = {
    id: 'input01',
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
    readonly: false,
};

export const InputWithLeftLabelAndFeedback = Template.bind({});
InputWithLeftLabelAndFeedback.args = {
    id: 'input01',
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
    readonly: false,
};


export const SimpleInput = Template.bind({});
SimpleInput.args = {
    id: 'input01',
    name: 'name',
    'label-align': 'top',
    required: false,
    disabled: false,
    readonly: false,
};

export const InputRequireValidity = Template.bind({});
InputRequireValidity.args = {
    id: 'input01',
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
    readonly: false,
};


const sizeTemplate = (args) => {
    return html`
        <l-c-textarea label="default size" value="default"></l-c-textarea>

        <div style="margin: 16px"></div>

        <l-c-textarea size='large' label="large size" value="large"></l-c-textarea>
        <div style="margin: 16px"></div>

        <l-c-textarea size='small' label="small size" value="small"></l-c-textarea>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};