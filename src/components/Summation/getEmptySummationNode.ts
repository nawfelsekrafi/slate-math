import { TElement
 } from '@udecode/plate';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_SUMMATION } from '.';


export const getEmptySummationNode = () => {


  return <TElement>{
    type: ELEMENT_SUMMATION,
    children: [
      getEmptyBoxNode(),
      getEmptyLimCellNode(),
      getEmptyBoxNode(),
    ]
  };
};

const getEmptyLimCellNode = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "\u2211"}]
  }
}