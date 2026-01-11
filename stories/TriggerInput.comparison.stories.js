import '/src/components/input/TriggerInput.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/TriggerInput',
    tags: ['autodocs'],
    component: 'l-c-triggerinput',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder', 'readonly'),
        name: {
            control: {type: 'text'},
            table: {
                category: "attributes"
            }
        },
        pattern: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "validate",
            },
            description: "ex) [0-9]{3}-[0-9]{4}-[0-9]{4}",
        },
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
        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
        },
        'trigger-disabled': {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                defaultValue: {summary: 'false'}
            },
            description: "Disable trigger functionality"
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
                component: 'SharedStyles.js 의존성 제거 검증을 위한 TriggerInput 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    const handleTrigger = (value) => {
        console.log('Trigger clicked with value:', value);
        alert(`Trigger activated with value: "${value}"`);
    };
    
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <l-triggerinput
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
                        ?required=${args.required}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                        ?trigger-disabled=${args['trigger-disabled']}
                        placeholder="${ifDefined(args.placeholder)}"
                        pattern="${ifDefined(args.pattern)}"
                        value="${ifDefined(args.value)}"
                        autocomplete="${ifDefined(args.autocomplete)}"
                        .handleTrigger=${handleTrigger}
                >
                </l-triggerinput>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'triggerinput',
    name: 'triggerinput',
    width: '100%',
    label: 'Compare TriggerInput',
    placeholder: 'Enter text and click search icon...',
    value: 'Sample trigger text',
    disabled: false,
    readonly: false,
    required: false,
    'trigger-disabled': false
};

const SizeTemplate = (args) => {
    const sizes = [
        { size: undefined, label: 'Default' },
        { size: 'small', label: 'Small' },
        { size: 'large', label: 'Large' }
    ];
    
    const handleTrigger = (value) => {
        console.log('Size trigger:', value);
    };
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}, index) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-triggerinput
                                    id="triggerinput-isolated-${index}"
                                    name="isolated-size-group"
                                    size=${ifDefined(size)}
                                    placeholder="${label} trigger input"
                                    value="${label} text"
                                    .handleTrigger=${handleTrigger}
                            >
                            </l-triggerinput>
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
    const handleTrigger = (value) => {
        console.log('State trigger:', value);
    };
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-triggerinput placeholder="Normal trigger input" value="Normal text" .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-triggerinput placeholder="Disabled trigger input" value="Disabled text" disabled .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">ReadOnly:</label>
                        <l-triggerinput value="ReadOnly text" readonly .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-triggerinput placeholder="Required trigger input" required .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Trigger Disabled:</label>
                        <l-triggerinput placeholder="Trigger disabled" value="Click won't work" trigger-disabled .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const State = StateTemplate.bind({});
State.args = {};

const LabelAndFeedbackTemplate = (args) => {
    const handleTrigger = (value) => {
        console.log('Label/Feedback trigger:', value);
    };
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <l-triggerinput label="Search Term" placeholder="Enter search term" .handleTrigger=${handleTrigger}></l-triggerinput>
                    <l-triggerinput label="Query" label-align="left" placeholder="Enter query" .handleTrigger=${handleTrigger}></l-triggerinput>
                    <l-triggerinput label="Filter" feedback="Filter is required" feedback-type="error" .handleTrigger=${handleTrigger}></l-triggerinput>
                    <l-triggerinput label="Keyword" feedback="Valid keyword format" feedback-type="success" value="example keyword" .handleTrigger=${handleTrigger}></l-triggerinput>
                </div>
            </div>
        </div>
    `
}

export const LabelAndFeedback = LabelAndFeedbackTemplate.bind({});
LabelAndFeedback.args = {};

const ValidationTemplate = (args) => {
    const handleTrigger = (value) => {
        console.log('Validation trigger:', value);
    };
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Pattern Validation (Phone):</label>
                        <l-triggerinput pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="000-0000-0000" .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Max/Min Length:</label>
                        <l-triggerinput maxlength="20" minlength="3" placeholder="3-20 characters" .handleTrigger=${handleTrigger}></l-triggerinput>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required (empty to test):</label>
                        <l-triggerinput
                                id="triggerinput-required-isolated"
                                placeholder="Required trigger input"
                                required
                                .handleTrigger=${handleTrigger}
                        >
                        </l-triggerinput>
                        <p style="margin-top: 8px; font-size: 12px; color: #666;">
                            Leave empty and click outside to see validation
                        </p>
                    </div>
                    <div>
                        <button type="button" onclick="
                            const triggerInput = document.querySelector('#triggerinput-required-isolated');
                            triggerInput.checkValidity();
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
    const handleTrigger = (value) => {
        console.log('Function test trigger activated with value:', value);
        document.querySelector('#trigger-result').textContent = `Triggered with: "${value}"`;
    };
    
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated TriggerInput (TriggerInputStyles.js)</h3>
                <l-triggerinput
                        id="test-triggerinput-isolated"
                        name="test-triggerinput-isolated"
                        label="Test TriggerInput"
                        placeholder="Type text and click search icon"
                        value="Sample trigger text"
                        pattern="^[A-Za-z0-9\\s]+$"
                        maxlength="50"
                        minlength="3"
                        .handleTrigger=${handleTrigger}
                >
                </l-triggerinput>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            const result = triggerInput.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            const newValue = prompt('Enter new value:', 'New trigger text');
                            if (newValue !== null) {
                                triggerInput.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            const result = triggerInput.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            triggerInput.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            triggerInput.checkValidity();
                            document.querySelector('#isolated-checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            triggerInput.triggerPop();
                            document.querySelector('#isolated-triggerPop-result').textContent = 'triggerPop() executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            triggerPop()
                        </button>
                        
                        <button onclick="
                            const triggerInput = document.querySelector('#test-triggerinput-isolated');
                            const inputEl = triggerInput.querySelector('input');
                            const byteLength = inputEl ? triggerInput.getByteLength(inputEl.value) : 0;
                            document.querySelector('#isolated-getByteLength-result').textContent = byteLength + ' bytes';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getByteLength()
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="isolated-getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="isolated-setValue-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isolated-isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="isolated-validate-result">-</span></div>
                        <div><strong>checkValidity():</strong> <span id="isolated-checkValidity-result">-</span></div>
                        <div><strong>triggerPop():</strong> <span id="isolated-triggerPop-result">-</span></div>
                        <div><strong>getByteLength():</strong> <span id="isolated-getByteLength-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 16px; padding: 12px; background: #e7f3ff; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Trigger Function Result:</h4>
            <div style="font-size: 14px; color: #333;">
                <span id="trigger-result">Click the search icon or press Enter to trigger</span>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};