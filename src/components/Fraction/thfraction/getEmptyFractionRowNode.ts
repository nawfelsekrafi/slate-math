import { ELEMENT_TR, TablePluginOptions
 } from '@udecode/plate';
import { getEmptyFractionCellNode } from './getEmptyFractionCellNode';

export const getEmptyFractionRowNode = (colCount: number, options?: TablePluginOptions
) => {

  return {
    type: ELEMENT_TR,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyFractionCellNode(options)),
  };
};