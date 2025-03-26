import '/src/components/input/TriggerInput.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';

export default {
    title: 'Container Components/TriggerInput',
    tags: ['autodocs'],
    component: 'l-c-triggerinput',
    argTypes: {
        handleTrigger: {
            control: 'function'
            , table: {
                category: "instance",
                subcategory: "property",
            }
            ,description: "사용자 입력(예: 엔터키 입력, 돋보기 아이콘 클릭) 시 실행되는 트리거 함수를 지정하는 인스턴스 속성입니다.",
        },
        size: {
            control: {type: 'select'},
            options: ['default', 'large', 'small'],
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
        <l-c-triggerinput
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
</l-c-triggerinput>
<script type="application/javascript">
    const log = (value) => {
        console.log(value);
    };

    const triggerComponent = document.getElementById('input01');
    triggerComponent.handleTrigger = log;
</script>
    `
}



export const TriggerInputWithTopLabelAndFeedback = Template.bind({});
TriggerInputWithTopLabelAndFeedback.args = {
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