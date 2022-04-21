import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins, getPlateEditorRef} from '@udecode/plate';
import {createAccentPlugin} from '../components/plugin';
import { getDotAccentNode } from '../components/Accent';


export default {
  title: 'MathEquation/Accent',
  component: Plate,
} as ComponentMeta<typeof Plate>

const plugins = createPlugins([createAccentPlugin()])

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />

export const RightwardArrowAbove = Template.bind({})
const editor = getPlateEditorRef()!

RightwardArrowAbove.args = {
  id: '1',
  plugins,
  initialValue: [
    getDotAccentNode(),
  ]
};
