import '/src/components/container/LitDatepickerParents.js'
import '/src/components/container/LitDatepickerParents_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/LitDatepickerParents Comparison',
    tags: ['autodocs'],
    component: 'l-datepicker-parents',
    argTypes: {
        id: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'datepicker'}
            },
            description: "Unique identifier for the datepicker"
        },
        label: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Label text for the datepicker"
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'top'}
            },
            description: "Label alignment"
        },
        'label-width': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
                defaultValue: {summary: 'auto'}
            },
            description: "Width of the label"
        },
        'label-text-align': {
            control: {type: 'select'},
            options: ['left', 'center', 'right'],
            table: {
                category: "attributes",
                subcategory: "style",
                defaultValue: {summary: 'left'}
            },
            description: "Text alignment within the label"
        },
        size: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'medium'}
            },
            description: "Size of the datepicker input"
        },
        width: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
                defaultValue: {summary: 'auto'}
            },
            description: "Width of the datepicker container"
        },
        format: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'Y-m-d'}
            },
            description: "Date format for display and parsing"
        },
        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Initial value of the datepicker"
        },
        required: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether the field is required"
        },
        disabled: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether the datepicker is disabled"
        },
        readonly: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether the datepicker is readonly"
        },
        feedback: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Feedback message text"
        },
        'feedback-type': {
            control: {type: 'select'},
            options: ['normal', 'hint', 'error'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'normal'}
            },
            description: "Type of feedback message"
        },
        'feedback-visible-type': {
            control: {type: 'select'},
            options: ['visible', 'valid', 'invalid'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'visible'}
            },
            description: "When to show feedback message"
        },
        showAlways: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether to show the calendar inline always"
        },
        invisible: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether the datepicker is invisible"
        },
        placeholder: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Placeholder text for the input"
        },
        'disable-date-from': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Start date for disabled date range"
        },
        'disable-date-to': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "End date for disabled date range"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'CSS 의존성 제거 검증을 위한 LitDatepickerParents 컴포넌트 비교 스토리'
            }
        }
    }
};

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <l-datepicker-parents
                        id=${ifDefined(args.id)}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        size=${ifDefined(args.size)}
                        width=${ifDefined(args.width)}
                        format=${ifDefined(args.format)}
                        value=${ifDefined(args.value)}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                        ?showAlways=${args.showAlways}
                        ?invisible=${args.invisible}
                        placeholder=${ifDefined(args.placeholder)}
                        disable-date-from=${ifDefined(args['disable-date-from'])}
                        disable-date-to=${ifDefined(args['disable-date-to'])}
                >
                </l-datepicker-parents>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <l-datepicker-parents-isolated
                        id=${ifDefined(args.id + '-isolated')}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        size=${ifDefined(args.size)}
                        width=${ifDefined(args.width)}
                        format=${ifDefined(args.format)}
                        value=${ifDefined(args.value)}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                        ?showAlways=${args.showAlways}
                        ?invisible=${args.invisible}
                        placeholder=${ifDefined(args.placeholder)}
                        disable-date-from=${ifDefined(args['disable-date-from'])}
                        disable-date-to=${ifDefined(args['disable-date-to'])}
                >
                </l-datepicker-parents-isolated>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    id: 'test-datepicker',
    label: 'Select Date',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    size: 'medium',
    width: '300px',
    format: 'Y-m-d',
    value: '',
    required: false,
    disabled: false,
    readonly: false,
    feedback: '',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    showAlways: false,
    invisible: false,
    placeholder: 'Select date...',
    'disable-date-from': '',
    'disable-date-to': ''
};

const LabelAlignComparisonTemplate = (args) => {
    const alignments = [
        { align: 'top', label: 'Top Aligned' },
        { align: 'left', label: 'Left Aligned' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents
                                        id="test-datepicker-${align}"
                                        label="Date Label"
                                        label-align="${align}"
                                        label-width="120px"
                                        label-text-align="left"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                >
                                </l-datepicker-parents>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents-isolated
                                        id="test-datepicker-isolated-${align}"
                                        label="Date Label"
                                        label-align="${align}"
                                        label-width="120px"
                                        label-text-align="left"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                >
                                </l-datepicker-parents-isolated>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const LabelAlignComparison = LabelAlignComparisonTemplate.bind({});
LabelAlignComparison.args = {};

const SizeComparisonTemplate = (args) => {
    const sizes = [
        { size: 'small', label: 'Small' },
        { size: 'medium', label: 'Medium' },
        { size: 'large', label: 'Large' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents
                                        id="test-datepicker-size-${size}"
                                        label="Date Label"
                                        label-align="top"
                                        size="${size}"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                >
                                </l-datepicker-parents>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents-isolated
                                        id="test-datepicker-isolated-size-${size}"
                                        label="Date Label"
                                        label-align="top"
                                        size="${size}"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                >
                                </l-datepicker-parents-isolated>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const SizeComparison = SizeComparisonTemplate.bind({});
SizeComparison.args = {};

const StateComparisonTemplate = (args) => {
    const states = [
        { state: 'normal', label: 'Normal', props: {} },
        { state: 'required', label: 'Required', props: { required: true } },
        { state: 'disabled', label: 'Disabled', props: { disabled: true } },
        { state: 'readonly', label: 'Readonly', props: { readonly: true } }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${states.map(({state, label, props}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents
                                        id="test-datepicker-state-${state}"
                                        label="Date Label"
                                        label-align="top"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                        ?required=${props.required}
                                        ?disabled=${props.disabled}
                                        ?readonly=${props.readonly}
                                >
                                </l-datepicker-parents>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${states.map(({state, label, props}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents-isolated
                                        id="test-datepicker-isolated-state-${state}"
                                        label="Date Label"
                                        label-align="top"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                        ?required=${props.required}
                                        ?disabled=${props.disabled}
                                        ?readonly=${props.readonly}
                                >
                                </l-datepicker-parents-isolated>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const StateComparison = StateComparisonTemplate.bind({});
StateComparison.args = {};

const FeedbackComparisonTemplate = (args) => {
    const feedbackTypes = [
        { type: 'normal', label: 'Normal', message: 'This is a normal feedback message' },
        { type: 'hint', label: 'Hint', message: 'This is a hint feedback message' },
        { type: 'error', label: 'Error', message: 'This is an error feedback message' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${feedbackTypes.map(({type, label, message}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents
                                        id="test-datepicker-feedback-${type}"
                                        label="Date Label"
                                        label-align="top"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                        feedback="${message}"
                                        feedback-type="${type}"
                                        feedback-visible-type="visible"
                                >
                                </l-datepicker-parents>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${feedbackTypes.map(({type, label, message}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-datepicker-parents-isolated
                                        id="test-datepicker-isolated-feedback-${type}"
                                        label="Date Label"
                                        label-align="top"
                                        size="medium"
                                        width="100%"
                                        format="Y-m-d"
                                        placeholder="Select date..."
                                        feedback="${message}"
                                        feedback-type="${type}"
                                        feedback-visible-type="visible"
                                >
                                </l-datepicker-parents-isolated>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const FeedbackComparison = FeedbackComparisonTemplate.bind({});
FeedbackComparison.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original LitDatepickerParents (CSS imports)</h3>
                <l-datepicker-parents
                        id="test-datepicker-function-original"
                        label="Test Datepicker"
                        label-align="top"
                        size="medium"
                        width="100%"
                        format="Y-m-d"
                        placeholder="Select date..."
                        required="false"
                >
                </l-datepicker-parents>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            const result = datepicker.getValue();
                            document.querySelector('#original-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get Value
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            const newValue = prompt('Enter new date (Y-m-d):', '2024-01-15');
                            if (newValue !== null) {
                                datepicker.setValue(newValue);
                                document.querySelector('#original-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set Value
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            const result = datepicker.isValid();
                            document.querySelector('#original-isValid-result').textContent = result ? 'Valid' : 'Invalid';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Check Valid
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            datepicker.initTodayDate();
                            document.querySelector('#original-today-result').textContent = 'Set to today';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Set Today
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            datepicker.setEnableFromTo('2024-01-01', '2024-12-31');
                            document.querySelector('#original-range-result').textContent = 'Set range: 2024-01-01 to 2024-12-31';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set Range
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-original');
                            datepicker.validate();
                            document.querySelector('#original-validate-result').textContent = 'Validation triggered';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Validate
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue:</strong> <span id="original-getValue-result">-</span></div>
                        <div><strong>setValue:</strong> <span id="original-setValue-result">-</span></div>
                        <div><strong>isValid:</strong> <span id="original-isValid-result">-</span></div>
                        <div><strong>setToday:</strong> <span id="original-today-result">-</span></div>
                        <div><strong>setRange:</strong> <span id="original-range-result">-</span></div>
                        <div><strong>validate:</strong> <span id="original-validate-result">-</span></div>
                    </div>
                </div>
            </div>
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated LitDatepickerParents (DatepickerStyles.js)</h3>
                <l-datepicker-parents-isolated
                        id="test-datepicker-function-isolated"
                        label="Test Datepicker"
                        label-align="top"
                        size="medium"
                        width="100%"
                        format="Y-m-d"
                        placeholder="Select date..."
                        required="false"
                >
                </l-datepicker-parents-isolated>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            const result = datepicker.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get Value
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            const newValue = prompt('Enter new date (Y-m-d):', '2024-01-15');
                            if (newValue !== null) {
                                datepicker.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set Value
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            const result = datepicker.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'Valid' : 'Invalid';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Check Valid
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            datepicker.initTodayDate();
                            document.querySelector('#isolated-today-result').textContent = 'Set to today';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Set Today
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            datepicker.setEnableFromTo('2024-01-01', '2024-12-31');
                            document.querySelector('#isolated-range-result').textContent = 'Set range: 2024-01-01 to 2024-12-31';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set Range
                        </button>
                        
                        <button onclick="
                            const datepicker = document.querySelector('#test-datepicker-function-isolated');
                            datepicker.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation triggered';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Validate
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue:</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue:</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>isValid:</strong> <span id="isolated-isValid-result">-</span></div>
                        <div><strong>setToday:</strong> <span id="isolated-today-result">-</span></div>
                        <div><strong>setRange:</strong> <span id="isolated-range-result">-</span></div>
                        <div><strong>validate:</strong> <span id="isolated-validate-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};