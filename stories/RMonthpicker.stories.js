import '/src/components/input/RMonthpicker.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {getComponentArgs} from "./commons/CommonArgs.js";

//todo max-date attribute
export default {
    title: 'LABEL & FEEDBACK & COMPONENTS/Rangemonthpicker',
    tags: ['autodocs'],
    component: 'l-c-range-monthpicker',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'offset', 'required', 'placeholder', 'dateAutocomplete', 'readonly', 'rel', 'valid'),

        'format': {
            control: {type: 'select'},
            options: ['Y-m-d', 'Y/m/d', 'Ymd', 'Y.m.d'],
            table: {
                category: "attributes",
                subcategory: "validate",
                defaultValue: {summary: 'Y-m-d'},
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

        getFromValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return new String)"},

            },
            description: "Rangedatepicker값중 From Date값을 가져옵니다.",
        },
        setFromValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "function(value)"},
            },
            description: "Rangedatepicker값중 From Date값을 설정합니다.",
        },

        getToValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "(()=> return new String)"},

            },
            description: "Rangedatepicker값중 To Date값을 가져옵니다.",
        },
        setToValue: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "function(value)"},
            },
            description: "Rangedatepicker값중 To Date값을 설정합니다.",
        },

        initFromCurrentMonth: {
            control: {
                type: {},
                disable: true
            },
            table: {
                category: "function",
                subcategory: "value",
                type: {summary: "function()"},
            },
            description: "설정된 format의 오늘 날짜값을 설정합니다.",
        },

    },
};


const Template = (args) => {
    return html`
        <l-c-range-monthpicker
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                size=${ifDefined(args.size)}
                format=${ifDefined(args.format)}

                value="${ifDefined(args.value)}"
                start-year-offset=${ifDefined(args['start-year-offset'])}
                start-month-offset=${ifDefined(args['start-month-offset'])}
                start-day-offset=${ifDefined(args['start-day-offset'])}
                rel-year=${ifDefined(args['rel-year'])}
                rel-month=${ifDefined(args['rel-month'])}
                rel-day=${ifDefined(args['rel-day'])}
                
                label=${ifDefined(args.label)}
                label-align=${ifDefined(args['label-align'])}
                label-width=${ifDefined(args['label-width'])}
                label-text-align=${ifDefined(args['label-text-align'])}
                feedback=${ifDefined(args.feedback)}
                feedback-type=${ifDefined(args['feedback-type'])}
                feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                component-style=${ifDefined(args['component-style'])}

                width=${ifDefined(args.width)}
                ?required=${args.required}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
                ?showAlways=${args.showAlways}
                ?invisible=${args.invisible}
        >
        </l-c-range-monthpicker>

    `
}

export const RangedatepickerWithTopLabelAndFeedback = Template.bind({});
RangedatepickerWithTopLabelAndFeedback.args = {
    id: 'input02',
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

export const RangedatepickerWithLeftLabelAndFeedback = Template.bind({});
RangedatepickerWithLeftLabelAndFeedback.args = {
    type: 'text',
    id: 'input03',
    name: 'name',
    width: 'auto',
    label: 'label : ',
    'label-align': 'left',
    'label-width': '50px',
    'label-text-align': 'left',
    feedback: 'feedback',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    required: true,
    disabled: false,
    readonly: false,
};

export const DatepickerDisplayAlways = Template.bind({});
DatepickerDisplayAlways.args = {
    type: 'text',
    id: 'input07',
    name: 'name',
    invisible: true,
    showAlways: true,
};

export const RangedatepickerFormatCheck = Template.bind({});
RangedatepickerFormatCheck.args = {
    id: 'input04',
    name: 'name',
    width: '100%',
    format: 'Ymd',
    value: '2024-12-31',
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

export const RangedatepickerRelMonth = Template.bind({});
RangedatepickerRelMonth.args = {
    id: 'input06',
    name: 'name',
    width: '100%',
    label: 'label',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: 'feedback',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    'rel-month': 36,
    'start-month-offset': -36,
    required: false,
    disabled: false,
    readonly: false,
};

const sizeTemplate = (args) => {
    return html`
        <l-c-range-monthpicker label="default size" id="default"></l-c-range-monthpicker>

        <div style="margin: 16px"></div>

        <l-c-range-monthpicker size='large' label="large size" id="largeDefault"></l-c-range-monthpicker>
        <div style="margin: 16px"></div>

        <l-c-range-monthpicker size='small' label="small size" id="smallDefault"></l-c-range-monthpicker>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};