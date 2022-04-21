import { ELEMENT_DEFAULT, ELEMENT_PARAGRAPH } from "@udecode/plate"
import { ELEMENT_EQUATIONBOX } from "./defaults"
import matrixElement from "../Icons/MatrixElement/index";
import { ELEMENT_EQUATION_TEXT } from "../EquationText";
import styled from 'styled-components';
import { AlignVerticalBottom, AlignVerticalTop, Transform } from '@styled-icons/material';
import { getEmptyUneditableBigOpNode } from "../UneditableBigOperator/getEmptyBigOpNode";
import { LeftArrow } from '@styled-icons/boxicons-regular';
import BottomLimit from '../Icons/BottomLimit';

export const getEmptyBoxNode = (
styles?:any
) => {
  return {
    type: ELEMENT_EQUATIONBOX,
    children: [{text: ''}],
    styles:styles
  }
}
