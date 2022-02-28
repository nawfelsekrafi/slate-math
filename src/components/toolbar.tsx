import { insertNodes , getPluginType, getPlateEditorRef, PlateEditor, getPluginOptions, MentionPlugin, Data, getPlugin, comboboxStore, insertEmptyElement, getComboboxStoreById, useActiveComboboxStore, Combobox} from "@udecode/plate";
import { ToolbarButton  } from "@udecode/plate-toolbar";
import { getEmptyBigOpNode } from "./BigOperator/getEmptyBigOpNode";
import { ACCENT, BIG_OPERATOR, FRACTION, INTEGRAL, LIMIT, LOG, MATRIX, SUMMATION } from "./defaults";
import {integralIcon} from "./Icons/Integral/icon"
import { getEmptyLimNode } from "./Limit/getEmptyLimNode";
import {getEmptyLogNode} from "./Log/getEmptyLogNode";
import  { summationIcon } from "./Icons/Summation/icon"
import { bigOpIcon } from "./BigOperator"
import { limitIcon } from "./Limit";
import { logIcon } from './Log/getLogElements';
import { fractionIcon, getEmptyFractionNode } from "./Fraction"
import { Path, BaseEditor, Transforms } from "slate";
import { containsMath, getCurrentSelection, selectFirstBox } from "./util";
import { MatrixTableDropDown } from "./Matrix/matrixDropDown";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { Matrix} from "@styled-icons/simple-icons/Matrix"
import { ELEMENT_EQUATION_MENTION } from "./mention/constants";
import { MentionCombobox } from "@udecode/plate-mention-ui";
import { MENTIONABLES } from "./mention/mentionables";
import { MathMentionCombobox } from "./mention/mathMentionComboBox";
import { getEmptyUneditableBigOpNode } from "./UneditableBigOperator/getEmptyBigOpNode";
import { accentIcon } from './Accent/getAccentElements';
import { getEmptyAccentNode } from './Accent/getEmptyAccentNode';


export const MathToolbar = () => {
  const editor = getPlateEditorRef()!
  return (
    
    <>
      <ToolbarButton
        type={getPluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{content: "Create Integral", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(INTEGRAL, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{content: "Create Summation", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(SUMMATION, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{content: "Create Limit", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LIMIT, editor)}
      />
      <ToolbarButton
          styles={{
            root: {
              'marginLeft':10,
              'marginRight': 20
            }
          }}
          type={getPluginType(editor, LOG)}
          icon={logIcon()}
          tooltip={{content: "Create Log", theme: 'light-border'}} 
          onMouseDown={e=> insertEquation(LOG, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{content: "Create Fraction", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(FRACTION, editor)}
      />
      <ToolbarButton
        type={getPluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{content: "Create Big Operator", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(BIG_OPERATOR, editor)}
      />
      <MatrixTableDropDown pluginKey={ELEMENT_MATRIX} icon={<Matrix />} selectedIcon={<Matrix />} />
      <MathMentionCombobox items={MENTIONABLES} id={ELEMENT_EQUATION_MENTION} />
      {/* <ToolbarButton
        type={getPluginType(editor, LOG)}
        icon={logIcon()}
        tooltip={{content: "Create Log", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LOG, editor)}
      /> */}
      
      <ToolbarButton
        type={getPluginType(editor, ACCENT)}
        icon={accentIcon()}
        tooltip={{content: "Create Accent", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(ACCENT, editor)}
      />
    </>
  );
};

//export const getPreviewRenderLeaf = (): RenderLeaf => () => (props: RenderLeafProps) => <Latex {...props} />;

function insertEquation(eq: string, editor: PlateEditor): import("react").MouseEventHandler<HTMLSpanElement> | undefined {
  var selection = getCurrentSelection(editor)
  if(selection){
    if(containsMath(editor, Path.levels(selection)[1]))
      return
  }
  console.log("==========" + eq);
  switch (eq){
    case INTEGRAL:{      
      insertNodes(editor, getEmptyUneditableBigOpNode('\u222b'));
      selectFirstBox(editor)
        break; 
      }
    case SUMMATION: {
      insertNodes(editor, getEmptyUneditableBigOpNode('\u2211'))
      selectFirstBox(editor)
      break; }
    case LIMIT: {
      insertNodes(editor, getEmptyLimNode(), )
      selectFirstBox(editor)
      break; }
    case LOG : {
      const test1 = getEmptyLogNode()
      // insertNodes(editor, getEmptyLogNode(),)
      insertNodes(editor, test1,)
      selectFirstBox(editor)
      break;
    }
    case ACCENT: {
      insertNodes(editor,getEmptyAccentNode(),)
      selectFirstBox(editor)
      break;
    }
    case BIG_OPERATOR: {
      insertNodes(editor, getEmptyBigOpNode(), )
      selectFirstBox(editor)
      break; }
    case FRACTION: {
      insertNodes(editor, getEmptyFractionNode(), )
      selectFirstBox(editor)
      break;
    }
    default: {
      break; }
  }
  return undefined;
}



