import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {Plate, createPlugins} from '@udecode/plate';
import {createEquationBoxPlugin, createMathPlugins} from '../components/plugin';
import { getEmptyBoxNode } from '../components/EquationBoxElement/getEquationBoxNode';
import { MathEditor } from '../components/MathEditor/MathEditor';
import { getEmptyUneditableBigOpNode } from '../components/UneditableBigOperator/getEmptyBigOpNode';
import { getEmptyLimNode } from '../components/Limit/getEmptyLimNode';


export default {
    title: 'MathEquation/MathEditor',
    component: Plate,
  } as ComponentMeta<typeof Plate>;
  
  const plugins = createMathPlugins();
  
  const Template: ComponentStory<typeof Plate> = (args) => <Plate {...args} />;
  
  export const MathEditorInt = Template.bind({});

  MathEditorInt.args = {
    id: "1",
    plugins,
    initialValue: [
        {text: 'asdf'}, getEmptyUneditableBigOpNode('\u222b'), {text:'abc'}
    ]
  };
  export const MathEditorLim = Template.bind({});
  MathEditorLim.args = {
    id: "2",
    plugins,
    initialValue: [
        {text: 'asdf'}, getEmptyLimNode(), {text:'abc'}
    ]
  }
