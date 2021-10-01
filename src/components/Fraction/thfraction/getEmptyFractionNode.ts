
import { ELEMENT_TABLE } from '@udecode/plate';
import { TElement } from '@udecode/plate-core';
import { getEmptyFractionRowNode } from './getEmptyFractionRowNode';


export const getEmptyFractionNode = (
) => {

  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: ELEMENT_TABLE,
    children: [getEmptyFractionRowNode(1), getEmptyFractionRowNode(1)],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};