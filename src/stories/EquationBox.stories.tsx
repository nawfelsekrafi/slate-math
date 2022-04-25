import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins} from '@udecode/plate';
import {createEquationBoxPlugin} from '../components/plugin';
import { getEmptyBoxNode } from '../components/EquationBoxElement/getEquationBoxNode';


export default {
    title: 'MathEquation/EquationBox',
    component: Plate,
  } as ComponentMeta<typeof Plate>;
  
  const plugins = createPlugins([
    createEquationBoxPlugin(),
  ]);
  
  const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;
  
  export const EmptyBox = Template.bind({});

  EmptyBox.args = {
    id: "1",
    plugins,
    initialValue: [
        getEmptyBoxNode(),
    ]
  };

  export const FractionBox = Template.bind({});
  
  FractionBox.args = {
    id: "1",
    plugins,
    initialValue: [
        getEmptyBoxNode(),
    ]
  };