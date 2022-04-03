import { AccentButton } from './AccentButton'
import { AccentType } from './AccentType'
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
  getAcuteAccentNode,
  getBarAccentNode,
  getBreveAccentNode,
  getCheckAccentNode,
  getDotAccentNode,
  getDoubleDotAccentNode,
  getGraveAccentNode,
  getHatAccentNode,
  getLeftwardsArrowAboveAccentNode,
  getOverCurlyBraceNode,
  getOverParenthesisAccentNode,
  getRightLeftArrowAboveAccentNode,
  getRightwardHarpoonAccentNode,
  getRightwardsArrowAboveAccentNode,
  getTildeAccentNode,
  getTripleDotAccentNode,
} from './getEmptyAccentNode'

const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  nameToClickFuncMap.set('1x1', () => {
    insertNodes(editor, getRightwardsArrowAboveAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x2', () => {
    insertNodes(editor, getLeftwardsArrowAboveAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x3', () => {
    insertNodes(editor, getRightLeftArrowAboveAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('1x4', () => {
    insertNodes(editor, getTildeAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x1', () => {
    insertNodes(editor, getDotAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x2', () => {
    insertNodes(editor, getDoubleDotAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x3', () => {
    insertNodes(editor, getRightwardHarpoonAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('2x4', () => {
    insertNodes(editor, getBarAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x1', () => {
    insertNodes(editor, getOverCurlyBraceNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x2', () => {
    insertNodes(editor, getOverParenthesisAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x3', () => {
    insertNodes(editor, getBreveAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('3x4', () => {
    insertNodes(editor, getHatAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x1', () => {
    insertNodes(editor, getCheckAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x2', () => {
    insertNodes(editor, getTripleDotAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x3', () => {
    insertNodes(editor, getGraveAccentNode())
    selectFirstBox(editor)
  })
  nameToClickFuncMap.set('4x4', () => {
    insertNodes(editor, getAcuteAccentNode())
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', RightwardsArrowAbove)
  nameToImgMap.set('1x2', LeftwardsArrowAbove)
  nameToImgMap.set('1x3', RightLeftArrowAbove)
  nameToImgMap.set('1x4', Tilde)
  nameToImgMap.set('2x1', Dot)
  nameToImgMap.set('2x2', DoubleDot)
  nameToImgMap.set('2x3', RightwardHarpoonAccent)
  nameToImgMap.set('2x4', Bar)
  nameToImgMap.set('3x1', OverCurlyBrace)
  nameToImgMap.set('3x2', OverParenthesis)
  nameToImgMap.set('3x3', Breve)
  nameToImgMap.set('3x4', HatAccent)
  nameToImgMap.set('4x1', Check)
  nameToImgMap.set('4x2', TripleDot)
  nameToImgMap.set('4x3', Grave)
  nameToImgMap.set('4x4', Acute)
  return { nameToClickFuncMap, nameToImgMap }
}

type AccentPickerProps = {
  accent?: string
  accents: AccentType[]
}

export const AccentPicker = ({ accents }: AccentPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap } = initializeEquationMap()
  return (
    <div className="accent-container" id="accentContainer">
      {accents.map(({ name }) => (
        <AccentButton
          name={name}
          image={nameToImgMap.get(name)}
          onClick={nameToClickFuncMap.get(name)}
        />
      ))}
    </div>
  )
}
