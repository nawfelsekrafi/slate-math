import { getEquationTextStyles } from './equationText.styles';
import { useSelected, useFocused, ReactEditor } from 'slate-react';
import { AnyObject } from '@udecode/plate-core';
import tw from 'twin.macro';


export const PlateMath = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  const selected = useSelected();
  const focused = useFocused();
  const styles = [tw`my-0 mx-px inline-grid`,
  selected && focused && tw`boxShadow[0 0 0 2px #B4D5FF]`,
  `font-family: Symbola-mq,"Times New Roman",serif;`,
  `text-align: center;`,
  `font-style: normal; font-variant: normal;`
]

  var c = {text: ""}
  if(children.props != undefined)
    c = children.props.children.props.text
  return (
    <span 
      {...attributes}
      contentEditable={false}
      className={className}
      css={styles}
    >
      {c.text}
      {children}
    </span>
  )
}
