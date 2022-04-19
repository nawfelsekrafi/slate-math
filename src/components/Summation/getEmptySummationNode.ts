import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from '../UneditableBigOperator/defaults';

export const getSummationWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto',undefined,'-5px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto',undefined,undefined,'10px'),
    ],
  };
}

//Summation with subscript
export const getSummationWithSubscriptLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','18px','-20px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','18px',undefined, '-9px'),
    ],
  };
}
