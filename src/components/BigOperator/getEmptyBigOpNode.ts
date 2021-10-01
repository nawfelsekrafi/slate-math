import { getEmptyRowNode } from '../tdComponents/getEmptyRowNode';
import { ELEMENT_TABLE, TablePluginOptions } from '@udecode/plate-table';
import { TElement, TNode } from '@udecode/plate-core';
import { getEmptyCellNode } from '../tdComponents/getEmptyCellNode';
import { FRACTION } from '../defaults';


export const getEmptyBigOpNode = (options?: TablePluginOptions) => {


  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {
      type: ELEMENT_TABLE,
      children: [
        getEmptyRowNode(1),
        getEmptyRowNode(1),
        getEmptyRowNode(1)
      ],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};