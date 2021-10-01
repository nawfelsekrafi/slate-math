import { ELEMENT_TABLE, TablePluginOptions, TElement
 } from '@udecode/plate';
import { getEmptyRowNode } from '../tdComponents/getEmptyRowNode';


export const getEmptySummationNode = (options?: TablePluginOptions
) => {


  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: ELEMENT_TABLE,
    children: [getEmptyRowNode(1), getEmptyRowNode(1), getEmptyRowNode(1)],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};