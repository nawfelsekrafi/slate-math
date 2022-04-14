import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_ACCENT } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'

export const getEmptyAccentNode = (text:string) => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getEmptyAccentCellNode(text), getEmptyBoxNode(1, 'right')],
  }
}

const getEmptyAccentCellNode = (text:string) => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '10px',
    fontSize: '16px',
    children: [{ text: text }],
    //children: [{text: "\u00B7"}]
  }
}
