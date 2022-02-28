import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {LogComponent} from '../components/Log';
import {Plate} from '@udecode/plate';

export default {
  title:'PlateExample',
  component: Plate
} as ComponentMeta<typeof Plate>;


const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  initialValue: [
    {
      children: [
        {
          text: "Hello, Slate!",
        }
      ]
    }
  ] 
};

