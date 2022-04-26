import React from 'react'
import './index.css'
import { AnyObject } from '@udecode/plate'

export const BracketComponent = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  return (
    <span {...attributes} className={`${className} brackets`}>
      {children}
    </span>
  )
}

export interface IBracketIconProps {
  // Intentionally left empty.
}

export const bracketIcon = () => {
  return (
    <>
      <div className="brackets">
        <span className="symbol-ico">[x]</span>
      </div>
    </>
  )
}
