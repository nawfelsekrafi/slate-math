import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table'
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { getEquationTextNode } from '../EquationText'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from '../UneditableBigOperator/defaults'

export const getSummationWithLimitNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(0.75, 'auto', undefined, '-5px'),
      getEquationTextNode(text),
      getEmptyBoxNode(0.75, 'auto', undefined, undefined, '10px'),
    ],
  }
}

//Summation with subscript
export const getSummationWithSubscriptLimitNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
    children: [
      getEmptyBoxNode(0.75),
      getEquationTextNode(text),
      getEmptyBoxNode(0.75, undefined, undefined, undefined, '10px'),
    ],
  }
}
