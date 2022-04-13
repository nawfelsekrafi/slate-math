import React from "react";


const dom = () => ({
  type: "math",
  subtype: "empty",
  children: [
    {
      type: "input",
      placeholder: true,
      children: [{ placeholder: true, text: '\u2b1a'  }],
    },
  ],
});

const Element = (attributes, children) => {
  return (
    <span className="empty-Element" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
