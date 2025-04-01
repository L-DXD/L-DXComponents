export const argsCommons = {
    id: {table: {category: "attributes",}},
    name: {table: {category: "attributes",}},
    width: {table: {category: "attributes",}},
    disabled: {
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
}

export const argsValue = {
    value: {
        control: {type: 'text'},
        table: {
            category: "attributes",
            subcategory: "value",
        }
    }
};

export const argsSize = {
    size: {
        control: {type: 'select'},
        options: ['default', 'large', 'small'],
        table: {
            category: "attributes",
            defaultValue: {summary: 'default'}
        }
    }
};

export const argsLabel = {
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
};

export const argsFeedback = {
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
}