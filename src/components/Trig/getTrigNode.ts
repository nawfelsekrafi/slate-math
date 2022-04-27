import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_TRIG } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'

export const getSinNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getSinCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getSinCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'sin' }],
  }
}

export const getCosNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCosCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCosCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'cos' }],
  }
}

export const getTanNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getTanCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getTanCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'tan' }],
  }
}

export const getCscNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCscCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCscCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'csc' }],
  }
}

export const getSecNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getSecCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getSecCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'sec' }],
  }
}

export const getCotNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCotCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCotCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'cot' }],
  }
}

export const getSinhNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getSinhCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getSinhCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'sinh' }],
  }
}

export const getCoshNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCoshCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCoshCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'cosh' }],
  }
}

export const getTanhNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getTanhCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getTanhCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'tanh' }],
  }
}

export const getCschNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCschCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCschCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'Csch' }],
  }
}

export const getSechNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getSechCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getSechCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'sech' }],
  }
}

export const getCothNode = () => {
  return <TElement>{
    type: ELEMENT_TRIG,
    children: [
      getCothCellNode(),
      getLeftBracket(),
      getEmptyBoxNode(),
      getRightBracket(),
    ],
  }
}

const getCothCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    top: '.9em',
    fontSize: '16px',
    children: [{ text: 'Coth' }],
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
