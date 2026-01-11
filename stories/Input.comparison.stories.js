import '/src/components/input/Input.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Input',
    tags: ['autodocs'],
    component: 'l-c-input',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder', 'inputAutocomplete', 'readonly', 'valid'),
        type: {
            control: {type: 'select'},
            options: ['text', 'planText', 'number', 'password', 'tel', 'hidden', 'file', 'search', 'email', 'url', 'date'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'text'}
            }
        },
        step: {
            control: {type: 'number'},
            table: {
                category: "attributes",
                subcategory: "value",
            },
            if: {arg: 'type', eq: 'number'},
        },
        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
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
        pattern: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "validate",
            },
            description: "ex) [0-9]{3}-[0-9]{4}-[0-9]{4}",
        },
        'pattern-block': {
            control: {type: 'boolean'},
            table: {
                category: "attributes",
                subcategory: "validate",
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Input 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <l-input
                        type=${ifDefined(args.type)}
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
                        placeholder="${ifDefined(args.placeholder)}"
                        pattern="${ifDefined(args.pattern)}"
                        pattern-block="${ifDefined(args['pattern-block'])}"
                        value="${ifDefined(args.value)}"
                        step="${ifDefined(args.step)}"
                >
                </l-input>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    id: 'input',
    name: 'input',
    width: '100%',
    label: 'Compare Input',
    placeholder: 'Enter text...',
    value: 'Sample text',
    disabled: false,
    readonly: false,
    required: false
};

const TypeTemplate = (args) => {
    const types = ['text', 'email', 'password', 'number', 'search', 'date', 'file'];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${types.map(type => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${type}:</label>
                            <l-input
                                    type=${type}
                                    placeholder="${type} input"
                                    value=${type === 'password' ? 'password123' : type === 'number' ? '123' : type === 'date' ? '2024-01-01' : `sample ${type}`}
                            >
                            </l-input>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const Type = TypeTemplate.bind({});
Type.args = {};

const SizeTemplate = (args) => {
    const sizes = [
        { size: undefined, label: 'Default' },
        { size: 'small', label: 'Small' },
        { size: 'large', label: 'Large' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
           
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${sizes.map(({size, label}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-input
                                    type="text"
                                    size=${ifDefined(size)}
                                    placeholder="${label} input"
                                    value="${label} text"
                            >
                            </l-input>
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Normal:</label>
                        <l-input type="text" placeholder="Normal input" value="Normal text"></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Disabled:</label>
                        <l-input type="text" placeholder="Disabled input" value="Disabled text" disabled></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">ReadOnly:</label>
                        <l-input type="text" value="ReadOnly text" readonly></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Required:</label>
                        <l-input type="text" placeholder="Required input" required></l-input>
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <l-input type="text" label="Username" placeholder="Enter username"></l-input>
                    <l-input type="text" label="Email" label-align="left" placeholder="Enter email"></l-input>
                    <l-input type="text" label="Password" feedback="Password is required" feedback-type="error"></l-input>
                    <l-input type="text" label="Phone" feedback="Valid phone number" feedback-type="success" value="010-1234-5678"></l-input>
                </div>
            </div>
        </div>
    `
}

export const LabelAndFeedback = LabelAndFeedbackTemplate.bind({});
LabelAndFeedback.args = {};

const SearchFeaturesTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Search with Icon:</label>
                        <l-input type="search" placeholder="Search with icon..."></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Search Disabled:</label>
                        <l-input type="search" placeholder="Search disabled..." disabled></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Search ReadOnly:</label>
                        <l-input type="search" value="readonly search" readonly></l-input>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const SearchFeatures = SearchFeaturesTemplate.bind({});
SearchFeatures.args = {};

const ValidationTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Pattern Validation (Phone):</label>
                        <l-input type="text" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="000-0000-0000"></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Pattern Block (Korean/English/Numbers):</label>
                        <l-input type="text" pattern="^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]+$" pattern-block="true" placeholder="한글/영문/숫자만 입력"></l-input>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Max/Min Length:</label>
                        <l-input type="text" maxlength="10" minlength="3" placeholder="3-10 characters"></l-input>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const Validation = ValidationTemplate.bind({});
Validation.args = {};

const TopLabelFeedbackTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <l-input
                        type="text"
                        id="input01-isolated"
                        name="name"
                        width="100%"
                        label="label"
                        label-align="top"
                        label-width="auto"
                        label-text-align="left"
                        feedback="feedback"
                        feedback-type="normal"
                        feedback-visible-type="visible"
                ></l-input>
            </div>
        </div>
    `
}

export const TopLabelFeedback = TopLabelFeedbackTemplate.bind({});
TopLabelFeedback.args = {};

const LeftLabelFeedbackTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <l-input
                        type="text"
                        id="input02-isolated"
                        name="name"
                        width="auto"
                        label="label : "
                        label-align="left"
                        label-width="50px"
                        label-text-align="left"
                        feedback="feedback"
                        feedback-type="normal"
                        feedback-visible-type="visible"
                ></l-input>
            </div>
        </div>
    `
}

export const LeftLabelFeedback = LeftLabelFeedbackTemplate.bind({});
LeftLabelFeedback.args = {};

const RequiredValidityTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <l-input
                        type="text"
                        id="input03-isolated"
                        name="name"
                        width="100%"
                        label="label"
                        label-align="top"
                        label-width="auto"
                        label-text-align="left"
                        feedback="필수 값 입니다."
                        feedback-type="error"
                        feedback-visible-type="invalid"
                        required
                ></l-input>
            </div>
        </div>
    `
}

export const RequiredValidity = RequiredValidityTemplate.bind({});
RequiredValidity.args = {};

const SimpleInputTestTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Pure Input Test (InputStyles.js only)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                    <div style="width: 100%;">
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Default:</label>
                        <div style="width: 100%;">
                            <l-input-simple type="text" placeholder="Default input"></l-input-simple>
                        </div>
                    </div>
                    <div style="width: 100%;">
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Small:</label>
                        <div style="width: 100%;">
                            <l-input-simple type="text" size="small" placeholder="Small input"></l-input-simple>
                        </div>
                    </div>
                    <div style="width: 100%;">
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Large:</label>
                        <div style="width: 100%;">
                            <l-input-simple type="text" size="large" placeholder="Large input"></l-input-simple>
                        </div>
                    </div>
                    <div style="width: 100%;">
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Search:</label>
                        <div style="width: 100%;">
                            <l-input-simple type="search" placeholder="Search input"></l-input-simple>
                        </div>
                    </div>
                    <div style="width: 100%;">
                        <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">File:</label>
                        <div style="width: 100%;">
                            <l-input-simple type="file"></l-input-simple>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const SimpleInputTest = SimpleInputTestTemplate.bind({});
SimpleInputTest.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Input (InputStyles.js)</h3>
                <l-input
                        id="test-input-isolated"
                        type="text"
                        name="test-input-isolated"
                        label="Test Input"
                        placeholder="Enter test value"
                        value="Sample input value"
                        pattern="^[A-Za-z0-9]+$"
                        maxlength="20"
                        minlength="3"
                >
                </l-input>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const result = input.getValue();
                            document.querySelector('#isolated-getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const newValue = prompt('Enter new value:', 'TestValue123');
                            if (newValue !== null) {
                                input.setValue(newValue);
                                document.querySelector('#isolated-setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const result = input.isValid();
                            document.querySelector('#isolated-isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            input.validate();
                            document.querySelector('#isolated-validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            input.checkValidity();
                            document.querySelector('#isolated-checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const inputEl = input.querySelector('input');
                            const byteLength = inputEl ? input.getByteLength(inputEl.value) : 0;
                            document.querySelector('#isolated-getByteLength-result').textContent = byteLength + ' bytes';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getByteLength()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const inputEl = input.querySelector('input');
                            const isPatternValid = inputEl ? input.isPatternValid(inputEl.value) : true;
                            document.querySelector('#isolated-isPatternValid-result').textContent = isPatternValid ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #fd7e14; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isPatternValid()
                        </button>
                        
                        <button onclick="
                            const input = document.querySelector('#test-input-isolated');
                            const inputEl = input.querySelector('input');
                            const isRequiredValid = inputEl ? input.isRequiredValid(inputEl.value) : true;
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
