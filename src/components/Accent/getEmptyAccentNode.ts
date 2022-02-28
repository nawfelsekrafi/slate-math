import { ELEMENT_TR, TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_ACCENT } from './defaults';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';

export const getEmptyAccentNode = (
) => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [
      getEmptyAccentCellNode(),
      getEmptyBoxNode(1, 'right'),
    ]
  };
};

const getEmptyAccentCellNode = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
     children: [{text: "\u21C0"}]
  }
};
