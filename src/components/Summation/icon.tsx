import React from "react";
import bottomlimit from "../Icons/BottomLimit";
import toplimit from "../Icons/UpperBound";
import "./index.css";

export const summationDOM = () => [
  {
    type: "math",
    subtype: "summation",
    children: [toplimit.slateDOM(), summation(), bottomlimit.slateDOM()],
  },
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

export const summationElement = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="summation" {...attributes}>
      {children}
    </span>
  );
};

export const summationIcon = (attributes?: any, children?: any) => {
  return (
    <>
      <div className="summation">
        <span className="top-limit-ico">x</span>
        <span className="sum-symbol-ico">&sum;</span>
        <span className="bottom-limit-ico">y=n</span>
      </div>
    </>
  );
};

const summation = () => ({
  type: "math",
  subtype: "summationSymbol",
  children: [{ text: "\u2211" }]
});
