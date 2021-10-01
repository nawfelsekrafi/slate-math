import { TablePluginOptions
 } from '@udecode/plate';
import { getLimSymbolCellNode } from './getLimSymbolCellNode';

export const getLimSymbolRowNode = (colCount: number, options?: TablePluginOptions
) => {


  return {
    type: "tr",
    children: Array(colCount)
      .fill(colCount)
      .map(() => getLimSymbolCellNode(options)),
  };
};