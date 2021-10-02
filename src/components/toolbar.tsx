import { insertNodes, MentionSelect, ToolbarTable, useMentionPlugin } from "@udecode/plate";
import { useStoreEditorRef, useEventEditorId, getPlatePluginType, SPEditor, TElement, TEditor } from "@udecode/plate-core";
import { ToolbarButton  } from "@udecode/plate-toolbar";
import { getEmptyBigOpNode } from "./BigOperator/getEmptyBigOpNode";
import { BIG_OPERATOR, FRACTION, INTEGRAL, LIMIT, SUMMATION } from "./defaults";
import { getEmptyFractionNode } from "./Fraction/thfraction/getEmptyFractionNode";
import integral from "./Integral"
import { getEmptyIntegralNode } from "./Integral/getEmptyIntegralNode";
import { getEmptyLimNode } from "./Limit/getEmptyLimNode";
import summation from "./Summation"
import fraction from "./Fraction"
import bigOperator from "./BigOperator"
import limit from "./Limit"
import { getEmptySummationNode } from "./Summation/getEmptySummationNode";



export const MathToolbar = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'));

  return (
    
    <>
      <ToolbarButton
        type={getPlatePluginType(editor, INTEGRAL)}
        icon={integral.Icon()}
        tooltip={{content: "Create Integral", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(INTEGRAL, editor as TEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, SUMMATION)}
        icon={summation.Icon()}
        tooltip={{content: "Create Summation", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(SUMMATION, editor as TEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, LIMIT)}
        icon={limit.Icon()}
        tooltip={{content: "Create Limit", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(LIMIT, editor as TEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, FRACTION)}
        icon={fraction.Icon()}
        tooltip={{content: "Create Fraction", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(FRACTION, editor as TEditor)}
      />
      <ToolbarButton
        type={getPlatePluginType(editor, BIG_OPERATOR)}
        icon={bigOperator.Icon()}
        tooltip={{content: "Create Big Operator", theme: 'light-border'}} 
        onMouseDown={e=> insertEquation(BIG_OPERATOR, editor as TEditor)}
      />
    </>
  );
};


function insertEquation(eq: string, editor: (TEditor)): import("react").MouseEventHandler<HTMLSpanElement> | undefined {
  switch (eq){
    case INTEGRAL:{
      insertNodes(editor, getEmptyIntegralNode());
      break; }
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

