import { getSlateClass, PlatePluginComponent, RenderNodeOptions, TRenderLeafProps } from '@udecode/plate';
import { DefaultLeaf } from 'slate-react';


/**
 * Get a `Editable.renderLeaf` handler for `options.type`.
 * If the type is equals to the slate leaf type and if the text is not empty, render `options.component`.
 * Else, return `children`.
 */
export const getEditableRenderLeafEqText = ({
  type,
  component: Leaf = DefaultLeaf as PlatePluginComponent,
  getNodeProps,
}: RenderNodeOptions) => ({
  children,
  leaf,
  text,
  attributes,
}: TRenderLeafProps) => {
  const nodeProps =
    getNodeProps?.({ leaf, text, attributes, children }) ??
    leaf.attributes ??
    {};
    
    const c = {
        'data-slate-inline': true
    }
    leaf.attributes = c
    console.log(leaf.attributes)

  if (leaf[type] && !!leaf.text) {
    return (
      <Leaf
        className={getSlateClass(type)}
        attributes={children}
        leaf={leaf}
        text={text}
        nodeProps={nodeProps}
      >
        {children}
      </Leaf>
    );
  }

  return children;
};
