import { getPlateEditorRef } from '@udecode/plate-core'
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

import { selectFirstBox } from '../util'

import { SummationButton } from './SummationButton'
import { SummationType } from './SummationType'
import {
  getSummationWithLimitNode,
  getSummationWithSubscriptLimitNode,
} from './getEmptySummationNode'
import { insertMathNode } from '../insertMathNode'

const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()

  //summation
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u2211')
    selectFirstBox(editor)
  })

  //product
  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u220f')
    selectFirstBox(editor)
  })

  //co-product
  nameToClickFuncMap.set('1x3', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u2210')
    selectFirstBox(editor)
  })

  //Union
  nameToClickFuncMap.set('1x4', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u22c3')
    selectFirstBox(editor)
  })

  //Or
  nameToClickFuncMap.set('1x5', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u2228')
    selectFirstBox(editor)
  })

  //Intersection
  nameToClickFuncMap.set('1x6', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u22c2')
    selectFirstBox(editor)
  })

  //And
  nameToClickFuncMap.set('1x7', () => {
    insertMathNode(getSummationWithLimitNode, editor, '\u2227')
    selectFirstBox(editor)
  })

  //summation with subscript
  nameToClickFuncMap.set('2x1', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u2211')
    selectFirstBox(editor)
  })

  //product
  nameToClickFuncMap.set('2x2', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u220f')
    selectFirstBox(editor)
  })

  //co-product
  nameToClickFuncMap.set('2x3', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u2210')
    selectFirstBox(editor)
  })

  //Union
  nameToClickFuncMap.set('2x4', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u22c3')
    selectFirstBox(editor)
  })

  //Or
  nameToClickFuncMap.set('2x5', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u2228')
    selectFirstBox(editor)
  })

  //Intersection
  nameToClickFuncMap.set('2x6', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u22c2')
    selectFirstBox(editor)
  })

  //And
  nameToClickFuncMap.set('2x7', () => {
    insertMathNode(getSummationWithSubscriptLimitNode, editor, '\u2227')
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', SummationWithLimits)
  nameToImgMap.set('1x2', ProductWithLimits)
  nameToImgMap.set('1x3', CoProductWithLimits)
  nameToImgMap.set('1x4', UnionWithLimits)
  nameToImgMap.set('1x5', LogicalOrWithLimits)
  nameToImgMap.set('1x6', IntersectionWithLimits)
  nameToImgMap.set('1x7', LogicalAndWithLimits)
  nameToImgMap.set('2x1', SummationWithSubscriptLimits)
  nameToImgMap.set('2x2', ProductWithSubscriptLimits)
  nameToImgMap.set('2x3', CoProductWithSubscriptLimits)
  nameToImgMap.set('2x4', UnionWithSubscriptLimits)
  nameToImgMap.set('2x5', LogicalOrWithSubscriptLimits)
  nameToImgMap.set('2x6', IntersectionWithSubscriptLimits)
  nameToImgMap.set('2x7', LogicalAndWithSubscriptLimits)

  const nameToSummationNameMap = new Map<string, string>()
  nameToSummationNameMap.set('1x1', 'Summation with Limits')
  nameToSummationNameMap.set('1x2', 'Product with Limits')
  nameToSummationNameMap.set('1x3', 'Co-product with Limits')
  nameToSummationNameMap.set('1x4', 'Union with Limits')
  nameToSummationNameMap.set('1x5', 'Logical Or with Limits')
  nameToSummationNameMap.set('1x6', 'Intersection with Limits')
  nameToSummationNameMap.set('1x7', 'Logical And with Limits')
  nameToSummationNameMap.set('2x1', 'Summation with Subscript Limits')
  nameToSummationNameMap.set('2x2', 'Product with Subscript Limits')
  nameToSummationNameMap.set('2x3', 'Co-product with Subscript Limits')
  nameToSummationNameMap.set('2x4', 'Union with Subscript Limit')
  nameToSummationNameMap.set('2x5', 'Logical Or with Subscript Limits')
  nameToSummationNameMap.set('2x6', 'Intersection with Subscript Limits')
  nameToSummationNameMap.set('2x7', 'Logical And with Subscript Limits')

  return { nameToClickFuncMap, nameToImgMap, nameToSummationNameMap }
}

type SummationPickerProps = {
  summation?: string
  summations: SummationType[]
  onToggle: () => void
}

export const SummationPicker = ({
  summations,
  onToggle,
}: SummationPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap, nameToSummationNameMap } =
    initializeEquationMap()
  return (
    <div className="summation-container" id="summationContainer">
      {summations.map(({ name }) => (
        <SummationButton
          name={name}
          summationName={nameToSummationNameMap.get(name)}
          image={nameToImgMap.get(name)}
          onClick={() => {
            const getEquation = nameToClickFuncMap.get(name)
            getEquation()
            onToggle()
          }}
          key={name}
        />
      ))}
    </div>
  )
}
