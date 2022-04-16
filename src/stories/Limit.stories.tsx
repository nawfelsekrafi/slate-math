import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins, createBoldPlugin, MARK_BOLD, ELEMENT_PARAGRAPH} from '@udecode/plate';
import { getEmptyLimNode, getLimToInfinityNode } from '../components/Limit/getEmptyLimNode';
import {createLimitPlugin, createMathPlugins} from '../components/plugin';
import { getLimitDropDownMenu } from '../components/Limit/constants';


export default {
  title: 'MathEquation/Limit',
  component: Plate,
} as ComponentMeta<typeof Plate>;

const plugins = createMathPlugins();

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const Limit = Template.bind({});
export const LimitToInfinity = Template.bind({});

Limit.args = {
  id: '1',
  plugins,
  initialValue: [getEmptyLimNode()],
}

LimitToInfinity.args = {
  id: '2',
  plugins,
  initialValue: [getLimToInfinityNode()],
}
