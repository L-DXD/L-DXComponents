import '/src/components/input/Input.js'
import {html} from "lit";
import { ifDefined } from 'lit/directives/if-defined.js';


export default {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: 'l-input',
    argTypes: {
        type: {
            control: {type: 'select'},
            options: ['text', 'number', 'password', 'tel', 'hidden', 'file'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'text'}
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
        labelAlign: {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'top'},
                subcategory: "text"
            }
        },
        labelWidth: {
            control: 'text'
            , description: 'Sets the width of the label (only visible when labelAlign is "left")'
            , table: {
                category: "attribures",
                defaultValue: {summary: 'auto'},
                subcategory: "text",
            }
            , if: {arg: 'labelAlign', eq:'left'},
        },
        labelTextAlign: {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'left'},
                subcategory: "text"
            }
            , if: {arg: 'labelAlign', eq:'left'},
        },
        feedback: {
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        feedbackType : {
            control: {type: 'select'},
            options: ['hint', 'error'],
            table: {
                category: "attribures",
                defaultValue: {summary: 'hint'},
                subcategory: "text"
            }
        },
        placeholder: {
            table: {
                category: "attribures",
                subcategory: "text",
            }
        },
        value: {
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
            control: {type: 'select'},
            options: [false, true],
            table: {
                category: "attribures",
                defaultValue: {summary: false}
            }
        },
        readonly: {
            control: {type: 'select'},
            options: [false, true],
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
            description: "값의 유효성을 체크합니다.",
        }

    },
};


const Template = (args) => {
    return html`
        <l-input
                type=${ifDefined(args.type)}
                label=${ifDefined(args.label)}
                labelAlign=${ifDefined(args.labelAlign)}
                labelWidth=${ifDefined(args.labelWidth)}
                labelTextAlign=${ifDefined(args.labelTextAlign)}
                feedback=${ifDefined(args.feedback)}
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
    labelAlign: 'top',
    labelWidth: 'auto',
    labelTextAlign: 'left',
    feedback: 'feedback',
    required: false,
    disabled: false,
    readonly: false,
    value: '',
    pattern: '',
    placeholder: '',
};

export const InputWithLeftLabelAndFeedback = Template.bind({});
InputWithLeftLabelAndFeedback.args = {
    type: 'text',
    id: 'input01',
    name: 'name',
    width: 'auto',
    label: 'label : ',
    labelAlign: 'left',
    labelWidth: '50px',
    labelTextAlign: 'left',
    feedback: 'feedback',
    required: false,
    disabled: false,
    readonly: false,
    value: '',
    pattern: '',
    placeholder: '',
};



export const Input = Template.bind({});
Input.args = {
    type: 'text',
    id: 'input01',
    name: 'name',
    label: '',
    labelAlign: 'top',
    required: false,
    disabled: false,
    readonly: false,
    value: '',
    pattern: '',
    placeholder: '',
};
