import { ELEMENT_TR } from '@udecode/plate'
import { ELEMENT_TABLE } from '@udecode/plate-table'
import {getEmptyCellNode} from './getEmptyCellNode'


export const getEmptyRowNode = (colCount: number) => {
  return {
    type: ELEMENT_TR,
    children: Array(colCount)
      .fill(colCount)
      .map(() => getEmptyCellNode())
  }
}