import '/src/components/select/Select.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Select',
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

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <l-select
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
                        id=${ifDefined(args.id ? args.id + '' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        placeholder="${ifDefined(args.placeholder)}"
                        value="${ifDefined(args.value)}"
                        text="${ifDefined(args.text)}"
                        .options=${args.options || []}
                >
                </l-select>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'select',
    name: 'select',
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

const SizeTemplate = (args) => {
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-select
                                    id="select-${index}"
                                    name="size-group"
                                    size=${ifDefined(size)}
                                    value="apple"
                                    .options=${options}
                            >
                            </l-select>
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
    const options = [
        {value: 'enabled', label: 'Enabled Option'},
        {value: 'normal', label: 'Normal Option'},
        {value: 'another', label: 'Another Option'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-select value="normal" .options=${options}></l-select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-select value="normal" .options=${options} disabled></l-select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-select value="" .options=${options} required></l-select>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const State = StateTemplate.bind({});
State.args = {};

const DefaultTypeTemplate = (args) => {
    const options = [
        {value: 'red', label: 'Red'},
        {value: 'green', label: 'Green'},
        {value: 'blue', label: 'Blue'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">No Default:</label>
                        <l-select .options=${options}></l-select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Select Type:</label>
                        <l-select .options=${options} default-type="select" placeholder="Choose a color"></l-select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">All Type:</label>
                        <l-select .options=${options} default-type="all" placeholder="All colors"></l-select>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const DefaultType = DefaultTypeTemplate.bind({});
DefaultType.args = {};

const LabelAndFeedbackTemplate = (args) => {
    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <l-select label="Category" .options=${options} value="option1"></l-select>
                    <l-select label="Type" label-align="left" .options=${options} value="option2"></l-select>
                    <l-select label="Priority" feedback="Priority is required" feedback-type="error" .options=${options}></l-select>
                    <l-select label="Status" feedback="Valid selection" feedback-type="success" .options=${options} value="option3"></l-select>
                </div>
            </div>
        </div>
    `
}

export const LabelAndFeedback = LabelAndFeedbackTemplate.bind({});
LabelAndFeedback.args = {};

const ValidationTemplate = (args) => {
    const options = [
        {value: '', label: 'Choose an option', disabled: true},
        {value: 'valid1', label: 'Valid Option 1'},
        {value: 'valid2', label: 'Valid Option 2'},
        {value: 'valid3', label: 'Valid Option 3'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required (empty to test):</label>
                        <l-select
                                id="select-required"
                                .options=${options}
                                value=""
                                required
                        >
                        </l-select>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Leave empty and click outside to see validation
                        </p>
                    </div>
                    <div>
                        <button type="button" onclick="
                            const select = document.querySelector('#select-required');
                            select.checkValidity();
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
    const testOptions = [
        {value: 'apple', label: 'Apple'},
        {value: 'banana', label: 'Banana'},
        {value: 'cherry', label: 'Cherry'},
        {value: 'date', label: 'Date'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Select (SelectStyles.js)</h3>
                <l-select
                        id="test-select"
                        name="test-select"
                        label="Test Select"
                        value="banana"
                        .options=${testOptions}
                >
                </l-select>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.getValue();
                            document.querySelector('#getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const newValue = prompt('Enter new value (apple, banana, cherry, date):', 'cherry');
                            if (newValue !== null) {
                                select.setValue(newValue);
                                document.querySelector('#setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.getText();
                            document.querySelector('#getText-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getText()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.getSelectedIndex();
                            document.querySelector('#getSelectedIndex-result').textContent = result;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            getSelectedIndex()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.getSelectedOption();
                            document.querySelector('#getSelectedOption-result').textContent = result ? JSON.stringify(result) : 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getSelectedOption()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.getOptions();
                            document.querySelector('#getOptions-result').textContent = result ? result.length + ' options' : 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getOptions()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            const result = select.isValid();
                            document.querySelector('#isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const select = document.querySelector('#test-select');
                            select.validate();
                            document.querySelector('#validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #20c997; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="setValue-result">-</span></div>
                        <div><strong>getText():</strong> <span id="getText-result">-</span></div>
                        <div><strong>getSelectedIndex():</strong> <span id="getSelectedIndex-result">-</span></div>
                        <div><strong>getSelectedOption():</strong> <span id="getSelectedOption-result">-</span></div>
                        <div><strong>getOptions():</strong> <span id="getOptions-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="validate-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};