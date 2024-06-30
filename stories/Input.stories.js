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
            options: ['text', 'number', 'password', 'tel', 'hidden'],
            table: {
                category: "properties",
                defaultValue: {summary: 'text'}
            }
        },
        id: {table: {category: "properties",}},
        name: {table: {category: "properties",}},

        label: {
            table: {
                category: "properties",
                subcategory: "text",
            }
        },
        labelAlign: {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "properties",
                defaultValue: {summary: 'top'},
                subcategory: "text"
            }
        },
        labelWidth: {
            control: 'text'
            , description: 'Sets the width of the label (only visible when labelAlign is "left")'
            , table: {
                category: "properties",
                defaultValue: {summary: 'auto'},
                subcategory: "text",
            }
            , if: {arg: 'labelAlign', eq:'left'},
        },
        labelTextAlign: {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "properties",
                defaultValue: {summary: 'left'},
                subcategory: "text"
            }
            , if: {arg: 'labelAlign', eq:'left'},
        },
        feedback: {
            table: {
                category: "properties",
                subcategory: "text",
            }
        },
        placeholder: {
            table: {
                category: "properties",
                subcategory: "text",
            }
        },
        value: {
            table: {
                category: "properties",
                subcategory: "text",
            }
        },
        maxlength: {
            control: {type: 'number'},
            table: {
                category: "properties",
                subcategory: "validate",
            }
        },
        minlength: {
            control: {type: 'number'},
            table: {
                category: "properties",
                subcategory: "validate",
            }
        },
        pattern: {
            table: {
                category: "properties",
                subcategory: "validate",
            },
            description: "ex) [0-9]{3}-[0-9]{4}-[0-9]{4}",
        },

        required: {
            control: {type: 'select'},
            options: [false, true],
            table: {
                category: "properties",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        disabled: {
            control: {type: 'select'},
            options: [false, true],
            table: {
                category: "properties",
                defaultValue: {summary: false}
            }
        },
        readonly: {
            control: {type: 'select'},
            options: [false, true],
            table: {
                category: "properties",
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
    console.log(args);
    return html`
        <l-input
                type=${args.type}
                label=${args.label}
                labelAlign=${args.labelAlign}
                labelWidth=${args.labelWidth}
                labelTextAlign=${args.labelTextAlign}
                feedback=${args.feedback}
                id=${args.id}
                name=${args.name}
                maxlength=${args.maxlength}
                minlength=${args.minlength}
                ?required=${args.required}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
                placeholder="${args.placeholder}"
                pattern="${args.pattern}"
                value="${args.value}"
        >

        </l-input>`
}

export const InputWithLabelAndFeedback = Template.bind({});
InputWithLabelAndFeedback.args = {
    type: 'text',
    id: 'input01',
    name: 'name',
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
