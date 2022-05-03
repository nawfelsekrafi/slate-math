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

const Element = (attributes: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>, children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
  return (
    <span className="empty-Element" {...attributes}>
      {children}
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element };
