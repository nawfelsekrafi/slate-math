import { getEmptyRowNode, getEmptyTableNode, PlateEditor } from "@udecode/plate"
import { ELEMENT_EQUATION_TEXT } from "../EquationText"
import { ELEMENT_MATRIX } from "./defaults"

export const createMatrix = (editor: PlateEditor, rowNum: number, colNum: number) => {
    const matrixRows = Array()
    const pHeight = 0.315*(4*rowNum)
    for(let i = 1; i<=rowNum; i++){
        matrixRows.push(getEmptyRowNode(editor, {header: false, colCount:colNum}))
    }
    return {
        type: "span",
        children: [
            getParethesisTextNode('( ',pHeight),
            {
                type:ELEMENT_MATRIX,
                children: matrixRows,
            },
            getParethesisTextNode(' )',pHeight),
        ]

    }
}

const getParethesisTextNode = (text:string, transformHeight:number) => {
    const pStyle = {transform: "scale(1.2,"+transformHeight+")"}
    return {
        type: ELEMENT_EQUATION_TEXT,
        children: [{text: text}],
        style: pStyle
    }
}