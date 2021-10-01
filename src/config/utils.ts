import {
  ELEMENT_LI,
  ELEMENT_LIC,
  ELEMENT_PARAGRAPH,
  ELEMENT_UL,
<<<<<<< HEAD
  TElement,
} from '@udecode/plate';
import { Text } from 'slate';
=======
} from '@udecode/plate'
import { Text } from 'slate'
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

export const createElement = (
  text = '',
  {
    type = ELEMENT_PARAGRAPH,
    mark,
  }: {
<<<<<<< HEAD
    type?: string;
    mark?: string;
  } = {}
) => {
  const leaf = { text };
  // if (mark) {
  //   leaf[mark] = true;
  // }
=======
    type?: string
    mark?: string
  } = {}
) => {
  const leaf = { text }
  if (mark) {
    leaf[mark] = true
  }
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

  return {
    type,
    children: [leaf],
<<<<<<< HEAD
  };
};
=======
  }
}
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

export const createList = (
  items: string[],
  { splitSeparator = '`' }: { splitSeparator?: string } = {}
): TElement[] => {
  const children: TElement[] = items.map((item) => {
<<<<<<< HEAD
    const texts = item.split(splitSeparator);
    const marks: Text[] = texts.map((text, index) => {
      const res: any = { text };
      if (index % 2 === 1) {
        res.code = true;
      }
      return res;
    });
=======
    const texts = item.split(splitSeparator)
    const marks: Text[] = texts.map((text, index) => {
      const res: any = { text }
      if (index % 2 === 1) {
        res.code = true
      }
      return res
    })
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

    return {
      type: ELEMENT_LI,
      children: [
        {
          type: ELEMENT_LIC,
          children: marks,
        },
      ],
<<<<<<< HEAD
    };
  });
=======
    }
  })
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

  return [
    {
      type: ELEMENT_UL,
      children,
    },
<<<<<<< HEAD
  ];
};

export const getNodesWithRandomId = (nodes: any[]) => {
  let _id = 10000;
  nodes.forEach((node) => {
    node.id = _id;
    _id++;
  });

  return nodes;
};
=======
  ]
}

export const getNodesWithRandomId = (nodes: any[]) => {
  let _id = 10000
  nodes.forEach((node) => {
    node.id = _id
    _id++
  })

  return nodes
}
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
