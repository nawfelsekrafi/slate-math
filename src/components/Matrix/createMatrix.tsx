import { ELEMENT_TABLE, ELEMENT_TD, ELEMENT_TR, getEmptyRowNode, getEmptyTableNode, PlateEditor } from "@udecode/plate"
import { getEmptyBoxNode } from "../EquationBoxElement/getEquationBoxNode"
import { ELEMENT_EQUATION_TEXT } from "../EquationText"
import { ELEMENT_MATRIX, ELEMENT_MATRIX_BOX } from "./defaults"

export const createMatrix = (editor: PlateEditor, rowNum: number, colNum: number) => {
    const matrixRows = Array()
    for(let i = 1; i<=rowNum; i++){
        matrixRows.push(getEmptyMatrixRowNode(colNum))
    }
    return {
        type: ELEMENT_TABLE,
        children: [
            {
                type:ELEMENT_MATRIX,
                children: matrixRows,
            },
        ]

    }
}


const getEmptyMatrixRowNode = (colNum:number) => {
    const cols = Array();
    for (let i = 1; i<=colNum; i++) {
        cols.push(getEmptyDataNode())
    }
    return {
        type: ELEMENT_TR,
        children: cols
    }
}

const getEmptyDataNode = () => {
    return {
        type: ELEMENT_TD,
        children: [{
            type: ELEMENT_MATRIX_BOX,
            children: [{text: ''}],
        }]
    }
}