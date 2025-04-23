export const componentArgs = {
    commons : {
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
    },
    value : {
        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "value",
            }
        }
    },
    size : {
        size: {
            control: {type: 'select'},
            options: ['default', 'large', 'small'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'default'}
            }
        }
    },
    label : {
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
    },
    feedback : {
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
    },
    offset : {
        'start-year-offset': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: 0},
                subcategory: "value"
            },
            description: "Calculates the base date by adding or subtracting against the 'year' of the value. If value is not set, it is based on 'today'."
        },
        'start-month-offset': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: 0},
                subcategory: "value"
            },
            description: "Calculates the base date by adding or subtracting against the 'month' of the value. If value is not set, it is based on 'today'."
        },
        'start-day-offset': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: 0},
                subcategory: "value"
            },
            description: "Calculates the base date by adding or subtracting against the 'day' of the value. If value is not set, it is based on 'today'."
        },
    },
    required : {
        required: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
    },
    placeholder : {
        placeholder: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },
    },
    inputAutocomplete : {
        autocomplete: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text"
            }
        },
    },
    dateAutocomplete : {
        autocomplete: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "text",
                defaultValue: {summary: 'off'},
            }
        },
    },
    readonly : {
        readonly: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
    },
    rel : {
        'rel-year': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        'rel-month': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        'rel-day': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
    },
    valid : {
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
    calendar: {
        showAlways: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
        invisible: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
        'disable-date-from': {
            control: 'text',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        'disable-date-to': {
            control: 'text',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
    },
    calendarDisableDay: {
        'disable-day-from': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
        'disable-day-to': {
            control: 'number',
            table: {
                category: "attributes",
                defaultValue: {summary: false},
                subcategory: "validate"
            }
        },
    }
}

export const getComponentArgs = (...categories) => {
    return categories.reduce((acc, category) => {
        if (componentArgs[category]) {
            return { ...acc, ...componentArgs[category] };
        }
        return acc;
    }, {});
};
