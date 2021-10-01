import { Transforms, Editor } from 'slate';
import { someNode } from '@udecode/plate';
import { TablePluginOptions
 } from '@udecode/plate';
import { getEmptyFractionNode } from './getEmptyFractionNode';

export const insertFraction = (editor: Editor, options?: TablePluginOptions
) => {

  if (!someNode(editor, { match: { type: "table" } })) {
    Transforms.insertNodes(editor, getEmptyFractionNode());
    Transforms.move(editor);
  }
};
export default insertFraction;