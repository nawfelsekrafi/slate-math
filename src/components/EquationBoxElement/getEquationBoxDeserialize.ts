import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_EQUATIONBOX } from './defaults';

export const getEquationBoxDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_EQUATIONBOX);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'equationbox' }],
      ...options.deserialize,
    }),
  };
};
