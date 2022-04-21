import { AccentButton } from './AccentButton'
import { AccentType } from './AccentType'
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
import { getPlateEditorRef } from '@udecode/plate'
import { selectFirstBox } from '../util'
import { getAcuteAccentNode, getBarAccentNode, getBreveAccentNode, getCheckAccentNode, getDotAccentNode, getDoubleDotAccentNode, getGraveAccentNode, getHatAccentNode, getLeftwardsArrowAboveAccentNode, getOverCurlyBraceNode, getOverParenthesisAccentNode, getRightLeftArrowAboveAccentNode, getRightwardHarpoonAccentNode, getRightwardsArrowAboveAccentNode, getTildeAccentNode, getTripleDotAccentNode } from './getEmptyAccentNode'
import { insertMathNode } from "../insertMathNode"
/*
rightward: 	\u2192
leftward 	\u2190
leftarrow 	\u2194
tilde:		\u007E
dot:		\u00B7
ddot		\u0022
rharpoon:	\u21C0
bar:		\u2015
overcurley	\u23DE
overpar		\u23DC
breve		\u23D1
hat		\u005E
check acc	\u02C7
triple dot	\u20DB
grave		\u0060
acute		\u02CA
*/
const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  // nameToClickFuncMap.set('1x1', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u2192')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('1x2', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u2190')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('1x3', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u2194')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('1x4', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u007E')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('2x1', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u00B7')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('2x2', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u0022')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('2x3', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u21C0')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('2x4', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u2015')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('3x1', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u23DE')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('3x2', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u23DC')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('3x3', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u23D1')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('3x4', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u005E')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('4x1', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u02C7')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('4x2', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u20DB')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('4x3', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u0060')
  //   selectFirstBox(editor)
  // })
  // nameToClickFuncMap.set('4x4', () => {
  //   insertMathNode(getEmptyAccentNode, editor, '\u02CA')
  //   selectFirstBox(editor)
  // })
  /////////////////////////////////////////////////////////////////////////
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode( getRightwardsArrowAboveAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('1x2', () => {
    insertMathNode( getLeftwardsArrowAboveAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('1x3', () => {
    insertMathNode( getRightLeftArrowAboveAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('1x4', () => {
    insertMathNode( getTildeAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('2x1', () => {
    insertMathNode( getDotAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('2x2', () => {
    insertMathNode( getDoubleDotAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('2x3', () => {
    insertMathNode( getRightwardHarpoonAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('2x4', () => {
    insertMathNode( getBarAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('3x1', () => {
    insertMathNode( getOverCurlyBraceNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('3x2', () => {
    insertMathNode( getOverParenthesisAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('3x3', () => {
    insertMathNode( getBreveAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('3x4', () => {
    insertMathNode( getHatAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('4x1', () => {
    insertMathNode( getCheckAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('4x2', () => {
    insertMathNode( getTripleDotAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('4x3', () => {
    insertMathNode( getGraveAccentNode,editor,undefined,false,true)
  })
  nameToClickFuncMap.set('4x4', () => {
    insertMathNode( getAcuteAccentNode,editor,undefined,false,true)
  })
  //this component is used to map the images of each accent based on the postion(rowNum and colNum)
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

  //this component is used to show the name of each accent
  const nameToAccentNameMap = new Map<string, string>()
  nameToAccentNameMap.set('1x1', 'Rightwards Arrow')
  nameToAccentNameMap.set('1x2', 'Leftwards Arrow')
  nameToAccentNameMap.set('1x3', 'Right-Left Arrow')
  nameToAccentNameMap.set('1x4', 'Tilde')
  nameToAccentNameMap.set('2x1', 'Dot')
  nameToAccentNameMap.set('2x2', 'Double Dot')
  nameToAccentNameMap.set('2x3', 'Rightward Harpoon Accent')
  nameToAccentNameMap.set('2x4', 'Bar')
  nameToAccentNameMap.set('3x2', 'Over Parenthesis')
  nameToAccentNameMap.set('3x3', 'Breve')
  nameToAccentNameMap.set('3x4', 'Hat Accent')
  nameToAccentNameMap.set('4x1', 'Check')
  nameToAccentNameMap.set('4x2', 'Triple Dot')
  nameToAccentNameMap.set('4x3', 'Grave')
  nameToAccentNameMap.set('4x4', 'Acute')

  return { nameToClickFuncMap, nameToImgMap, nameToAccentNameMap }
}

type AccentPickerProps = {
  accent?: string
  accents: AccentType[]
  onToggle: () => void
}

export const AccentPicker = ({ accents, onToggle }: AccentPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap, nameToAccentNameMap } =
    initializeEquationMap()
  return (
    <div className="accent-container" id="accentContainer">
      {accents.map(({ name }) => (
        <AccentButton
          name={name}
          accentName={nameToAccentNameMap.get(name)}
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
