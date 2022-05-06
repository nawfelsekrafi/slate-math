import { css } from "twin.macro"
import { getEmptyBoxNode } from "../EquationBoxElement/getEquationBoxNode"
import { ELEMENT_EXPONENT } from "./defaults"


export const getEmptySuperScriptNode = () => {
    return {
        type: ELEMENT_EXPONENT,
        children: [getEmptyBoxNode(), getEmptyBoxNode(css`font-size: .5rem; bottom:10px;`)]
    }
}

export const getEmptySubscriptNode = () => {
    return {
        type: ELEMENT_EXPONENT,
        children: [getEmptyBoxNode(), getEmptyBoxNode(css`font-size: .5rem; top:7px; z-axis`)]
    }
}