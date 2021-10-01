import { ELEMENT_TR, TablePluginOptions
 } from '@udecode/plate';
import { getIntegralSymbolCellNode } from './getIntegralSymbolCellNode';

export const getIntegralSymbolRowNode = (colCount: number, options?: TablePluginOptions
) => {
  return {
    type: ELEMENT_TR,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getIntegralSymbolCellNode( options)),
  };
};