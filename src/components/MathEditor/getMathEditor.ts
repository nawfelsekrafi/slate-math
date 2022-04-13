import { ELEMENT_MATHEDITOR } from "./constants"
import { TElement } from '@udecode/plate-core';

export const getMathEditor = (init:TElement) => {
    return {
      type: ELEMENT_MATHEDITOR,
      children: [{text:''}],
      initial: init
    };
};