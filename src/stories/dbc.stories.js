// DBC.stories.js

import { DBC } from 'src/stories/DBC';

export default {
  title: 'Components/DBC',
  component: DBC,
};

const Template = (args) => DBC(args);

export const Default = Template.bind({});
Default.args = {};