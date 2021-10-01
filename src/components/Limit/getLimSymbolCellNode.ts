import { Plate } from '@udecode/plate';
import { DEFAULTS_PARAGRAPH } from '@udecode/plate';

import { TablePluginOptions
 } from '@udecode/plate';
import LimIndex from "./LimIndex";


export const getLimSymbolCellNode = (
  options?: TablePluginOptions
 &  { header?: boolean }
) => {


  return {
    type: "td",
    children: [
      {
        type: "p",
        children: [LimIndex.slateDOM(),],
      },
    ],
  };
};