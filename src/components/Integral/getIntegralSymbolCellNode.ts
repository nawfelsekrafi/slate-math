
import { ELEMENT_PARAGRAPH, ELEMENT_TD, TablePluginOptions } from '@udecode/plate';
import integralSymbol from "../Symbols/IntegralSymbol/index";



export const getIntegralSymbolCellNode = (
  options?: TablePluginOptions  & { header?: boolean }
) => {


  return {
    type: ELEMENT_TD,
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [integralSymbol.slateDOM(),],
      },
    ],
  };
};