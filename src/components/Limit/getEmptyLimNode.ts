import { TablePluginOptions, TElement
 } from '@udecode/plate';
import { getLimSymbolRowNode } from './getLimSymbolRowNode';
import { getBottomLimSymbolRowNode } from './getBottomLimSymbolRowNode';




export const getEmptyLimNode = (options?: TablePluginOptions
) => {

  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: "table",
    children: [getLimSymbolRowNode(1, ), getBottomLimSymbolRowNode(1, )],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};