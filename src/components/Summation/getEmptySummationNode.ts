import { ELEMENT_TABLE, TablePluginOptions, TElement
 } from '@udecode/plate';
import { getEmptyRowNode } from '../tdComponents/getEmptyRowNode';
import { getSumSymbolCellNode } from './getSumSymbolCellNode';


export const getEmptySummationNode = () => {


  return <TElement>{
    children:[
    {
      children: [{ text: " " }]
    },
    {type: ELEMENT_TABLE,
    children: [
      getEmptyRowNode(1),
      getSumSymbolCellNode(),
      getEmptyRowNode(1)],
    },
    {
      children: [{ text: " " }]
    }
    ]
  };
};