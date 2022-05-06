import {
  AnyObject,
  MentionNodeData,
  TComboboxItem,
  TElement,
} from '@udecode/plate'
import {
  getRightwardsArrowAboveAccentNode,
  getLeftwardsArrowAboveAccentNode,
  getRightLeftArrowAboveAccentNode,
  getTildeAccentNode,
  getDotAccentNode,
  getDoubleDotAccentNode,
  getRightwardHarpoonAccentNode,
  getBarAccentNode,
  getOverCurlyBraceNode,
  getOverParenthesisAccentNode,
  getBreveAccentNode,
  getHatAccentNode,
  getCheckAccentNode,
  getTripleDotAccentNode,
  getGraveAccentNode,
  getAcuteAccentNode,
} from '../Accent'
import { bigOpIcon } from '../BigOperator'
import { getEmptyBigOpNode } from '../BigOperator/getEmptyBigOpNode'
import { getEmptyFractionNode } from '../Fraction'
import {
  getIntegralWithLimitNode,
  getIntegralWithStackedLimtNode,
} from '../Integral/getEmptyIntegralNode'
import { getEmptyLimNode, getLimToInfinityNode } from '../Limit/getEmptyLimNode'
import {
  getEmptyLogarithmNode,
  getEmptyLogarithmToBaseTenNode,
  getEmptyNaturalLogarithmNode,
  getLogarithmToBaseNnode,
} from '../Log'
import {
  getSummationWithLimitNode,
  getSummationWithSubscriptLimitNode,
} from '../Summation/getEmptySummationNode'
import { getEmptyUneditableBigOpNode } from '../UneditableBigOperator/getEmptyBigOpNode'
import { getTrigNode} from '../Trig/getTrigNode';
import {
  getParenthesisBracketNode,
  getSquareBracketNode,
  getCurlyBracketNode,
  getAngleBracketNode,
  getFloorBracketNode,
  getCeilingBracketNode,
  getBarBracketNode,
  getParallelBracketNode,
  getDoubleLeftBracketNode,
  getDoubleRightBracketNode,
  getInverseBracketNode,
  getDoubleBracketNode,
  getLeftParenBracketNode,
  getRightParenBracketNode,
  getLeftSquareBracketNode,
  getRightSquareBracketNode,
  getLeftCurlyBracketNode,
  getRightCurlyBracketNode,
  getLeftAngleBracketNode,
  getRightAngleBracketNode,
  getLeftFloorBracketNode,
  getRightFloorBracketNode,
  getLeftCeilingBracketNode,
  getRightCeilingBracketNode,
  getLeftBarBracketNode,
  getRightBarBracketNode,
  getLeftParallelBracketNode,
  getRightParallelBracketNode,
  getLeftDoubleBracketNode,
  getRightDoubleBracketNode,
} from "../Bracket/getEmptyBracketNode"
import { 
  getEmptyStackedFractionNode,
  getEmptySkewedFractionNode,
  getEmptyLinearFractionNode } from '../Fraction/getEmptyFractionCellNode'
import {
  AcuteIcon,
  BarIcon,
  BreveIcon,
  CheckIcon,
  ContourIntegralWithLimitsIcon,
  ContourIntegralWithStackedLimitsIcon,
  CoProductWithLimitsIcon,
  CoProductWithSubscriptLimitsIcon,
  DotIcon,
  DoubleDotIcon,
  DoubleIntegralWithLimitsIcon,
  DoubleIntegralWithStackedLimitsIcon,
  GraveIcon,
  HatAccentIcon,
  IntegralWithLimitsIcon,
  IntegralWithStackedLimitsIcon,
  IntersectionWithLimitsIcon,
  IntersectionWithSubscriptLimitsIcon,
  LeftArrowIcon,
  LimitIcon,
  LimitToInfinityIcon,
  LogarithmIcon,
  LogarithmToBaseNIcon,
  LogarithmToBaseTenIcon,
  LogicalAndWithLimitsIcon,
  LogicalAndWithSubscriptLimitsIcon,
  LogicalOrWithLimitsIcon,
  LogicalOrWithSubscriptLimitsIcon,
  NaturalLogarithmIcon,
  OverCurlyBraceIcon,
  OverParenthesisIcon,
  ProductWithLimitsIcon,
  ProductWithSubscriptLimitsIcon,
  RightArrowIcon,
  RightLeftArrowIcon,
  RightwardHarpoonIcon,
  SummationWithLimitsIcon,
  SummationWithSubscriptLimitsIcon,
  SurfaceIntegralWithLimitsIcon,
  SurfaceIntegralWithStackedLimitsIcon,
  TildeIcon,
  TripleDotIcon,
  TripleIntegralWithLimitsIcon,
  TripleIntegralWithStackedLimitsIcon,
  UnionWithLimitsIcon,
  UnionWithSubscriptLimitsIcon,
  VolumeIntegralWithLimitsIcon,
  VolumeIntegralWithStackedLimitsIcon,
  CosIcon,
  CoshIcon, 
  CotIcon, 
  CothIcon, 
  CscIcon, 
  CschIcon, 
  SecIcon, 
  SechIcon, 
  SinIcon, 
  SinhIcon, 
  TanIcon, 
  TanhIcon,
  CeilingIcon,
  CurlyBracketIcon,
  DoubleBracketIcon,
  DoubleLeftSquareBracketIcon,
  DoubleRightSquareBracketIcon,
  FloorIcon,
  InverseBracketIcon,
  LeftAngleBracketIcon,
  LeftBarIcon,
  LeftCeilingIcon,
  LeftCurlyIcon,
  LeftDoubleBracketIcon,
  LeftFloorIcon,
  LeftParallelIcon,
  LeftParenIcon, 
  LeftSquareIcon,
  ParallelBracketIcon,
  ParenIcon,
  RightAngleIcon,
  RightBarIcon,
  RightCeilingIcon,
  RightCurlyIcon,
  RightDoubleBracketIcon,
  RightFloorIcon,
  RightParallelIcon,
  RightParenIcon,
  RightSquareIcon,
  SquareBracketIcon,
  VerticalBarIcon,
  AngleBracketIcon,
  StackedFractionIcon,
  SkewedFractionIcon,
  LinearFractionIcon,
} from './mentionIcons'
import { Square } from '@styled-icons/boxicons-regular'
import { getEmptySubscriptNode, getEmptySuperScriptNode } from '../Exponent/getEmptyExponentNode'
import { SubScriptIcon, SuperScriptIcon } from '../Exponent/getExponentElements'

export type MentionEquationData = {
  node: undefined | ((arg0?: string) => TElement<AnyObject>)
  icon: JSX.Element | undefined
  value: string
}
/*
key: index needed for combobox
node: Node of the math equation element.            (if undefined then defaults to MathText)
icon: JSX element that appears inside the combobox. (if undefined then shows value)
value: Value sent as a parameter to the node function or inserted as MathText
text: Text used to search the equation component
*/
export const MENTIONABLES: TComboboxItem<MentionEquationData>[] = [
  {
    key: '0',
    data: { node: undefined, icon: undefined, value: '\u003D' },
    text: 'equals',
  },
  {
    key: '1',
    data: { node: undefined, icon: undefined, value: '\u2260' },
    text: 'not equals',
  },
  {
    key: '2',
    data: { node: undefined, icon: undefined, value: '\u2248' },
    text: 'approximation',
  },
  {
    key: '3',
    data: { node: undefined, icon: undefined, value: '\u003E' },
    text: 'greater than',
  },
  {
    key: '4',
    data: { node: undefined, icon: undefined, value: '\u003C' },
    text: 'less than',
  },
  {
    key: '5',
    data: { node: undefined, icon: undefined, value: '\u2265' },
    text: 'greater than or equal to',
  },
  {
    key: '6',
    data: { node: undefined, icon: undefined, value: '\u2264' },
    text: 'less than or equal to',
  },
  {
    key: '7',
    data: { node: undefined, icon: undefined, value: '\u0028' },
    text: 'left parenthesis',
  },
  {
    key: '8',
    data: { node: undefined, icon: undefined, value: '\u0029' },
    text: 'right parenthesis',
  },
  {
    key: '9',
    data: { node: undefined, icon: undefined, value: '\u005B' },
    text: 'left square bracket',
  },
  {
    key: '10',
    data: { node: undefined, icon: undefined, value: '\u005D' },
    text: 'right square bracket',
  },
  {
    key: '11',
    data: { node: undefined, icon: undefined, value: '\u002B' },
    text: 'plus',
  },
  {
    key: '12',
    data: { node: undefined, icon: undefined, value: '\u2212' },
    text: 'minus',
  },
  {
    key: '13',
    data: { node: undefined, icon: undefined, value: '\u00B1' },
    text: 'plus or minus',
  },
  {
    key: '14',
    data: { node: undefined, icon: undefined, value: '\u2213' },
    text: 'minus or plus',
  },
  {
    key: '15',
    data: { node: undefined, icon: undefined, value: '\u2217' },
    text: 'multiplication star',
  },
  {
    key: '16',
    data: { node: undefined, icon: undefined, value: '\u00D7' },
    text: 'multiplication cross',
  },
  {
    key: '17',
    data: { node: undefined, icon: undefined, value: '\u22C5' },
    text: 'multiplication dot',
  },
  {
    key: '18',
    data: { node: undefined, icon: undefined, value: '\u00F7' },
    text: 'division symbol',
  },
  {
    key: '19',
    data: { node: undefined, icon: undefined, value: '\u2215' },
    text: 'division slash',
  },
  {
    key: '20',
    data: { node: undefined, icon: undefined, value: 'mod' },
    text: 'modulo',
  },
  {
    key: '21',
    data: { node: undefined, icon: undefined, value: '\u2038' },
    text: 'caret',
  },
  {
    key: '22',
    data: { node: undefined, icon: undefined, value: '\u221A' },
    text: 'square root',
  },
  {
    key: '23',
    data: { node: undefined, icon: undefined, value: '\u221B' },
    text: 'cube root',
  },
  {
    key: '24',
    data: { node: undefined, icon: undefined, value: '\u221C' },
    text: 'fourth root',
  },
  {
    key: '25',
    data: { node: undefined, icon: undefined, value: '\u0025' },
    text: 'percent',
  },
  {
    key: '26',
    data: { node: undefined, icon: undefined, value: '\u2030' },
    text: 'permille',
  },
  {
    key: '27',
    data: { node: undefined, icon: undefined, value: 'ppm' },
    text: 'per million',
  },
  {
    key: '28',
    data: { node: undefined, icon: undefined, value: 'ppb' },
    text: 'per billion',
  },
  {
    key: '29',
    data: { node: undefined, icon: undefined, value: 'ppt' },
    text: 'per trillion',
  },
  {
    key: '30',
    data: { node: undefined, icon: undefined, value: '\u00B0' },
    text: 'degree',
  },
  {
    key: '31',
    data: { node: undefined, icon: undefined, value: '\u2032' },
    text: 'prime',
  },
  {
    key: '32',
    data: { node: undefined, icon: undefined, value: '\u2033' },
    text: 'double prime',
  },
  {
    key: '33',
    data: { node: undefined, icon: undefined, value: '\u007E' },
    text: 'approximation tilde',
  },
  {
    key: '34',
    data: { node: undefined, icon: undefined, value: '\u03c0' },
    text: 'pi',
  },
  {
    key: '35',
    data: { node: undefined, icon: undefined, value: 'rad' },
    text: 'radians',
  },
  {
    key: '36',
    data: { node: undefined, icon: undefined, value: 'grad' },
    text: 'gradians',
  },
  {
    key: '37',
    data: { node: undefined, icon: undefined, value: '\u2261' },
    text: 'identical',
  },
  {
    key: '38',
    data: { node: undefined, icon: undefined, value: '\u221E' },
    text: 'infinity',
  },
  {
    key: '39',
    data: { node: undefined, icon: undefined, value: '\u007B' },
    text: 'left brace',
  },
  {
    key: '40',
    data: { node: undefined, icon: undefined, value: '\u007D' },
    text: 'right brace',
  },
  {
    key: '41',
    data: { node: undefined, icon: undefined, value: '\u230A' },
    text: 'left floor',
  },
  {
    key: '42',
    data: { node: undefined, icon: undefined, value: '\u230B' },
    text: 'right floor',
  },
  {
    key: '43',
    data: { node: undefined, icon: undefined, value: '\u2308' },
    text: 'left ceiling',
  },
  {
    key: '44',
    data: { node: undefined, icon: undefined, value: '\u2309' },
    text: 'right ceiling',
  },
  {
    key: '45',
    data: { node: undefined, icon: undefined, value: '\u0021' },
    text: 'factorial',
  },
  {
    key: '46',
    data: { node: undefined, icon: undefined, value: '\u007C' },
    text: 'absolute icon:undefined,value brace',
  },
  {
    key: '47',
    data: { node: undefined, icon: undefined, value: '\u0394' },
    text: 'delta',
  },
  {
    key: '48',
    data: { node: undefined, icon: undefined, value: '\u{1D452}' },
    text: 'euler',
  },
  {
    key: '49',
    data: { node: undefined, icon: undefined, value: '\u03C6' },
    text: 'phi',
  },
  {
    key: '50',
    data: { node: getEmptyLimNode, icon: undefined, value: 'lim' },
    text: 'lim',
  },
  {
    key: '51',
    data: { node: undefined, icon: undefined, value: 'log' },
    text: 'log',
  },
  {
    key: '52',
    data: { node: undefined, icon: undefined, value: 'ln' },
    text: 'natural log',
  },
  {
    key: '53',
    data: { node: undefined, icon: undefined, value: 'ln' },
    text: 'ln',
  },
  {
    key: '54',
    data: { node: undefined, icon: undefined, value: 'max' },
    text: 'max',
  },
  {
    key: '55',
    data: { node: undefined, icon: undefined, value: 'min' },
    text: 'min',
  },
  {
    key: '56',
    data: { node: getTrigNode, icon: SinIcon(), value: 'sin' },
    text: 'sin',
  },
  {
    key: '57',
    data: { node: getTrigNode, icon: CosIcon(), value: 'cos' },
    text: 'cos',
  },
  {
    key: '58',
    data: { node: getTrigNode, icon: TanIcon(), value: 'tan' },
    text: 'tan',
  },
  {
    key: '59',
    data: { node: getTrigNode, icon: CscIcon(), value: 'csc' },
    text: 'csc',
  },
  {
    key: '60',
    data: { node: getTrigNode, icon: SecIcon(), value: 'sec' },
    text: 'sec',
  },
  {
    key: '61',
    data: { node: getTrigNode, icon: CotIcon(), value: 'cot' },
    text: 'cot',
  },
  {
    key: '62',
    data: { node: getTrigNode, icon: SinhIcon(), value: 'sinh' },
    text: 'sinh',
  },
  {
    key: '63',
    data: { node: getTrigNode, icon: CoshIcon(), value: 'cosh' },
    text: 'cosh',
  },
  {
    key: '64',
    data: { node: getTrigNode, icon: TanIcon(), value: 'tanh' },
    text: 'tanh',
  },
  {
    key: '65',
    data: { node: getTrigNode, icon: CscIcon(), value: 'csch' },
    text: 'csch',
  },
  {
    key: '66',
    data: { node: getTrigNode, icon: SechIcon(), value: 'sech' },
    text: 'sech',
  },
  {
    key: '67',
    data: { node: getTrigNode, icon: CothIcon(), value: 'coth' },
    text: 'coth',
  },
  {
    key: '68',
    data: { node: undefined, icon: undefined, value: '\u22c3' },
    text: 'union',
  },
  {
    key: '69',
    data: { node: undefined, icon: undefined, value: '\u22c2' },
    text: 'intersection',
  },
  {
    key: '70',
    data: { node: undefined, icon: undefined, value: '\u2227' },
    text: 'and',
  },
  {
    key: '71',
    data: { node: undefined, icon: undefined, value: '\u2228' },
    text: 'or',
  },
  {
    key: '72',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u222b',
    },
    text: 'integral',
  },
  {
    key: '73',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u222c',
    },
    text: 'double integral',
  },
  {
    key: '74',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u222d',
    },
    text: 'triple integral',
  },
  {
    key: '75',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u2a0c',
    },
    text: 'quadruple integral',
  },
  {
    key: '76',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u222e',
    },
    text: 'contour integral',
  },
  {
    key: '77',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u222f',
    },
    text: 'surface integral',
  },
  {
    key: '78',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u2230',
    },
    text: 'volume integral',
  },
  {
    key: '79',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u2211',
    },
    text: 'summation',
  },
  {
    key: '80',
    data: { node: getEmptyFractionNode, icon: undefined, value: '\u00bc' },
    text: 'fraction',
  },
  {
    key: '81',
    data: { node: getEmptyBigOpNode, icon: bigOpIcon(), value: 'bigop' },
    text: 'big operator',
  },
  {
    key: '82',
    data: { node: undefined, icon: undefined, value: '\u220f' },
    text: 'product',
  },
  {
    key: '83',
    data: { node: undefined, icon: undefined, value: '\u2210' },
    text: 'coproduct',
  },
  {
    key: '84',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u22c3',
    },
    text: 'union with limits',
  },
  {
    key: '85',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u22c2',
    },
    text: 'intersection with limits',
  },
  {
    key: '86',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u2227',
    },
    text: 'and with limits',
  },
  {
    key: '87',
    data: {
      node: getEmptyUneditableBigOpNode,
      icon: undefined,
      value: '\u2228',
    },
    text: 'or with limits',
  },
  {
    key: '88',
    data: {
      node: getRightwardsArrowAboveAccentNode,
      icon: RightArrowIcon(),
      value: '\u2228',
    },
    text: 'accent right arrow',
  },
  {
    key: '89',
    data: {
      node: getLeftwardsArrowAboveAccentNode,
      icon: LeftArrowIcon(),
      value: '\u2228',
    },
    text: 'accent left arrow',
  },
  {
    key: '90',
    data: {
      node: getRightLeftArrowAboveAccentNode,
      icon: RightLeftArrowIcon(),
      value: '\u2228',
    },
    text: 'accent bi arrow left right double',
  },
  {
    key: '91',
    data: { node: getTildeAccentNode, icon: TildeIcon(), value: '\u2228' },
    text: 'accent tilde',
  },
  {
    key: '92',
    data: { node: getDotAccentNode, icon: DotIcon(), value: '\u2228' },
    text: 'accent dot',
  },
  {
    key: '93',
    data: {
      node: getDoubleDotAccentNode,
      icon: DoubleDotIcon(),
      value: '\u2228',
    },
    text: 'accent two double dot',
  },
  {
    key: '94',
    data: {
      node: getRightwardHarpoonAccentNode,
      icon: RightwardHarpoonIcon(),
      value: '\u2228',
    },
    text: 'accent right harpoon arrow',
  },
  {
    key: '95',
    data: { node: getBarAccentNode, icon: BarIcon(), value: '\u2228' },
    text: 'accent bar',
  },
  {
    key: '96',
    data: {
      node: getOverCurlyBraceNode,
      icon: OverCurlyBraceIcon(),
      value: '\u2228',
    },
    text: 'accent curly brace',
  },
  {
    key: '97',
    data: {
      node: getOverParenthesisAccentNode,
      icon: OverParenthesisIcon(),
      value: '\u2228',
    },
    text: 'accent parenthesis over',
  },
  {
    key: '98',
    data: { node: getBreveAccentNode, icon: BreveIcon(), value: '\u2228' },
    text: 'accent breve',
  },
  {
    key: '99',
    data: { node: getHatAccentNode, icon: HatAccentIcon(), value: '\u2228' },
    text: 'accent hat',
  },
  {
    key: '100',
    data: { node: getCheckAccentNode, icon: CheckIcon(), value: '\u2228' },
    text: 'accent check',
  },
  {
    key: '101',
    data: {
      node: getTripleDotAccentNode,
      icon: TripleDotIcon(),
      value: '\u2228',
    },
    text: 'accent triple dot',
  },
  {
    key: '102',
    data: { node: getGraveAccentNode, icon: GraveIcon(), value: '\u2228' },
    text: 'accent grave',
  },
  {
    key: '103',
    data: { node: getAcuteAccentNode, icon: AcuteIcon(), value: '\u2228' },
    text: 'accent acute',
  },
  //Integrals
  //stacked limits, limits on top and bottom
  {
    key: '104',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: IntegralWithStackedLimitsIcon(),
      value: '\u222b',
    },
    text: 'Integral with Stacked Limits',
  },
  {
    key: '105',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: DoubleIntegralWithStackedLimitsIcon(),
      value: '\u222c',
    },
    text: 'Double Integral with Stacked Limits',
  },
  {
    key: '106',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: TripleIntegralWithStackedLimitsIcon(),
      value: '\u222d',
    },
    text: 'Triple Integral with Stacked Limits',
  },
  {
    key: '107',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: ContourIntegralWithStackedLimitsIcon(),
      value: '\u222e',
    },
    text: 'Contour Integral with Stacked Limits',
  },
  {
    key: '108',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: SurfaceIntegralWithStackedLimitsIcon(),
      value: '\u222f',
    },
    text: 'Surface Integral with Stacked Limits',
  },
  {
    key: '109',
    data: {
      node: getIntegralWithStackedLimtNode,
      icon: VolumeIntegralWithStackedLimitsIcon(),
      value: '\u2230',
    },
    text: 'Volume Integral with Stacked Limits',
  },
  //Integrals
  //limits on right
  {
    key: '110',
    data: {
      node: getIntegralWithLimitNode,
      icon: IntegralWithLimitsIcon(),
      value: '\u222b',
    },
    text: 'Integral with limits',
  },
  {
    key: '111',
    data: {
      node: getIntegralWithLimitNode,
      icon: DoubleIntegralWithLimitsIcon(),
      value: '\u222c',
    },
    text: 'Double Integral with Limits',
  },
  {
    key: '112',
    data: {
      node: getIntegralWithLimitNode,
      icon: TripleIntegralWithLimitsIcon(),
      value: '\u222d',
    },
    text: 'Triple Integral with Limits',
  },
  {
    key: '113',
    data: {
      node: getIntegralWithLimitNode,
      icon: ContourIntegralWithLimitsIcon(),
      value: '\u222e',
    },
    text: 'Contour Integral with Limits',
  },
  {
    key: '114',
    data: {
      node: getIntegralWithLimitNode,
      icon: SurfaceIntegralWithLimitsIcon(),
      value: '\u222f',
    },
    text: 'Surface Integral with Limits',
  },
  {
    key: '115',
    data: {
      node: getIntegralWithLimitNode,
      icon: VolumeIntegralWithLimitsIcon(),
      value: '\u2230',
    },
    text: 'Volume Integral with Limits',
  },
  //summations
  //limits on top and buttom
  {
    key: '116',
    data: {
      node: getSummationWithLimitNode,
      icon: SummationWithLimitsIcon(),
      value: '\u2211',
    },
    text: 'Summation with Limits',
  },
  {
    key: '117',
    data: {
      node: getSummationWithLimitNode,
      icon: ProductWithLimitsIcon(),
      value: '\u220f',
    },
    text: 'Product with Limits',
  },
  {
    key: '118',
    data: {
      node: getSummationWithLimitNode,
      icon: CoProductWithLimitsIcon(),
      value: '\u2210',
    },
    text: 'Coproduct with Limits',
  },
  {
    key: '119',
    data: {
      node: getSummationWithLimitNode,
      icon: UnionWithLimitsIcon(),
      value: '\u22c3',
    },
    text: 'Union with Limits',
  },
  {
    key: '120',
    data: {
      node: getSummationWithLimitNode,
      icon: LogicalOrWithLimitsIcon(),
      value: '\u2228',
    },
    text: 'Or with Limits',
  },
  {
    key: '121',
    data: {
      node: getSummationWithLimitNode,
      icon: IntersectionWithLimitsIcon(),
      value: '\u22c2',
    },
    text: 'Intersection with Limits',
  },
  {
    key: '122',
    data: {
      node: getSummationWithLimitNode,
      icon: LogicalAndWithLimitsIcon(),
      value: '\u2227',
    },
    text: 'And with Limits',
  },
  //Summation
  //limits on right
  {
    key: '123',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: SummationWithSubscriptLimitsIcon(),
      value: '\u2211',
    },
    text: 'Summation with Subscript Limits',
  },
  {
    key: '124',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: ProductWithSubscriptLimitsIcon(),
      value: '\u220f',
    },
    text: 'Product with Subscript Limits',
  },
  {
    key: '125',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: CoProductWithSubscriptLimitsIcon(),
      value: '\u2210',
    },
    text: 'Coproduct with Subscript Limits',
  },
  {
    key: '126',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: UnionWithSubscriptLimitsIcon(),
      value: '\u22c3',
    },
    text: 'Union with Subscript Limit',
  },
  {
    key: '127',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: LogicalOrWithSubscriptLimitsIcon(),
      value: '\u2228',
    },
    text: 'Or with Subscript Limits',
  },
  {
    key: '128',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: IntersectionWithSubscriptLimitsIcon(),
      value: '\u22c2',
    },
    text: 'Intersection with Subscript Limits',
  },
  {
    key: '129',
    data: {
      node: getSummationWithSubscriptLimitNode,
      icon: LogicalAndWithSubscriptLimitsIcon(),
      value: '\u2227',
    },
    text: 'And with Subscript Limits',
  },
  //Limits
  {
    key: '130',
    data: {
      node: getEmptyLimNode,
      icon: LimitIcon(),
      value: '',
    },
    text: 'Limit',
  },
  {
    key: '131',
    data: {
      node: getLimToInfinityNode,
      icon: LimitToInfinityIcon(),
      value: '',
    },
    text: 'Limit To Infinity',
  },
  //Logs
  {
    key: '132',
    data: {
      node: getEmptyNaturalLogarithmNode,
      icon: NaturalLogarithmIcon(),
      value: '',
    },
    text: 'Natural Logarithm',
  },
  {
    key: '133',
    data: {
      node: getEmptyLogarithmNode,
      icon: LogarithmIcon(),
      value: '',
    },
    text: 'Logarithm',
  },
  {
    key: '134',
    data: {
      node: getEmptyLogarithmToBaseTenNode,
      icon: LogarithmToBaseTenIcon(),
      value: '',
    },
    text: 'Logarithm To Base 10',
  },
  {
    key: '135',
    data: {
      node: getLogarithmToBaseNnode,
      icon: LogarithmToBaseNIcon(),
      value: '',
    },
    text: 'Logarithm To Base n',
  },
  {
    key: '136',
    data: {
      node: getCeilingBracketNode,
      icon: CeilingIcon(),
      value: '',
    },
    text: 'Ceiling Bracket'
  },
  {
    key: '137',
    data: {
      node: getCurlyBracketNode,
      icon: CurlyBracketIcon(),
      value: '',
    },
    text: 'Curly Bracket'
  },
  {
    key: '138',
    data: {
      node: getSquareBracketNode,
      icon: DoubleBracketIcon(),
      value: '',
    },
    text: 'Ceiling Bracket'
  },
  {
    key: '139',
    data: {
      node: getDoubleLeftBracketNode,
      icon: DoubleLeftSquareBracketIcon(),
      value: '',
    },
    text: 'Double Left Bracket'
  },
  {
    key: '140',
    data: {
      node: getDoubleRightBracketNode,
      icon: DoubleRightSquareBracketIcon(),
      value: '',
    },
    text: 'Double Right Bracket'
  },
  {
    key: '141',
    data: {
      node: getFloorBracketNode,
      icon: FloorIcon(),
      value: '',
    },
    text: 'Floor Bracket'
  },
  {
    key: '142',
    data: {
      node: getInverseBracketNode,
      icon: InverseBracketIcon(),
      value: '',
    },
    text: 'Inverse Bracket'
  },
  {
    key: '143',
    data: {
      node: getLeftAngleBracketNode,
      icon: LeftAngleBracketIcon(),
      value: '',
    },
    text: 'Left Angle Bracket'
  },
  {
    key: '144',
    data: {
      node: getLeftBarBracketNode,
      icon: LeftBarIcon(),
      value: '',
    },
    text: 'Double Right Bracket'
  },
  {
    key: '145',
    data: {
      node: getLeftCeilingBracketNode,
      icon: LeftCeilingIcon(),
      value: '',
    },
    text: 'Left Ceiling Bracket'
  },
  {
    key: '146',
    data: {
      node: getLeftCurlyBracketNode,
      icon: LeftCurlyIcon(),
      value: '',
    },
    text: 'Left Curly Bracket'
  },
  {
    key: '147',
    data: {
      node: getLeftDoubleBracketNode,
      icon: LeftDoubleBracketIcon(),
      value: '',
    },
    text: 'Left Double Bracket'
  },
  {
    key: '148',
    data: {
      node: getLeftFloorBracketNode,
      icon: LeftFloorIcon(),
      value: '',
    },
    text: 'Left Floor Bracket'
  },
  {
    key: '149',
    data: {
      node: getLeftParallelBracketNode,
      icon: LeftParallelIcon(),
      value: '',
    },
    text: 'Left Parallel Bracket'
  },
  {
    key: '150',
    data: {
      node: getLeftParenBracketNode,
      icon: LeftParenIcon(),
      value: '',
    },
    text: 'Left Parenthesis Bracket'
  },
  {
    key: '151',
    data: {
      node: getLeftSquareBracketNode,
      icon: LeftSquareIcon(),
      value: '',
    },
    text: 'Left Square Bracket'
  },
  {
    key: '152',
    data: {
      node: getParallelBracketNode,
      icon: ParallelBracketIcon(),
      value: '',
    },
    text: 'Parallel Bracket'
  },
  {
    key: '153',
    data: {
      node: getParenthesisBracketNode,
      icon: ParenIcon(),
      value: '',
    },
    text: 'Parenthesis Bracket'
  },
  {
    key: '154',
    data: {
      node: getRightAngleBracketNode,
      icon: RightAngleIcon(),
      value: '',
    },
    text: 'Right Angle Bracket'
  },
  {
    key: '155',
    data: {
      node: getRightBarBracketNode,
      icon: RightBarIcon(),
      value: '',
    },
    text: 'Right Bar Bracket'
  },
  {
    key: '156',
    data: {
      node: getRightCeilingBracketNode,
      icon: RightCeilingIcon(),
      value: '',
    },
    text: 'Right Ceiling Bracket'
  },
  {
    key: '157',
    data: {
      node: getRightCurlyBracketNode,
      icon: RightCurlyIcon(),
      value: '',
    },
    text: 'Right Curly Bracket'
  },
  {
    key: '158',
    data: {
      node: getRightDoubleBracketNode,
      icon: RightDoubleBracketIcon(),
      value: '',
    },
    text: 'Right Double Bracket'
  },
  {
    key: '159',
    data: {
      node: getRightFloorBracketNode,
      icon: RightFloorIcon(),
      value: '',
    },
    text: 'Right Floor Bracket'
  },
  {
    key: '160',
    data: {
      node: getRightParallelBracketNode,
      icon: RightParallelIcon(),
      value: '',
    },
    text: 'Right Parallel Bracket'
  },
  {
    key: '161',
    data: {
      node: getRightParenBracketNode,
      icon: RightParenIcon(),
      value: '',
    },
    text: 'Right Parenthesis Bracket'
  },
  {
    key: '162',
    data: {
      node: getRightSquareBracketNode,
      icon: RightSquareIcon(),
      value: '',
    },
    text: 'Right Square Bracket'
  },
  {
    key: '163',
    data: {
      node: getSquareBracketNode,
      icon: SquareBracketIcon(),
      value: '',
    },
    text: 'Square Bracket'
  },
  {
    key: '164',
    data: {
      node: getBarBracketNode,
      icon: VerticalBarIcon(),
      value: '',
    },
    text: 'Vertical Bar Bracket'
  },
  {
    key: '165',
    data: {
      node: getAngleBracketNode,
      icon: AngleBracketIcon(),
      value: '',
    },
    text: 'Angle Bracket'
  },
  {
    key: '166',
    data: {
      node: getEmptyStackedFractionNode,
      icon: StackedFractionIcon(),
      value: '',
    },
    text: 'Stacked Fraction'
  },
  {
    key: '167',
    data: {
      node: getEmptySkewedFractionNode,
      icon: SkewedFractionIcon(),
      value: '',
    },
    text: 'Skewed Fraction'
  },
  {
    key: '168',
    data: {
      node: getEmptyLinearFractionNode,
      icon: LinearFractionIcon(),
      value: '',
    },
    text: 'Linear Fraction'
  },
  {
    key: '169',
    data: {
      node: getEmptySuperScriptNode,
      icon: SuperScriptIcon(),
      value: '',
    },
    text: 'exponent super script'
  },
  {
    key: '170',
    data: {
      node: getEmptySubscriptNode,
      icon: SubScriptIcon(),
      value: '',
    },
    text: 'sub script base'
  }
]
