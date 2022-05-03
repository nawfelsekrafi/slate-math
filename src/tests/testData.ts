import { ELEMENT_EQUATIONBOX } from "../components/EquationBoxElement";
import { ELEMENT_EQUATION_TEXT } from "../components/EquationText";


export const equationText = Object.freeze([
    { type: 'p', children: [{ text: 'A' }] },
    {type: ELEMENT_EQUATION_TEXT, children: [{text: ''}]},
    { type: 'p', children: [{ text: 'B' }] },
]) as any

export const textA = Object.freeze([
    { type: 'p', children: [{ text: 'A' }] },
]) as any