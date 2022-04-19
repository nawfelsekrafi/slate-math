import { getPlateEditorRef } from '@udecode/plate-core'
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

import { IntegralButton } from './IntegralButton'
import { insertMathNode } from '../toolbar'
import { selectFirstBox } from '../util'
import { IntegralType } from './IntegralType'
import { getEmptyUneditableBigOpNode } from '../UneditableBigOperator/getEmptyBigOpNode'
import {
  getDoubleIntegralWithLimitNode,
  getIntegralWithLimitNode,
  getIntegralWithStackedLimtNode,
  getSurfaceIntegralWithLimitNode,
  getTripleIntegralWithLimitNode,
  getVolumeIntegralWithLimitNode,
} from './getEmptyIntegralNode'

const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  //stacked limits
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u222b')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u222c')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x3', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u222d')
    selectFirstBox(editor)
  })

  //contour integral
  nameToClickFuncMap.set('1x4', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u222e')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x5', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u222f')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x6', () => {
    insertMathNode(getIntegralWithStackedLimtNode, editor, '\u2230')
    selectFirstBox(editor)
  })

  //limits
  nameToClickFuncMap.set('2x1', () => {
    insertMathNode(getIntegralWithLimitNode, editor, '\u222b')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('2x2', () => {
    insertMathNode(getDoubleIntegralWithLimitNode, editor, '\u222c')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('2x3', () => {
    insertMathNode(getTripleIntegralWithLimitNode, editor, '\u222d')
    selectFirstBox(editor)
  })

  //contour integral
  nameToClickFuncMap.set('2x4', () => {
    insertMathNode(getIntegralWithLimitNode, editor, '\u222e')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('2x5', () => {
    insertMathNode(getSurfaceIntegralWithLimitNode, editor, '\u222f')
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('2x6', () => {
    insertMathNode(getVolumeIntegralWithLimitNode, editor, '\u2230')
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', IntegralWithStackedLimits)
  nameToImgMap.set('1x2', DoubleIntegralWithStackedLimits)
  nameToImgMap.set('1x3', TripleIntegralWithStackedLimits)
  nameToImgMap.set('1x4', ContourIntegralWithStackedLimits)
  nameToImgMap.set('1x5', SurfaceIntegralWithStackedLimits)
  nameToImgMap.set('1x6', VolumeIntegralWithStackedLimits)
  nameToImgMap.set('2x1', IntegralWithLimits)
  nameToImgMap.set('2x2', DoubleIntegralWithLimits)
  nameToImgMap.set('2x3', TripleIntegralWithLimits)
  nameToImgMap.set('2x4', ContourIntegralWithLimits)
  nameToImgMap.set('2x5', SurfaceIntegralWithLimits)
  nameToImgMap.set('2x6', VolumeIntegralWithLimits)

  const nameToLogNameMap = new Map<string, string>()
  nameToLogNameMap.set('1x1', 'Integral with Stacked Limits')
  nameToLogNameMap.set('1x2', 'Double Integral with Stacked Limits')
  nameToLogNameMap.set('1x3', 'Triple Integral with Stacked Limits')
  nameToLogNameMap.set('1x4', 'Contour Integral with Stacked Limits')
  nameToLogNameMap.set('1x5', 'Surface Integral with Stacked Limits')
  nameToLogNameMap.set('1x6', 'Volume Integral with Stacked Limits')
  nameToLogNameMap.set('2x1', 'Integral with limits')
  nameToLogNameMap.set('2x2', 'Double Integral with Limits')
  nameToLogNameMap.set('2x3', 'Triple Integral with Limits')
  nameToLogNameMap.set('2x4', 'Contour Integral with Limits')
  nameToLogNameMap.set('2x5', 'Surface Integral with Limits')
  nameToLogNameMap.set('2x6', 'Volume Integral with Limits')

  return { nameToClickFuncMap, nameToImgMap, nameToLogNameMap }
}

type IntegralPickerProps = {
  integral?: string
  integrals: IntegralType[]
}

export const IntegralPicker = ({ integrals }: IntegralPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap, nameToLogNameMap } =
    initializeEquationMap()
  return (
    <div className="integral-container" id="integralContainer">
      {integrals.map(({ name }) => (
        <IntegralButton
          name={name}
          integralName={nameToLogNameMap.get(name)}
          image={nameToImgMap.get(name)}
          onClick={nameToClickFuncMap.get(name)}
          key={name}
        />
      ))}
    </div>
  )
}
