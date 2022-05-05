import { TrigButton } from './TrigButton'
import { TrigType } from './TrigType'
import RightwardsArrowAbove from '../../assets/RightwardsArrowAbove.png'
import LeftwardsArrowAbove from '../../assets/LeftwardsArrowAbove.png'
import RightLeftArrowAbove from '../../assets/RightLeftArrowAbove.png'
import Tilde from '../../assets/Tilde.png'
import Dot from '../../assets/Dot.png'
import DoubleDot from '../../assets/DoubleDot.png'
import RightwardHarpoonAccent from '../../assets/RightwardHarpoonAccent.png'
import Bar from '../../assets/Bar.png'
import OverCurlyBrace from '../../assets/OverCurlyBrace.png'
import OverParenthesis from '../../assets/OverParenthesis.png'
import Breve from '../../assets/Breve.png'
import HatAccent from '../../assets/HatAccent.png'
import Check from '../../assets/Check.png'
import TripleDot from '../../assets/TripleDot.png'
import Grave from '../../assets/Grave.png'
import Acute from '../../assets/Acute.png'
import { insertNodes, getPlateEditorRef } from '@udecode/plate'
import { selectFirstBox } from '../util'
import {
  getTrigNode,
} from './getTrigNode'
import { MENTIONABLES } from '../mention/mentionables'
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
import { insertMathNode } from '../insertMathNode'

const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getTrigNode, editor, 'sin', false, true)
  })
  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getTrigNode, editor, 'cot', false, true)
  })
  nameToClickFuncMap.set('1x3', () => {
    insertMathNode(getTrigNode, editor, 'sinh', false, true)
  })
  nameToClickFuncMap.set('1x4', () => {
    insertMathNode(getTrigNode, editor, 'coth', false, true)
  })
  nameToClickFuncMap.set('2x1', () => {
    insertMathNode(getTrigNode, editor, 'cos', false, true)
  })
  nameToClickFuncMap.set('2x2', () => {
    insertMathNode(getTrigNode, editor, 'sec', false, true)
  })
  nameToClickFuncMap.set('2x3', () => {
    insertMathNode(getTrigNode, editor, 'cosh', false, true)
  })
  nameToClickFuncMap.set('2x4', () => {
    insertMathNode(getTrigNode, editor, 'sech', false, true)
  })
  nameToClickFuncMap.set('3x1', () => {
    insertMathNode(getTrigNode, editor, 'tan', false, true)
  })
  nameToClickFuncMap.set('3x2', () => {
    insertMathNode(getTrigNode, editor, 'csc', false, true)
  })
  nameToClickFuncMap.set('3x3', () => {
    insertMathNode(getTrigNode, editor, 'tanh', false, true)
  })
  nameToClickFuncMap.set('3x4', () => {
    insertMathNode(getTrigNode, editor, 'csch', false, true)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', Sin)
  nameToImgMap.set('1x2', Cot)
  nameToImgMap.set('1x3', Sinh)
  nameToImgMap.set('1x4', Coth)
  nameToImgMap.set('2x1', Cos)
  nameToImgMap.set('2x2', Sec)
  nameToImgMap.set('2x3', Cosh)
  nameToImgMap.set('2x4', Sech)
  nameToImgMap.set('3x1', Tan)
  nameToImgMap.set('3x2', Csc)
  nameToImgMap.set('3x3', Tanh)
  nameToImgMap.set('3x4', Csch)

  const nameToTrigNameMap = new Map<string, string>()
  nameToTrigNameMap.set('1x1', 'Sin')
  nameToTrigNameMap.set('1x2', 'Cot')
  nameToTrigNameMap.set('1x3', 'Sinh')
  nameToTrigNameMap.set('1x4', 'Coth')
  nameToTrigNameMap.set('2x1', 'Cos')
  nameToTrigNameMap.set('2x2', 'Sec')
  nameToTrigNameMap.set('2x3', 'Cosh')
  nameToTrigNameMap.set('2x4', 'Sech')
  nameToTrigNameMap.set('3x1', 'Tan')
  nameToTrigNameMap.set('3x2', 'Csc')
  nameToTrigNameMap.set('3x3', 'Tanh')
  nameToTrigNameMap.set('3x4', 'Csch')
  return { nameToClickFuncMap, nameToTrigNameMap, nameToImgMap }
}

type TrigPickerProps = {
  trig?: string
  trigs: TrigType[]
  onToggle: () => void
}

export const TrigPicker = ({ trigs, onToggle }: TrigPickerProps) => {
  const { nameToClickFuncMap, nameToTrigNameMap, nameToImgMap } =
    initializeEquationMap()
  return (
    <div className="trig-container" id="trigContainer">
      {trigs.map(({ name }) => (
        <TrigButton
          name={name}
          trigName={nameToTrigNameMap.get(name)}
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
