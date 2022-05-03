import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from './defaults';
import { getEquationTextNode } from '../EquationText';
import { css } from 'twin.macro';


export const getEmptyUneditableBigOpNode = (text?:string) => {
  
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(css`font-size: 10px;`),
      getEquationTextNode(text?text:''),
      getEmptyBoxNode(css`font-size: 10px;`),
    ],
  };
}

export const getIntegralNode = () => {
  return <TElement>getEmptyUneditableBigOpNode('\u222b')
}

export const getSummationNode = () => {
  return <TElement>getEmptyUneditableBigOpNode('\u2211')
}