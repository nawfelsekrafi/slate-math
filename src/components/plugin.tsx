import { getRenderElement, PlatePlugin, getRenderLeaf } from "@udecode/plate";
import { ELEMENT_BIG_OPERATOR, getBigOperatorDeserialize } from "./BigOperator";
import { ELEMENT_EQUATIONBOX, getEquationBoxDeserialize } from "./EquationBoxElement";
import { ELEMENT_EQUATION_TEXT, getEquationTextDeserialize, getRenderLeafEqText } from "./EquationText";
import { getEquationTextOnKeyDown } from "./EquationText/EquationTextKeyDown";
import { ELEMENT_FRACTION, getFractionDeserialize } from "./Fraction";
import { ELEMENT_INTEGRAL, getIntDeserialize} from "./Integral";
import { ELEMENT_LIMIT, getLimitDeserialize } from "./Limit";
import { ELEMENT_SUMMATION, getSumDeserialize } from "./Summation";



export const createEquationBoxPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_EQUATIONBOX,
  renderElement: getRenderElement(ELEMENT_EQUATIONBOX),
  deserialize: getEquationBoxDeserialize(),
  renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX)
  //onKeyDown: getEquationBoxOnKeyDown(), 
  
});
export const createEquationTextPlugin = (): PlatePlugin => ({
  pluginKeys: ELEMENT_EQUATION_TEXT,
  renderElement: getRenderElement(ELEMENT_EQUATION_TEXT),
  deserialize: getEquationTextDeserialize(),
  onKeyDownCapture: getEquationTextOnKeyDown(), 
  renderLeaf: getRenderLeafEqText(ELEMENT_EQUATION_TEXT)
  
  //onClickCapture: asa(),
  
});

export const createIntegralPlugin = (): PlatePlugin => ({
    pluginKeys: ELEMENT_INTEGRAL,
    renderElement: getRenderElement(ELEMENT_INTEGRAL),
    deserialize: getIntDeserialize(),
    renderLeaf: getRenderLeaf(ELEMENT_INTEGRAL)
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

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


