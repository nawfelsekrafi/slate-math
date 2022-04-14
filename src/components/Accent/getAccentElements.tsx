import React from 'react'
import './index.css'
//import LimImage from '../LimImage.png';
import { AnyObject } from '@udecode/plate'

export const AccentComponent = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  return (
    <span {...attributes} className={`${className} accents`}>
      {children}
    </span>
  )
}

export interface IAccentIconProps {
  // Intentionally left empty.
}

// accent icon -> a
export const accentIcon = () => {
  return (
    <>
      <div className="accents">
        <span className="symbol-ico">&#x4d3;</span>
      </div>
    </>
  )
}
