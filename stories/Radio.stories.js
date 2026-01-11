import '/src/components/input/Radio.js'

import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Radio',
    tags: ['autodocs'],
    component: 'l-radio',
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
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Radio 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
           
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <l-radio
                        size=${ifDefined(args.size)}
                        label=${ifDefined(args.label)}
                        label-align=${ifDefined(args['label-align'])}
                        id=${ifDefined(args.id ? args.id + '' : undefined)}
                        name=${ifDefined(args.name ? args.name + '' : undefined)}
                        width=${ifDefined(args.width)}
                        ?checked=${args.checked}
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        value="${ifDefined(args.value)}"
                >
                </l-radio>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'radio',
    name: 'radio',
    label: 'Compare Radio',
    value: 'radio-value',
    checked: false,
    disabled: false,
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-radio
                                    id="radio-${index}"
                                    name="size-group"
                                    size=${ifDefined(size)}
                                    label="${label} radio"
                                    value="${label.toLowerCase()}"
                                    ?checked=${index === 0}
                            >
                            </l-radio>
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-radio id="radio-normal" name="state" label="Normal radio" value="normal"></l-radio>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Checked:</label>
                        <l-radio id="radio-checked" name="state" label="Checked radio" value="checked" checked></l-radio>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-radio id="radio-disabled" name="disabled-state" label="Disabled radio" value="disabled" disabled></l-radio>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled & Checked:</label>
                        <l-radio id="radio-disabled-checked" name="disabled-state" label="Disabled & Checked" value="disabled-checked" disabled checked></l-radio>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const State = StateTemplate.bind({});
State.args = {};

const GroupTemplate = (args) => {
    const options = [
        {id: 'option1', label: 'Option 1', value: 'opt1'},
        {id: 'option2', label: 'Option 2', value: 'opt2'},
        {id: 'option3', label: 'Option 3', value: 'opt3'},
        {id: 'option4', label: 'Option 4', value: 'opt4'}
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio Group (RadioCheckboxStyles.js)</h3>
                <div>
                    <p style="margin-bottom: 8px; font-weight: bold; color: #666;">Select one option:</p>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${options.map((option, index) => html`
                            <l-radio
                                    id="radio-${option.id}"
                                    name="group"
                                    label="${option.label}"
                                    value="${option.value}"
                                    ?checked=${index === 1}
                            >
                            </l-radio>
                        `)}
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Group = GroupTemplate.bind({});
Group.args = {};

const InlineTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <div>
                    <p style="margin-bottom: 12px; font-weight: bold; color: #666;">Inline radios:</p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <l-radio id="radio-inline-1" name="inline" label="Radio 1" value="1"></l-radio>
                        <l-radio id="radio-inline-2" name="inline" label="Radio 2" value="2" checked></l-radio>
                        <l-radio id="radio-inline-3" name="inline" label="Radio 3" value="3"></l-radio>
                        <l-radio id="radio-inline-4" name="inline-disabled" label="Radio 4" value="4" disabled></l-radio>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Inline = InlineTemplate.bind({});
Inline.args = {};

const RequiredValidationTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <p style="margin-bottom: 8px; font-weight: bold; color: #666;">Required radio group (none selected initially):</p>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <l-radio
                                    id="radio-required-1"
                                    name="required"
                                    label="Option A (Required)"
                                    value="a"
                                    required
                            >
                            </l-radio>
                            <l-radio
                                    id="radio-required-2"
                                    name="required"
                                    label="Option B (Required)"
                                    value="b"
                                    required
                            >
                            </l-radio>
                            <l-radio
                                    id="radio-required-3"
                                    name="required"
                                    label="Option C (Required)"
                                    value="c"
                                    required
                            >
                            </l-radio>
                        </div>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Click "Validate" to see required validation, then select a radio to see valid state
                        </p>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button type="button" onclick="
                            const radio = document.querySelector('#radio-required-1');
                            radio.checkValidity();
                        " style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Validate
                        </button>
                        <button type="button" onclick="
                            const radios = document.querySelectorAll('l-radio[name=&quot;required&quot;]');
                            radios.forEach(r => {
                                const input = r.querySelector('input');
                                if (input) input.checked = false;
                            });
                        " style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
                            Clear Selection
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Radio (RadioCheckboxStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                    <l-radio
                            id="test-radio-1"
                            name="test-radio"
                            label="Option 1"
                            value="option1"
                    >
                    </l-radio>
                    <l-radio
                            id="test-radio-2"
                            name="test-radio"
                            label="Option 2"
                            value="option2"
                            checked
                    >
                    </l-radio>
                    <l-radio
                            id="test-radio-3"
                            name="test-radio"
                            label="Option 3"
                            value="option3"
                    >
                    </l-radio>
                </div>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            const result = radio.getValue();
                            document.querySelector('#getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            const newValue = prompt('Enter new value:', 'test-value');
                            if (newValue !== null) {
                                radio.setValue(newValue);
                                document.querySelector('#setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            const result = radio.isValid();
                            document.querySelector('#isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            radio.validate();
                            document.querySelector('#validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            radio.checkValidity();
                            document.querySelector('#checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            const text = radio.getText();
                            document.querySelector('#getText-result').textContent = text || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getText()
                        </button>
                        
                        <button onclick="
                            const radio = document.querySelector('#test-radio-2');
                            const newText = prompt('Enter new text:', 'New Label');
                            if (newText !== null) {
                                radio.setText(newText);
                                document.querySelector('#setText-result').textContent = 'Set to: ' + newText;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setText()
                        </button>
                        
                        <button onclick="
                            const radios = document.querySelectorAll('l-radio[name=&quot;test-radio&quot;]');
                            let selectedValue = null;
                            radios.forEach(r => {
                                const input = r.querySelector('input');
                                if (input && input.checked) selectedValue = input.value;
                            });
                            document.querySelector('#groupValue-result').textContent = selectedValue || 'none';
                        " style="padding: 4px 8px; font-size: 12px; background: #20c997; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Group Value
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="setValue-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="validate-result">-</span></div>
                        <div><strong>checkValidity():</strong> <span id="checkValidity-result">-</span></div>
                        <div><strong>getText():</strong> <span id="getText-result">-</span></div>
                        <div><strong>setText():</strong> <span id="setText-result">-</span></div>
                        <div><strong>Group Value:</strong> <span id="groupValue-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};