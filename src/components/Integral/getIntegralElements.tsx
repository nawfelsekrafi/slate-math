import React from "react";
import bottomlimit from "../BottomLimit";
import toplimit from "../UpperBound";
import symbol from "../Symbols/IntegralSymbol";
import "./index.css";

export const slateDOM = () => [
  {
    type: "math",
    subtype: "integral",
    children: [toplimit.slateDOM(), symbol.slateDOM(), bottomlimit.slateDOM()],
  },
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

export const Element = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="integral" {...attributes}>
      {children}
    </span>
  );
};

export const integralIcon = () => {
  return (
    <>
      <span className="integral">
        <span className="toplimit">x</span>
        <span className="symbol">&#x222B;</span>
        <span className="bottomlimit">y</span>
      </span>
    </>
  );
};
const IntegralSymbol = () => ({
  type: "math",
  subtype: "intsymbol",
  children: [{ text: " \u222b " }],
});
export const intParent = () => {
  return (
    <>
      <sub className="intParent">
        <span className="toplimit">x</span>
        <span className="symbol">&#x222B;</span>
        <span className="bottomlimit">y</span>
      </sub>
    </>
  );
};
