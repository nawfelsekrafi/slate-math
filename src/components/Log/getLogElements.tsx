import React from "react";
import "./index.css";
//import LimImage from '../LimImage.png';
import { AnyObject } from "@udecode/plate";

export const LogComponent = ({
    attributes,
    children,
    element,
    className,
  }: AnyObject) => {
  return (
    <span 
      {...attributes}
      className={`${className} logs`}
    >
      {children}
    </span>
  );
}

export interface ILogIconProps {
  // Intentionally left empty.
}
      
export const logIcon = () => {
  return (
    <>
    <div className="logs">
        <span className="overup">log
        <span className="symbol-ico">&#11034;</span>
        <span className="symbol-ico2">&#11034;</span>
        </span>
    </div>
    </>
  );
};