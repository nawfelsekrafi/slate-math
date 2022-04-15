import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins, createBoldPlugin, MARK_BOLD, ELEMENT_PARAGRAPH} from '@udecode/plate';
import { getEmptyLimNode } from '../components/Limit/getEmptyLimNode';
import {createLimitPlugin, createMathPlugins} from '../components/plugin';


export default {
  title: 'MathEquation/Limit',
  component: Plate,
} as ComponentMeta<typeof Plate>;

const plugins = createMathPlugins();

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const LimitWithUnderscripts = Template.bind({});

LimitWithUnderscripts.args = {
  id: "1",
  plugins,
  initialValue: [
    getEmptyLimNode(),
  ]
};
