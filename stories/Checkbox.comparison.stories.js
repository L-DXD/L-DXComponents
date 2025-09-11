import '/src/components/input/Checkbox_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Checkbox Comparison',
    tags: ['autodocs'],
    component: 'l-checkbox',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'required'),
        checked: {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'false'}
            }
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'right'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'left'}
            }
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Checkbox 컴포넌트 비교 스토리'
            }
        }
    }
};

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <l-checkbox
                        size=${ifDefined(args.size)}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        id=${ifDefined(args.id ? args.id + '-isolated' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        ?checked=${args.checked}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        value="${ifDefined(args.value)}"
                >
                </l-checkbox>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    id: 'checkbox-comparison',
    name: 'comparison-checkbox',
    label: 'Compare Checkbox',
    value: 'checkbox-value',
    checked: false,
    disabled: false,
    required: false
};

const SizeComparisonTemplate = (args) => {
    const sizes = [
        { size: undefined, label: 'Default' },
        { size: 'small', label: 'Small' },
        { size: 'large', label: 'Large' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-checkbox
                                    id="checkbox-isolated-${index}"
                                    name="isolated-size-group"
                                    size=${ifDefined(size)}
                                    label="${label} checkbox"
                                    value="${label.toLowerCase()}"
                            >
                            </l-checkbox>
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
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-checkbox id="checkbox-isolated-normal" name="isolated-state" label="Normal checkbox" value="normal"></l-checkbox>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Checked:</label>
                        <l-checkbox id="checkbox-isolated-checked" name="isolated-state" label="Checked checkbox" value="checked" checked></l-checkbox>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-checkbox id="checkbox-isolated-disabled" name="isolated-state" label="Disabled checkbox" value="disabled" disabled></l-checkbox>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled & Checked:</label>
                        <l-checkbox id="checkbox-isolated-disabled-checked" name="isolated-state" label="Disabled & Checked" value="disabled-checked" disabled checked></l-checkbox>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-checkbox id="checkbox-isolated-required" name="isolated-state" label="Required checkbox" value="required" required></l-checkbox>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const StateComparison = StateComparisonTemplate.bind({});
StateComparison.args = {};

const GroupComparisonTemplate = (args) => {
    const options = [
        {id: 'option1', label: 'Option 1', value: 'opt1'},
        {id: 'option2', label: 'Option 2', value: 'opt2'},
        {id: 'option3', label: 'Option 3', value: 'opt3'},
        {id: 'option4', label: 'Option 4', value: 'opt4'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox Group (RadioCheckboxStyles.js)</h3>
                <div>
                    <p style="margin-bottom: 8px; font-weight: bold; color: #666;">Select multiple options:</p>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${options.map(option => html`
                            <l-checkbox
                                    id="checkbox-isolated-${option.id}"
                                    name="isolated-group"
                                    label="${option.label}"
                                    value="${option.value}"
                                    ?checked=${option.id === 'option2'}
                            >
                            </l-checkbox>
                        `)}
                    </div>
                </div>
            </div>
        </div>
    `
}

export const GroupComparison = GroupComparisonTemplate.bind({});
GroupComparison.args = {};

const InlineComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <div>
                    <p style="margin-bottom: 12px; font-weight: bold; color: #666;">Inline checkboxes:</p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <l-checkbox id="checkbox-isolated-inline-1" name="isolated-inline" label="Checkbox 1" value="1"></l-checkbox>
                        <l-checkbox id="checkbox-isolated-inline-2" name="isolated-inline" label="Checkbox 2" value="2" checked></l-checkbox>
                        <l-checkbox id="checkbox-isolated-inline-3" name="isolated-inline" label="Checkbox 3" value="3"></l-checkbox>
                        <l-checkbox id="checkbox-isolated-inline-4" name="isolated-inline" label="Checkbox 4" value="4" disabled></l-checkbox>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const InlineComparison = InlineComparisonTemplate.bind({});
InlineComparison.args = {};

const RequiredValidationTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <p style="margin-bottom: 8px; font-weight: bold; color: #666;">Required checkbox (uncheck then blur to see validation):</p>
                        <l-checkbox
                                id="checkbox-required-isolated"
                                name="isolated-required"
                                label="I agree to the terms (Required)"
                                value="agreement"
                                required
                                checked
                        >
                        </l-checkbox>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Try unchecking the box and clicking outside to trigger validation
                        </p>
                    </div>
                    <div>
                        <button type="button" onclick="
                            const checkbox = document.querySelector('#checkbox-required-isolated');
                            checkbox.checkValidity();
                        " style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Validate Isolated
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const RequiredValidation = RequiredValidationTemplate.bind({});
RequiredValidation.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Checkbox (RadioCheckboxStyles.js)</h3>
                <l-checkbox
                        id="test-checkbox-isolated"
                        name="test-checkbox-isolated"
                        label="Test Checkbox"
                        value="isolated-value"
                        checked
                >
                </l-checkbox>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const result = checkbox.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const newValue = prompt('Enter new value:', 'test-value');
                            if (newValue !== null) {
                                checkbox.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const result = checkbox.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            checkbox.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            checkbox.checkValidity();
                            document.querySelector('#isolated-checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const text = checkbox.getText();
                            document.querySelector('#isolated-getText-result').textContent = text || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getText()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const newText = prompt('Enter new text:', 'New Label');
                            if (newText !== null) {
                                checkbox.setText(newText);
                                document.querySelector('#isolated-setText-result').textContent = 'Set to: ' + newText;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setText()
                        </button>
                        
                        <button onclick="
                            const checkbox = document.querySelector('#test-checkbox-isolated');
                            const input = checkbox.querySelector('input');
                            const isChecked = input ? input.checked : false;
                            document.querySelector('#isolated-checked-result').textContent = isChecked ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #20c997; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Check Status
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isolated-isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="isolated-validate-result">-</span></div>
                        <div><strong>checkValidity():</strong> <span id="isolated-checkValidity-result">-</span></div>
                        <div><strong>getText():</strong> <span id="isolated-getText-result">-</span></div>
                        <div><strong>setText():</strong> <span id="isolated-setText-result">-</span></div>
                        <div><strong>Checked:</strong> <span id="isolated-checked-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};