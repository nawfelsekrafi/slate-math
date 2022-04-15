import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_LIMIT } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'

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
      getEmptyBoxNode(0.75),
      getEmptyArrowCellNode(),
      getEmptyBoxNode(0.75),
     
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
      getEmptyBoxNode(0.75),
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