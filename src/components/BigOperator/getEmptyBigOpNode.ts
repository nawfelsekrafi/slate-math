import { ELEMENT_TR, TablePluginOptions } from '@udecode/plate-table';
import { TElement } from '@udecode/plate-core';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';
import { ELEMENT_BIG_OPERATOR } from './defaults';
import { getEquationTextNode } from '../EquationText';
import { css } from 'twin.macro';


export const getEmptyBigOpNode = () => {
  return <TElement>{
      type: ELEMENT_BIG_OPERATOR,
      children: [
        getEmptyBoxNode(css`font-size: 10px;`),
        getEmptyBoxNode(css`font-size: 24px;`),
        getEmptyBoxNode(css`font-size: 10px;`),
      ],
    };
  }
