import React from "react";
import LimIndex from "./LimIndex";
import LimValue from "./LimValue";
import "./index.css";
import { AnyObject } from '@udecode/plate-dnd/node_modules/@udecode/plate-core';
//import LimImage from '../LimImage.png';

export const limitDOM = () => [
  {
    type: "math",
    subtype: "limit",
    children: [LimIndex.slateDOM(), LimValue.slateDOM()]
  },
  {
    children: [
      {
        text: " "
      }
    ]
  }
];

export const limitElement = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & 
  React.HTMLAttributes<HTMLSpanElement>, children: string | number | boolean | {} | React.ReactElement<any, string | 
  React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined) => {
  return (
    <span className="limit" {...attributes}>
      lim{children}
    </span>
  );
};

export const LimitComponent = ({
    attributes,
    children,
    element,
    className,
  }: AnyObject) => {
  return (
    <span 
      {...attributes}
      className={`${className} limes`}
    >
      {children}
    </span>
  );
}

export const limitIcon = () => {
  return (
    <>
    <div className="limes">
            <span className="overup">lim</span>
            <span className="overdn">x&rarr;0</span>
        </div>
    </>
  );
};
