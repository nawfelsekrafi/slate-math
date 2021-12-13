import { ELEMENT_EQUATION_TEXT } from "."

export const getEquationTextNode = (text:string) => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        children: [{text: text}],
    }
}