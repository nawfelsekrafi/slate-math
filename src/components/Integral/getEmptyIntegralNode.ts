
import { TElement, TNode } from '@udecode/plate-core';
import { ELEMENT_TABLE } from '@udecode/plate-table';
import { getEmptyRowNode } from '../tdComponents/getEmptyRowNode';
import { getIntegralSymbolRowNode } from './getIntegralSymbolRowNode';




export const getEmptyIntegralNode = () => {
  
  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: ELEMENT_TABLE,
    children: [getEmptyRowNode(1 ), getIntegralSymbolRowNode(1 ), getEmptyRowNode(1 )],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};