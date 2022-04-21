
import { TablePluginOptions, TElement
 } from '@udecode/plate';
import { css } from 'twin.macro';
import { ELEMENT_FRACTION } from '.';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';


export const getEmptyFractionNode = (

) => {
  return <TElement>{
    type: ELEMENT_FRACTION,
    children: [
      getEmptyBoxNode(css`
        font-size: 10px;
        padding: 0px 3px 0px;
        bottom-border: 2px solid black;`
      ),
      getEmptyBoxNode(css`font-size: 10px;`),
    ],
  };
};