import { Laugh } from "@styled-icons/boxicons-regular";
import { PlatePlugin, createMentionPlugin, createComboboxPlugin, createPlateUI, createPluginFactory, MentionElement, StyledElement } from "@udecode/plate";
import { createPlugins, withProps } from "@udecode/plate-core";
import { components } from ".";
import { ELEMENT_BIG_OPERATOR } from "./BigOperator";
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";
import { EquationBox } from "./EquationBoxElement/getEquationBoxElement";
import { ELEMENT_EQUATION_TEXT } from "./EquationText";
import { PlateMath } from "./EquationText/getEquationTextRenderLeaf";
import { ELEMENT_FRACTION } from "./Fraction";
import { ELEMENT_LIMIT } from "./Limit";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { ELEMENT_EQUATION_MENTION } from "./mention/constants";
import { ELEMENT_EQUATION_MENTION_INSERT } from "./mention/defaults";
import { EquationMentionElement } from "./mention/equationMentionElement";
import { equationMentionNode } from "./mention/equationMentionNode";
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from "./UneditableBigOperator/defaults";
import { equationBoxOnKeyDown } from "./util";



export const createEquationBoxPlugin = createPluginFactory({
  key: ELEMENT_EQUATIONBOX,
  //isInline: true,
  isElement: true,
  component: EquationBox,
  handlers: {
    onKeyDown: equationBoxOnKeyDown()
  }
  
  
});


export const createMatrixPlugin = createPluginFactory({
  key: ELEMENT_MATRIX,
  //isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  component:  withProps(StyledElement, {
      className: 'slate-matrix',
      as: 'table',
      styles: {
        root: {
            display: 'inline-table',
            verticalAlign: 'middle',
            maxWidth: 'none',
        }
      },
    }),
});
export const createEquationTextPlugin = createPluginFactory({
  key: ELEMENT_EQUATION_TEXT,
  component: PlateMath,
  //isInline: true,
  isVoid: true,
  isElement: true,
});

export const createUneditableBigOperator = createPluginFactory({
  key: ELEMENT_UNEDITABLE_BIG_OPERATOR,
  //isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  
});


export   const createFractionPlugin = createPluginFactory({
    key: ELEMENT_FRACTION,
    //isInline: true,
    isElement: true,

  });

export const createBigOperatorPlugin = createPluginFactory({
    key: ELEMENT_BIG_OPERATOR,
    //isInline: true,
    isElement: true,

  });

 export const createLimitPlugin = createPluginFactory({
    key: ELEMENT_LIMIT,
    //isInline: true,
    isElement: true,

  });

  
 export const createEquationMentionInsert = createPluginFactory({
  key: ELEMENT_EQUATION_MENTION_INSERT,
  component: EquationMentionElement,
  isInline: true,
  isElement: true,

});
  


export const createEquationMentionPlugin = (): PlatePlugin => {
  return createMentionPlugin({ options: { trigger: '/', createMentionNode: (item) => equationMentionNode(item), id: ELEMENT_EQUATION_MENTION}, key: ELEMENT_EQUATION_MENTION  })
}
  

  export const createMathPlugins = () => {
    const plugins = createPlugins([
      createEquationBoxPlugin(),
      createUneditableBigOperator(),
      createLimitPlugin(),
      createBigOperatorPlugin(),
      createFractionPlugin(),
      createEquationTextPlugin(),
      createMatrixPlugin(),
      createEquationMentionInsert(),
      createEquationMentionPlugin()
    ],{
      components: components,
    });
    return plugins
  }






