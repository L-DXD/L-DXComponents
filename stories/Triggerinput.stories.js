import '/src/components/input/TriggerInput.js'
import {html} from "lit";
import {ifDefined} from 'lit/directives/if-defined.js';
import {getComponentArgs} from "./commons/CommonArgs.js";

export default {
    title: 'LABEL & FEEDBACK & COMPONENTS/TriggerInput',
    tags: ['autodocs'],
    component: 'l-c-triggerinput',
    argTypes: {
        ...getComponentArgs('commons', 'value', 'size', 'label', 'feedback', 'required', 'placeholder', 'inputAutocomplete', 'readonly', 'valid'),
        handleTrigger: {
            control: 'function'
            , table: {
                category: "instance",
                subcategory: "property",
            }
            ,description: "사용자 입력(예: 엔터키 입력, 돋보기 아이콘 클릭) 시 실행되는 트리거 함수를 지정하는 인스턴스 속성입니다.",
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
        'component-style': {
            control: {type: 'text'},
            table: {
                category: "attributes",
                subcategory: "style",
            },
            description: "main component style"
        },
    },
};

const Template = (args) => {
    return html`
        <l-c-triggerinput
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
                id=${ifDefined(args.id)}
                name=${ifDefined(args.name)}
                width=${ifDefined(args.width)}
                maxlength=${ifDefined(args.maxlength)}
                minlength=${ifDefined(args.minlength)}
                ?required=${args.required}
                ?disabled=${args.disabled}
                ?readonly=${args.readonly}
                placeholder="${ifDefined(args.placeholder)}"
                pattern="${ifDefined(args.pattern)}"
                value="${ifDefined(args.value)}"
        >
</l-c-triggerinput>
<script type="application/javascript">
    const log = (value) => {
        console.log(value);
    };

    const triggerComponent = document.getElementById('input01');
    triggerComponent.handleTrigger = log;
</script>
    `
}



export const TriggerInputWithTopLabelAndFeedback = Template.bind({});
TriggerInputWithTopLabelAndFeedback.args = {
    id: 'input01',
    name: 'name',
    width: '100%',
    label: 'label',
    'label-align': 'top',
    'label-width': 'auto',
    'label-text-align': 'left',
    feedback: 'feedback',
    'feedback-type': 'normal',
    'feedback-visible-type': 'visible',
    required: false,
    disabled: false,
    readonly: false,
};