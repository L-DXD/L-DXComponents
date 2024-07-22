import '/src/components/input/Input.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';


export default {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: 'l-input',
    // decorators: [(story) => html`<div style="margin: 1em">${story()}</div>`],
    argTypes: {
        type: {
            control: {type: 'select'},
            options: ['text', 'planText', 'number', 'password', 'tel', 'hidden', 'file'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'text'}
            }
        },
        size: {
            control: {type: 'select'},
            options: ['default','large','small'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'default'}
            }
        },
        id: {table: {category: "attribures",}},
        name: {table: {category: "attribures",}},
        width: {table: {category: "attribures",}},

        label: {
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'top'},
                subcategory: "text"
            }
        },
        'label-width': {
            control: 'text'
            , description: 'Sets the width of the label (only visible when label-align is "left")'
            , table: {
                category: "attribures",
                defaultValue: {summary: 'auto'},
                subcategory: "text",
            }
            , if: {arg: 'label-align', eq: 'left'},
        },
        'label-text-align': {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'left'},
                subcategory: "text"
            }
            , if: {arg: 'label-align', eq: 'left'},
        },
        feedback: {
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        'feedback-type': {
            control: {type: 'select'},
            options: ['normal', 'hint', 'error'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'normal'},
                subcategory: "text"
            }
        },
        'feedback-visible-type': {
            control: {type: 'select'},
            options: ['none', 'visible', 'valid', 'invalid'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'none'},
                subcategory: "text"
            },
            description: "none : 항상 숨김<br/>" +
                "visible : 항상 표시<br/>" +
                "valid : 유효할때 표시<br/>" +
                "invalid : 유효하지 않을 때 표시",
        },
        placeholder: {
            control: {type: 'text'},
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        value: {
            control: {type: 'text'},
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        maxlength: {
            control: {type: 'number'},
            table: {
                category: "attribures",
                subcategory: "validate",
            }
        },
        minlength: {
            control: {type: 'number'},
            table: {
                category: "attribures",
                subcategory: "validate",
            }
        },
        pattern: {
            control: {type: 'text'},
            table: {
                category: "attribures",
                subcategory: "validate",
            },
            description: "ex) [0-9]{3}-[0-9]{4}-[0-9]{4}",
        },

        required: {
            control: 'boolean',
            table: {
                category: "attribures",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        disabled: {
            control: 'boolean',
            table: {
                category: "attribures",
                defaultValue: {summary: false}
            }
        },
        readonly: {
            control: 'boolean',
            table: {
                category: "attribures",
                defaultValue: {summary: false}
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
        }

    },
};


const Template = (args) => {
    return html`
        <l-input
                type=${ifDefined(args.type)}
                size=${ifDefined(args.size)}
                label=${ifDefined(args.label)}
                label-align=${ifDefined(args['label-align'])}
                label-width=${ifDefined(args['label-width'])}
                label-text-align=${ifDefined(args['label-text-align'])}
                feedback=${ifDefined(args.feedback)}
                feedback-type=${ifDefined(args['feedback-type'])}
                feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                maxlength=${ifDefined(args.maxlength)}
                minlength=${ifDefined(args.minlength)}
                ?required=${args.required}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
                placeholder="${ifDefined(args.placeholder)}"
                pattern="${ifDefined(args.pattern)}"
                value="${ifDefined(args.value)}"
        >
        </l-input>`
}

export const InputWithTopLabelAndFeedback = Template.bind({});
InputWithTopLabelAndFeedback.args = {
    type: 'text',
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
    type: 'text',
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
    type: 'text',
    id: 'input01',
    name: 'name',
    'label-align': 'top',
    required: false,
    disabled: false,
    readonly: false,
};

export const InputRequireValidity = Template.bind({});
InputRequireValidity.args = {
    type: 'text',
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

export const InputPatternValidity = Template.bind({});
InputPatternValidity.args = {
    type: 'text',
    id: 'input01',
    name: 'name',
    width: '100%',
    label: 'Phone',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: 'invalid pattern',
    'feedback-type': 'error',
    'feedback-visible-type': 'invalid',
    pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
    required: false,
    disabled: false,
    readonly: false,
};

export const InputPatternAndRequireValidity = Template.bind({});
InputPatternAndRequireValidity.args = {
    type: 'text',
    id: 'input01',
    name: 'name',
    width: '100%',
    label: 'Phone',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: 'invalid value',
    'feedback-type': 'error',
    'feedback-visible-type': 'invalid',
    pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
    required: true,
    disabled: false,
    readonly: false,
};

const sizeTemplate = (args) => {
    return html`
        <l-input label="default size" value="default"></l-input>

        <div style="margin: 16px"></div>

        <l-input size='large' label="large size" value="large"></l-input>
        <div style="margin: 16px"></div>

        <l-input size='small' label="small size" value="small"></l-input>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};