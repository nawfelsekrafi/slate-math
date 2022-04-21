import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins} from '@udecode/plate';
import {createEquationBoxPlugin} from '../components/plugin';
import { getEmptyBoxNode } from '../components/EquationBoxElement/getEquationBoxNode';
import { MathEditor } from '../components/MathEditor/MathEditor';


export default {
    title: 'MathEquation/EquationBox',
    component: MathEditor,
  } as ComponentMeta<typeof MathEditor>;
  
  const plugins = createPlugins([
    createEquationBoxPlugin(),
  ]);
  
  const Template: ComponentStory<typeof MathEditor> = (args) => <MathEditor {...args} />;
  
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