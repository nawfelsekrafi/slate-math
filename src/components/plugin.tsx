import { Laugh } from '@styled-icons/boxicons-regular'
import {
  PlatePlugin,
  createMentionPlugin,
  createComboboxPlugin,
  createPlateUI,
  createPluginFactory,
  MentionElement,
  StyledElement,
  createExitBreakPlugin,
  KEYS_HEADING,
  ExitBreakPlugin,
} from '@udecode/plate'
import { createPlugins, withProps } from '@udecode/plate-core'
import { components } from '.'
import { ELEMENT_BIG_OPERATOR } from './BigOperator'
import { ELEMENT_EQUATIONBOX } from './EquationBoxElement'
import { EquationBox } from './EquationBoxElement/getEquationBoxElement'
import { ELEMENT_EQUATION_TEXT } from './EquationText'
import { EquationText } from './EquationText/getEquationText'
import { ELEMENT_FRACTION, ELEMENT_LINEAR_FRACTION, ELEMENT_SKEWED_FRACTION, ELEMENT_STACKED_FRACTION } from './Fraction'
import { FractionComponent } from './Fraction/getFractionElements'
import { ELEMENT_LIMIT, LimitComponent } from './Limit'
import { ELEMENT_LOG } from './Log'
import { ELEMENT_MATRIX, ELEMENT_MATRIX_BOX } from './Matrix/defaults'
import { ELEMENT_EQUATION_MENTION } from './mention/constants'
import { EquationMentionElement } from './mention/equationMentionElement'
import { equationMentionNode } from './mention/equationMentionNode'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from './UneditableBigOperator/defaults'
import { equationBoxOnKeyDown } from './util'
import { LogComponent } from './Log/getLogElements'
import { AccentComponent } from './Accent/getAccentElements'
import { ELEMENT_ACCENT } from './Accent'
// import {limitElement} from './Limit/getLimitElements';
import {withBox} from "./EquationBoxElement/withBox"
import { ELEMENT_MATH_CONTAINER } from "./MathContainer/defaults";
import { ELEMENT_BRACKET } from './Bracket'
import { BracketComponent } from './Bracket/getBracketElements'
import { ELEMENT_TRIG, TrigComponent } from './Trig'


import { TComboboxItem } from '@udecode/plate';
import { withContainer } from './MathContainer/withContainer'
import { ELEMENT_EXPONENT } from './Exponent/defaults'

export const createEquationBoxPlugin = createPluginFactory({
  key: ELEMENT_EQUATIONBOX,
  isInline: true,
  isElement: true,
  component: EquationBox,
  withOverrides: withBox,
  handlers: {
    onKeyDown: equationBoxOnKeyDown(),
  },
})

export const createEquationBoxMatrixPlugin = createPluginFactory({
  key: ELEMENT_MATRIX_BOX,
  isElement: true,
  component: EquationBox,
  withOverrides: withBox,
  handlers: {
    onKeyDown: equationBoxOnKeyDown(),
  },
})

export const createMatrixPlugin = createPluginFactory({
  key: ELEMENT_MATRIX,
  isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
  component: withProps(StyledElement, {
    className: 'slate-matrix',
    as: 'table',
    styles: {
      root: {
        display: 'table',
        verticalAlign: 'middle',
        maxWidth: 'none',
      },
    },
  }),
})

export const createEquationTextPlugin = createPluginFactory({
  key: ELEMENT_EQUATION_TEXT,
  component: EquationText,
  isInline: true,
  isVoid: true,
  isElement: true,
})

export const createUneditableBigOperator = createPluginFactory({
  key: ELEMENT_UNEDITABLE_BIG_OPERATOR,
  isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
})

export const createBigOperatorWithLimitsOnRight = createPluginFactory({
  key: ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  isInline: true,
  isElement: true,
  //renderLeaf: getRenderLeaf(ELEMENT_EQUATIONBOX),
})

export const createFractionPlugin = createPluginFactory({
  key: ELEMENT_FRACTION,
  isInline: true,
  isElement: true,
})

export const createBigOperatorPlugin = createPluginFactory({
  key: ELEMENT_BIG_OPERATOR,
  isInline: true,
  isElement: true,
})

export const createLimitPlugin = createPluginFactory({
  key: ELEMENT_LIMIT,
  isInline: true,
  isElement: true,
  component: LimitComponent,
})

export const createLogPlugin = createPluginFactory({
  key: ELEMENT_LOG,
  isElement: true,
  component: LogComponent,
  isInline: true,
}) // parameter is a PlatePlugin object

export const createAccentPlugin = createPluginFactory({
  key: ELEMENT_ACCENT,
  isElement: true,
  component: AccentComponent,
  isInline: true,
}) // parameter is a PlatePlugin object

export const createStackedFraction = createPluginFactory({
  key: ELEMENT_STACKED_FRACTION,
  isInline: true,
  isElement: true,
})

export const createSkewedFraction = createPluginFactory({
  key: ELEMENT_SKEWED_FRACTION,
  isInline: true,
  isElement: true,
})

export const createLinearFraction = createPluginFactory({
  key: ELEMENT_LINEAR_FRACTION,
  isInline: true,
  isElement: true,
})

export const createBracketPlugin = createPluginFactory({
  key: ELEMENT_BRACKET,
  isElement: true,
  component: BracketComponent,
  isInline: true,
})

export const createTrigPlugin = createPluginFactory({
  key: ELEMENT_TRIG,
  isInline: true,
  isElement: true,
  component: TrigComponent,

})


export const createMathContainerPlugin = createPluginFactory({
  key: ELEMENT_MATH_CONTAINER,
  isInline: true,
  isElement: true,
})

export const createExponentPlugin = createPluginFactory({
  key: ELEMENT_EXPONENT,
  isInline: true,
  isElement: true,
})

export const createEquationMentionPlugin = (): PlatePlugin => {
  return createMentionPlugin({
    options: {
      trigger: '/',
      createMentionNode: (item) => equationMentionNode(item),
      id: ELEMENT_EQUATION_MENTION,
    },
    key: ELEMENT_EQUATION_MENTION,
  })
}



export const createMathPlugins = () => {
  return createPlugins(
    [
      createMathContainerPlugin(),
      createEquationBoxPlugin(),
      createUneditableBigOperator(),
      createBigOperatorWithLimitsOnRight(),
      createLimitPlugin(),
      createLogPlugin(),
      createAccentPlugin(),
      createBracketPlugin(),
      createBigOperatorPlugin(),
      createStackedFraction(),
      createSkewedFraction(),
      createTrigPlugin(),
      createLinearFraction(),
      createFractionPlugin(),
      createEquationTextPlugin(),
      createMatrixPlugin(),
      createEquationBoxMatrixPlugin(),
      createExponentPlugin(),
      createEquationMentionPlugin(),
      
    ],
    {
      components: components,
    }
  )
}






