import {
  insertNodes,
  getPluginType,
  getPlateEditorRef,
  PlateEditor,
  serializeHtml,
  TElement,
  AnyObject,
} from '@udecode/plate'
import { ToolbarButton } from '@udecode/plate-toolbar'
import { getEmptyBigOpNode } from './BigOperator/getEmptyBigOpNode'
import {
  ACCENT,
  BIG_OPERATOR,
  FRACTION,
  INTEGRAL,
  LIMIT,
  LOG,
  SUMMATION,
} from './defaults'
import { integralIcon } from './Icons/Integral/icon'
import { getEmptyLimNode } from './Limit/getEmptyLimNode'
import { getLogarithmToBaseNnode } from './Log/getEmptyLogNode'
import { summationIcon } from './Icons/Summation/icon'
import { bigOpIcon } from './BigOperator'
import { ELEMENT_LIMIT, limitIcon } from './Limit'
import { logIcon } from './Log/getLogElements'
import { FolderDownload } from '@styled-icons/icomoon/FolderDownload'
import { FolderUpload } from '@styled-icons/icomoon/FolderUpload'

import { fractionIcon, getEmptyFractionNode } from './Fraction'
import {
  containsMathContainer,
  getCurrentSelection,
  selectFirstBox,
} from './util'
import { MatrixTableDropDown } from './Matrix/matrixDropDown'
import { ELEMENT_MATRIX } from './Matrix/defaults'
import { Matrix } from '@styled-icons/simple-icons/Matrix'
import { ELEMENT_EQUATION_MENTION } from './mention/constants'
import { MENTIONABLES } from './mention/mentionables'
import { MathMentionCombobox } from './mention/mathMentionComboBox'
import { getEmptyUneditableBigOpNode } from './UneditableBigOperator/getEmptyBigOpNode'
import { accentIcon } from './Accent/getAccentElements'
import { getEmptyAccentNode } from './Accent/getEmptyAccentNode'
import { ReactEditor } from 'slate-react'
import { getContainerNode } from './MathContainer/getContainerNode'
import { useFilePicker } from 'use-file-picker'
import EqLoader from './load'
import EqSaver from './save'
import { createMathPlugins } from './plugin'
import { ELEMENT_ACCENT } from './Accent'
import { ELEMENT_LOG } from './Log'
import { LimitToolBarButton } from './Limit/LimitDropDownMenu'
import { LogToolBarButton } from './Log/LogDropDownMenu'
import { AccentToolBarButton } from './Accent/AccentDropDownMenu'

export const MathToolbar = () => {
  const editor = getPlateEditorRef()!

  return (
    <>
      <ToolbarButton
        type={getPluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{ content: 'Create Integral', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getEmptyUneditableBigOpNode, editor, '\u222b')
        }
      />
      <ToolbarButton
        type={getPluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{ content: 'Create Summation', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getEmptyUneditableBigOpNode, editor, '\u2211')
        }
      />

      <LimitToolBarButton
        pluginKey={ELEMENT_LIMIT}
        icon={limitIcon()}
        styles={{
          root: {
            marginLeft: 10,
            marginRight: 15,
          },
        }}
      />

      {/* <ToolbarButton
        styles={{
          root: {
            marginLeft: 10,
            marginRight: 15,
          },
        }}
        type={getPluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{ content: 'Create Limit', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyLimNode, editor)}
      /> */}

      <LogToolBarButton
        pluginKey={ELEMENT_LOG}
        icon={logIcon()}
        styles={{
          root: {
            marginRight: 20,
          },
        }}
      />

      {/* <ToolbarButton
          styles={{
            root: {
              'marginRight': 20
            }
          }}
          type={getPluginType(editor, LOG)}
          icon={logIcon()}
          tooltip={{content: "Create Log", theme: 'light-border'}} 
          onMouseDown={e=> insertMathNode(getLogarithmToBaseNnode, editor)}
      /> */}

      <ToolbarButton
        type={getPluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{ content: 'Create Fraction', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyFractionNode, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{ content: 'Create Big Operator', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyBigOpNode, editor)}
      />

      <MatrixTableDropDown
        pluginKey={ELEMENT_MATRIX}
        icon={<Matrix />}
        selectedIcon={<Matrix />}
      />
      <MathMentionCombobox items={MENTIONABLES} id={ELEMENT_EQUATION_MENTION} />

      <AccentToolBarButton pluginKey={ELEMENT_ACCENT} icon={accentIcon()} />

      <EqLoader />
      <EqSaver />
    </>
  )
}

export function insertMathNode(
  nodeFunction: any,
  editor: PlateEditor<{}>,
  nodeValue?: any
): void {
  insertNodes(editor, getContainerNode(nodeFunction(nodeValue)))
}
