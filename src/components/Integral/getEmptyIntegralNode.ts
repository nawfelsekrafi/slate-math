import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table'
import { ELEMENT_DEFAULT, TElement } from '@udecode/plate-core'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from '../UneditableBigOperator/defaults'
import { css } from 'twin.macro'

//limits on the right
export const getIntegralWithLimitNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
    children: [
      getEmptyBoxNode(css`
        font-size: 10px;
        right: 2px;
      `),
      getEquationTextNode(text),
      getEmptyBoxNode(css`
        font-size: 10px;
        right: 5px;
      `),
    ],
  }
}

//stacked layout
export const getIntegralWithStackedLimtNode = (text?: string) => {
  if (!text) return <TElement>{}
  return <TElement>{
    type: ELEMENT_UNEDITABLE_BIG_OPERATOR,
    children: [
      getEmptyBoxNode(
        css`
          font-size: 10px;
          bottom: 5px;
        `
      ),
      getEquationTextNode(text),
      getEmptyBoxNode(css`
        font-size: 10px;
        top: -10px;
      `),
    ],
  }
}
