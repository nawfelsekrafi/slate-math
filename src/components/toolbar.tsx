import { insertNodes, someNode } from "@udecode/plate";
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
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";



export const MathToolbar = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));
//
  return (
    
    <>
      <ToolbarButton
        type={getPlatePluginType(editor, INTEGRAL)}
        icon={integralIcon()}
        tooltip={{content: "Create Integral", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(INTEGRAL, editor as SPEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, SUMMATION)}
        icon={summationIcon()}
        tooltip={{content: "Create Summation", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(SUMMATION, editor as SPEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, LIMIT)}
        icon={limitIcon()}
        tooltip={{content: "Create Limit", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LIMIT, editor as SPEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, FRACTION)}
        icon={fractionIcon()}
        tooltip={{content: "Create Fraction", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(FRACTION, editor as SPEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, BIG_OPERATOR)}
        icon={bigOpIcon()}
        tooltip={{content: "Create Big Operator", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(BIG_OPERATOR, editor as SPEditor)}
      />
    </>
  );
};

export const getPreviewRenderLeaf = (): RenderLeaf => () => (props: RenderLeafProps) => <Latex {...props} />;

function insertEquation(eq: string, editor: SPEditor): import("react").MouseEventHandler<HTMLSpanElement> | undefined {
  const options = {at: editor.selection} as any
  if (someNode(editor, {match: {type: getPlatePluginType(editor, ELEMENT_EQUATIONBOX)}})){
    console.log("inserting inside eq not allowed")
    return
  }
  switch (eq){
    case INTEGRAL:{
      //ReactDOM.render(latextst("What is $(\int_2^2 x^2 \,dx )$"),document.getElementById("root"))
      
      //var d = (renderLatex(txt,delim,false))
      //var f = htmlStringToDOMNode(d)
      //var node = f.getRootNode() as unknown as TNode
      //var c = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}")
      insertNodes(editor, getEmptyIntegralNode(), options);
      //insertNodes(editor,getMathElement("fdssdf"))
      /*
      var e = document.getElementById("root")
      if (e)
        katex.render("c = \\pm\\sqrt{a^2 + b^2}",e)
      */
        break; 
      }
    case SUMMATION: {

      insertNodes(editor, getEmptySummationNode())
      break; }
    case LIMIT: {
      insertNodes(editor, getEmptyLimNode())
      break; }
    case BIG_OPERATOR: {
      insertNodes(editor, getEmptyBigOpNode())
      break; }
    case FRACTION: {
      insertNodes(editor, getEmptyFractionNode())
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
