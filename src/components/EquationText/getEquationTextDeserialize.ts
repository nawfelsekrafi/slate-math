import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_EQUATION_TEXT as ELEMENT_EQUATION_TEXT } from './defaults';

export const getEquationTextDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_EQUATION_TEXT);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'EQUATION_TEXT' }],
      ...options.deserialize,
    }),
  };
};
