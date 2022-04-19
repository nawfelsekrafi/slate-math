import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText';
import { ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT, ELEMENT_UNEDITABLE_BIG_OPERATOR } from '../UneditableBigOperator/defaults';

//limits on the right
export const getIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
    children: [
      getEmptyBoxNode(0.75),
      getEquationTextNode(text),
      getEmptyBoxNode(0.75,undefined,undefined,undefined,'10px'),
    ],
  }
}

//stacked layout
export const getIntegralWithStackedLimtNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto',undefined,undefined,'5px'),
    ],
  };
}
