import {
  AnyObject,
  getHandler,
  getMentionElementStyles,
  getRootProps,
  MentionInputElementProps,
  StyledElement,
  withProps,
} from '@udecode/plate'
import { Transforms } from 'slate'
import { useFocused, useSelected } from 'slate-react'
import tw, { css } from 'twin.macro'
import { getEquationBoxStyles } from './getEquationBoxElement.styles'
import { EquationBoxElementStyleProps } from './getEquationBoxElement.types'
export const EquationBox = (props: EquationBoxElementStyleProps) => {
  const { attributes, children, nodeProps, element, as } = props

  const selected = useSelected()
  const focused = useFocused()
  const onClick = () => {
      console.log(element.styles)
  }
  const isEmpty = (element.children[0].text == '')
  const styles = getEquationBoxStyles({
    ...props,
    isEmpty,
    selected,
    focused,
    boxStyles: element.styles //overrides styles
  });
  
  return (
    <span
      {...attributes}
      as={as}
      className={"slate-equationbox"}
      data-slate-value={element.value}
      css={styles.root.css}
      onClick={getHandler(onClick)}
      
    >
      {children}
    </span>
  )
}
