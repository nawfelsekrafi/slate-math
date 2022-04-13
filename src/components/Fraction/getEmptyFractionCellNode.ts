
import { TablePluginOptions, TElement
 } from '@udecode/plate';
import { ELEMENT_FRACTION } from '.';
import { getEmptyBoxNode } from '../EquationBoxElement/getEquationBoxNode';


export const getEmptyFractionNode = (

) => {
  return <TElement>{
    type: ELEMENT_FRACTION,
    children: [
      getEmptyBoxNode(.75,undefined,undefined,3,2),
      getEmptyBoxNode(.75),
    ],
  };
};