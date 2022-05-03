import { TablePluginOptions, TElement } from '@udecode/plate'
import { css } from 'twin.macro'
import { ELEMENT_FRACTION } from '.'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText'
import { ELEMENT_STACKED, ELEMENT_SKEWED,ELEMENT_LINEAR } from './defaults';
import { ELEMENT_UNEDITABLE_BIG_OPERATOR, ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT } from '../UneditableBigOperator/defaults';
import { ELEMENT_LINEAR_FRACTION, ELEMENT_SKEWED_FRACTION, ELEMENT_STACKED_FRACTION } from './FractionDefaults/defaults'


export const getEmptyFractionNode = () => {
  return <TElement>{
    type: ELEMENT_FRACTION,
    children: [
      getEmptyBoxNode(css`
        font-size: 10px;
        padding: 0px 3px 0px;
      `),
      getEmptyBoxNode(
        css`
          font-size: 10px;
        `
      ),
    ],
  }
}

export const getEmptyStackedFractionNode = () => {
  return <TElement>{
    type: ELEMENT_STACKED_FRACTION,
    children: [
      getEmptyBoxNode(css`font-size: 10px; bottom: -14px; z-index:1;`),
      getEquationTextNode('\u2015',),
      getEmptyBoxNode(css`font-size: 10px; bottom: 20px;z-index:1;`),

    ],
  }
}

export const getEmptySkewedFractionNode = () => {
  return <TElement>{
    type: ELEMENT_SKEWED_FRACTION,
    children: [
      getEmptyBoxNode(
        css`
          font-size: 10px;
          bottom: 15px;
          left: 3px;
        `
      ),
      getEquationTextNode('\u2215'),
      getEmptyBoxNode(
        css`
          font-size: 10px;
          left: -5px;
        `
      ),
    ],
  }
}

export const getEmptyLinearFractionNode = () => {
  return <TElement>{
    type: ELEMENT_LINEAR_FRACTION,
    children: [
      getEmptyBoxNode(css`font-size: 10px; bottom:10px; left:2px;`),
      getEquationTextNode('\u002F', css`z-index:-1;`),
      getEmptyBoxNode(css`font-size: 10px; bottom:10px; right:3px;`),

    ],
  }
}
