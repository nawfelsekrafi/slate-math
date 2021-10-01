import { ELEMENT_TABLE } from '@udecode/plate-table'
import {getEmptyCellNode} from './getEmptyCellNode'


export const getEmptyRowNode = (colCount: number) => {
  return {
    type: ELEMENT_TABLE,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyCellNode())
  }
}