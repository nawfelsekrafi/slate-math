
import { ComboboxOnSelectItem, comboboxStore, Data, ELEMENT_MENTION, ELEMENT_MENTION_INPUT, getBlockAbove, getPlugin, getPluginOptions, insertNodes, MentionNode, MentionNodeData, MentionPlugin, NoData, PlatePluginKey, TComboboxItem } from '@udecode/plate';

import { Editor, Transforms } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ELEMENT_EQUATION_TEXT, getEquationTextNode } from '../EquationText';
import { insertMathNode } from "../insertMathNode";
import { ELEMENT_EQUATION_MENTION } from './constants';
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

    Transforms.select(editor, targetRange);

    HistoryEditor.withoutMerging(editor, () =>
      Transforms.removeNodes(editor, {
        // TODO: replace any
        match: (node: any) => node.type === ELEMENT_MENTION_INPUT,
      })
    );


    var mentionData = item.data as MentionEquationData
    console.log(mentionData)
    if(mentionData.node){
      insertMathNode(mentionData.node,editor,mentionData.value)
    }
    else{
      insertMathNode(getEquationTextNode,editor,mentionData.value)
    }

    // move the selection after the element
    Transforms.move(editor);

    // delete the inserted space
    if (isBlockEnd && !insertSpaceAfterMention) {
      console.log("delete")
      Transforms.delete(editor);
    }
  });
  return comboboxStore.set.reset();
};