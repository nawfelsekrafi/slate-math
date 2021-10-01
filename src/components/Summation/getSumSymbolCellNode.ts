import { ELEMENT_PARAGRAPH, ELEMENT_TD, Plate } from '@udecode/plate';
import { DEFAULTS_PARAGRAPH } from '@udecode/plate';
import { TablePluginOptions
 } from '@udecode/plate';
import summationSymbol from "../Symbols/SummationSymbol/index";



export const getSumSymbolCellNode = (
  options?: TablePluginOptions
  & { header?: boolean }
) => {


  return {
    type: ELEMENT_TD,
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [summationSymbol.slateDOM(),],
      },
    ],
  };
};