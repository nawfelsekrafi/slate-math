import { ELEMENT_DEFAULT, ELEMENT_PARAGRAPH } from "@udecode/plate"
import { ELEMENT_EQUATIONBOX } from "./defaults"
import matrixElement from "../Icons/MatrixElement/index";
import { ELEMENT_EQUATION_TEXT } from "../EquationText";
import styled from 'styled-components';
import { AlignVerticalBottom, AlignVerticalTop, Transform } from '@styled-icons/material';
import { getEmptyUneditableBigOpNode } from "../UneditableBigOperator/getEmptyBigOpNode";

export const getEmptyBoxNode = (size:number = 1, gridArea?:string, left?:string, padding:number = 3, bottomBorder?:number) => {
  return {
    type: ELEMENT_EQUATIONBOX,
    children: [{text: ''}],
    size: size,
    gridArea: gridArea,
    left: left,
    padding: padding,
    bottomBorder: bottomBorder
  }
}
