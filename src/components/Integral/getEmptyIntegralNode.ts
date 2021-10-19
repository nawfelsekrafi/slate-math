
import { TElement } from '@udecode/plate-core';
import { ELEMENT_INTEGRAL } from '.';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { getIntegralSymbolRowNode } from './getIntegralSymbolRowNode';




export const getEmptyIntegralNode = () => {
  return <TElement>{
    type: ELEMENT_INTEGRAL,
    children: [
      getEmptyBoxNode(),
      getIntegralSymbolRowNode(),
      getEmptyBoxNode(),
      
    ],
  };
};

