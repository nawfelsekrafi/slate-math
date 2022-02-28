import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins, createBoldPlugin, MARK_BOLD, ELEMENT_PARAGRAPH} from '@udecode/plate';
import { getEmptyLimNode } from '../components/Limit/getEmptyLimNode';
import {createLimitPlugin} from '../components/plugin';


export default {
  title: 'MathEquation/Limit',
  component: Plate,
} as ComponentMeta<typeof Plate>;

const plugins = createPlugins([
  createLimitPlugin(),
]);

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "1",
  plugins,
  initialValue: [
    getEmptyLimNode(),
  ]
};
