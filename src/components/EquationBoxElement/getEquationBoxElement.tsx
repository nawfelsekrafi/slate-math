import { AnyObject } from "@udecode/plate"
import { getEquationBoxElementStyles } from "./equationBoxElement.styles"
export const EquationBox = ({
    attributes,
    children,
    element,
    className,
  }: AnyObject) => {
    console.log(element.size)
    const style ={fontSize: element.size + 'em'}
    return (
      <span 
        {...attributes}
        style={style}
        className={className}
      >
        {children}
      </span>
    )
  }
  