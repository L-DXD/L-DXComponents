import '/src/components/text/Label.js'
import '/src/components/text/Label_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Label Comparison',
    tags: ['autodocs'],
    component: 'l-label',
    argTypes: {
        label: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Label text to display"
        },
        id: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "HTML id attribute for the label"
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'top'}
            },
            description: "Label alignment - left or top"
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
        required: {
            control: {type: 'select'},
            options: ['true', 'false'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'false'}
            },
            description: "Shows required asterisk when true"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Label 컴포넌트 비교 스토리'
            }
        }
    }
};

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <l-label
                        label=${ifDefined(args.label)}
                        id=${ifDefined(args.id)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        required=${ifDefined(args.required)}
                >
                </l-label>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <l-label-isolated
                        label=${ifDefined(args.label)}
                        id=${ifDefined(args.id)}
                        label-align=${ifDefined(args['label-align'])}
                        label-width=${ifDefined(args['label-width'])}
                        label-text-align=${ifDefined(args['label-text-align'])}
                        required=${ifDefined(args.required)}
                >
                </l-label-isolated>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    label: 'Sample Label',
    id: 'sample-input',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    required: 'false'
};

const LabelAlignComparisonTemplate = (args) => {
    const alignments = [
        { align: 'top', label: 'Top Aligned' },
        { align: 'left', label: 'Left Aligned' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label
                                        label="Form Label"
                                        id="test-input-${align}"
                                        label-align="${align}"
                                        label-width="120px"
                                        label-text-align="left"
                                        required="false"
                                >
                                </l-label>
                                <input type="text" id="test-input-${align}" placeholder="Sample input" style="margin-left: ${align === 'left' ? '10px' : '0'}; margin-top: ${align === 'top' ? '8px' : '0'};">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label-isolated
                                        label="Form Label"
                                        id="test-input-isolated-${align}"
                                        label-align="${align}"
                                        label-width="120px"
                                        label-text-align="left"
                                        required="false"
                                >
                                </l-label-isolated>
                                <input type="text" id="test-input-isolated-${align}" placeholder="Sample input" style="margin-left: ${align === 'left' ? '10px' : '0'}; margin-top: ${align === 'top' ? '8px' : '0'};">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const LabelAlignComparison = LabelAlignComparisonTemplate.bind({});
LabelAlignComparison.args = {};

const RequiredComparisonTemplate = (args) => {
    const requiredStates = [
        { required: 'false', label: 'Not Required' },
        { required: 'true', label: 'Required' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${requiredStates.map(({required, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label
                                        label="Form Label"
                                        id="test-required-${required}"
                                        label-align="left"
                                        label-width="120px"
                                        label-text-align="left"
                                        required="${required}"
                                >
                                </l-label>
                                <input type="text" id="test-required-${required}" placeholder="Sample input" style="margin-left: 10px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${requiredStates.map(({required, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label-isolated
                                        label="Form Label"
                                        id="test-required-isolated-${required}"
                                        label-align="left"
                                        label-width="120px"
                                        label-text-align="left"
                                        required="${required}"
                                >
                                </l-label-isolated>
                                <input type="text" id="test-required-isolated-${required}" placeholder="Sample input" style="margin-left: 10px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const RequiredComparison = RequiredComparisonTemplate.bind({});
RequiredComparison.args = {};

const TextAlignComparisonTemplate = (args) => {
    const textAlignments = [
        { align: 'left', label: 'Left Aligned' },
        { align: 'center', label: 'Center Aligned' },
        { align: 'right', label: 'Right Aligned' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${textAlignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label
                                        label="Form Label"
                                        id="test-textalign-${align}"
                                        label-align="top"
                                        label-width="200px"
                                        label-text-align="${align}"
                                        required="false"
                                >
                                </l-label>
                                <input type="text" id="test-textalign-${align}" placeholder="Sample input" style="margin-top: 8px; width: 200px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${textAlignments.map(({align, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label-isolated
                                        label="Form Label"
                                        id="test-textalign-isolated-${align}"
                                        label-align="top"
                                        label-width="200px"
                                        label-text-align="${align}"
                                        required="false"
                                >
                                </l-label-isolated>
                                <input type="text" id="test-textalign-isolated-${align}" placeholder="Sample input" style="margin-top: 8px; width: 200px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const TextAlignComparison = TextAlignComparisonTemplate.bind({});
TextAlignComparison.args = {};

const WidthComparisonTemplate = (args) => {
    const widths = [
        { width: 'auto', label: 'Auto Width' },
        { width: '100px', label: '100px Width' },
        { width: '200px', label: '200px Width' },
        { width: '50%', label: '50% Width' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${widths.map(({width, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label
                                        label="Form Label Text"
                                        id="test-width-${width}"
                                        label-align="left"
                                        label-width="${width}"
                                        label-text-align="left"
                                        required="false"
                                >
                                </l-label>
                                <input type="text" id="test-width-${width}" placeholder="Sample input" style="margin-left: 10px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${widths.map(({width, label}) => html`
                        <div>
                            <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${label}:</h4>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-label-isolated
                                        label="Form Label Text"
                                        id="test-width-isolated-${width}"
                                        label-align="left"
                                        label-width="${width}"
                                        label-text-align="left"
                                        required="false"
                                >
                                </l-label-isolated>
                                <input type="text" id="test-width-isolated-${width}" placeholder="Sample input" style="margin-left: 10px;">
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const WidthComparison = WidthComparisonTemplate.bind({});
WidthComparison.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Label (common.css)</h3>
                <l-label
                        id="test-label-original"
                        label="Test Label"
                        label-align="left"
                        label-width="150px"
                        label-text-align="left"
                        required="false"
                >
                </l-label>
                <input type="text" id="test-input-original" placeholder="Sample input" style="margin-left: 10px;">
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const label = document.querySelector('#test-label-original');
                            const result = label.label;
                            document.querySelector('#original-label-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get label
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-original');
                            const newLabel = prompt('Enter new label:', 'Updated Label');
                            if (newLabel !== null) {
                                label.label = newLabel;
                                document.querySelector('#original-setLabel-result').textContent = 'Set to: ' + newLabel;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set label
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-original');
                            const currentRequired = label.required;
                            const newRequired = currentRequired === 'true' ? 'false' : 'true';
                            label.required = newRequired;
                            document.querySelector('#original-required-result').textContent = 'Set to: ' + newRequired;
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Toggle required
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-original');
                            const currentAlign = label['label-align'];
                            const newAlign = currentAlign === 'left' ? 'top' : 'left';
                            label['label-align'] = newAlign;
                            document.querySelector('#original-align-result').textContent = 'Set to: ' + newAlign;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Toggle align
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-original');
                            const widths = ['auto', '100px', '150px', '200px'];
                            const currentWidth = label['label-width'];
                            const currentIndex = widths.indexOf(currentWidth);
                            const newWidth = widths[(currentIndex + 1) % widths.length];
                            label['label-width'] = newWidth;
                            document.querySelector('#original-width-result').textContent = 'Set to: ' + newWidth;
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle width
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>label:</strong> <span id="original-label-result">-</span></div>
                        <div><strong>setLabel:</strong> <span id="original-setLabel-result">-</span></div>
                        <div><strong>required:</strong> <span id="original-required-result">-</span></div>
                        <div><strong>label-align:</strong> <span id="original-align-result">-</span></div>
                        <div><strong>label-width:</strong> <span id="original-width-result">-</span></div>
                    </div>
                </div>
            </div>
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Label (LabelStyles.js)</h3>
                <l-label-isolated
                        id="test-label-isolated"
                        label="Test Label"
                        label-align="left"
                        label-width="150px"
                        label-text-align="left"
                        required="false"
                >
                </l-label-isolated>
                <input type="text" id="test-input-isolated" placeholder="Sample input" style="margin-left: 10px;">
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const label = document.querySelector('#test-label-isolated');
                            const result = label.label;
                            document.querySelector('#isolated-label-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get label
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-isolated');
                            const newLabel = prompt('Enter new label:', 'Updated Label');
                            if (newLabel !== null) {
                                label.label = newLabel;
                                document.querySelector('#isolated-setLabel-result').textContent = 'Set to: ' + newLabel;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set label
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-isolated');
                            const currentRequired = label.required;
                            const newRequired = currentRequired === 'true' ? 'false' : 'true';
                            label.required = newRequired;
                            document.querySelector('#isolated-required-result').textContent = 'Set to: ' + newRequired;
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Toggle required
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-isolated');
                            const currentAlign = label['label-align'];
                            const newAlign = currentAlign === 'left' ? 'top' : 'left';
                            label['label-align'] = newAlign;
                            document.querySelector('#isolated-align-result').textContent = 'Set to: ' + newAlign;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Toggle align
                        </button>
                        
                        <button onclick="
                            const label = document.querySelector('#test-label-isolated');
                            const widths = ['auto', '100px', '150px', '200px'];
                            const currentWidth = label['label-width'];
                            const currentIndex = widths.indexOf(currentWidth);
                            const newWidth = widths[(currentIndex + 1) % widths.length];
                            label['label-width'] = newWidth;
                            document.querySelector('#isolated-width-result').textContent = 'Set to: ' + newWidth;
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle width
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>label:</strong> <span id="isolated-label-result">-</span></div>
                        <div><strong>setLabel:</strong> <span id="isolated-setLabel-result">-</span></div>
                        <div><strong>required:</strong> <span id="isolated-required-result">-</span></div>
                        <div><strong>label-align:</strong> <span id="isolated-align-result">-</span></div>
                        <div><strong>label-width:</strong> <span id="isolated-width-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};