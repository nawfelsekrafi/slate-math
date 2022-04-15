import { getPlateEditorRef } from '@udecode/plate-core'
import { insertMathNode } from '../toolbar'
import { selectFirstBox } from '../util'
import Limit from '../../assets/Limits/Limit.png'
import LimitToInfinity from '../../assets/Limits/LimitToInfinity.png'
import { LimitButton } from './LimitButton'
import { LimitType } from './LimitType'
import { getEmptyLimNode, getLimToInfinityNode } from './getEmptyLimNode'

const initializeEquationMap = () => {
  const editor = getPlateEditorRef()!
  const nameToClickFuncMap = new Map<string, any>()
  nameToClickFuncMap.set('1x1', () => {
    insertMathNode(getEmptyLimNode, editor)
    selectFirstBox(editor)
  })

  nameToClickFuncMap.set('1x2', () => {
    insertMathNode(getLimToInfinityNode, editor)
    selectFirstBox(editor)
  })

  const nameToImgMap = new Map<string, any>()
  nameToImgMap.set('1x1', Limit)
  nameToImgMap.set('1x2', LimitToInfinity)

  const nameToLimitNameMap = new Map<string, string>()
  nameToLimitNameMap.set('1x1', 'Limit')
  nameToLimitNameMap.set('1x2', 'Limit To Infinity')

  return { nameToClickFuncMap, nameToImgMap, nameToLimitNameMap }
}

type LimitPickerProps = {
  limit?: string
  limits: LimitType[]
}

export const LimitPicker = ({ limits }: LimitPickerProps) => {
  const { nameToClickFuncMap, nameToImgMap, nameToLimitNameMap } =
    initializeEquationMap()
  return (
    <div className="limit-container" id="limitContainer">
      {limits.map(({ name }) => (
        <LimitButton
          name={name}
          limitName={nameToLimitNameMap.get(name)}
          image={nameToImgMap.get(name)}
          onClick={nameToClickFuncMap.get(name)}
        />
      ))}
    </div>
  )
}
