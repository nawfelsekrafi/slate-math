import { ELEMENT_TR, StyledElement, TablePluginOptions, TElement, withProps } from '@udecode/plate'
import { ELEMENT_BRACKET } from './defaults'
import { ELEMENT_EQUATION_TEXT } from '../EquationText'
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode'
import { css } from 'twin.macro'

//Nodes

// 1x1
export const getParenthesisBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftParenSymbol(), getEmptyBoxNode(css`top: 0px;`), getRightParenSymbol()],
    }
}

// 1x2
export const getSquareBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftSquareBracketSymbol(), getEmptyBoxNode(), getRightSquareBracketSymbol()],
    }
}

// 1x3
export const getCurlyBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftCurlySymbol(), getEmptyBoxNode(), getRightCurlySymbol()],
    }
}

// 1x4
export const getAngleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftAngleSymbol(), getEmptyBoxNode(), getRightAngleSymbol()],
    }
}

// 2x1
export const getFloorBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftFloorSymbol(), getEmptyBoxNode(), getRightFloorSymbol()],
    }
}

// 2x2
export const getCeilingBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftCeilingSymbol(), getEmptyBoxNode(), getRightCeilingSymbol()],
    }
}

// 2x3
export const getBarBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getVerticalBarSymbol(), getEmptyBoxNode(), getVerticalBarSymbol()],
    }
}

// 2x4
export const getParallelBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getParallelSymbol(), getEmptyBoxNode(), getParallelSymbol()],
    }
}

// 3x1
export const getDoubleLeftBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftSquareBracketSymbol(), getEmptyBoxNode(), getLeftSquareBracketSymbol()],
    }
}

// 3x2
export const getDoubleRightBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getRightSquareBracketSymbol(), getEmptyBoxNode(), getRightSquareBracketSymbol()],
    }
}

// 3x3
export const getInverseBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getRightSquareBracketSymbol(), getEmptyBoxNode(), getLeftSquareBracketSymbol()],
    }
}

// 3x4
export const getDoubleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftDoubleBracketSymbol(), getEmptyBoxNode(), getRightDoubleBracketSymbol()],
    }
}

// 4x1
export const getLeftParenBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftParenSymbol(), getEmptyBoxNode()],
    }
}

// 4x2
export const getRightParenBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightParenSymbol()],
    }
}

// 4x3
export const getLeftSquareBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftSquareBracketSymbol(), getEmptyBoxNode()],
    }
}

// 4x4
export const getRightSquareBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightSquareBracketSymbol()],
    }
}

// 5x1
export const getLeftCurlyBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftCurlySymbol(), getEmptyBoxNode()],
    }
}

// 5x2
export const getRightCurlyBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightCurlySymbol()],
    }
}

// 5x3
export const getLeftAngleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftAngleSymbol(), getEmptyBoxNode()],
    }
}

// 5x4
export const getRightAngleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightAngleSymbol()],
    }
}

// 6x1
export const getLeftFloorBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftFloorSymbol(), getEmptyBoxNode()],
    }
}

// 6x2
export const getRightFloorBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightFloorSymbol()],
    }
}

// 6x3
export const getLeftCeilingBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftCeilingSymbol(), getEmptyBoxNode()],
    }
}

// 6x4
export const getRightCeilingBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightCeilingSymbol()],
    }
}

// 7x1
export const getLeftBarBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getVerticalBarSymbol(), getEmptyBoxNode()],
    }
}

// 7x2
export const getRightBarBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getVerticalBarSymbol()],
    }
}

// 7x3
export const getLeftParallelBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getParallelSymbol(), getEmptyBoxNode()],
    }
}

// 7x4
export const getRightParallelBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getParallelSymbol()],
    }
}

// 8x1
export const getLeftDoubleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getLeftDoubleBracketSymbol(), getEmptyBoxNode()],
    }
}

// 8x2
export const getRightDoubleBracketNode = () => {
    return <TElement>{
        type:ELEMENT_BRACKET,
        children: [getEmptyBoxNode(), getRightDoubleBracketSymbol()],
    }
}

//symbols

// (
const getLeftParenSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '12px',
        fontSize: '16px',
        children: [{ text: '\u0028'}],
    }
}

// )
const getRightParenSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '12px',
           fontSize: '16px',
        children: [{ text: '\u0029'}],
    }
}

// [
const getLeftSquareBracketSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u005B'}],
    }
}
    
// ]
const getRightSquareBracketSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u005D'}],
    }
}

// {
const getLeftCurlySymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u007B'}],
    }
}
    
// }
const getRightCurlySymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u007D'}],
    }
}

// <
const getLeftAngleSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u2329'}],
    }
}
        
// >
const getRightAngleSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u232A'}],
    }
}

// 
const getLeftFloorSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u230A'}],
    }
}
        
// 
const getRightFloorSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u230B'}],
    }
}

// 
const getLeftCeilingSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u2308'}],
    }
}
        
// 
const getRightCeilingSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u2309'}],
    }
}

// bar
const getVerticalBarSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u007C'}],
    }
}
        
// parallel
const getParallelSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '.9em',
        fontSize: '16px',
        children: [{ text: '\u2225'}],
    }
}

//doubleBracket
const getLeftDoubleBracketSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '0.9em',
        fontSize: '16px',
        children: [{ text: '\u301A'}]
    }
}

//doubleBracket
const getRightDoubleBracketSymbol = () => {
    return {
        type: ELEMENT_EQUATION_TEXT,
        top: '0.9em',
        fontSize: '16px',
        children: [{ text: '\u301B'}]
    }
}