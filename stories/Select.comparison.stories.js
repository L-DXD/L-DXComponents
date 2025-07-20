import '/src/components/select/Select.js'
import '/src/components/select/Select_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Select Comparison',
    tags: ['autodocs'],
    component: 'l-c-select',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder'),
        options: {
            control: {type: 'object'},
            table: {
                category: "attributes",
                defaultValue: {summary: '[]'}
            },
            description: "Array of {value, label, disabled?} objects"
        },
        text: {
            control: {type: 'text'},
            table: {
                category: "attributes"
            },
            description: "Selected option text"
        },
        'default-type': {
            control: {type: 'select'},
            options: [undefined, 'select', 'all'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'undefined'}
            },
            description: "Default option type: 'select' adds placeholder option, 'all' adds 'All options' option"
        },
        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Select 컴포넌트 비교 스토리'
            }
        }
    }
};

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <l-select-isolated
                        size=${ifDefined(args.size)}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        feedback-visible-type=${ifDefined(args['feedback-visible-type'])}
                        component-style=${ifDefined(args['component-style'])}
                        default-type=${ifDefined(args['default-type'])}
                        id=${ifDefined(args.id ? args.id + '-isolated' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        placeholder="${ifDefined(args.placeholder)}"
                        value="${ifDefined(args.value)}"
                        text="${ifDefined(args.text)}"
                        .options=${args.options || []}
                >
                </l-select-isolated>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    id: 'select-comparison',
    name: 'comparison-select',
    width: '100%',
    label: 'Compare Select',
    value: 'option2',
    text: 'Option 2',
    disabled: false,
    required: false,
    options: [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
        {value: 'option4', label: 'Option 4', disabled: true}
    ]
};

const SizeComparisonTemplate = (args) => {
    const sizes = [
        { size: undefined, label: 'Default' },
        { size: 'small', label: 'Small' },
        { size: 'large', label: 'Large' }
    ];
    
    const options = [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-select-isolated
                                    id="select-isolated-${index}"
                                    name="isolated-size-group"
                                    size=${ifDefined(size)}
                                    value="apple"
                                    .options=${options}
                            >
                            </l-select-isolated>
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
    const options = [
        {value: 'enabled', label: 'Enabled Option'},
        {value: 'normal', label: 'Normal Option'},
        {value: 'another', label: 'Another Option'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-select-isolated value="normal" .options=${options}></l-select-isolated>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-select-isolated value="normal" .options=${options} disabled></l-select-isolated>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-select-isolated value="" .options=${options} required></l-select-isolated>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const StateComparison = StateComparisonTemplate.bind({});
StateComparison.args = {};

const DefaultTypeComparisonTemplate = (args) => {
    const options = [
        {value: 'red', label: 'Red'},
        {value: 'green', label: 'Green'},
        {value: 'blue', label: 'Blue'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">No Default:</label>
                        <l-select-isolated .options=${options}></l-select-isolated>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Select Type:</label>
                        <l-select-isolated .options=${options} default-type="select" placeholder="Choose a color"></l-select-isolated>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">All Type:</label>
                        <l-select-isolated .options=${options} default-type="all" placeholder="All colors"></l-select-isolated>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const DefaultTypeComparison = DefaultTypeComparisonTemplate.bind({});
DefaultTypeComparison.args = {};

const LabelAndFeedbackComparisonTemplate = (args) => {
    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <l-select-isolated label="Category" .options=${options} value="option1"></l-select-isolated>
                    <l-select-isolated label="Type" label-align="left" .options=${options} value="option2"></l-select-isolated>
                    <l-select-isolated label="Priority" feedback="Priority is required" feedback-type="error" .options=${options}></l-select-isolated>
                    <l-select-isolated label="Status" feedback="Valid selection" feedback-type="success" .options=${options} value="option3"></l-select-isolated>
                </div>
            </div>
        </div>
    `
}

export const LabelAndFeedbackComparison = LabelAndFeedbackComparisonTemplate.bind({});
LabelAndFeedbackComparison.args = {};

const ValidationComparisonTemplate = (args) => {
    const options = [
        {value: '', label: 'Choose an option', disabled: true},
        {value: 'valid1', label: 'Valid Option 1'},
        {value: 'valid2', label: 'Valid Option 2'},
        {value: 'valid3', label: 'Valid Option 3'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required (empty to test):</label>
                        <l-select-isolated
                                id="select-required-isolated"
                                .options=${options}
                                value=""
                                required
                        >
                        </l-select-isolated>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Leave empty and click outside to see validation
                        </p>
                    </div>
                    <div>
                        <button type="button" onclick="
                            const select = document.querySelector('#select-required-isolated');
                            select.checkValidity();
                        " style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Validate Required Isolated
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const ValidationComparison = ValidationComparisonTemplate.bind({});
ValidationComparison.args = {};

const FunctionTestingTemplate = (args) => {
    const testOptions = [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'date', label: 'Date'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Select (SelectStyles.js)</h3>
                <l-select-isolated
                        id="test-select-isolated"
                        name="test-select-isolated"
                        label="Test Select"
                        value="banana"
                        .options=${testOptions}
                >
                </l-select-isolated>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const newValue = prompt('Enter new value (apple, banana, cherry, date):', 'cherry');
                            if (newValue !== null) {
                                select.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.getText();
                            document.querySelector('#isolated-getText-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getText()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.getSelectedIndex();
                            document.querySelector('#isolated-getSelectedIndex-result').textContent = result;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            getSelectedIndex()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.getSelectedOption();
                            document.querySelector('#isolated-getSelectedOption-result').textContent = result ? JSON.stringify(result) : 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getSelectedOption()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.getOptions();
                            document.querySelector('#isolated-getOptions-result').textContent = result ? result.length + ' options' : 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getOptions()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            const result = select.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select-isolated');
                            select.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #20c997; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>getText():</strong> <span id="isolated-getText-result">-</span></div>
                        <div><strong>getSelectedIndex():</strong> <span id="isolated-getSelectedIndex-result">-</span></div>
                        <div><strong>getSelectedOption():</strong> <span id="isolated-getSelectedOption-result">-</span></div>
                        <div><strong>getOptions():</strong> <span id="isolated-getOptions-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isolated-isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="isolated-validate-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};