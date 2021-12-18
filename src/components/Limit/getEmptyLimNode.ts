import { ELEMENT_TR, TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_LIMIT } from './defaults';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';




export const getEmptyLimNode = (
) => {

  return <TElement>{
    type: ELEMENT_LIMIT,
    children: [
      getEmptyLimCellNode(),
      getEmptyLimRowNode(),
      getEmptyBoxNode(1,'right')
    ]
  };
};
const getEmptyLimRowNode = () => {
  return{
    type: "span",
    children: [
      getEmptyBoxNode(.75),
      getEmptyArrowCellNode(),
      getEmptyBoxNode(.75)
    ]
  }
}


const getEmptyLimCellNode = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "Lim"}]
  }
}

const getEmptyArrowCellNode = () => {
  return{
    type: ELEMENT_EQUATION_TEXT,
    children: [{text: "\u2192"}]
  }
}