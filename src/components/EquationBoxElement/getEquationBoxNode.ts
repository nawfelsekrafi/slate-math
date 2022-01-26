import { ELEMENT_PARAGRAPH } from "@udecode/plate"
import { ELEMENT_EQUATIONBOX } from "./defaults"
import matrixElement from "../MatrixElement/index";
import { ELEMENT_EQUATION_TEXT } from "../EquationText";
import styled from 'styled-components';
import { AlignVerticalBottom, AlignVerticalTop } from '@styled-icons/material';

export const getEmptyBoxNode = (size:number = 1, gridArea?:string) => {
  return {
    type: ELEMENT_EQUATIONBOX,
    children: [{text: "\u2b1a"}],
    size: size,
    gridArea: gridArea
  }
}

export const getEmptyBoxNodePower = (size:number = 1, gridArea?:string) => {
  return {
    type: ELEMENT_EQUATIONBOX,
    children: [{text: "\u2b1a"}],
    size: size,
    gridArea: gridArea,
  }
}

