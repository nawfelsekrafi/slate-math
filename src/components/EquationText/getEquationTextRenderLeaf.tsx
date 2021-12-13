import { getEquationTextStyles } from './equationText.styles';
import { useSelected, useFocused } from 'slate-react';
import { AnyObject } from '@udecode/plate-autoformat/node_modules/@udecode/plate-core';


export const PlateMath = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  var c = children.props.children.props.text
  return (
    <span 
      {...attributes}
      contentEditable={false}
      className={className}
    >
      {c.text}
      {children}
    </span>
  )
}
