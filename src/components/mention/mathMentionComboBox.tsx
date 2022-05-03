import { getPluginOptions, RenderFunction, usePlateEditorRef } from '@udecode/plate-core';
import {
  ELEMENT_MENTION,
  MentionPlugin,
} from '@udecode/plate-mention';
import { mathMentionOnSelect } from './mathMentionOnSelect';
import { Combobox, ComboboxProps, Data, NoData, TComboboxItem, useComboboxSelectors } from '@udecode/plate';
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

  function searchMath(search: string) {
    return function(item: TComboboxItem<TData>) {
      let nodeText:string = item.text
      return nodeText.search(search) != -1;
    }
  }
  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey);
  return (
    <Combobox
      id={id}
      filter={searchMath}
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
