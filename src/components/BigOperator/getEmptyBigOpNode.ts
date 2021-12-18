import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_BIG_OPERATOR } from './defaults';
import { getEquationTextNode } from '../EquationText';


export const getEmptyBigOpNode = () => {
  return <TElement>{
      type: ELEMENT_BIG_OPERATOR,
      children: [
        getEmptyBoxNode(.75),
        getEmptyBoxNode(1.5),
        getEmptyBoxNode(.75),
        getEmptyBoxNode(1,'right')
      ],
    };
  }
