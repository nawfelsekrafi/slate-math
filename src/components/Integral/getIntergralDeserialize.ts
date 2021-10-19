import { getElementDeserializer } from '@udecode/plate';
import {
  Deserialize,
  getPlatePluginOptions,
} from '@udecode/plate-core';
import { ELEMENT_INTEGRAL } from './defaults';

export const getIntDeserialize = (): Deserialize => (editor) => {
  const options = getPlatePluginOptions(editor, ELEMENT_INTEGRAL);

  return {
    element: getElementDeserializer({
      type: options.type,
      rules: [{ nodeNames: 'intsymbol' }],
      ...options.deserialize,
    }),
  };
};
