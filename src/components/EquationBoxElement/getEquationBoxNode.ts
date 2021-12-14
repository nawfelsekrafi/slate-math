import { ELEMENT_PARAGRAPH } from "@udecode/plate"
import { ELEMENT_EQUATIONBOX } from "./defaults"
import matrixElement from "../MatrixElement/index";
import { ELEMENT_EQUATION_TEXT } from "../EquationText";

export const getEmptyBoxNode = (size:number = 1) => {
  return{
    type: ELEMENT_EQUATIONBOX,
    children: [{text: "\u2b1a"}],
    size: size
  }
}


