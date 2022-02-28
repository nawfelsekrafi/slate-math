import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {LogComponent} from '../components/Log';
import {Plate, createPlugins, createParagraphPlugin, createBoldPlugin, MARK_BOLD, ELEMENT_PARAGRAPH} from '@udecode/plate';
import {CONFIG} from "../config";

export default {
  title:'PlateWithPlugin',
  component: Plate
} as ComponentMeta<typeof Plate>;

const plugins = createPlugins([
  createParagraphPlugin(),
  createBoldPlugin(),
]);

const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "1",
  plugins,
  editableProps: CONFIG.editableProps,
  initialValue: [
    {
      type: ELEMENT_PARAGRAPH,
      children: [
        {
          [MARK_BOLD]: true,
          text: "Hello, Slate 2!",
        }
      ]
    }
  ] 
};

