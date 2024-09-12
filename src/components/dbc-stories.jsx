// src/components/stories/MyButton.stories.jsx
import React from 'react';
import MyButton from '../MyButton';

export default {
  title: 'Components/MyButton',
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};