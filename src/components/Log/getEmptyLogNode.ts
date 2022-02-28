import { ELEMENT_TR, TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_LOG } from './defaults';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode,getEmptyBoxNodePower } from '../EquationBoxElement/getEquationBoxNode';

export const getEmptyLogNode = (
) => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getEmptyLogCellNode(),
      getEmptyBoxNode(0.75, 'right'),
      getEmptyBoxNodePower(1,'right')
    ]
  };
};

const getEmptyLogCellNode = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "Log"}]
  }
};
