import '/src/components/MyElement.js'
import {html} from "lit";


export default {
  title: 'Example/MyElement',
  component: 'my-element',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};


const Template = (args) => {
  return html`
    <my-element title=${args.title} content=${args.content}></my-element>`
}

export const Default = Template.bind({});
Default.args = {
  title: 'Hello World',
  content: 'Contents',
};

