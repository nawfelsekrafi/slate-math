import { getPluginOptions, RenderFunction, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_MENTION,
  MentionPlugin,
} from '@udecode/plate-mention';
import { mathMentionOnSelect } from './mathMentionOnSelect';
import { Combobox, ComboboxProps, Data, NoData, TComboboxItem } from '@udecode/plate';
import { MentionEquationData } from './mentionables';

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
  return (
    <Combobox
      id={id}
      trigger={trigger!}
      controlled
      items={items}
      component={component}
      onRenderItem={RenderItem}
      onSelectItem={mathMentionOnSelect({
        key: pluginKey,
      })}
    />
  );
};


export const RenderItem = (props:any) =>{
  return (
    <div> {props.item.data.icon?props.item.data.icon:props.item.data.value}</div>
  )
}
