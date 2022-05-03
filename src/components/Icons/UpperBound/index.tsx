import React from "react";
const dom = (eq?: any) => ({
  type: "toplimit",
  subtype: "math",
  children: [
    {
      type: "input",
      children: [{ text: '\u2b1a'  }],
    },
  ],
});

const Element = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="top-limit" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
