import { ELEMENT_EQUATION_TEXT } from '../EquationText';

export const getIntegralSymbolRowNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "\u222b"}]
  };
};

export const getDoubleIntegralSymbolRowNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "\u222c"}]
  };
};

export const getTripleIntegralSymbolRowNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "\u222d"}]
  };
};