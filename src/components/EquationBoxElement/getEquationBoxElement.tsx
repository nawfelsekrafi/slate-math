import { AnyObject } from "@udecode/plate"
export const EquationBox = ({
    attributes,
    children,
    element,
    className,
  }: AnyObject) => {
    var style;
    if (element.gridArea){
      style = {fontSize: element.size + 'em', gridArea: element.gridArea}
    }
    else{
      style = {fontSize: element.size + 'em'}
    }
    
    
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
  