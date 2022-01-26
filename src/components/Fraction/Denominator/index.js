import React from "react";
const dom = () => ({
  type: "math",
  subtype: "denominator",
  children: [
    {
      type: "input",
      children: [{ text: '\u2b1a' }] // HTML dotted square ⬚ , Unicode number	U+2B1A
    }
  ]
});

const Element = (attributes, children) => {
  return (
    <span className="denominator" {...attributes}>
      {children}
    </span>
  );
};
export default { slateDOM: dom, MathElement: Element };
