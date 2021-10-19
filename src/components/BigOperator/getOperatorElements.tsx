import { ClassAttributes, HTMLAttributes, ReactChild, ReactFragment, ReactPortal } from "react";
import "./index.css";

export const dom = () => [
  {
    type: "math",
    subtype: "bigOperator",
    children: [],
  },
  {
    children: [
      {
        text: " ",
      },
    ],
  },
];

export const Element = (attributes: JSX.IntrinsicAttributes & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>, children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => {
  return (
    <span className="bigOperator" {...attributes}>
      {children}
    </span>
  );
};

export const bigOpIcon = () => {
  return (
    <>
      <div className="bigOperator">
        <span className="top-limit-ico">x</span>
        <span className="symbol-ico">&#11034;</span>
        <span className="bottom-limit-ico">y=n</span>
      </div>
    </>
  );
};

