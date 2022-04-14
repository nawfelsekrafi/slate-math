import { insertNodes , getPluginType, getPlateEditorRef, PlateEditor, serializeHtml} from "@udecode/plate";
import { ToolbarButton  } from "@udecode/plate-toolbar";
import { getEmptyBigOpNode } from "./BigOperator/getEmptyBigOpNode";
import { ACCENT, BIG_OPERATOR, FRACTION, INTEGRAL, LIMIT, LOG, SUMMATION } from "./defaults";
import {integralIcon} from "./Icons/Integral/icon"
import { getEmptyLimNode } from "./Limit/getEmptyLimNode";
import {getEmptyLogNode} from "./Log/getEmptyLogNode";
import  { summationIcon } from "./Icons/Summation/icon"
import { bigOpIcon } from "./BigOperator"
import { limitIcon } from "./Limit";
import { logIcon } from './Log/getLogElements';
import {FolderDownload} from "@styled-icons/icomoon/FolderDownload";
import {FolderUpload} from "@styled-icons/icomoon/FolderUpload";

import { fractionIcon, getEmptyFractionNode } from "./Fraction"
import {  containsMathContainer, getCurrentSelection, selectFirstBox } from "./util";
import { MatrixTableDropDown } from "./Matrix/matrixDropDown";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { Matrix} from "@styled-icons/simple-icons/Matrix"
import { ELEMENT_EQUATION_MENTION } from "./mention/constants";
import { MENTIONABLES } from "./mention/mentionables";
import { MathMentionCombobox } from "./mention/mathMentionComboBox";
import { getEmptyUneditableBigOpNode } from "./UneditableBigOperator/getEmptyBigOpNode";
import { accentIcon } from './Accent/getAccentElements';
import { getEmptyAccentNode } from './Accent/getEmptyAccentNode';
import { ReactEditor } from "slate-react";
import { getContainerNode } from "./MathContainer/getContainerNode";
import { useFilePicker } from "use-file-picker";
import EqLoader from "./load";
import EqSaver from "./save";
import { createMathPlugins } from "./plugin";


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
          styles={{
            root: {
              'marginLeft':10,
              'marginRight': 15
            }
          }}
        type={getPluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{content: "Create Limit", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LIMIT, editor)}
      />
      <ToolbarButton
          styles={{
            root: {
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

      <EqLoader/>
      <EqSaver />
    </>
  );
};

//export const getPreviewRenderLeaf = (): RenderLeaf => () => (props: RenderLeafProps) => <Latex {...props} />;

function insertEquation(eq: string, editor: PlateEditor): import("react").MouseEventHandler<HTMLSpanElement> | undefined {
  var selection = getCurrentSelection(editor)
  if(selection){
    console.log(selection)
    console.log(containsMathContainer(editor,selection));
  }
    
  var isFocused = ReactEditor.isFocused(editor)
  switch (eq){
    case INTEGRAL:{ 
      insertNodes(editor, getContainerNode(getEmptyUneditableBigOpNode('\u222b')));
      selectFirstBox(editor);
      
        break; 
      }
    case SUMMATION: {
      insertNodes(editor, getContainerNode(getEmptyUneditableBigOpNode('\u2211')))
      selectFirstBox(editor)
      break; }
    case LIMIT: {
      insertNodes(editor, getContainerNode(getEmptyLimNode()))
      selectFirstBox(editor)
      break; }
    case LOG : {
      insertNodes(editor, getContainerNode(getEmptyLogNode()))
      selectFirstBox(editor)
      break;
    }
    case ACCENT: {
      insertNodes(editor, getContainerNode(getEmptyAccentNode()))
      selectFirstBox(editor)
      break;
    }
    case BIG_OPERATOR: {
      insertNodes(editor, getContainerNode(getEmptyBigOpNode()))
      selectFirstBox(editor)
      break; }
    case FRACTION: {
      insertNodes(editor, getContainerNode(getEmptyFractionNode()))
      selectFirstBox(editor)
      break;
    }
    default: {
      break; }
  }
  /*
  if(isFocused){
    console.log("foc");
    switch (eq){
      case INTEGRAL:{ 
        insertNodes(editor, getMathEditor(getEmptyUneditableBigOpNode('\u222b')));
        selectFirstBox(editor)
          break; 
        }
      case SUMMATION: {
        insertNodes(editor, getMathEditor(getEmptyUneditableBigOpNode('\u2211')))
        selectFirstBox(editor)
        break; }
      case LIMIT: {
        insertNodes(editor, getMathEditor(getEmptyLimNode()) )
        selectFirstBox(editor)
        break; }
      case LOG : {
        const test1 = getEmptyLogNode()
        // insertNodes(editor, getEmptyLogNode(),)
        insertNodes(editor, getMathEditor(getEmptyLogNode()))
        selectFirstBox(editor)
        break;
      }
      case ACCENT: {
        insertNodes(editor, getMathEditor(getEmptyAccentNode()))
        selectFirstBox(editor)
        break;
      }
      case BIG_OPERATOR: {
        insertNodes(editor, getMathEditor(getEmptyBigOpNode()))
        selectFirstBox(editor)
        break; }
      case FRACTION: {
        insertNodes(editor, getMathEditor(getEmptyFractionNode()) )
        selectFirstBox(editor)
        break;
      }
      default: {
        break; }
    }
  }
  else{
    switch (eq){
      case INTEGRAL:{ 
        insertNodes(editor, getEmptyUneditableBigOpNode('\u222b'));
        selectFirstBox(editor);
        
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
    
  }
*/
  return undefined;
}




