import '/src/components/button/Button.js'
import '/src/components/button/Button_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "../commons/CommonArgs.js";

export default {
    title: 'Components/Button Comparison',
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

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Button (SharedStyles.js)</h3>
                <l-button
                        theme=${ifDefined(args.theme)}
                        size=${ifDefined(args.size)}
                        id=${ifDefined(args.id)}
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
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Button (ButtonStyles.js)</h3>
                <l-button-isolated
                        theme=${ifDefined(args.theme)}
                        size=${ifDefined(args.size)}
                        id=${ifDefined(args.id ? args.id + '-isolated' : undefined)}
                        name=${ifDefined(args.name)}
                        width=${ifDefined(args.width)}
                        label=${ifDefined(args.label)}
                        value="${ifDefined(args.value)}"
                        icon-path="${ifDefined(args['icon-path'])}"
                        ?outline=${args.outline}
                        ?disabled=${args.disabled}
                        ?readonly=${args.readonly}
                >
                </l-button-isolated>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    id: 'button-comparison',
    name: 'comparison-button',
    width: '120px',
    label: 'Compare Button',
    theme: 'primary',
    disabled: false,
    readonly: false,
    outline: false
};

const AllThemesComparisonTemplate = (args) => {
    const themes = ['default', 'primary', 'secondary', 'light', 'dark', 'info', 'purple', 'indigo', 'link', 'danger', 'pink', 'orange', 'light-orange', 'yellow', 'lime', 'teal', 'green'];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Button (SharedStyles.js)</h3>
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
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${themes.map(theme => html`
                        <l-button-isolated
                                theme=${theme}
                                label=${theme}
                                ?outline=${args.outline}
                        >
                        </l-button-isolated>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const AllThemesComparison = AllThemesComparisonTemplate.bind({});
AllThemesComparison.args = {
    outline: false
};

export const AllOutlineThemesComparison = AllThemesComparisonTemplate.bind({});
AllOutlineThemesComparison.args = {
    outline: true
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Button (SharedStyles.js)</h3>
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
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    ${sizes.map(({size, label}) => html`
                        <l-button-isolated
                                theme="primary"
                                size=${ifDefined(size)}
                                label="${label} Button"
                        >
                        </l-button-isolated>
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
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Button (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button theme="primary" label="Normal Button"></l-button>
                    <l-button theme="primary" label="Disabled Button" disabled></l-button>
                    <l-button theme="primary" label="ReadOnly Button" readonly></l-button>
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button-isolated theme="primary" label="Normal Button"></l-button-isolated>
                    <l-button-isolated theme="primary" label="Disabled Button" disabled></l-button-isolated>
                    <l-button-isolated theme="primary" label="ReadOnly Button" readonly></l-button-isolated>
                </div>
            </div>
        </div>
    `
}

export const StateComparison = StateComparisonTemplate.bind({});
StateComparison.args = {};

const IconComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Button (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button theme="primary" label="No Icon"></l-button>
                    <l-button theme="primary" label="With Icon" icon-path="/src/search-svgrepo-com.svg"></l-button>
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Button (ButtonStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
                    <l-button-isolated theme="primary" label="No Icon"></l-button-isolated>
                    <l-button-isolated theme="primary" label="With Icon" icon-path="/src/search-svgrepo-com.svg"></l-button-isolated>
                </div>
            </div>
        </div>
    `
}

export const IconComparison = IconComparisonTemplate.bind({});
IconComparison.args = {};