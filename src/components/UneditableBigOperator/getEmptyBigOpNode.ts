import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from './defaults';
import { getEquationTextNode } from '../EquationText';


export const getEmptyUneditableBigOpNode = (text?:string) => {
  if(!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(.75),
      getEquationTextNode(text),
      getEmptyBoxNode(.75),
    ],
  };
}


