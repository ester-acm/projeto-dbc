// DBC.stories.js
import React from 'react';
import DBC from './DBC';

export default {
  title: 'Components/DBC',
  component: DBC,
  argTypes: {
    A: {
      control: 'boolean',
      description: 'Coluna A+ (Positiva)'
    },
    B: {
      control: 'boolean',
      description: 'Coluna B- (Negativa)'
    },
    p1Connected: {
      control: 'boolean',
      description: 'Porta de conexão P1'
    },
    p2Connected: {
      control: 'boolean',
      description: 'Porta de conexão P2'
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
  p1Connected: false,
  p2Connected: false
};

export const OnlyPositive = Template.bind({});
OnlyPositive.args = {
  A: true,
  B: false,
  p1Connected: false,
  p2Connected: false
};

export const OnlyNegative = Template.bind({});
OnlyNegative.args = {
  A: false,
  B: true,
  p1Connected: false,
  p2Connected: false
};

export const LEDOn = Template.bind({});
LEDOn.args = {
  A: true,
  B: true,
  p1Connected: false,
  p2Connected: false
};

export const LEDOff = Template.bind({});
LEDOff.args = {
  A: true,
  B: false,
  p1Connected: false,
  p2Connected: false
};