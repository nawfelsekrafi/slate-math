import { BracketButton } from './BracketButton'
import { BracketType } from './BracketType'
import { getPlateEditorRef } from '@udecode/plate'
import { selectFirstBox } from '../util'
import { insertMathNode } from "../insertMathNode"
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
} from "./getEmptyBracketNode"


//pngs
/*
import Parenthesis from '../../assets/Brackets/Parenthesis.png'
import Bracket from '../../assets/Brackets/Bracket.png'
import Curly from '../../assets/Brackets/Curly.png'
import Angle from '../../assets/Brackets/Angle.png'
import Floor from '../../assets/Brackets/Floor.png'
import Ceiling from '../../assets/Brackets/Ceiling.png'
import VertivalBar from '../../assets/Brackets/VerticalBar.png'
import Parallel from '../../assets/Brackets/Parallel.png'
import DblRightBracket from '../../assets/Brackets/DblRightBracket.png'
import DblLeftBracket from '../../assets/Brackets/DblLeftBracket.png'
import InverseBracket from '../../assets/Brackets/InverseBracket.png'
import DblBracket from '../../assets/Brackets/DblBracket.png'

import LeftParen from '../../assets/Brackets/LeftParen.png'
import RightParen from '../../assets/Brackets/RightParen.png'
import LeftBracket from '../../assets/Brackets/LeftBracket.png'
import RightBracket from '../../assets/Brackets/RightBracket.png'
import LeftCurly from '../../assets/Brackets/LeftCurly.png'
import RightCurly from '../../assets/Brackets/RightCurly.png'
import LeftAngle from '../../assets/Brackets/LeftAngle.png'
import RightAngle from '../../assets/Brackets/RightAngle.png'
import LeftFloor from '../../assets/Brackets/LeftFloor.png'
import RightFloor from '../../assets/Brackets/RightFloor.png'
import LeftCeiling from '../../assets/Brackets/LeftCeiling.png'
import RightCeiling from '../../assets/Brackets/RightCeiling.png'
import LeftBar from '../../assets/Brackets/LeftBar.png'
import RightBar from '../../assets/Brackets/RightBar.png'
import LeftParallel from '../../assets/Brackets/LeftParallel.png'
import RightParallel from '../../assets/Brackets/RightParallel.png'
import LeftDblBracket from '../../assets/Brackets/LeftDblBracket.png'
import RightDblBracket from '../../assets/Brackets/RightDblBracket.png'
*/
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

const initializeEquationMap = () => {
    const editor = getPlateEditorRef()!
    const nameToClickFuncMap = new Map<string, any>()
    nameToClickFuncMap.set('1x1', () => {
        insertMathNode(getParenthesisBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('1x2', () => {
        insertMathNode(getSquareBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('1x3', () => {
        insertMathNode(getCurlyBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('1x4', () => {
        insertMathNode(getAngleBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('2x1', () => {
        insertMathNode(getFloorBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('2x2', () => {
        insertMathNode(getCeilingBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('2x3', () => {
        insertMathNode(getBarBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('2x4', () => {
        insertMathNode(getParallelBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('3x1', () => {
        insertMathNode(getDoubleLeftBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('3x2', () => {
        insertMathNode(getDoubleRightBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('3x3', () => {
        insertMathNode(getInverseBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('3x4', () => {
        insertMathNode(getDoubleBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('4x1', () => {
        insertMathNode(getLeftParenBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('4x2', () => {
        insertMathNode(getRightParenBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('4x3', () => {
        insertMathNode(getLeftSquareBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('4x4', () => {
        insertMathNode(getRightSquareBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('5x1', () => {
        insertMathNode(getLeftCurlyBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('5x2', () => {
        insertMathNode(getRightCurlyBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('5x3', () => {
        insertMathNode(getLeftAngleBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('5x4', () => {
        insertMathNode(getRightAngleBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('6x1', () => {
        insertMathNode(getLeftFloorBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('6x2', () => {
        insertMathNode(getRightFloorBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('6x3', () => {
        insertMathNode(getLeftCeilingBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('6x4', () => {
        insertMathNode(getRightCeilingBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('7x1', () => {
        insertMathNode(getLeftBarBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('7x2', () => {
        insertMathNode(getRightBarBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('7x3', () => {
        insertMathNode(getLeftParallelBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('7x4', () => {
        insertMathNode(getRightParallelBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('8x1', () => {
        insertMathNode(getLeftDoubleBracketNode, editor,undefined,false,true)
    })
    nameToClickFuncMap.set('8x2', () => {
        insertMathNode(getRightDoubleBracketNode, editor,undefined,false,true)
    })


    
    const nameToImgMap = new Map<string, any>()
    nameToImgMap.set('1x1', Paren)
    nameToImgMap.set('1x2', SquareBracket)
    nameToImgMap.set('1x3', CurlyBracket)
    nameToImgMap.set('1x4', AngleBracket)
    nameToImgMap.set('2x1', Floor)
    nameToImgMap.set('2x2', Ceiling)
    nameToImgMap.set('2x3', VerticalBar)
    nameToImgMap.set('2x4', ParallelBracket)
    nameToImgMap.set('3x1', DoubleLeftSquareBracket)
    nameToImgMap.set('3x2', DoubleRightSquareBracket)
    nameToImgMap.set('3x3', InverseBracket)
    nameToImgMap.set('3x4', DoubleBracket)
    nameToImgMap.set('4x1', LeftParen)
    nameToImgMap.set('4x2', RightParen)
    nameToImgMap.set('4x3', LeftSquare)
    nameToImgMap.set('4x4', RightSquare)
    nameToImgMap.set('5x1', LeftCurly)
    nameToImgMap.set('5x2', RightCurly)
    nameToImgMap.set('5x3', LeftAngle)
    nameToImgMap.set('5x4', RightAngle)
    nameToImgMap.set('6x1', LeftFloor)
    nameToImgMap.set('6x2', RightFloor)
    nameToImgMap.set('6x3', LeftCeiling)
    nameToImgMap.set('6x4', RightCeiling)
    nameToImgMap.set('7x1', LeftBar)
    nameToImgMap.set('7x2', RightBar)
    nameToImgMap.set('7x3', LeftParallel)
    nameToImgMap.set('7x4', RightParallel)
    nameToImgMap.set('8x1', LeftDoubleBracket)
    nameToImgMap.set('8x2', RightDoubleBracket)

    const nameToBracketNameMap = new Map<string,string>()
    nameToBracketNameMap.set('1x1', 'Parenthesis')
    nameToBracketNameMap.set('1x2', 'Bracket')
    nameToBracketNameMap.set('1x3', 'Curly')
    nameToBracketNameMap.set('1x4', 'Angle')
    nameToBracketNameMap.set('2x1', 'Floor')
    nameToBracketNameMap.set('2x2', 'Ceiling')
    nameToBracketNameMap.set('2x3', 'VertivalBar')
    nameToBracketNameMap.set('2x4', 'Parallel')
    nameToBracketNameMap.set('3x1', 'DblLeftBracket')
    nameToBracketNameMap.set('3x2', 'DblRightBracket')
    nameToBracketNameMap.set('3x3', 'InverseBracket')
    nameToBracketNameMap.set('3x4', 'DblBracket')
    nameToBracketNameMap.set('4x1', 'LeftParen')
    nameToBracketNameMap.set('4x2', 'RightParen')
    nameToBracketNameMap.set('4x3', 'LeftBracket')
    nameToBracketNameMap.set('4x4', 'RightBracket')
    nameToBracketNameMap.set('5x1', 'LeftCurly')
    nameToBracketNameMap.set('5x2', 'RightCurly')
    nameToBracketNameMap.set('5x3', 'LeftAngle')
    nameToBracketNameMap.set('5x4', 'RightAngle')
    nameToBracketNameMap.set('6x1', 'LeftFloor')
    nameToBracketNameMap.set('6x2', 'RightFloor')
    nameToBracketNameMap.set('6x3', 'LeftCeiling')
    nameToBracketNameMap.set('6x4', 'RightCeiling')
    nameToBracketNameMap.set('7x1', 'LeftBar')
    nameToBracketNameMap.set('7x2', 'RightBar')
    nameToBracketNameMap.set('7x3', 'LeftParallel')
    nameToBracketNameMap.set('7x4', 'RightParallel')
    nameToBracketNameMap.set('8x1', 'LeftDblBracket')
    nameToBracketNameMap.set('8x2', 'RightDblBracket')

    return { nameToClickFuncMap, nameToImgMap, nameToBracketNameMap }
}



type BracketPickerProps = {
    bracket?: string
    brackets: BracketType[]
    onToggle: () => void
  }
  
  export const BracketPicker = ({ brackets, onToggle }: BracketPickerProps) => {
    const { nameToClickFuncMap, nameToImgMap, nameToBracketNameMap } =
      initializeEquationMap()
    return (
      <div className="bracket-container" id="bracketContainer">
        {brackets.map(({ name }) => (
          <BracketButton
            name={name}
            bracketName={nameToBracketNameMap.get(name)}
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