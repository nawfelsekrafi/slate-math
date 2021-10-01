
import { TablePluginOptions
 } from '@udecode/plate';
import { getBottomLimSymbolCellNode } from './getBottomLimSymbolCellNode';

export const getBottomLimSymbolRowNode = (colCount: number, options?: TablePluginOptions
) => {


  return {
    type: "tr",
    children: Array(colCount)
      .fill(colCount)
      .map(() => getBottomLimSymbolCellNode(options)),
  };
};