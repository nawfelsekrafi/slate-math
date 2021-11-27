
import { TElement } from '@udecode/plate-core';
import { ELEMENT_TABLE } from '@udecode/plate-table';
import { ELEMENT_INTEGRAL } from '.';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { getIntegralSymbolRowNode } from './getIntegralSymbolRowNode';




export const getEmptyIntegralNode = () => {
  return{
    type: ELEMENT_TABLE,
    children: [getIntegralNode()]
  }
  

};

export const getIntegralNode = () => {
  return <TElement>{
    type: ELEMENT_INTEGRAL,
    children: [
      getEmptyBoxNode(),
      getIntegralSymbolRowNode(),
      getEmptyBoxNode(),
    ],
  };
}

