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
import AngleBracket from '../../assets/Brackets/AngleBracket.png'
import Ceiling from '../../assets/Brackets/Ceiling.png'
import CurlyBracket from '../../assets/Brackets/CurlyBracket.png'
import DoubleBracket from '../../assets/Brackets/DoubleBracket.png'
import DoubleLeftSquareBracket from '../../assets/Brackets/DoubleLeftSquareBracket.png'
import DoubleRightSquareBracket from '../../assets/Brackets/DoubleRightSquareBracket.png'
import Floor from '../../assets/Brackets/Floor.png'
import InverseBracket from '../../assets/Brackets/InverseBracket.png'
import LeftAngle from '../../assets/Brackets/LeftAngle.png'
import LeftBar from '../../assets/Brackets/LeftBar.png'
import LeftCeiling from '../../assets/Brackets/LeftCeiling.png'
import LeftCurly from '../../assets/Brackets/LeftCurly.png'
import LeftDoubleBracket from '../../assets/Brackets/LeftDoubleBracket.png'
import LeftFloor from '../../assets/Brackets/LeftFloor.png'
import LeftParallel from '../../assets/Brackets/LeftParallel.png'
import LeftParen from '../../assets/Brackets/LeftParen.png'
import LeftSquare from '../../assets/Brackets/LeftSquare.png'
import ParallelBracket from '../../assets/Brackets/ParallelBracket.png'
import Paren from '../../assets/Brackets/Paren.png'
import RightAngle from '../../assets/Brackets/RightAngle.png'
import RightBar from '../../assets/Brackets/RightBar.png'
import RightCeiling from '../../assets/Brackets/RightCeiling.png'
import RightCurly from '../../assets/Brackets/RightCurly.png'
import RightDoubleBracket from '../../assets/Brackets/RightDoubleBracket.png'
import RightFloor from '../../assets/Brackets/RightFloor.png'
import RightParallel from '../../assets/Brackets/RightParallel.png'
import RightParen from '../../assets/Brackets/RightParen.png'
import RightSquare from '../../assets/Brackets/RightSquare.png'
import SquareBracket from '../../assets/Brackets/SquareBracket.png'
import VerticalBar from '../../assets/Brackets/VerticalBar.png'
import LinearFraction from '../../assets/Fractions/LinearFraction.png'
import SkewedFraction from '../../assets/Fractions/SkewedFraction.png'
import StackedFraction from '../../assets/Fractions/StackedFraction.png'
import SubScript from '../../assets/Scripts/SubScript.png'
import SuperScript from '../../assets/Scripts/SuperScript.png'
import { css } from 'twin.macro'

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
  return <img alt={"Tan"} src={Tan} />
}
export const TanhIcon = () => {
  return <img alt={"Tanh"} src={Tanh} />
}

//Brackets
export const AngleBracketIcon = () => {
  return <img alt={"AngleBracket"} src={AngleBracket} />
}
export const CeilingIcon = () => {
  return <img alt={"Ceiling"} src={Ceiling} />
}
export const CurlyBracketIcon = () => {
  return <img alt={"CurlyBracket"} src={CurlyBracket} />
}
export const DoubleBracketIcon = () => {
  return <img alt={"DoubleBracket"} src={DoubleBracket} />
}
export const DoubleLeftSquareBracketIcon = () => {
  return <img alt={"DoubleLeftSquareBracket"} src={DoubleLeftSquareBracket} />
}
export const DoubleRightSquareBracketIcon = () => {
  return <img alt={"DoubleRightSquareBracket"} src={DoubleRightSquareBracket} />
}
export const FloorIcon = () => {
  return <img alt={"Floor"} src={Floor} />
}
export const InverseBracketIcon = () => {
  return <img alt={"InverseBracketBracket"} src={InverseBracket} />
}
export const LeftAngleBracketIcon = () => {
  return <img alt={"LeftAngleBracket"} src={LeftAngle} />
}
export const LeftBarIcon = () => {
  return <img alt={"LeftBar"} src={LeftBar} />
}
export const LeftCeilingIcon = () => {
  return <img alt={"LeftCeiling"} src={LeftCeiling} />
}
export const LeftCurlyIcon = () => {
  return <img alt={"LeftCurly"} src={LeftCurly} />
}
export const LeftDoubleBracketIcon = () => {
  return <img alt={"LeftDoubleBracket"} src={DoubleLeftSquareBracket} />
}
export const LeftFloorIcon = () => {
  return <img alt={"LeftFloor"} src={LeftFloor} />
}
export const LeftParallelIcon = () => {
  return <img alt={"LeftParallel"} src={LeftParallel} />
}
export const LeftParenIcon = () => {
  return <img alt={"LeftParen"} src={LeftParen} />
}
export const LeftSquareIcon = () => {
  return <img alt={"LeftSquare"} src={LeftSquare} />
}
export const ParallelBracketIcon = () => {
  return <img alt={"ParallelBracket"} src={ParallelBracket} />
}
export const ParenIcon = () => {
  return <img alt={"Paren"} src={Paren} />
}
export const RightAngleIcon = () => {
  return <img alt={"RightAngle"} src={RightAngle} />
}
export const RightBarIcon = () => {
  return <img alt={"RightBar"} src={RightBar} />
}
export const RightCeilingIcon = () => {
  return <img alt={"RightCeiling"} src={RightCeiling} />
}
export const RightCurlyIcon = () => {
  return <img alt={"RightCurly"} src={RightCurly} />
}
export const RightDoubleBracketIcon = () => {
  return <img alt={"RightDoubleBracket"} src={RightDoubleBracket} />
}
export const RightFloorIcon = () => {
  return <img alt={"RightFloor"} src={RightFloor} />
}
export const RightParallelIcon = () => {
  return <img alt={"RightParallel"} src={RightParallel} />
}
export const RightParenIcon = () => {
  return <img alt={"RightParen"} src={RightParen} />
}
export const RightSquareIcon = () => {
  return <img alt={"RightSquare"} src={RightSquare} />
}
export const SquareBracketIcon = () => {
  return <img alt={"SquareBracket"} src={SquareBracket} />
}
export const VerticalBarIcon = () => {
  return <img alt={"VerticalBar"} src={VerticalBar} />
}

//fractions
export const StackedFractionIcon = () => {
  return <img alt={"StackedFraction"} src = {StackedFraction} />
}
export const SkewedFractionIcon = () => {
  return <img alt={"SkewedFraction"} src = {SkewedFraction} />
}
export const LinearFractionIcon = () => {
  return <img alt={"LinearFraction"} src = {LinearFraction} />
}
