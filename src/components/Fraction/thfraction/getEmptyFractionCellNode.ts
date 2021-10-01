
import { ELEMENT_PARAGRAPH, ELEMENT_TH, TablePluginOptions
 } from '@udecode/plate';
import matrixElement from "../../MatrixElement/index";


export const getEmptyFractionCellNode = (
  options?: TablePluginOptions
  & { header?: boolean }
) => {
  return {
    type: ELEMENT_TH,
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [matrixElement.slateDOM(),],
      },
    ],
  };
};