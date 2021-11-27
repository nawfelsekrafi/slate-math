import { getPlatePluginTypes, getRenderElement, NodeProps, Plate, PlatePlugin, RenderElement, RenderLeaf } from '@udecode/plate-core';
import { ELEMENT_EQUATION_TEXT } from '.';
import { components } from '..';
import { MathComponent } from 'mathjax-react'
import { EquationTextRoot } from './equationText.styles';


export const PlateMath = ({
  attributes,
  children,
  element,
  className,
}: NodeProps) => {
  var c = children.props.children.props.text
  var s = element.style
  console.log(s)
  return (
    <EquationTextRoot 
      {...attributes}
      contentEditable={false}
      style={s}
      className={className}
      

      
    >
      {c.text}
      {children}
    </EquationTextRoot>
  )
}
