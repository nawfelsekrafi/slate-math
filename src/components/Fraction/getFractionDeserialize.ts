import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_FRACTION } from './defaults';

export const getFractionDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_FRACTION);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'fraction' }],
      ...options.deserialize,
    }),
  };
};
