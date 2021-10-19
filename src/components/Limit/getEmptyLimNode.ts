import { ELEMENT_TR, TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_LIMIT } from './defaults';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';




export const getEmptyLimNode = (options?: TablePluginOptions
) => {

  return <TElement>{
    type: ELEMENT_LIMIT,
    children: [
      getEmptyLimCellNode(),
      getEmptyLimRowNode(),
    ]
  };
};
const getEmptyLimRowNode = () => {
  return{
    type: "span",
    children: [
      getEmptyBoxNode(),
      getEmptyArrowCellNode(),
      getEmptyBoxNode()
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