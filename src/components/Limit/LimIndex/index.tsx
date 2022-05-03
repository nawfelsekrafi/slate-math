import React from "react";
const dom = () => ({
  type: "math",
  subtype: "LimIndex",
  children: [
    {
      type: "input",
      children: [{ text: "Lim" }]
    }
  ]
});

const Element = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="LimIndex" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
