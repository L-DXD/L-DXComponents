
import '/src/components/button/Button.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    component: 'l-button',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'readonly'),
        theme: {
            control: {type: 'select'},
            options: ['default', 'primary', 'secondary', 'light'
                , 'dark', 'info', 'purple', 'indigo', 'link', 'danger'
                , 'pink', 'orange', 'light-orange', 'yellow', 'lime', 'teal', 'green'
            ],
            table: {
                category: "attributes",
                defaultValue: {summary: 'default'}
            }
        },

        label: {
            table: {
                category: "attributes",
                subcategory: "text",
            }
        },

        outline: {
            control: 'boolean',
            table: {
                category: "attributes",
                defaultValue: {summary: false}
            }
        },
        'icon-path': {
            control: 'text'
            , table: {
                category: "attributes",
            }
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Button 컴포넌트 비교 스토리'
            }
        }
    }
};

const Template = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <l-button
                        theme=${ifDefined(args.theme)}
                        size=${ifDefined(args.size)}
                        id=${ifDefined(args.id ? args.id + '' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        label=${ifDefined(args.label)}
                        value="${ifDefined(args.value)}"
                        icon-path="${ifDefined(args['icon-path'])}"
                        ?outline=${args.outline}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                >
                </l-button>
            </div>
        </div>
    `
}

export const Default = Template.bind({});
Default.args = {
    id: 'button',
    name: 'button',
    width: '120px',
    label: 'Compare Button',
    theme: 'primary',
    disabled: false,
    readonly: false,
    outline: false
};

const AllThemesTemplate = (args) => {
    const themes = ['default', 'primary', 'secondary', 'light', 'dark', 'info', 'purple', 'indigo', 'link', 'danger', 'pink', 'orange', 'light-orange', 'yellow', 'lime', 'teal', 'green'];
    
    return html`
        <div style="display: flex; gap: 2rem;">
           
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${themes.map(theme => html`
                        <l-button
                                theme=${theme}
                                label=${theme}
                                ?outline=${args.outline}
                        >
                        </l-button>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const AllThemes = AllThemesTemplate.bind({});
AllThemes.args = {
    outline: false
};

export const AllOutlineThemes = AllThemesTemplate.bind({});
AllOutlineThemes.args = {
    outline: true
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    ${sizes.map(({size, label}) => html`
                        <l-button
                                theme="primary"
                                size=${ifDefined(size)}
                                label="${label} Button"
                        >
                        </l-button>
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button theme="primary" label="Normal Button"></l-button>
                    <l-button theme="primary" label="Disabled Button" disabled></l-button>
                    <l-button theme="primary" label="ReadOnly Button" readonly></l-button>
                </div>
            </div>
        </div>
    `
}

export const State = StateTemplate.bind({});
State.args = {};

const IconTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button theme="primary" label="No Icon"></l-button>
                    <l-button theme="primary" label="With Icon" icon-path="/src/search-svgrepo-com.svg"></l-button>
                </div>
            </div>
        </div>
    `
}

export const Icon = IconTemplate.bind({});
Icon.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Button (ButtonStyles.js)</h3>
                <l-button
                        id="test-button"
                        name="test-button"
                        theme="primary"
                        label="Test Button"
                        value="value"
                >
                </l-button>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            const result = btn.getValue();
                            document.querySelector('#getValue-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getValue()
                        </button>
                        
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            const newValue = prompt('Enter new value:', 'test-value');
                            if (newValue !== null) {
                                btn.setValue(newValue);
                                document.querySelector('#setValue-result').textContent = 'Set to: ' + newValue;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            setValue()
                        </button>
                        
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            const result = btn.isValid();
                            document.querySelector('#isValid-result').textContent = result ? 'true' : 'false';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            isValid()
                        </button>
                        
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            btn.validate();
                            document.querySelector('#validate-result').textContent = 'Validation executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            validate()
                        </button>
                        
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            btn.checkValidity();
                            document.querySelector('#checkValidity-result').textContent = 'checkValidity executed';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            checkValidity()
                        </button>
                        
                        <button onclick="
                            const btn = document.querySelector('#test-button');
                            const component = btn.getComponent();
                            document.querySelector('#getComponent-result').textContent = component ? component.tagName : 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            getComponent()
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>getValue():</strong> <span id="getValue-result">-</span></div>
                        <div><strong>setValue():</strong> <span id="setValue-result">-</span></div>
                        <div><strong>isValid():</strong> <span id="isValid-result">-</span></div>
                        <div><strong>validate():</strong> <span id="validate-result">-</span></div>
                        <div><strong>checkValidity():</strong> <span id="checkValidity-result">-</span></div>
                        <div><strong>getComponent():</strong> <span id="getComponent-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};