import { ELEMENT_TR, StyledElement, TablePluginOptions, TElement, withProps } from '@udecode/plate'
import { ELEMENT_ACCENT } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { css } from 'twin.macro'
const accentStyle = css`top: 0.9em; font-size: 16px; margin-bottom: 3px;`
export const getRightwardsArrowAboveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightwardsArrowSymbol(), getEmptyBoxNode()],
  }
}

const getRightwardsArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u2192' }],
  }
}

// Leftwards Arrow Above Accent
export const getLeftwardsArrowAboveAccentNode = () => {
  return <TElement>{
    
    type: ELEMENT_ACCENT,
    children: [getLefttwardsArrowSymbol(), getEmptyBoxNode()],
  }
}

const getLefttwardsArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: css`top: 0.9em; font-size: 16px; display: block;`,
    children: [{ text: '\u2190' }],
  }
}

//Right-Left Arrow Above Accent
export const getRightLeftArrowAboveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightLeftArrowSymbol(), getEmptyBoxNode()],
  }
}

const getRightLeftArrowSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u2194' }],
  }
}

// Tilde Accent
export const getTildeAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    
    children: [getTildeSymbol(), getEmptyBoxNode()],
  }
}

const getTildeSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u007E' }],
  }
}

// Dot Accent
export const getDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getDotSymbol(), getEmptyBoxNode()],
  }
}

const getDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u00B7' }],
  }
}

// Double Dot Accent
export const getDoubleDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getDoubleDotSymbol(), getEmptyBoxNode()],
  }
}

const getDoubleDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u0022' }],
  }
}

//Rightward Harpoon Accent
export const getRightwardHarpoonAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getRightwardHarpoonSymbol(), getEmptyBoxNode()],
  }
}

const getRightwardHarpoonSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u21C0' }],
    //children: [{text: "\u00B7"}]
  }
}

//Bar Accent
export const getBarAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getBarSymbol(), getEmptyBoxNode()],
  }
}

const getBarSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u2015' }],
  }
}

//Over Curly Brace Accent
export const getOverCurlyBraceNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getOverCurlyBraceSymbol(), getEmptyBoxNode()],
  }
}

const getOverCurlyBraceSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u23DE' }],
  }
}

//Over Parenthesis Accent
export const getOverParenthesisAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getOverParenthesisSymbol(), getEmptyBoxNode()],
  }
}

const getOverParenthesisSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u23DC' }],
  }
}

//Breve Accent
export const getBreveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getBreveSymbol(), getEmptyBoxNode()],
  }
}

const getBreveSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u23D1' }],
  }
}

//Hat Accent
export const getHatAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getHatSymbol(), getEmptyBoxNode()],
  }
}

const getHatSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u005E' }],
  }
}

//Check Accent
export const getCheckAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getCheckSymbol(), getEmptyBoxNode()],
  }
}

const getCheckSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u02C7' }],
  }
}

//Triple Dot Accent
export const getTripleDotAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getTripleDotSymbol(), getEmptyBoxNode()],
  }
}

const getTripleDotSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u20DB' }],
  }
}

//Grave Accent
export const getGraveAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getGraveSymbol(), getEmptyBoxNode()],
  }
}

const getGraveSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u0060' }],
  }
}

//Acute Accent
export const getAcuteAccentNode = () => {
  return <TElement>{
    type: ELEMENT_ACCENT,
    children: [getAcuteSymbol(), getEmptyBoxNode()],
  }
}

const getAcuteSymbol = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    styles: accentStyle,
    children: [{ text: '\u02CA' }],
  }
}