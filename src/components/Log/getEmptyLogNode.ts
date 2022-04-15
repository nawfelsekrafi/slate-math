import { ELEMENT_TR, TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_LOG } from './defaults';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';

export const getLogarithmToBaseNnode = (
) => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getEmptyBoxNode(0.75, 'right'),
      getLeftBracket(),
      getEmptyBoxNode(1,'right'),
      getRightBracket()
    ]
  };
};

const getLogarithmSymbol = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "Log"}]
  }
};

export const getEmptyNaturalLogarithmNode = (
) => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getNaturalLogarithmSymbol(),
      getLeftBracket(),
      getEmptyBoxNode(1,'right'),
      getRightBracket()
    ]
  };
};

const getNaturalLogarithmSymbol = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "Ln"}]
  }
};

export const getEmptyLogarithmNode = (
) => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getLeftBracket(),
      getEmptyBoxNode(1,'right'),
      getRightBracket()
    ]
  };
};

export const getEmptyLogarithmToBaseTenNode = (
) => {
  return <TElement>{
    type: ELEMENT_LOG,
    children: [
      getLogarithmSymbol(),
      getLeftBracket(),
      getNumberTen(),
      getEmptyBoxNode(1,'right'),
      getRightBracket()
    ]
  };
};

const getNumberTen = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: '10,'}]
  }
};

const getLeftBracket = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: '('}]
  }
};

const getRightBracket = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: ')'}]
  }
};