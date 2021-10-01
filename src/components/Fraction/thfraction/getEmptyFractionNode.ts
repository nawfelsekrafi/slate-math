
import { TElement } from '@udecode/plate-core';
import { getEmptyFractionRowNode } from './getEmptyFractionRowNode';


export const getEmptyFractionNode = (
) => {

  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: "table",
    children: [getEmptyFractionRowNode(1), getEmptyFractionRowNode(1)],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};