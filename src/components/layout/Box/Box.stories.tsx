import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '.';

export default {
  title: 'Components/Layout/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#8800c2',
  color: '#fff',
  padding: 2,
  children: (
    <>
      <div>Test Box display blobk</div>
      <div>Test Box display blobk</div>
      <div>Test Box display blobk</div>
    </>
  ),
};

export const InlineBlock = Template.bind({});
InlineBlock.args = {
  display: 'inline-block',
  backgroundColor: '#8800c2',
  color: '#fff',
  padding: 2,
  children: (
    <>
      <div>Test Box display inline-blobk</div>
      <div>Test Box display inline-blobk</div>
      <div>Test Box display inline-blobk</div>
    </>
  ),
};

export const Flex = Template.bind({});
Flex.args = {
  display: 'flex',
  backgroundColor: '#8800c2',
  color: '#fff',
  justifyContent: 'space-between',
  padding: 2,
  children: (
    <>
      <div>Test Box display flex</div>
      <div>Test Box display flex</div>
      <div>Test Box display flex</div>
    </>
  ),
};
