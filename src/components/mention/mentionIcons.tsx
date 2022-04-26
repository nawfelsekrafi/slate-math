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
import Cos from '../../assets/Trig/Cos.png'
import Cosh from '../../assets/Trig/Cosh.png'
import Cot from '../../assets/Trig/Cot.png'
import Coth from '../../assets/Trig/Coth.png'
import Csc from '../../assets/Trig/Csc.png'
import Csch from '../../assets/Trig/Csch.png'
import Sec from '../../assets/Trig/Sec.png'
import Sech from '../../assets/Trig/Sech.png'
import Sin from '../../assets/Trig/Sin.png'
import Sinh from '../../assets/Trig/Sinh.png'
import Tan from '../../assets/Trig/Tan.png'
import Tanh from '../../assets/Trig/Tanh.png'

//accent icons
export const RightArrowIcon = () => {
  return <img alt={"RightwardsArrowAbove"} src={RightwardsArrowAbove} />
}
export const LeftArrowIcon = () => {
  return <img alt={"LeftwardsArrowAbove"} src={LeftwardsArrowAbove} />
}
export const RightLeftArrowIcon = () => {
  return <img alt={"RightLeftArrowAbove"} src={RightLeftArrowAbove} />
}
export const TildeIcon = () => {
  return <img alt={"Tilde"} src={Tilde} />
}
export const DotIcon = () => {
  return <img alt={"Dot"} src={Dot} />
}
export const DoubleDotIcon = () => {
  return <img alt={"DoubleDot"} src={DoubleDot} />
}
export const RightwardHarpoonIcon = () => {
  return <img alt={"RightwardHarpoonAccent"} src={RightwardHarpoonAccent} />
}
export const BarIcon = () => {
  return <img alt={"Bar"} src={Bar} />
}
export const OverCurlyBraceIcon = () => {
  return <img alt={"OverCurlyBrace"} src={OverCurlyBrace} />
}
export const OverParenthesisIcon = () => {
  return <img alt={"OverParenthesis"} src={OverParenthesis} />
}
export const BreveIcon = () => {
  return <img alt={"Breve"} src={Breve} />
}

export const HatAccentIcon = () => {
  return <img alt={"HatAccent"} src={HatAccent} />
}

export const CheckIcon = () => {
  return <img alt={"Check"} src={Check} />
}

export const TripleDotIcon = () => {
  return <img alt={"TripleDot"} src={TripleDot}/>
}

export const GraveIcon = () => {
  return <img alt={"Grave"} src={Grave} />
}
export const AcuteIcon = () => {
  return <img alt={"Acute"} src={Acute} />
}

//integral incons
export const IntegralWithStackedLimitsIcon = () => {
  return <img alt={"IntegralWithStackedLimits"} src={IntegralWithStackedLimits} />
}
export const DoubleIntegralWithStackedLimitsIcon = () => {
  return <img alt={"DoubleIntegralWithStackedLimits"} src={DoubleIntegralWithStackedLimits} />
}
export const TripleIntegralWithStackedLimitsIcon = () => {
  return <img alt={"TripleIntegralWithStackedLimits"} src={TripleIntegralWithStackedLimits} />
}
export const ContourIntegralWithStackedLimitsIcon = () => {
  return <img alt={"ContourIntegralWithStackedLimits"} src={ContourIntegralWithStackedLimits} />
}
export const SurfaceIntegralWithStackedLimitsIcon = () => {
  return <img alt={"SurfaceIntegralWithStackedLimits"} src={SurfaceIntegralWithStackedLimits} />
}
export const VolumeIntegralWithStackedLimitsIcon = () => {
  return <img alt={"VolumeIntegralWithStackedLimits"} src={VolumeIntegralWithStackedLimits} />
}
export const IntegralWithLimitsIcon = () => {
  return <img alt={"IntegralWithLimits"} src={IntegralWithLimits} />
}
export const DoubleIntegralWithLimitsIcon = () => {
  return <img alt={"DoubleIntegralWithLimits"} src={DoubleIntegralWithLimits} />
}
export const TripleIntegralWithLimitsIcon = () => {
  return <img alt={"TripleIntegralWithLimits"} src={TripleIntegralWithLimits} />
}
export const ContourIntegralWithLimitsIcon = () => {
  return <img alt={"ContourIntegralWithLimits"} src={ContourIntegralWithLimits} />
}
export const SurfaceIntegralWithLimitsIcon = () => {
  return <img alt={"SurfaceIntegralWithLimits"} src={SurfaceIntegralWithLimits} />
}
export const VolumeIntegralWithLimitsIcon = () => {
  return <img alt={"VolumeIntegralWithLimits"} src={VolumeIntegralWithLimits} />
}

//Limits icons
export const SummationWithLimitsIcon = () => {
  return <img alt={"SummationWithLimits"} src={SummationWithLimits} />
}
export const ProductWithLimitsIcon = () => {
  return <img alt={"ProductWithLimits"} src={ProductWithLimits} />
}
export const CoProductWithLimitsIcon = () => {
  return <img alt={"CoProductWithLimits"} src={CoProductWithLimits} />
}
export const UnionWithLimitsIcon = () => {
  return <img alt={"UnionWithLimits"} src={UnionWithLimits} />
}
export const LogicalOrWithLimitsIcon = () => {
  return <img alt={"LogicalOrWithLimits"} src={LogicalOrWithLimits} />
}
export const IntersectionWithLimitsIcon = () => {
  return <img alt={"IntersectionWithLimits"} src={IntersectionWithLimits} />
}
export const LogicalAndWithLimitsIcon = () => {
  return <img alt={"LogicalAndWithLimits"} src={LogicalAndWithLimits} />
}
export const SummationWithSubscriptLimitsIcon = () => {
  return <img alt={"SummationWithSubscriptLimits"} src={SummationWithSubscriptLimits} />
}
export const ProductWithSubscriptLimitsIcon = () => {
  return <img alt={"ProductWithSubscriptLimits"} src={ProductWithSubscriptLimits} />
}
export const CoProductWithSubscriptLimitsIcon = () => {
  return <img alt={"CoProductWithSubscriptLimits"} src={CoProductWithSubscriptLimits} />
}
export const UnionWithSubscriptLimitsIcon = () => {
  return <img alt={"UnionWithSubscriptLimits"} src={UnionWithSubscriptLimits} />
}
export const LogicalOrWithSubscriptLimitsIcon = () => {
  return <img alt={"LogicalOrWithSubscriptLimits"} src={LogicalOrWithSubscriptLimits} />
}
export const IntersectionWithSubscriptLimitsIcon = () => {
  return <img alt={"IntersectionWithSubscriptLimits"} src={IntersectionWithSubscriptLimits} />
}
export const LogicalAndWithSubscriptLimitsIcon = () => {
  return <img alt={"LogicalAndWithSubscriptLimits"} src={LogicalAndWithSubscriptLimits} />
}

//limits
export const LimitIcon = () => {
  return <img alt={"Limit"} src={Limit} />
}
export const LimitToInfinityIcon = () => {
  return <img alt={"LimitToInfinity"} src={LimitToInfinity} />
}

//logs
export const NaturalLogarithmIcon = () => {
  return <img alt={"NaturalLogarithm"} src={NaturalLogarithm} />
}
export const LogarithmIcon = () => {
  return <img alt={"Logarithm"} src={Logarithm} />
}
export const LogarithmToBaseTenIcon = () => {
  return <img alt={"LogarithmToBaseTen"} src={LogarithmToBaseTen} />
}
export const LogarithmToBaseNIcon = () => {
  return <img alt={"LogarithmToBaseN"} src={LogarithmToBaseN} />
}

//Trig
export const CosIcon = () => {
  return <img alt={"Cos"} src={Cos} />
}
export const CoshIcon = () => {
  return <img alt={"Cosh"} src={Cosh} />
}
export const CotIcon = () => {
  return <img alt={"Cot"} src={Cot} />
}
export const CothIcon = () => {
  return <img alt={"Coth"} src={Coth} />
}
export const CscIcon = () => {
  return <img alt={"Csc"} src={Csc} />
}
export const CschIcon = () => {
  return <img alt={"Csch"} src={Csch} />
}
export const SecIcon = () => {
  return <img alt={"Sec"} src={Sec} />
}
export const SechIcon = () => {
  return <img alt={"Sech"} src={Sech} />
}
export const SinIcon = () => {
  return <img alt={"Sin"} src={Sin} />
}
export const SinhIcon = () => {
  return <img alt={"Sinh"} src={Sinh} />
}
export const TanIcon = () => {
  return <img alt={"Tanh"} src={Tanh} />
}
export const TanhIcon = () => {
  return <img alt={"Tanh"} src={Tanh} />
}