import { insertNodes } from "@udecode/plate";
import { setEventEditorId, getPlatePluginType, TEditor, RenderLeaf, usePlateEditorState, PEditor, PlateEditor } from "@udecode/plate-core";
import { ToolbarButton  } from "@udecode/plate-toolbar";
import { getEmptyBigOpNode } from "./BigOperator/getEmptyBigOpNode";
import { BIG_OPERATOR, FRACTION, INTEGRAL, LIMIT, MATRIX, SUMMATION } from "./defaults";
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
import { MatrixTableDropDown } from "./Matrix/matrixDropDown";
import { ELEMENT_MATRIX } from "./Matrix/defaults";
import { Matrix} from "@styled-icons/simple-icons/Matrix"


export const MathToolbar = () => {
  const editor = usePlateEditorState()
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
      <MatrixTableDropDown pluginKey={ELEMENT_MATRIX} icon={<Matrix />} selectedIcon={<Matrix />} />
    </>
  );
};

//export const getPreviewRenderLeaf = (): RenderLeaf => () => (props: RenderLeafProps) => <Latex {...props} />;

function insertEquation(eq: string, editor: BaseEditor | undefined): import("react").MouseEventHandler<HTMLSpanElement> | undefined {

  var selection = getCurrentSelection(editor as PEditor)
  if(selection){
    if(containsMath(editor as TEditor, Path.levels(selection)[1]))
      return
  }
  switch (eq){
    case INTEGRAL:{      
      insertNodes(editor as TEditor, getEmptyIntegralNode(), {at: selection, select:true});
      selectFirstBox(editor)
        break; 
      }
    case SUMMATION: {
      insertNodes(editor as TEditor, getEmptySummationNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case LIMIT: {
      insertNodes(editor as TEditor, getEmptyLimNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case BIG_OPERATOR: {
      insertNodes(editor as TEditor, getEmptyBigOpNode(), {at: selection, select:true})
      selectFirstBox(editor)
      break; }
    case FRACTION: {
      insertNodes(editor as TEditor, getEmptyFractionNode(), {at: selection, select:true})
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
): RenderElement => (editor: PEditor) => latextst(equation)

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
