import { getPlateEditorRef } from '@udecode/plate-core'
import { insertMathNode } from '../toolbar'
import { selectFirstBox } from '../util'
import { LogButton } from './LogButton'
import { LogType } from './LogType'
import NaturalLogarithm from '../../assets/Logs/NaturalLogarithm.png'
import Logarithm from '../../assets/Logs/Logarithm.png'
import LogarithmToBaseTen from '../../assets/Logs/LogarithmToBaseTen.png'
import LogarithmToBaseN from '../../assets/Logs/LogarithmToBaseN.png'
import {
  getEmptyLogarithmNode,
  getEmptyLogarithmToBaseTenNode,
  getLogarithmToBaseNnode,
  getEmptyNaturalLogarithmNode,
} from './getEmptyLogNode'

function initializeEquationMap(): {
  nameToClickFuncMap: any
  nameToImgMap: any
} {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()

  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getEmptyNaturalLogarithmNode, editor)
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getEmptyLogarithmNode, editor)
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x3', () => {
    insertMathNode(getEmptyLogarithmToBaseTenNode, editor)
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x4', () => {
    insertMathNode(getLogarithmToBaseNnode, editor)
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', NaturalLogarithm)
  nameToImgMap.set('1x2', Logarithm)
  nameToImgMap.set('1x3', LogarithmToBaseTen)
  nameToImgMap.set('1x4', LogarithmToBaseN)
  return { nameToClickFuncMap, nameToImgMap }
}

type LogPickerProps = {
  log?: string
  logs: LogType[]
}

export const LogPicker = ({ logs }: LogPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap } = initializeEquationMap()
  return (
    <div className="log-container" id="logContainer">
      {logs.map(({ name }) => (
        <LogButton
          name={name}
          image={nameToImgMap.get(name)}
          onClick={nameToClickFuncMap.get(name)}
        />
      ))}
    </div>
  )
}
