import { ELEMENT_TD } from '@udecode/plate-table';
import { ELEMENT_PARAGRAPH, } from '@udecode/plate';
import matrixElement from "../MatrixElement/index";


export const getEmptyCellNode = () => {
  return {
    type: ELEMENT_TD,
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [matrixElement.slateDOM(),],
      }
    ]
  }
}