import React from 'react';
import { Combobox, ComboboxProps, comboboxStore } from '@udecode/plate-combobox';
import { getPlatePluginOptions, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  MentionNode,
  MentionPlugin,
} from '@udecode/plate-mention';
import { ComboboxOnSelectItem, getBlockAbove, insertNodes } from '@udecode/plate';
import { Editor, Transforms } from 'slate';
import { mathMentionOnSelect } from './mathMentionOnSelect';
export declare type NoData = undefined;
export declare type Data = unknown;
export const MathMentionCombobox = <TData extends Data = NoData>({
  items,
  component,
  onRenderItem,
  pluginKey = ELEMENT_MENTION,
  id = pluginKey,
}: Pick<
  Partial<ComboboxProps<undefined>>,
  'id' | 'items' | 'component' | 'onRenderItem'
> & { pluginKey?: string }) => {
  const editor = usePlateEditorRef()!;

  const { trigger } = getPlatePluginOptions<MentionPlugin>(editor, pluginKey);

  return (
    <Combobox
      id={id}
      trigger={trigger!}
      controlled
      items={items}
      component={component}
      onRenderItem={onRenderItem}
      onSelectItem={mathMentionOnSelect({
        pluginKey: pluginKey,
      })}
    />
  );
};



