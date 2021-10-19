import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_BIG_OPERATOR } from './defaults';

export const getBigOperatorDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_BIG_OPERATOR);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'bigoperator' }],
      ...options.deserialize,
    }),
  };
};
