
import { TElement } from '@udecode/plate-core';
import { ELEMENT_TABLE } from '@udecode/plate-table';
import { ELEMENT_INTEGRAL } from '.';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { getDoubleIntegralSymbolRowNode, getIntegralSymbolRowNode } from './getIntegralSymbolRowNode';




export const getEmptyIntegralNode = () => {
  return <TElement>{
    type: ELEMENT_INTEGRAL,
    children: [
      getEmptyBoxNode(),
      getIntegralSymbolRowNode(),
      getEmptyBoxNode(),
    ],
  };
}

export const getEmptyDoubleIntegralNode = () => {
  return <TElement>{
    type: ELEMENT_INTEGRAL,
    children: [
      getEmptyBoxNode(),
      getDoubleIntegralSymbolRowNode(),
      getEmptyBoxNode(),
    ],
  };
}

export const getEmptyTripleIntegralNode = () => {
  return <TElement>{
    type: ELEMENT_INTEGRAL,
    children: [
      getEmptyBoxNode(),
      getDoubleIntegralSymbolRowNode(),
      getEmptyBoxNode(),
    ],
  };
}

