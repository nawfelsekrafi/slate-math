import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_BIG_OPERATOR } from './defaults';


export const getEmptyBigOpNode = (options?: TablePluginOptions) => {
  return <TElement>{
      type: ELEMENT_BIG_OPERATOR,
      children: [
        getEmptyBoxNode(),
        getEmptyBigOpCell(),
        getEmptyBoxNode()
      ],
    };
  }
  const getEmptyBigOpCell = () => {
    return{
      type: "span",
      children: [{text: "\u2b1a"}]
    }
  }