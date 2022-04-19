import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from '../UneditableBigOperator/defaults';

export const getIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','12px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','12px',undefined, '-9px'),
    ],
  };
}

export const getDoubleIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','20px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','15px',undefined, '-9px'),
    ],
  };
}

export const getTripleIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','22px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','18px',undefined, '-9px'),
    ],
  };
}


export const getSurfaceIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','17px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','17px',undefined, '-9px'),
    ],
  };
}

export const getVolumeIntegralWithLimitNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,'auto','22px','-10px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,'auto','22px',undefined, '-9px'),
    ],
  };
}

export const getIntegralWithStackedLimtNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75,undefined,undefined,'-5px'),
      getEquationTextNode(text),
      getEmptyBoxNode(.75,undefined,undefined,undefined,'5px'),
    ],
  };
}
