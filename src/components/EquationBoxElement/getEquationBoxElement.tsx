import { AnyObject, getHandler, getMentionElementStyles, getRootProps, MentionInputElementProps } from "@udecode/plate"
import { Transforms } from "slate";
import { useFocused, useSelected } from "slate-react";
import tw from "twin.macro";
import { EquationBoxElementStyleProps } from "./getEquationBoxElement.types";
export const EquationBox = (props: EquationBoxElementStyleProps) => {
  const onClick = () => {console.log(isEmpty)}
  const { attributes, children, nodeProps, element, as } = props;

  
    const selected = useSelected();
    const focused = useFocused();
    
    const isEmpty = element.children[0].text == ''
    const styles = 
    [`position: inherit;`,
    tw`my-0 mx-px align-baseline inline-grid`,
    `background-color: #FFFFFF;`,
    isEmpty && `background-color: #eee;`,
    selected && tw`boxShadow[0 0 0 2px #B4D5FF] bg-gray-300`,
    `margin: 0 auto;`,
    `:hover {box-shadow: 0px 0px 5px 1px #9a9a9a;}`]
    if(element.gridArea)
      styles.push(`grid-area: ` + element.gridArea + `;`)
    if(element.bottomBorder) 
      styles.push(`border-bottom: ` +element.bottomBorder +`px solid black;`)
    styles.push(`padding: 0px ` + element.padding + `px 0px;`)
    styles.push(isEmpty && `padding: 0px ` + (element.padding + 3) + `px 0px;`)

    styles.push(`font-size: `+element.size + 'em;')
    return (
      <span 
        {...attributes}
        as={as}
        data-slate-value={element.value}
        css={styles}
        onClick={getHandler(onClick)}
      >
        {children}
      </span>
    )
  }
  