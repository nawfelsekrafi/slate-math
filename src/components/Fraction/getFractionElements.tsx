import React from 'react'
import './index.css'
import { AnyObject } from '@udecode/plate'

export const FractionComponent = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  return (
    <span {...attributes} className={`${className} fractions`}>
      {children}
    </span>
  )
}

export interface IFractionIconProps {
  // Intentionally left empty.
}

export const fractionIcon = () => {
  return (
    <>
      <div className="fractions">
        <span className="symbol-ico">x/y</span>
      </div>
    </>
  )
}
