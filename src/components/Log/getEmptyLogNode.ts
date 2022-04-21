import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_LOG } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { css } from 'twin.macro'

export const getLogarithmToBaseNnode = () => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getEmptyBoxNode(
        css`
          margin-top: 15px;
          margin-bottom: 5px;
        `
      ),
      getLeftBracket(),
      getEmptyBoxNode(
        css`
          margin-bottom: 20px;
        `
      ),
      getRightBracket(),
    ],
  }
}

const getLogarithmSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: 'Log' }],
  }
}

export const getEmptyNaturalLogarithmNode = () => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getNaturalLogarithmSymbol(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getNaturalLogarithmSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: 'Ln' }],
  }
}

export const getEmptyLogarithmNode = () => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

export const getEmptyLogarithmToBaseTenNode = () => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getLeftBracket(),
      getNumberTen(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getNumberTen = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '10,' }],
  }
}

const getLeftBracket = (styles?: any) => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '(' }],
    styles: styles,
  }
}

const getRightBracket = (styles?: any) => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: ')' }],
    styles: styles,
  }
}
