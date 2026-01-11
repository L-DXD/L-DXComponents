import '/src/components/input/Textarea.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Textarea',
    tags: ['autodocs'],
    component: 'l-c-textarea',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder', 'readonly'),
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
        'valid-length-type': {
            control: {type: 'select'},
            options: ['length', 'byte'],
            table: {
                category: "attributes",
                subcategory: "validate",
                defaultValue: {summary: 'length'},
            }
        },
        rows: {
            control: {type: 'number'},
            table: {
                category: "attributes",
                defaultValue: {summary: '2'}
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
        autocomplete: {
            control: {type: 'text'},
            table: {
                category: "attributes"
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Textarea 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <l-textarea
                        size=${ifDefined(args.size)}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        valid-length-type=${ifDefined(args['valid-length-type'])}
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                        component-style=${ifDefined(args['component-style'])}
                        id=${ifDefined(args.id ? args.id + '-isolated' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        maxlength=${ifDefined(args.maxlength)}
                        minlength=${ifDefined(args.minlength)}
                        rows=${ifDefined(args.rows)}
                        cols=${ifDefined(args.cols)}
                        wrap=${ifDefined(args.wrap)}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        placeholder="${ifDefined(args.placeholder)}"
                        value="${ifDefined(args.value)}"
                        autocomplete="${ifDefined(args.autocomplete)}"
                >
                </l-textarea>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'textarea',
    name: 'textarea',
    width: '100%',
    label: 'Compare Textarea',
    placeholder: 'Enter your text here...',
    value: 'Sample textarea content\nMultiple lines supported',
    rows: 2,
    disabled: false,
    readonly: false,
    required: false
};

const SizeTemplate = (args) => {
    const sizes = [
        { size: undefined, label: 'Default' },
        { size: 'small', label: 'Small' },
        { size: 'large', label: 'Large' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-textarea
                                    id="textarea-isolated-${index}"
                                    name="isolated-size-group"
                                    size=${ifDefined(size)}
                                    placeholder="${label} textarea"
                                    value="${label} textarea content"
                                    
                            >
                            </l-textarea>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const Size = SizeTemplate.bind({});
Size.args = {};

const StateTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-textarea placeholder="Normal textarea" value="Normal content" ></l-textarea>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-textarea placeholder="Disabled textarea" value="Disabled content" disabled ></l-textarea>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">ReadOnly:</label>
                        <l-textarea value="ReadOnly content" readonly ></l-textarea>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-textarea placeholder="Required textarea" required ></l-textarea>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const State = StateTemplate.bind({});
State.args = {};

const LabelAndFeedbackTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
           
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <l-textarea label="Message" placeholder="Enter your message" rows="4"></l-textarea>
                    <l-textarea label="Description" label-align="left" placeholder="Enter description" rows="4"></l-textarea>
                    <l-textarea label="Comment" feedback="Comment is required" feedback-type="error" rows="4"></l-textarea>
                    <l-textarea label="Review" feedback="Great feedback!" feedback-type="success" value="This is a good review..." rows="4"></l-textarea>
                </div>
            </div>
        </div>
    `
}

export const LabelAndFeedback = LabelAndFeedbackTemplate.bind({});
LabelAndFeedback.args = {};

const RowsTemplate = (args) => {
    const rowCounts = [2, 4, 6, 8];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${rowCounts.map(rows => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${rows} rows:</label>
                            <l-textarea
                                    placeholder="${rows} rows textarea"
                                    value="Content for ${rows} rows textarea"
                                    rows="${rows}"
                            >
                            </l-textarea>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const Rows = RowsTemplate.bind({});
Rows.args = {};

const ValidationTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required (empty to test):</label>
                        <l-textarea
                                id="textarea-required-isolated"
                                placeholder="Required textarea"
                                required
                                
                        >
                        </l-textarea>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Leave empty and click outside to see validation
                        </p>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Max/Min Length:</label>
                        <l-textarea
                                maxlength="50"
                                minlength="10"
                                placeholder="10-50 characters"
                                
                        >
                        </l-textarea>
                    </div>
                    <div>
                        <button type="button" onclick="
                            const textarea = document.querySelector('#textarea-required-isolated');
                            textarea.checkValidity();
                        " style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Validate Required
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Validation = ValidationTemplate.bind({});
Validation.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Textarea (FormControlStyles.js)</h3>
                <l-textarea
                        id="test-textarea-isolated"
                        name="test-textarea-isolated"
                        label="Test Textarea"
                        placeholder="Enter test content"
                        value="Sample textarea content for testing"
                        rows="3"
                >
                </l-textarea>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const result = textarea.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const newValue = prompt('Enter new value:', 'New textarea content');
                            if (newValue !== null) {
                                textarea.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue.substring(0, 20) + (newValue.length > 20 ? '...' : '');
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const result = textarea.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            textarea.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            textarea.checkValidity();
                            document.querySelector('#isolated-checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const textareaEl = textarea.querySelector('textarea');
                            const byteLength = textareaEl ? textarea.getByteLength(textareaEl.value) : 0;
                            document.querySelector('#isolated-getByteLength-result').textContent = byteLength + ' bytes';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getByteLength()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const textareaEl = textarea.querySelector('textarea');
                            const isPatternValid = textareaEl ? textarea.isPatternValid(textareaEl.value) : true;
                            document.querySelector('#isolated-isPatternValid-result').textContent = isPatternValid ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isPatternValid()
                        </button>
                        
                        <button onclick="
                            const textarea = document.querySelector('#test-textarea-isolated');
                            const textareaEl = textarea.querySelector('textarea');
                            const isRequiredValid = textareaEl ? textarea.isRequiredValid(textareaEl.value) : true;
                            document.querySelector('#isolated-isRequiredValid-result').textContent = isRequiredValid ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #20c997; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isRequiredValid()
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isolated-isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="isolated-validate-result">-</span></div>
                        <div><strong>checkValidity():</strong> <span id="isolated-checkValidity-result">-</span></div>
                        <div><strong>getByteLength():</strong> <span id="isolated-getByteLength-result">-</span></div>
                        <div><strong>isPatternValid():</strong> <span id="isolated-isPatternValid-result">-</span></div>
                        <div><strong>isRequiredValid():</strong> <span id="isolated-isRequiredValid-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};