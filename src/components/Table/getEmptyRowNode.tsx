import {
    ELEMENT_DEFAULT,
    getPluginType,
    PlateEditor,
  } from '@udecode/plate-core';
import { getEmptyCellNode } from "./getEmptyCellNode"
import { ELEMENT_TR } from "@udecode/plate";



export const getEmptyRowNode = (
    editor: PlateEditor,
    {colCount}: {colCount: number},

) => {
    return {   
        type: getPluginType(editor, ELEMENT_TR),
        children: Array(colCount)
            .fill(colCount)
            .map(() => getEmptyCellNode(editor)),
    }
}