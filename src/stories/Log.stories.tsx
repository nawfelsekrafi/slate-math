import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Plate, createPlugins, TElement } from '@udecode/plate'
import { createLogPlugin } from '../components/plugin'
import {
  getEmptyLogarithmNode,
  getEmptyLogarithmToBaseTenNode,
  getEmptyNaturalLogarithmNode,
  getLogarithmToBaseNnode,
} from '../components/Log/getEmptyLogNode'

export default {
  title: 'MathEquation/Log',
  component: Plate,
} as ComponentMeta<typeof Plate>

const plugins = createPlugins([createLogPlugin()])

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />

export const NaturalLogarithm = Template.bind({})
export const Logarithm = Template.bind({})
export const LogarithmToBaseTen = Template.bind({})
export const LogarithmToBaseN = Template.bind({})

NaturalLogarithm.args = {
  id: '1',
  plugins,
  initialValue: [getEmptyNaturalLogarithmNode()],
}

Logarithm.args = {
  id: '2',
  plugins,
  initialValue: [getEmptyLogarithmNode()],
}

LogarithmToBaseTen.args = {
  id: '3',
  plugins,
  initialValue: [getEmptyLogarithmToBaseTenNode()],
}
LogarithmToBaseN.args = {
  id: '4',
  plugins,
  initialValue: [getLogarithmToBaseNnode()],
}
