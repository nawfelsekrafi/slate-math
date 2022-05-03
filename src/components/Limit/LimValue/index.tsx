import React from "react";
const dom = () => ({
  type: "math",
  subtype: "LimValue",
  children: [
    {
      type: "input",
      children: [{ text: "\u2b1a\u2192\u2b1a" }]
    }
  ]
});

const Element = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="LimValue" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
