import { ELEMENT_TR, TablePluginOptions, TElement } from '@udecode/plate'
import { ELEMENT_ACCENT } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'

export const getEmptyAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getEmptyAccentCellNode(), getEmptyBoxNode(1, 'right')],
  }
}

const getEmptyAccentCellNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u21C0' }],
    //children: [{text: "\u00B7"}]
  }
}

// Rightwards Arrow Above Accent
export const getRightwardsArrowAboveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightwardsArrowSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getRightwardsArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u2192' }],
  }
}

// Leftwards Arrow Above Accent
export const getLeftwardsArrowAboveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getLefttwardsArrowSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getLefttwardsArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u2190' }],
  }
}

//Right-Left Arrow Above Accent
export const getRightLeftArrowAboveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightLeftArrowSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getRightLeftArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u2194' }],
  }
}

// Tilde Accent
export const getTildeAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getTildeSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getTildeSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u007E' }],
  }
}

// Dot Accent
export const getDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getDotSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u00B7' }],
  }
}

// Double Dot Accent
export const getDoubleDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getDoubleDotSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getDoubleDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u0022' }],
  }
}

//Rightward Harpoon Accent
export const getRightwardHarpoonAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightwardHarpoonSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getRightwardHarpoonSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u21C0' }],
    //children: [{text: "\u00B7"}]
  }
}

//Bar Accent
export const getBarAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getBarSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getBarSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u2015' }],
  }
}

//Over Curly Brace Accent
export const getOverCurlyBraceNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getOverCurlyBraceSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getOverCurlyBraceSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u23DE' }],
  }
}

//Over Parenthesis Accent
export const getOverParenthesisAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getOverParenthesisSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getOverParenthesisSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u23DC' }],
  }
}

//Breve Accent
export const getBreveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getBreveSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getBreveSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u23D1' }],
  }
}

//Hat Accent
export const getHatAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getHatSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getHatSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u005E' }],
  }
}

//Check Accent
export const getCheckAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getCheckSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getCheckSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u02C7' }],
  }
}

//Triple Dot Accent
export const getTripleDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getTripleDotSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getTripleDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u20DB' }],
  }
}

//Grave Accent
export const getGraveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getGraveSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getGraveSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u0060' }],
  }
}

//Acute Accent
export const getAcuteAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getAcuteSymbol(), getEmptyBoxNode(1, 'right')],
  }
}

const getAcuteSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{ text: '\u02CA' }],
  }
}
