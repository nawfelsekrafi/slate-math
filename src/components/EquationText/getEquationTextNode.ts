import { ELEMENT_EQUATION_TEXT } from "."

export const getEquationTextNode = (text:string, styles?:any) => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        children: [{text: text}],
        styles:styles
    }
}