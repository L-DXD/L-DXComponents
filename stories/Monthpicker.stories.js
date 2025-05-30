import '/src/components/input/Monthpicker.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {getComponentArgs} from "./commons/CommonArgs.js";


export default {
    title: 'LABEL & FEEDBACK & COMPONENTS/Monthpicker',
    tags: ['autodocs'],
    component: 'l-c-monthpicker',
    // decorators: [(story) => html`<div style="margin: 1em">${story()}</div>`],
    argTypes: {
        ...getComponentArgs(
            'commons'
            , 'value'
            , 'size'
            , 'label'
            , 'feedback'
            , 'offset'
            , 'required'
            , 'placeholder'
            , 'dateAutocomplete'
            , 'readonly'
            , 'valid'
            , 'calendar'
            , 'calendarFunction'
        ),
        'format': {
            control: {type: 'select'},
            options: ['Y-m', 'Y/m', 'Ym', 'Ym'],
            table: {
                category: "attributes",
                subcategory: "validate",
                defaultValue: {summary: 'Y-m'},
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
        initCurrentMonth: {
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
        <l-c-monthpicker
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                size=${ifDefined(args.size)}
                format=${ifDefined(args.format)}

                value="${ifDefined(args.value)}"
                start-year-offset=${ifDefined(args['start-year-offset'])}
                start-month-offset=${ifDefined(args['start-month-offset'])}
                start-day-offset=${ifDefined(args['start-day-offset'])}

                disable-date-from=${ifDefined(args['disable-date-from'])}
                disable-date-to=${ifDefined(args['disable-date-to'])}
                
                
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
        </l-c-monthpicker>

    `
}

export const MonthpickerWithTopLabelAndFeedback = Template.bind({});
MonthpickerWithTopLabelAndFeedback.args = {
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

export const MonthpickerWithLeftLabelAndFeedback = Template.bind({});
MonthpickerWithLeftLabelAndFeedback.args = {
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

export const MonthpickerDisplayAlways = Template.bind({});
MonthpickerDisplayAlways.args = {
    type: 'text',
    id: 'input06',
    name: 'name',
    invisible: true,
    showAlways: true,
};

export const MonthpickerFormatCheck = Template.bind({});
MonthpickerFormatCheck.args = {
    id: 'input04',
    name: 'name',
    width: '100%',
    format: 'yyyyMM',
    value: '2024-12',
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

const sizeTemplate = (args) => {
    return html`
        <l-c-monthpicker label="default size" id="default"></l-c-monthpicker>

        <div style="margin: 16px"></div>

        <l-c-monthpicker size='large' label="large size" id="largeDefault"></l-c-monthpicker>
        <div style="margin: 16px"></div>

        <l-c-monthpicker size='small' label="small size" id="smallDefault"></l-c-monthpicker>
    `
}

export const size = sizeTemplate.bind({});
size.args = {

};