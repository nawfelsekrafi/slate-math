import { Laugh } from "@styled-icons/boxicons-regular";
import { PlatePlugin, createMentionPlugin, createComboboxPlugin, createPlateUI, createPluginFactory, MentionElement } from "@udecode/plate";
import { createPlugins } from "@udecode/plate-core";
import { getMentionOnSelectItem } from "@udecode/plate-mention/dist/getMentionOnSelectItem";
import { components } from ".";
import { ELEMENT_BIG_OPERATOR } from "./BigOperator";
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";
import { ELEMENT_EQUATION_TEXT } from "./EquationText";
import { PlateMath } from "./EquationText/getEquationTextRenderLeaf";
import { ELEMENT_FRACTION } from "./Fraction";
import { ELEMENT_INTEGRAL} from "./Integral";
import { ELEMENT_LIMIT } from "./Limit";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { ELEMENT_EQUATION_MENTION } from "./mention/constants";
import { ELEMENT_EQUATION_MENTION_INSERT } from "./mention/defaults";
import { EquationMentionElement } from "./mention/equationMentionElement";
import { equationMentionNode } from "./mention/equationMentionNode";
import { ELEMENT_SUMMATION } from "./Summation";
import { equationBoxOnKeyDown } from "./util";



export const createEquationBoxPlugin = createPluginFactory({
  key: ELEMENT_EQUATIONBOX,
  //isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  handlers: {
    onKeyDown: equationBoxOnKeyDown()
  }
  
  
});


export const createMatrixPlugin = createPluginFactory({
  key: ELEMENT_MATRIX,
  //isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  
});
export const createEquationTextPlugin = createPluginFactory({
  key: ELEMENT_EQUATION_TEXT,
  component: PlateMath,
  //isInline: true,
  isVoid: true,
  isElement: true,
});

 export const createIntegralPlugin = createPluginFactory({
    key: ELEMENT_INTEGRAL,
    isInline: false,
    isElement: true,

  });

export   const createFractionPlugin = createPluginFactory({
    key: ELEMENT_FRACTION,
    //isInline: true,
    isElement: true,

  });
export const createSummationPlugin = createPluginFactory({
    key: ELEMENT_SUMMATION,
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
      createLimitPlugin(),
      createBigOperatorPlugin(),
      createSummationPlugin(),
      createFractionPlugin(),
      createIntegralPlugin(),
      createEquationTextPlugin(),
      createMatrixPlugin(),
      createEquationMentionInsert(),
      createEquationMentionPlugin()
    ],{
      components: components,
    });
    return plugins
  }






