import '/src/components/text/Feedback.js'
import '/src/components/text/Feedback_Isolated.js'
import {ifDefined} from 'lit/directives/if-defined.js';
import {html} from "lit";
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'Components/Feedback Comparison',
    tags: ['autodocs'],
    component: 'l-feedback',
    argTypes: {
        feedback: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                defaultValue: {summary: ''}
            },
            description: "Feedback message text"
        },
        'feedback-type': {
            control: {type: 'select'},
            options: ['normal', 'hint', 'error'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'normal'}
            },
            description: "Type of feedback message"
        },
        width: {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style"
            },
            description: "Width of the feedback container"
        },
        'label-align': {
            control: {type: 'select'},
            options: ['left', 'top'],
            table: {
                category: "attributes",
                defaultValue: {summary: 'top'}
            },
            description: "Label alignment that affects padding"
        },
        'left-margin': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style"
            },
            description: "Left margin for alignment with form elements"
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'SharedStyles.js 의존성 제거 검증을 위한 Feedback 컴포넌트 비교 스토리'
            }
        }
    }
};

const ComparisonTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <l-feedback
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        width=${ifDefined(args.width)}
                        label-align=${ifDefined(args['label-align'])}
                        left-margin=${ifDefined(args['left-margin'])}
                >
                </l-feedback>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <l-feedback-isolated
                        feedback=${ifDefined(args.feedback)}
                        feedback-type=${ifDefined(args['feedback-type'])}
                        width=${ifDefined(args.width)}
                        label-align=${ifDefined(args['label-align'])}
                        left-margin=${ifDefined(args['left-margin'])}
                >
                </l-feedback-isolated>
            </div>
        </div>
    `
}

export const DefaultComparison = ComparisonTemplate.bind({});
DefaultComparison.args = {
    feedback: 'This is a feedback message',
    'feedback-type': 'normal',
    width: '300px',
    'label-align': 'top',
    'left-margin': '0px'
};

const FeedbackTypeComparisonTemplate = (args) => {
    const feedbackTypes = [
        { type: 'normal', label: 'Normal', message: 'This is a normal feedback message' },
        { type: 'hint', label: 'Hint', message: 'This is a hint feedback message' },
        { type: 'error', label: 'Error', message: 'This is an error feedback message' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${feedbackTypes.map(({type, label, message}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-feedback
                                    feedback="${message}"
                                    feedback-type="${type}"
                                    width="100%"
                            >
                            </l-feedback>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${feedbackTypes.map(({type, label, message}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <l-feedback-isolated
                                    feedback="${message}"
                                    feedback-type="${type}"
                                    width="100%"
                            >
                            </l-feedback-isolated>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const FeedbackTypeComparison = FeedbackTypeComparisonTemplate.bind({});
FeedbackTypeComparison.args = {};

const LabelAlignComparisonTemplate = (args) => {
    const alignments = [
        { align: 'top', label: 'Top Aligned', margin: '0px' },
        { align: 'left', label: 'Left Aligned', margin: '120px' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label, margin}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-feedback
                                        feedback="Feedback message with ${align} alignment"
                                        feedback-type="normal"
                                        width="100%"
                                        label-align="${align}"
                                        left-margin="${margin}"
                                >
                                </l-feedback>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${alignments.map(({align, label, margin}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-feedback-isolated
                                        feedback="Feedback message with ${align} alignment"
                                        feedback-type="normal"
                                        width="100%"
                                        label-align="${align}"
                                        left-margin="${margin}"
                                >
                                </l-feedback-isolated>
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

const WidthComparisonTemplate = (args) => {
    const widths = [
        { width: '200px', label: '200px' },
        { width: '50%', label: '50%' },
        { width: '100%', label: '100%' },
        { width: 'auto', label: 'auto' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${widths.map(({width, label}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Width ${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-feedback
                                        feedback="Feedback message with width ${label}"
                                        feedback-type="normal"
                                        width="${width}"
                                >
                                </l-feedback>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${widths.map(({width, label}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">Width ${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa;">
                                <l-feedback-isolated
                                        feedback="Feedback message with width ${label}"
                                        feedback-type="normal"
                                        width="${width}"
                                >
                                </l-feedback-isolated>
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

const LongTextComparisonTemplate = (args) => {
    const longTexts = [
        { text: 'Short message', label: 'Short' },
        { text: 'This is a medium length feedback message that should fit normally', label: 'Medium' },
        { text: 'This is a very long feedback message that should be truncated with ellipsis because it exceeds the available width and demonstrates the text-overflow behavior', label: 'Long (Ellipsis)' }
    ];
    
    return html`
        <div style="display: flex; gap: 2rem;">
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${longTexts.map(({text, label}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa; width: 300px;">
                                <l-feedback
                                        feedback="${text}"
                                        feedback-type="normal"
                                        width="100%"
                                >
                                </l-feedback>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
            <div style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                    ${longTexts.map(({text, label}) => html`
                        <div>
                            <label style="display: block; margin-bottom: 4px; font-weight: bold; color: #555;">${label}:</label>
                            <div style="border: 1px solid #ddd; padding: 8px; background: #f8f9fa; width: 300px;">
                                <l-feedback-isolated
                                        feedback="${text}"
                                        feedback-type="normal"
                                        width="100%"
                                >
                                </l-feedback-isolated>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `
}

export const LongTextComparison = LongTextComparisonTemplate.bind({});
LongTextComparison.args = {};

const FunctionTestingTemplate = (args) => {
    return html`
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Original Feedback (SharedStyles.js)</h3>
                <l-feedback
                        id="test-feedback-original"
                        feedback="This is a test feedback message"
                        feedback-type="normal"
                        width="100%"
                        label-align="top"
                        left-margin="0px"
                >
                </l-feedback>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const result = feedback.feedback;
                            document.querySelector('#original-feedback-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get feedback
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const newFeedback = prompt('Enter new feedback:', 'Updated feedback message');
                            if (newFeedback !== null) {
                                feedback.feedback = newFeedback;
                                document.querySelector('#original-setFeedback-result').textContent = 'Set to: ' + newFeedback;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set feedback
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const result = feedback['feedback-type'];
                            document.querySelector('#original-feedbackType-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get type
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const types = ['normal', 'hint', 'error'];
                            const currentType = feedback['feedback-type'];
                            const currentIndex = types.indexOf(currentType);
                            const newType = types[(currentIndex + 1) % types.length];
                            feedback['feedback-type'] = newType;
                            document.querySelector('#original-setType-result').textContent = 'Set to: ' + newType;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle type
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const result = feedback.width;
                            document.querySelector('#original-width-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get width
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-original');
                            const widths = ['100%', '50%', '300px', 'auto'];
                            const currentWidth = feedback.width;
                            const currentIndex = widths.indexOf(currentWidth);
                            const newWidth = widths[(currentIndex + 1) % widths.length];
                            feedback.width = newWidth;
                            document.querySelector('#original-setWidth-result').textContent = 'Set to: ' + newWidth;
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle width
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>feedback:</strong> <span id="original-feedback-result">-</span></div>
                        <div><strong>setFeedback:</strong> <span id="original-setFeedback-result">-</span></div>
                        <div><strong>feedback-type:</strong> <span id="original-feedbackType-result">-</span></div>
                        <div><strong>setType:</strong> <span id="original-setType-result">-</span></div>
                        <div><strong>width:</strong> <span id="original-width-result">-</span></div>
                        <div><strong>setWidth:</strong> <span id="original-setWidth-result">-</span></div>
                    </div>
                </div>
            </div>
            
            <div style="flex: 1; border: 1px solid #ddd; padding: 16px; border-radius: 8px;">
                <h3 style="margin: 0 0 1rem 0; color: #333; font-size: 1rem;">Isolated Feedback (FeedbackStyles.js)</h3>
                <l-feedback-isolated
                        id="test-feedback-isolated"
                        feedback="This is a test feedback message"
                        feedback-type="normal"
                        width="100%"
                        label-align="top"
                        left-margin="0px"
                >
                </l-feedback-isolated>
                
                <div style="margin-top: 16px; padding: 12px; background: #f8f9fa; border-radius: 4px;">
                    <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Function Testing</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const result = feedback.feedback;
                            document.querySelector('#isolated-feedback-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #007bff; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get feedback
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const newFeedback = prompt('Enter new feedback:', 'Updated feedback message');
                            if (newFeedback !== null) {
                                feedback.feedback = newFeedback;
                                document.querySelector('#isolated-setFeedback-result').textContent = 'Set to: ' + newFeedback;
                            }
                        " style="padding: 4px 8px; font-size: 12px; background: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Set feedback
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const result = feedback['feedback-type'];
                            document.querySelector('#isolated-feedbackType-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #17a2b8; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get type
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const types = ['normal', 'hint', 'error'];
                            const currentType = feedback['feedback-type'];
                            const currentIndex = types.indexOf(currentType);
                            const newType = types[(currentIndex + 1) % types.length];
                            feedback['feedback-type'] = newType;
                            document.querySelector('#isolated-setType-result').textContent = 'Set to: ' + newType;
                        " style="padding: 4px 8px; font-size: 12px; background: #ffc107; color: black; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle type
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const result = feedback.width;
                            document.querySelector('#isolated-width-result').textContent = result || 'null';
                        " style="padding: 4px 8px; font-size: 12px; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Get width
                        </button>
                        
                        <button onclick="
                            const feedback = document.querySelector('#test-feedback-isolated');
                            const widths = ['100%', '50%', '300px', 'auto'];
                            const currentWidth = feedback.width;
                            const currentIndex = widths.indexOf(currentWidth);
                            const newWidth = widths[(currentIndex + 1) % widths.length];
                            feedback.width = newWidth;
                            document.querySelector('#isolated-setWidth-result').textContent = 'Set to: ' + newWidth;
                        " style="padding: 4px 8px; font-size: 12px; background: #e83e8c; color: white; border: none; border-radius: 3px; cursor: pointer;">
                            Cycle width
                        </button>
                    </div>
                    
                    <div style="font-size: 12px; line-height: 1.4; color: #666;">
                        <div><strong>feedback:</strong> <span id="isolated-feedback-result">-</span></div>
                        <div><strong>setFeedback:</strong> <span id="isolated-setFeedback-result">-</span></div>
                        <div><strong>feedback-type:</strong> <span id="isolated-feedbackType-result">-</span></div>
                        <div><strong>setType:</strong> <span id="isolated-setType-result">-</span></div>
                        <div><strong>width:</strong> <span id="isolated-width-result">-</span></div>
                        <div><strong>setWidth:</strong> <span id="isolated-setWidth-result">-</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export const FunctionTesting = FunctionTestingTemplate.bind({});
FunctionTesting.args = {};