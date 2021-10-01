import { getEmptyRowNode } from '../tdComponents/getEmptyRowNode';
import { ELEMENT_TABLE, TablePluginOptions } from '@udecode/plate-table';
import { TElement } from '@udecode/plate-core';


export const getEmptyBigOpNode = (options?: TablePluginOptions) => {


  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: ELEMENT_TABLE,
    children: [getEmptyRowNode(1, ), getEmptyRowNode(1, ), getEmptyRowNode(1, )],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};