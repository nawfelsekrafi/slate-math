import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins, getPlateEditorRef} from '@udecode/plate';
import {createAccentPlugin, createFractionPlugin} from '../components/plugin';
import { getDotAccentNode } from '../components/Accent';
import { getEmptyFractionNode } from '../components/Fraction';


export default {
  title: 'MathEquation/Fraction',
  component: Plate,
} as ComponentMeta<typeof Plate>

const plugins = createPlugins([createFractionPlugin()])

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />

export const RightwardArrowAbove = Template.bind({})
const editor = getPlateEditorRef()!

RightwardArrowAbove.args = {
  id: '1',
  plugins,
  initialValue: [
    getEmptyFractionNode(),
  ]
};
