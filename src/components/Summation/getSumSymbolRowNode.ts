import { ELEMENT_TR } from '@udecode/plate';
import { TablePluginOptions
 } from '@udecode/plate';
import { getSumSymbolCellNode } from './getSumSymbolCellNode';


export const getSumSymbolRowNode = (colCount: number, options?: TablePluginOptions
) => {
  return {
    type: ELEMENT_TR,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getSumSymbolCellNode(options)),
  };
};