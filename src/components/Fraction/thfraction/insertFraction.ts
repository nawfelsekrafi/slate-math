import { Transforms, Editor } from 'slate';
import { ELEMENT_TABLE, someNode } from '@udecode/plate';
import { TablePluginOptions
 } from '@udecode/plate';
import { getEmptyFractionNode } from './getEmptyFractionNode';

export const insertFraction = (editor: Editor, options?: TablePluginOptions
) => {

  if (!someNode(editor, { match: { type: ELEMENT_TABLE } })) {
    Transforms.insertNodes(editor, getEmptyFractionNode());
    Transforms.move(editor);
  }
};
export default insertFraction;