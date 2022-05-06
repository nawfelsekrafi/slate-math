import {
  getPluginType,
  getPlateEditorRef,
  getComboboxStoreById,
} from '@udecode/plate'
import { ToolbarButton } from '@udecode/plate-toolbar'
import { getEmptyBigOpNode } from './BigOperator/getEmptyBigOpNode'
import { BIG_OPERATOR, FRACTION, INTEGRAL, SUMMATION } from './defaults'
import { integralIcon } from './Integral/icon'
import { getEmptyLimNode } from './Limit/getEmptyLimNode'
import { getLogarithmToBaseNnode } from './Log/getEmptyLogNode'
import { summationIcon } from './Summation/icon'
import { bigOpIcon } from './BigOperator'
import { ELEMENT_LIMIT, limitIcon } from './Limit'
import { logIcon } from './Log/getLogElements'

import { fractionIcon } from './Fraction/getFractionElements'
import { MatrixTableDropDown } from './Matrix/matrixDropDown'
import { ELEMENT_MATRIX } from './Matrix/defaults'
import { Matrix } from '@styled-icons/simple-icons/Matrix'
import {
  getIntegralNode,
  getSummationNode,
} from './UneditableBigOperator/getEmptyBigOpNode'
import { accentIcon } from './Accent/getAccentElements'
import EqLoader from './load'
import EqSaver from './save'
import { ELEMENT_ACCENT } from './Accent'
import { ELEMENT_BRACKET } from './Bracket'
import { bracketIcon } from './Bracket/getBracketElements'
import { BracketToolBarButton } from './Bracket/BracketDropDownMenu'
import { ELEMENT_LOG } from './Log'
import { LimitToolBarButton } from './Limit/LimitDropDownMenu'
import { LogToolBarButton } from './Log/LogDropDownMenu'
import { AccentToolBarButton } from './Accent/AccentDropDownMenu'
import { IntegralToolBarButton } from './Integral/IntegralDropDownMenu'
import { ELEMENT_INTEGRAL } from './Integral/defaults'
import { SummationToolBarButton } from './Summation/SummationDropDownMenu'
import { ELEMENT_SUMMATION } from './Summation/defaults'
import { insertMathNode } from './insertMathNode'
import { MathMentionCombobox } from './mention/mathMentionComboBox'
import { MENTIONABLES } from './mention/mentionables'
import { ELEMENT_EQUATION_MENTION } from './mention/constants'
import { ELEMENT_FRACTION } from './Fraction'
import { FractionToolBarButton } from './Fraction/FractionDropDownMenu'
import { TrigTableDropDown } from './Trig/TrigDropdown'
import { ELEMENT_TRIG, TrigIcon } from './Trig'
import { getEmptySubscriptNode, getEmptySuperScriptNode } from './Exponent/getEmptyExponentNode'
import { ELEMENT_EXPONENT } from './Exponent/defaults'
import { SubScriptIcon, SuperScriptIcon } from './Exponent/getExponentElements'

export const MathToolbar = () => {
  const editor = getPlateEditorRef()!

  return (
    <>
      <IntegralToolBarButton
        pluginKey={ELEMENT_INTEGRAL}
        icon={integralIcon()
        }
        styles={{
          root: {
            marginLeft: 5,
            marginRight: 5,
            WebkitTransform: 'scale(0.7, 0.7)'
          },
        }}
      />
      {/* 
      <ToolbarButton
        type={getPluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{ content: 'Create Integral', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getIntegralNode, editor)
        }
      /> */}

      <SummationToolBarButton
        pluginKey={ELEMENT_SUMMATION}
        icon={summationIcon()}
        styles={{
          root: {
            WebkitTransform: 'scale(0.8, 0.8)'
          },
        }}
      />

      {/* <ToolbarButton
        type={getPluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{ content: 'Create Summation', theme: 'light-border' }}
        onMouseDown={(e) =>
          insertMathNode(getSummationNode, editor)
        }
      /> */}

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
            marginRight: 25,
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

      {/*}
      <ToolbarButton
        type={getPluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{ content: 'Create Fraction', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyFractionNode, editor)}
      />*/}

      <ToolbarButton
        type={getPluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{ content: 'Create Big Operator', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptyBigOpNode, editor)}
        styles={{
          root: {
            WebkitTransform: 'scale(0.7, 0.7)'
          },
        }}
      />

      <MatrixTableDropDown
        pluginKey={ELEMENT_MATRIX}
        icon={<Matrix />}
        selectedIcon={<Matrix />}
        styles={{
          root: {
            marginLeft: 5,
          },
        }}
      />

      <MathMentionCombobox items={MENTIONABLES} id={ELEMENT_EQUATION_MENTION} />

      <AccentToolBarButton
        pluginKey={ELEMENT_ACCENT}
        icon={accentIcon()}
        styles={{
          root: {
            marginRight: 5,
          },
        }}
      />

      <BracketToolBarButton pluginKey={ELEMENT_BRACKET} icon={bracketIcon()} />

      <FractionToolBarButton
        pluginKey={ELEMENT_FRACTION}
        icon={fractionIcon()}
        styles={{
          root: {
            marginLeft: 5,
          },
        }}
      />

      <TrigTableDropDown
        pluginKey={ELEMENT_TRIG}
        icon={TrigIcon()}
        styles={{
          root: {
            marginLeft: 5,
            marginRight: 5,
          },
        }}
      />

      <ToolbarButton
        type={getPluginType(editor, ELEMENT_EXPONENT)}
        icon={SuperScriptIcon()}
        tooltip={{ content: 'Create SuperScript', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptySuperScriptNode, editor)}

      />
      <ToolbarButton
        type={getPluginType(editor, ELEMENT_EXPONENT)}
        icon={SubScriptIcon()}
        tooltip={{ content: 'Create SubScript', theme: 'light-border' }}
        onMouseDown={(e) => insertMathNode(getEmptySubscriptNode, editor)}

      />
      <EqLoader />
      <EqSaver />
    </>
  )
}
