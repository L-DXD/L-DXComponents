import {fn} from '@storybook/test';
import '/src/components/button/Button.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";


export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    component: 'l-button',
    argTypes: {
        theme: {
            control: {type: 'select'},
            options: ['default', 'primary', 'secondary', 'light'
                , 'dark', 'info', 'purple', 'indigo', 'link', 'danger'
                , 'pink', 'orange', 'light-orange', 'yellow', 'lime', 'teal', 'green'
            ],
            table: {
                category: "attributes",
                defaultValue: {summary: 'default'}
            }
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
        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
        outline: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
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
        'icon-path': {
            control: 'text'
            , table: {
                category: "attributes",
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
            description: "값을 가져옵니다.",
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
            description: "값을 설정합니다.",
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
        <l-button
                theme=${ifDefined(args.theme)}
                size=${ifDefined(args.size)}
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                label=${ifDefined(args.label)}
                value="${ifDefined(args.value)}"
                icon-path="${ifDefined(args['icon-path'])}"
                ?outline=${args.outline}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
        >
        </l-button>`
}

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    id: 'input01',
    name: 'name',
    width: '100px',
    label: 'label',
    disabled: false,
    readonly: false,
};

const iconTemplate = (args) => {
    return html`
        <l-button
                theme=${ifDefined(args.theme)}
                size=${ifDefined(args.size)}
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                label=${ifDefined(args.label)}
                value="${ifDefined(args.value)}"
                icon-path="${ifDefined(args['icon-path'])}"
                ?outline=${args.outline}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
        >
        </l-button>`
}

export const IconButton = iconTemplate.bind({});
IconButton.args = {
    id: 'input01',
    name: 'name',
    width: '100px',
    label: 'label',
    disabled: false,
    readonly: false,
    'icon-path': '../assets/svg/search-svgrepo-com.svg',
};

const themeTemplate = (args) => {
    return html`
<div style="line-height: 40px">
<l-button theme="default" label="default"></l-button>
<l-button theme="primary" label="primary"></l-button>
<l-button theme="secondary" label="secondary"></l-button>
<l-button theme="light" label="light"></l-button>
<l-button theme="dark" label="dark"></l-button>
<l-button theme="info" label="info"></l-button>
<l-button theme="purple" label="purple"></l-button>
<l-button theme="indigo" label="indigo"></l-button>
<l-button theme="link" label="link"></l-button>
<l-button theme="danger" label="danger"></l-button>
<l-button theme="pink" label="pink"></l-button>
<l-button theme="orange" label="orange"></l-button>
<l-button theme="light-orange" label="light-orange"></l-button>
<l-button theme="yellow" label="yellow"></l-button>
<l-button theme="lime" label="lime"></l-button>
<l-button theme="teal" label="teal"></l-button>
<l-button theme="green" label="green"></l-button>
</div>
    `
}

export const theme = themeTemplate.bind({});
theme.args = {

};

const outlineThemeTemplate = (args) => {
    return html`
<div style="line-height: 40px">
<l-button outline theme="default" label="default"></l-button>
<l-button outline theme="primary" label="primary"></l-button>
<l-button outline theme="secondary" label="secondary"></l-button>
<l-button outline theme="light" label="light"></l-button>
<l-button outline theme="dark" label="dark"></l-button>
<l-button outline theme="info" label="info"></l-button>
<l-button outline theme="purple" label="purple"></l-button>
<l-button outline theme="indigo" label="indigo"></l-button>
<l-button outline theme="link" label="link"></l-button>
<l-button outline theme="danger" label="danger"></l-button>
<l-button outline theme="pink" label="pink"></l-button>
<l-button outline theme="orange" label="orange"></l-button>
<l-button outline theme="light-orange" label="light-orange"></l-button>
<l-button outline theme="yellow" label="yellow"></l-button>
<l-button outline theme="lime" label="lime"></l-button>
<l-button outline theme="teal" label="teal"></l-button>
<l-button outline theme="green" label="green"></l-button>
</div>
    `
}

export const outlineTheme = outlineThemeTemplate.bind({});
outlineTheme.args = {

};

const sizeTemplate = (args) => {
    return html`
<l-button label="default size" value="default"></l-button>

<div style="margin: 16px"></div>

<l-button size='large' label="large size" value="large"></l-button>
<div style="margin: 16px"></div>

<l-button size='small' label="small size" value="small"></l-button>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};