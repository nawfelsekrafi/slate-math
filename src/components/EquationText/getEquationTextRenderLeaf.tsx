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
  `font-family: Symbola-mq,"Times New Roman",serif;`,
  `text-align: center;`,
  `font-style: normal; font-variant: normal;`,
  `position: relative;`,
]
  if(element.top)
    styles.push(`top: ` + element.top + `;`);
  if(element.fontSize)
    styles.push(`font-size: ` + element.fontSize + `;`)
  var txt = {text: ""}
  if(children.props != undefined)
    txt = children.props.children.props.text
  return (
    <span 
      {...attributes}
      contentEditable={false}
      className={className}
      css={styles}
    >
      {txt.text}
      {children}
    </span>
  )
}
