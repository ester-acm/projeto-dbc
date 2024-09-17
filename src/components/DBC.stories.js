// DBC.stories.js
import React from 'react';
import DBC from './DBC';

export default {
  title: 'Components/DBC',
  component: DBC,
  argTypes: {
    A: {
      control: 'boolean',
      description: 'Variável positiva A'
    },
    B: {
      control: 'boolean',
      description: 'Variável negativa B'
    },
    p1Connected: {
      control: 'boolean',
      description: 'Porta lógica P1 conectada'
    },
    p2Connected: {
      control: 'boolean',
      description: 'Porta lógica P2 conectada'
    }
  }
};

const Template = (args) => <DBC {...args} />;

export const Default = Template.bind({});
Default.args = {
  A: false,
  B: false,
  p1Connected: false,
  p2Connected: false
};

export const AllActive = Template.bind({});
AllActive.args = {
  A: true,
  B: true,
  p1Connected: true,
  p2Connected: true
};

export const OnlyPositive = Template.bind({});
OnlyPositive.args = {
  A: true,
  B: false,
  p1Connected: true,
  p2Connected: true
};

export const OnlyNegative = Template.bind({});
OnlyNegative.args = {
  A: false,
  B: true,
  p1Connected: true,
  p2Connected: true
};