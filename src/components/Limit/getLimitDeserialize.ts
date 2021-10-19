import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_LIMIT } from './defaults';

export const getLimitDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_LIMIT);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'limitsymbol' }],
      ...options.deserialize,
    }),
  };
};
