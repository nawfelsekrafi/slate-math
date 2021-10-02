import { Deserialize, DeserializeNode } from '@udecode/plate-core';
import { DeserializedHTMLElement } from '@udecode/plate-html-serializer';
import { ELEMENT_LINK, ELEMENT_MENTION, getNodeDeserializer, getPlatePluginOptions } from '@udecode/plate';

export const deserializeMention = (): Deserialize => editor => {
  const options = getPlatePluginOptions(editor, ELEMENT_MENTION)


  return {
    element: getNodeDeserializer({
      type: options.type,
      node: (el: { getAttribute: (arg0: string) => any; }) => ({
        type: options.type,
        value: el.getAttribute('data-slate-value'),
      }),
      rules: [{ className: options.rootProps.className }],
      ...options?.mention?.deserialize,
    }),
  };
};
