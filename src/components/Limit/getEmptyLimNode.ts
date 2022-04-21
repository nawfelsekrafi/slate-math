import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_LIMIT } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { css } from 'twin.macro'

export const getEmptyLimNode = () => {
  return <TElement>{
    type: ELEMENT_LIMIT,
    children: [getEmptyLimCellNode(), getEmptyLimRowNode()],
  }
}

const getEmptyLimRowNode = () => {
  return {
    type: 'span',
    children: [
      getEmptyBoxNode(css`font-size: 10px;`),
      getEmptyArrowCellNode(),
      getEmptyBoxNode(css`font-size: 10px;`),
     
    ],
  }
}

const getEmptyLimCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: 'Lim' }],
  }
}

const getEmptyArrowCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u2192' }],
  }
}

export const getLimToInfinityNode = () => {
  return <TElement>{
    type: ELEMENT_LIMIT,
    children: [getEmptyLimCellNode(), getEmptyLimRowWithInfinityNode()],
  }
}

const getEmptyLimRowWithInfinityNode = () => {
  return {
    type: 'span',
    children: [
      getEmptyBoxNode(css`font-size: 10px;`),
      getEmptyArrowCellNode(),
      getInfinity(),
     
    ],
  }
}

const getInfinity = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u221E' }],
  }
}