import { useSelected, useFocused, ReactEditor } from 'slate-react'
import { AnyObject } from '@udecode/plate-core'
import tw from 'twin.macro'
import { getEquationTextStyles } from './getEquationText.styles'

export const EquationText = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  const selected = useSelected()
  const focused = useFocused()
  const styles = getEquationTextStyles();

  var txt = { text: '' }
  
  styles.root.css.push(element.styles) //overwrite styles
  if (children.props != undefined) txt = children.props.children.props.text
  return (
    <span
      {...attributes}
      contentEditable={false}
      className={className}
      css={styles.root.css}
    >
      {txt.text}
      {children}
    </span>
  )
}
