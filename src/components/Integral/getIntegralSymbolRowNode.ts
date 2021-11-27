import { ELEMENT_EQUATION_TEXT } from '../EquationText';

export const getIntegralSymbolRowNode = () => {
  return {
    type: ELEMENT_EQUATION_TEXT,
    contentEditable: "false",
    children: [{text: "\u222b"}]
  };
};