
import { ComboboxOnSelectItem, comboboxStore, Data, ELEMENT_MENTION, ELEMENT_MENTION_INPUT, getBlockAbove, getPlugin, getPluginOptions, insertNodes, MentionNode, MentionNodeData, MentionPlugin, NoData, PlatePluginKey, TComboboxItem } from '@udecode/plate';

import { Editor, Transforms } from 'slate';
import { ELEMENT_EQUATION_TEXT } from '../EquationText';
import { ELEMENT_EQUATION_MENTION } from './constants';
import { ELEMENT_EQUATION_MENTION_INSERT } from './defaults';
import { MentionEquationData } from './mentionables';


export interface CreateMentionNode<TData extends Data> {
  (item: TComboboxItem<TData>): MentionNodeData;
}

export const mathMentionOnSelect = <TData extends Data = NoData>({
  key = ELEMENT_EQUATION_MENTION,
}: PlatePluginKey = {}): ComboboxOnSelectItem<TData> => (editor, item) => {
  const targetRange = comboboxStore.get.targetRange();
  if (!targetRange) return;
  
  const {
    type,
    options: { insertSpaceAfterMention, createMentionNode },
  } = getPlugin<MentionPlugin>(editor, ELEMENT_EQUATION_MENTION);
  const pathAbove = getBlockAbove(editor)?.[1];
  const isBlockEnd =
    editor.selection &&
    pathAbove &&
    Editor.isEnd(editor, editor.selection.anchor, pathAbove);

  Editor.withoutNormalizing(editor, () => {
    // insert a space to fix the bug
    if (isBlockEnd) {
      Transforms.insertText(editor, ' ');
    }

    // select the text and insert the element
    Transforms.select(editor, targetRange);
    
    Transforms.removeNodes(editor, {
      // TODO: replace any
      match: (node: any) => node.type === ELEMENT_MENTION_INPUT,
    });
    var t = item.data as MentionEquationData
    if(t.node){
      insertNodes(editor,t.node(t.value))
    }
      
    else{
      insertNodes<MentionNode>(editor, {
        type: ELEMENT_EQUATION_MENTION_INSERT,
        children: [{ text: '' }],
        ...createMentionNode!(item),
      });
    }

    // move the selection after the element
    Transforms.move(editor);

    // delete the inserted space
    if (isBlockEnd && !insertSpaceAfterMention) {
      Transforms.delete(editor);
    }
  });
  return comboboxStore.set.reset();
};
