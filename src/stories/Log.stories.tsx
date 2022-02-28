import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {getEmptyLogNode} from '../components/Log';
import {Plate, createPlugins, createBoldPlugin, MARK_BOLD, ELEMENT_PARAGRAPH} from '@udecode/plate';
import {createLogPlugin} from '../components/plugin';

export default {
  title: 'MathEquation/Log',
  component: Plate
} as ComponentMeta<typeof Plate>;

const plugins = createPlugins([
  createLogPlugin(),
]);

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const Primary = Template.bind({});

Primary.args = {

  id: "1",
  plugins,
  initialValue: [
    getEmptyLogNode(),
  ]
};

