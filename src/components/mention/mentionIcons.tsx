import {
  AnyObject,
  MentionNodeData,
  TComboboxItem,
  TElement,
} from '@udecode/plate'
import RightwardsArrowAbove from '../../assets/Accents/RightwardsArrowAbove.png'
import LeftwardsArrowAbove from '../../assets/Accents/LeftwardsArrowAbove.png'
import RightLeftArrowAbove from '../../assets/Accents/RightLeftArrowAbove.png'
import Tilde from '../../assets/Accents/Tilde.png'
import Dot from '../../assets/Accents/Dot.png'
import DoubleDot from '../../assets/Accents/DoubleDot.png'
import RightwardHarpoonAccent from '../../assets/Accents/RightwardHarpoonAccent.png'
import Bar from '../../assets/Accents/Bar.png'
import OverCurlyBrace from '../../assets/Accents/OverCurlyBrace.png'
import OverParenthesis from '../../assets/Accents/OverParenthesis.png'
import Breve from '../../assets/Accents/Breve.png'
import HatAccent from '../../assets/Accents/HatAccent.png'
import Check from '../../assets/Accents/Check.png'
import TripleDot from '../../assets/Accents/TripleDot.png'
import Grave from '../../assets/Accents/Grave.png'
import Acute from '../../assets/Accents/Acute.png'
import IntegralWithStackedLimits from '../../assets/Integrals/IntegralWithStackedLimits.png'
import DoubleIntegralWithStackedLimits from '../../assets/Integrals/DoubleIntegralWithStackedLimits.png'
import TripleIntegralWithStackedLimits from '../../assets/Integrals/TripleIntegralWithStackedLimits.png'
import ContourIntegralWithStackedLimits from '../../assets/Integrals/ContourIntegralWithStackedLimits.png'
import SurfaceIntegralWithStackedLimits from '../../assets/Integrals/SurfaceIntegralWithStackedLimits.png'
import VolumeIntegralWithStackedLimits from '../../assets/Integrals/VolumeIntegralWithStackedLimits.png'
import IntegralWithLimits from '../../assets/Integrals/IntegralWithLimits.png'
import DoubleIntegralWithLimits from '../../assets/Integrals/DoubleIntegralWithLimits.png'
import TripleIntegralWithLimits from '../../assets/Integrals/TripleIntegralWithLimits.png'
import ContourIntegralWithLimits from '../../assets/Integrals/ContourIntegralWithLimits.png'
import SurfaceIntegralWithLimits from '../../assets/Integrals/SurfaceIntegralWithLimits.png'
import VolumeIntegralWithLimits from '../../assets/Integrals/VolumeIntegralWithLimits.png'
import SummationWithLimits from '../../assets/Summations/SummationWithLimits.png'
import ProductWithLimits from '../../assets/Summations/ProductWithLimits.png'
import CoProductWithLimits from '../../assets/Summations/CoProductWithLimits.png'
import UnionWithLimits from '../../assets/Summations/UnionWithLimits.png'
import LogicalOrWithLimits from '../../assets/Summations/LogicalOrWithLimits.png'
import IntersectionWithLimits from '../../assets/Summations/IntersectionWithLimits.png'
import LogicalAndWithLimits from '../../assets/Summations/LogicalAndWithLimits.png'
import SummationWithSubscriptLimits from '../../assets/Summations/SummationWithSubscriptLimits.png'
import ProductWithSubscriptLimits from '../../assets/Summations/ProductWithSubscriptLimits.png'
import CoProductWithSubscriptLimits from '../../assets/Summations/CoProductWithSubscriptLimits.png'
import UnionWithSubscriptLimits from '../../assets/Summations/UnionWithSubscriptLimits.png'
import LogicalOrWithSubscriptLimits from '../../assets/Summations/LogicalOrWithSubscriptLimits.png'
import IntersectionWithSubscriptLimits from '../../assets/Summations/IntersectionWithSubscriptLimits.png'
import LogicalAndWithSubscriptLimits from '../../assets/Summations/LogicalAndWithSubscriptLimits.png'
import Limit from '../../assets/Limits/Limit.png'
import LimitToInfinity from '../../assets/Limits/LimitToInfinity.png'
import NaturalLogarithm from '../../assets/Logs/NaturalLogarithm.png'
import Logarithm from '../../assets/Logs/Logarithm.png'
import LogarithmToBaseTen from '../../assets/Logs/LogarithmToBaseTen.png'
import LogarithmToBaseN from '../../assets/Logs/LogarithmToBaseN.png'

//accent icons
export const RightArrowIcon = () => {
  return <img src={RightwardsArrowAbove} />
}
export const LeftArrowIcon = () => {
  return <img src={LeftwardsArrowAbove} />
}
export const RightLeftArrowIcon = () => {
  return <img src={RightLeftArrowAbove} />
}
export const TildeIcon = () => {
  return <img src={Tilde} />
}
export const DotIcon = () => {
  return <img src={Dot} />
}
export const DoubleDotIcon = () => {
  return <img src={DoubleDot} />
}
export const RightwardHarpoonIcon = () => {
  return <img src={RightwardHarpoonAccent} />
}
export const BarIcon = () => {
  return <img src={Bar} />
}
export const OverCurlyBraceIcon = () => {
  return <img src={OverCurlyBrace} />
}
export const OverParenthesisIcon = () => {
  return <img src={OverParenthesis} />
}
export const BreveIcon = () => {
  return <img src={Breve} />
}

export const HatAccentIcon = () => {
  return <img src={HatAccent} />
}

export const CheckIcon = () => {
  return <img src={Check} />
}

export const TripleDotIcon = () => {
  return <img src={TripleDot} />
}

export const GraveIcon = () => {
  return <img src={Grave} />
}
export const AcuteIcon = () => {
  return <img src={Acute} />
}

//integral incons
export const IntegralWithStackedLimitsIcon = () => {
  return <img src={IntegralWithStackedLimits} />
}
export const DoubleIntegralWithStackedLimitsIcon = () => {
  return <img src={DoubleIntegralWithStackedLimits} />
}
export const TripleIntegralWithStackedLimitsIcon = () => {
  return <img src={TripleIntegralWithStackedLimits} />
}
export const ContourIntegralWithStackedLimitsIcon = () => {
  return <img src={ContourIntegralWithStackedLimits} />
}
export const SurfaceIntegralWithStackedLimitsIcon = () => {
  return <img src={SurfaceIntegralWithStackedLimits} />
}
export const VolumeIntegralWithStackedLimitsIcon = () => {
  return <img src={VolumeIntegralWithStackedLimits} />
}
export const IntegralWithLimitsIcon = () => {
  return <img src={IntegralWithLimits} />
}
export const DoubleIntegralWithLimitsIcon = () => {
  return <img src={DoubleIntegralWithLimits} />
}
export const TripleIntegralWithLimitsIcon = () => {
  return <img src={TripleIntegralWithLimits} />
}
export const ContourIntegralWithLimitsIcon = () => {
  return <img src={ContourIntegralWithLimits} />
}
export const SurfaceIntegralWithLimitsIcon = () => {
  return <img src={SurfaceIntegralWithLimits} />
}
export const VolumeIntegralWithLimitsIcon = () => {
  return <img src={VolumeIntegralWithLimits} />
}

//Limits icons
export const SummationWithLimitsIcon = () => {
  return <img src={SummationWithLimits} />
}
export const ProductWithLimitsIcon = () => {
  return <img src={ProductWithLimits} />
}
export const CoProductWithLimitsIcon = () => {
  return <img src={CoProductWithLimits} />
}
export const UnionWithLimitsIcon = () => {
  return <img src={UnionWithLimits} />
}
export const LogicalOrWithLimitsIcon = () => {
  return <img src={LogicalOrWithLimits} />
}
export const IntersectionWithLimitsIcon = () => {
  return <img src={IntersectionWithLimits} />
}
export const LogicalAndWithLimitsIcon = () => {
  return <img src={LogicalAndWithLimits} />
}
export const SummationWithSubscriptLimitsIcon = () => {
  return <img src={SummationWithSubscriptLimits} />
}
export const ProductWithSubscriptLimitsIcon = () => {
  return <img src={ProductWithSubscriptLimits} />
}
export const CoProductWithSubscriptLimitsIcon = () => {
  return <img src={CoProductWithSubscriptLimits} />
}
export const UnionWithSubscriptLimitsIcon = () => {
  return <img src={UnionWithSubscriptLimits} />
}
export const LogicalOrWithSubscriptLimitsIcon = () => {
  return <img src={LogicalOrWithSubscriptLimits} />
}
export const IntersectionWithSubscriptLimitsIcon = () => {
  return <img src={IntersectionWithSubscriptLimits} />
}
export const LogicalAndWithSubscriptLimitsIcon = () => {
  return <img src={LogicalAndWithSubscriptLimits} />
}

//limits
export const LimitIcon = () => {
  return <img src={Limit} />
}
export const LimitToInfinityIcon = () => {
  return <img src={LimitToInfinity} />
}

//logs
export const NaturalLogarithmIcon = () => {
  return <img src={NaturalLogarithm} />
}
export const LogarithmIcon = () => {
  return <img src={Logarithm} />
}
export const LogarithmToBaseTenIcon = () => {
  return <img src={LogarithmToBaseTen} />
}
export const LogarithmToBaseNIcon = () => {
  return <img src={LogarithmToBaseN} />
}
