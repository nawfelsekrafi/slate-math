import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_SUMMATION } from './defaults';

export const getSumDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_SUMMATION);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'sumsymbol' }],
      ...options.deserialize,
    }),
  };
};
