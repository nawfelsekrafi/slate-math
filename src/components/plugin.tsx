import { getRenderElement, PlatePlugin, getRenderLeaf, getPlatePluginTypes } from "@udecode/plate";
import { ELEMENT_BIG_OPERATOR, getBigOperatorDeserialize } from "./BigOperator";
import { ELEMENT_EQUATIONBOX, getEquationBoxDeserialize } from "./EquationBoxElement";
import { ELEMENT_EQUATION_TEXT, getEquationTextDeserialize } from "./EquationText";
import { ELEMENT_FRACTION, getFractionDeserialize } from "./Fraction";
import { ELEMENT_INTEGRAL, getIntDeserialize} from "./Integral";
import { ELEMENT_LIMIT, getLimitDeserialize } from "./Limit";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { ELEMENT_SUMMATION, getSumDeserialize } from "./Summation";
import { equationBoxOnKeyDown } from "./util";



export const createEquationBoxPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_EQUATIONBOX,
  renderElement: getRenderElement(ELEMENT_EQUATIONBOX),
  deserialize: getEquationBoxDeserialize(),
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  onKeyDown: equationBoxOnKeyDown()
  
});

export const createMatrixPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_MATRIX,
  renderElement: getRenderElement(ELEMENT_MATRIX),
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  
});
export const createEquationTextPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_EQUATION_TEXT,
  renderElement: getRenderElement(ELEMENT_EQUATION_TEXT),
  deserialize: getEquationTextDeserialize(),
  voidTypes: getPlatePluginTypes(ELEMENT_EQUATION_TEXT),
});

export const createIntegralPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_INTEGRAL,
    renderElement: getRenderElement(ELEMENT_INTEGRAL),
    deserialize: getIntDeserialize(),
  });

  export const createFractionPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_FRACTION,
    renderElement: getRenderElement(ELEMENT_FRACTION),
    deserialize: getFractionDeserialize(),
  });
  export const createSummationPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_SUMMATION,
    renderElement: getRenderElement(ELEMENT_SUMMATION),
    deserialize: getSumDeserialize(),
  });

  export const createBigOperatorPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_BIG_OPERATOR,
    renderElement: getRenderElement(ELEMENT_BIG_OPERATOR),
    deserialize: getBigOperatorDeserialize(),
  });

  export const createLimitPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_LIMIT,
    renderElement: getRenderElement(ELEMENT_LIMIT),
    deserialize: getLimitDeserialize(),
    
  });


