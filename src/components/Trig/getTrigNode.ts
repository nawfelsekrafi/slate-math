import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_TRIG } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { css } from 'twin.macro'

export const getTrigNode = (text?:string) => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      {
        type: ELEMENT_EQUATION_TEXT,
        children: [{ text: text }],
      },
      {
        type: ELEMENT_EQUATION_TEXT,
        children: [{ text: '(' }],
      },
      getEmptyBoxNode(css`display:flex;`),
      {
        type: ELEMENT_EQUATION_TEXT,
        children: [{ text: ')' }],
      }
    ],
  }
}
