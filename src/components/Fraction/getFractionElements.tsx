import React from "react";
import numerator from "./Numerator";
import denominator from "./Denominator";
import "./index.css";

export const fractionDOM = () => [
  {
    type: "math",
    subtype: "fraction",
    children: [numerator.slateDOM(), denominator.slateDOM()],
  },
  {
    children: [
      {
        text: "",
      },
    ],
  },
];

export const fractionElement = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="fraction" {...attributes}>
      {children}
    </span>
  );
};

export const fractionIcon = () => {
  return (
    <>
      <span className="fraction-icon">
        <span>x</span>
        <span className="denominator-icon">y</span>
      </span>
    </>
  );
};
export const fractionLatex = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined) => {
  return (
    <span {...attributes}>
      <span> - \frac{"{a}{b}"}</span>
      {children}
    </span>
  );
};


