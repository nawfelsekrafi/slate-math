
import { ELEMENT_TABLE, TablePluginOptions
 } from '@udecode/plate';
import matrixElement from "../../MatrixElement/index";


export const getEmptyFractionCellNode = (
  options?: TablePluginOptions
  & { header?: boolean }
) => {
  return {
    type: ELEMENT_TABLE,
    children: [
      {
        type: ELEMENT_TABLE,
        children: [matrixElement.slateDOM(),],
      },
    ],
  };
};