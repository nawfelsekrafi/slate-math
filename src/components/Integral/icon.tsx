import { RenderLeaf } from "@udecode/plate";
import bottomlimit from "../Icons/BottomLimit";
import toplimit from "../Icons/UpperBound";
import "./index.css";
export const slateDOM = () => [
  {
    type: "math",
    subtype: "integral",
    children: [toplimit.slateDOM(), IntegralSymbol(), bottomlimit.slateDOM()],
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

export const integralInsert = () => {
  return (
    <>
      <sub className="intParent">
      <big>&#x222B;</big>
      <sub className="limit" style={{left: "-0.25em"}}><var>&#x2b1a;</var></sub>
      <sub className="limit" style={{left: "-0.4375em", marginRight: "-0.3375em" }}> </sub>
      </sub>
    </>
  );
};



/*
  return (
    <Latex
      delimiters={[
        { left: '$$', right: '$$', display: true },
        { left: '\\(', right: '\\)', display: false },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
      ]}>
      {equation}
    </Latex>
  );
  */