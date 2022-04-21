import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table'
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { getEquationTextNode } from '../EquationText'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from '../UneditableBigOperator/defaults'
import { css } from 'twin.macro'

export const getSummationWithLimitNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(css`font-size: 10px; bottom: 3px;`),
      getEquationTextNode(text),
      getEmptyBoxNode(css`font-size: 10px; bottom: 7px;`),
    ],
  }
}

//Summation with subscript
export const getSummationWithSubscriptLimitNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
    children: [
      getEmptyBoxNode(css`font-size: 10px;`),
      getEquationTextNode(text),
      getEmptyBoxNode(css`font-size: 10px;`),
    ],
  }
}
