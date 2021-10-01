import { TablePluginOptions
 } from '@udecode/plate';
import { getEmptyFractionCellNode } from './getEmptyFractionCellNode';

export const getEmptyFractionRowNode = (colCount: number, options?: TablePluginOptions
) => {

  return {
    type: "table",
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyFractionCellNode(options)),
  };
};