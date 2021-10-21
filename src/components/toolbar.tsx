import { insertNodes } from "@udecode/plate";
import { useStoreEditorRef, useEventEditorId, getPlatePluginType, SPEditor, RenderLeaf } from "@udecode/plate-core";
import { ToolbarButton  } from "@udecode/plate-toolbar";
import { getEmptyBigOpNode } from "./BigOperator/getEmptyBigOpNode";
import { BIG_OPERATOR, FRACTION, INTEGRAL, LIMIT, SUMMATION } from "./defaults";
import {integralIcon} from "./Integral/getIntegralElements"
import { getEmptyIntegralNode } from "./Integral/getEmptyIntegralNode";
import { getEmptyLimNode } from "./Limit/getEmptyLimNode";
import  { summationIcon } from "./Summation"
import { bigOpIcon } from "./BigOperator"
import { limitIcon } from "./Limit";
import { getEmptySummationNode } from "./Summation/getEmptySummationNode";
import { RenderLeafProps } from "slate-react";
import Latex from "react-latex-next"
import { fractionIcon, getEmptyFractionNode } from "./Fraction"
import { Path, BaseEditor } from "slate";
import { containsMath, getCurrentSelection, selectFirstBox } from "./util";



export const MathToolbar = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));
//
  return (
    
    <>
      <ToolbarButton
        type={getPlatePluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{content: "Create Integral", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(INTEGRAL, editor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{content: "Create Summation", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(SUMMATION, editor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{content: "Create Limit", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LIMIT, editor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{content: "Create Fraction", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(FRACTION, editor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{content: "Create Big Operator", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(BIG_OPERATOR, editor)}
      />
    </>
  );
};

export const getPreviewRenderLeaf = (): RenderLeaf => () => (props: RenderLeafProps) => <Latex {...props} />;

function insertEquation(eq: string, editor: BaseEditor | undefined): import("react").MouseEventHandler<HTMLSpanElement> | undefined {

  var selection = getCurrentSelection(editor as SPEditor)
  if(selection){
    if(containsMath(editor as SPEditor, Path.levels(selection)[1]))
      return
  }
  switch (eq){
    case INTEGRAL:{      
      insertNodes(editor as SPEditor, getEmptyIntegralNode(), {at: selection, select:true});
      selectFirstBox(editor)
        break; 
      }
    case SUMMATION: {
      insertNodes(editor as SPEditor, getEmptySummationNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case LIMIT: {
      insertNodes(editor as SPEditor, getEmptyLimNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case BIG_OPERATOR: {
      insertNodes(editor as SPEditor, getEmptyBigOpNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case FRACTION: {
      insertNodes(editor as SPEditor, getEmptyFractionNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break;
    }
    default: {
      break; }
  }
  return undefined;
}
/*
export const getMathElement = (
  equation: string
): RenderElement => (editor: SPEditor) => latextst(equation)

const latextst = (
  equation: string
) => ({ attributes, element, children }: TRenderElementProps) => {



return (
  
    <MathJaxContext>
        <MathJax>{equation}</MathJax>
    </MathJaxContext>
);
}

const fragTst = (equation: string) => {


  return (
<React.Fragment>
<MathJax>{equation}</MathJax>
</React.Fragment>
  );
}
*/
