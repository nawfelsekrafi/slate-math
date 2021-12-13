import { getPluginOptions, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_MENTION,
  MentionPlugin,
} from '@udecode/plate-mention';
import { mathMentionOnSelect } from './mathMentionOnSelect';
import { Combobox, ComboboxProps, Data, NoData } from '@udecode/plate';

export const MathMentionCombobox = <TData extends Data = NoData>({
  items,
  component,
  onRenderItem,
  pluginKey = ELEMENT_MENTION,
  id = pluginKey,
}: Pick<
  Partial<ComboboxProps<TData>>,
  'id' | 'items' | 'component' | 'onRenderItem'
> & { pluginKey?: string }) => {
  const editor = usePlateEditorRef()!;

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);
  console.log(trigger)
  return (
    <Combobox
      id={id}
      trigger={trigger!}
      controlled
      items={items}
      component={component}
      onRenderItem={onRenderItem}
      onSelectItem={mathMentionOnSelect({
        key: pluginKey,
      })}
    />
  );
};
