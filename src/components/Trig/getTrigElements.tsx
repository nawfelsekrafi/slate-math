import React from "react";
//import Sin from "./Sin"
import { AnyObject } from '@udecode/plate'
import './Index.css'

export const TrigComponent = ({
  attributes,
  children,
  element,
  className,
}: AnyObject) => {
  return (
    <span {...attributes} className={`${className} trig`}>
      {children}
    </span>
  )
}

export interface ITrigIconProps {
  // Intentionally left empty.
}




 export const TrigIcon = () => {
  return (
    <>
      <div className="trig">
            <span className="symbol-ico">Sin
            </span>
      </div>
    </>
  );
}; 