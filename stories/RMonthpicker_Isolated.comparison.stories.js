import '/src/components/input/RMonthpicker.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/RangeMonthpicker',
    tags: ['autodocs'],
    component: 'l-c-range-monthpicker',
    argTypes: {
        id: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'range-monthpicker'}
            },
            description: "Unique identifier for the range monthpicker"
        },
        label: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Label text for the range monthpicker"
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
            description: "Size of the range monthpicker input"
        },
        width: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
                defaultValue: {summary: 'auto'}
            },
            description: "Width of the range monthpicker container"
        },
        format: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'Y-m'}
            },
            description: "Month format for display and parsing"
        },
        value: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Initial value of the range monthpicker"
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
            description: "Whether the range monthpicker is disabled"
        },
        readonly: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            },
            description: "Whether the range monthpicker is readonly"
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
            description: "Whether the range monthpicker is invisible"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'CSS 의존성 제거 검증을 위한 Range Monthpicker 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Range Monthpicker (DatepickerStyles.js)</h3>
                <l-c-range-monthpicker
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
                >
                </l-c-range-monthpicker>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'test-range-monthpicker',
    label: 'Select Month Range',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    size: 'medium',
    width: '300px',
    format: 'Y-m',
    value: '',
    required: false,
    disabled: false,
    readonly: false,
    feedback: '',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    showAlways: false,
    invisible: false
};

const FormatTemplate = (args) => {
    const formats = [
        { format: 'Y-m', label: 'Y-m (2024-01)', id: 'Ym' },
        { format: 'Y/m', label: 'Y/m (2024/01)', id: 'Yslashm' },
        { format: 'Ymd', label: 'Ymd (202401)', id: 'Ymd' },
        { format: 'Y.m', label: 'Y.m (2024.01)', id: 'Ydotm' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
           
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Range Monthpicker (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${formats.map(({format, label, id}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-c-range-monthpicker
                                        id="test-range-monthpicker-isolated-format-${id}"
                                        label="Month Range"
                                        label-align="top"
                                        size="medium"
                                        width="100%"
                                        format="${format}"
                                >
                                </l-c-range-monthpicker>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const Format = FormatTemplate.bind({});
Format.args = {};

const InlineTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Range Monthpicker (DatepickerStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Popup Month Range Selector:</h4>
                        <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                            <l-c-range-monthpicker
                                    id="test-range-monthpicker-isolated-popup"
                                    label="Month Range"
                                    label-align="top"
                                    size="medium"
                                    width="100%"
                                    format="Y-m"
                                    showAlways="false"
                            >
                            </l-c-range-monthpicker>
                        </div>
                    </div>
                    <div>
                        <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Inline Month Range Selector:</h4>
                        <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                            <l-c-range-monthpicker
                                    id="test-range-monthpicker-isolated-inline"
                                    label="Month Range"
                                    label-align="top"
                                    size="medium"
                                    width="100%"
                                    format="Y-m"
                                    showAlways="true"
                            >
                            </l-c-range-monthpicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Inline = InlineTemplate.bind({});
Inline.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Range Monthpicker (DatepickerStyles.js)</h3>
                <l-c-range-monthpicker
                        id="test-range-monthpicker-function-isolated"
                        label="Test Range Monthpicker"
                        label-align="top"
                        size="medium"
                        width="100%"
                        format="Y-m"
                        required="false"
                >
                </l-c-range-monthpicker>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            const result = monthpicker.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            const newValue = '2024-01,2024-12';
                            monthpicker.setValue(newValue);
                            document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            const fromValue = monthpicker.getFromValue();
                            document.querySelector('#isolated-getFromValue-result').textContent = fromValue || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get From Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            const toValue = monthpicker.getToValue();
                            document.querySelector('#isolated-getToValue-result').textContent = toValue || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #6f42c1; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get To Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            monthpicker.setFromValue('2024-01');
                            document.querySelector('#isolated-setFromValue-result').textContent = 'Set from to: 2024-01';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set From Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            monthpicker.setToValue('2024-12');
                            document.querySelector('#isolated-setToValue-result').textContent = 'Set to to: 2024-12';
                        " style="padding: 4px 8px; font-size: 12px; background: #198754; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set To Value
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            monthpicker.initFromCurrentMonth();
                            document.querySelector('#isolated-currentMonth-result').textContent = 'Set to current month';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Set Current Month
                        </button>
                        
                        <button onclick="
                            const monthpicker = document.querySelector('#test-range-monthpicker-function-isolated');
                            const result = monthpicker.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'Valid' : 'Invalid';
                        " style="padding: 4px 8px; font-size: 12px; background: #dc3545; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Check Valid
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue:</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue:</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>getFromValue:</strong> <span id="isolated-getFromValue-result">-</span></div>
                        <div><strong>getToValue:</strong> <span id="isolated-getToValue-result">-</span></div>
                        <div><strong>setFromValue:</strong> <span id="isolated-setFromValue-result">-</span></div>
                        <div><strong>setToValue:</strong> <span id="isolated-setToValue-result">-</span></div>
                        <div><strong>currentMonth:</strong> <span id="isolated-currentMonth-result">-</span></div>
                        <div><strong>isValid:</strong> <span id="isolated-isValid-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};