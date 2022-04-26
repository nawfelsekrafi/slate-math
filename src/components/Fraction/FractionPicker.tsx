import { FractionButton } from './FractionButton'
import { FractionType } from './FractionType'
import { getPlateEditorRef } from '@udecode/plate'
import { selectFirstBox } from '../util'
import { insertMathNode } from "../insertMathNode"
import { 
  getEmptyStackedFractionNode,
  getEmptySkewedFractionNode,
  getEmptyLinearFractionNode } from './getEmptyFractionCellNode'
import Angle from '../../assets/Brackets/Angle.png'
import FractionLinear from '../../assets/Fractions/FractionLinear.png'
import FractionSkewed from '../../assets/Fractions/FractionSkewed.png'
import FractionStack from '../../assets/Fractions/FractionStack.png'

const initializeEquationMap = () => {
    const editor = getPlateEditorRef()!
    const nameToClickFuncMap = new Map<string, any>()
    nameToClickFuncMap.set('1x1', () => {
        insertMathNode(getEmptyStackedFractionNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('1x2', () => {
        insertMathNode(getEmptySkewedFractionNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('1x3', () => {
        insertMathNode(getEmptyLinearFractionNode, editor,undefined,false,true)
    })

    const nameToImgMap = new Map<string, any>()
    nameToImgMap.set('1x1', FractionStack)
    nameToImgMap.set('1x2', FractionSkewed)
    nameToImgMap.set('1x3', FractionLinear)

    const nameToFractionNameMap = new Map<string,string>()
    nameToFractionNameMap.set('1x1', 'Stacked Fraction')
    nameToFractionNameMap.set('1x2', 'Skewed Fraction')
    nameToFractionNameMap.set('1x3', 'Linear Fraction')


    return { nameToClickFuncMap, nameToImgMap, nameToFractionNameMap }
}

type FractionPickerProps = {
    fraction?: string
    fractions: FractionType[]
    onToggle: () => void
  }
  
  export const FractionPicker = ({ fractions, onToggle }: FractionPickerProps) => {
    const { nameToClickFuncMap, nameToImgMap, nameToFractionNameMap } =
      initializeEquationMap()
    return (
      <div className="fraction-container" id="fractionContainer">
        {fractions.map(({ name }) => (
          <FractionButton
            name={name}
            fractionName={nameToFractionNameMap.get(name)}
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