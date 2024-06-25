import { fn } from '@storybook/test';
import { DXInput } from '@/components/Input.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: (args) => DXInput(args),
  argTypes: {
    labelAlign: {
      control: { type: 'select' },
      options: ['front', 'top'],
    },
    isRequired: { control: 'boolean' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Text input',
    id:'input01'
  },
};
