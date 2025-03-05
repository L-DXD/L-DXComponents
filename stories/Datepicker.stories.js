import '/src/components/input/Datepicker.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';

export default {
    title: 'Container Components/Datepicker',
    tags: ['autodocs'],
    component: 'l-c-datepicker',
    // decorators: [(story) => html`<div style="margin: 1em">${story()}</div>`],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['default','large','small'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'default'}
            }
        },
        id: {table: {category: "attributes",}},
        name: {table: {category: "attributes",}},
        width: {table: {category: "attributes",}},

        label: {
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'top'},
                subcategory: "text"
            }
        },
        'label-width': {
            control: 'text'
            , description: 'Sets the width of the label (only visible when label-align is "left")'
            , table: {
                category: "attributes",
                defaultValue: {summary: 'auto'},
                subcategory: "text",
            }
            , if: {arg: 'label-align', eq: 'left'},
        },
        'label-text-align': {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'left'},
                subcategory: "text"
            }
            , if: {arg: 'label-align', eq: 'left'},
        },
        feedback: {
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        'feedback-type': {
            control: {type: 'select'},
            options: ['normal', 'hint', 'error'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'normal'},
                subcategory: "text"
            }
        },
        'feedback-visible-type': {
            control: {type: 'select'},
            options: ['none', 'visible', 'valid', 'invalid'],
            table: {
                category: "attributes",
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
                category: "attributes",
                subcategory: "text",
            }
        },
        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        // 'valid-trigger-type': {
        //     control: {type: 'select'},
        //     options: ['blur', 'change', 'focus'],
        //     table: {
        //         category: "attributes",
        //         subcategory: "validate",
        //         defaultValue: {summary: 'blur'},
        //     }
        // },
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
        pattern: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "validate",
            },
            description: "ex) [0-9]{3}-[0-9]{4}-[0-9]{4}",
        },

        required: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },

        disabled: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
        readonly: {
            control: 'boolean',
            table: {
                category: "attributes",
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
        <l-c-datepicker
                type=${ifDefined(args.type)}
                size=${ifDefined(args.size)}
                label=${ifDefined(args.label)}
                label-align=${ifDefined(args['label-align'])}
                label-width=${ifDefined(args['label-width'])}
                label-text-align=${ifDefined(args['label-text-align'])}
                valid-length-type=${ifDefined(args['valid-length-type'])}
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
        </l-c-datepicker>`
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
//
// export const InputWithLeftLabelAndFeedback = Template.bind({});
// InputWithLeftLabelAndFeedback.args = {
//     type: 'text',
//     id: 'input01',
//     name: 'name',
//     width: 'auto',
//     label: 'label : ',
//     'label-align': 'left',
//     'label-width': '50px',
//     'label-text-align': 'left',
//     feedback: 'feedback',
//     'feedback-type': 'normal',
//     'feedback-visible-type': 'visible',
//     required: false,
//     disabled: false,
//     readonly: false,
// };
//
//
// export const SimpleInput = Template.bind({});
// SimpleInput.args = {
//     type: 'text',
//     id: 'input01',
//     name: 'name',
//     'label-align': 'top',
//     required: false,
//     disabled: false,
//     readonly: false,
// };
//
// export const InputRequireValidity = Template.bind({});
// InputRequireValidity.args = {
//     type: 'text',
//     id: 'input01',
//     name: 'name',
//     width: '100%',
//     label: 'label',
//     'label-align': 'top',
//     'label-width': 'auto',
//     'label-text-align': 'left',
//     feedback: '필수 값 입니다.',
//     'feedback-type': 'error',
//     'feedback-visible-type': 'invalid',
//     required: true,
//     disabled: false,
//     readonly: false,
// };
//
// export const InputPatternValidity = Template.bind({});
// InputPatternValidity.args = {
//     type: 'text',
//     id: 'input01',
//     name: 'name',
//     width: '100%',
//     label: 'Phone',
//     'label-align': 'top',
//     'label-width': 'auto',
//     'label-text-align': 'left',
//     feedback: 'invalid pattern',
//     'feedback-type': 'error',
//     'feedback-visible-type': 'invalid',
//     pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
//     required: false,
//     disabled: false,
//     readonly: false,
// };
//
// export const InputPatternAndRequireValidity = Template.bind({});
// InputPatternAndRequireValidity.args = {
//     type: 'text',
//     id: 'input01',
//     name: 'name',
//     width: '100%',
//     label: 'Phone',
//     'label-align': 'top',
//     'label-width': 'auto',
//     'label-text-align': 'left',
//     feedback: 'invalid value',
//     'feedback-type': 'error',
//     'feedback-visible-type': 'invalid',
//     pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
//     required: true,
//     disabled: false,
//     readonly: false,
// };
//
// const sizeTemplate = (args) => {
//     return html`
//         <l-c-datepicker label="default size" value="default"></l-c-datepicker>
//
//         <div style="margin: 16px"></div>
//
//         <l-c-datepicker size='large' label="large size" value="large"></l-c-datepicker>
//         <div style="margin: 16px"></div>
//
//         <l-c-datepicker size='small' label="small size" value="small"></l-c-datepicker>
//     `
// }
//
// export const size = sizeTemplate.bind({});
// size.args = {
//
// };