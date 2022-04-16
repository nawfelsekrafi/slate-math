import { getBlockAbove, getPlugin, getPluginType, isCollapsed, isElement, MentionPlugin, TElement, WithOverride } from "@udecode/plate";
import { Editor, Transforms, Node, Point, Path } from "slate";
import { ELEMENT_EQUATION_TEXT } from "../EquationText";
import { ELEMENT_MATH_CONTAINER } from "../MathContainer/defaults";
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from "../UneditableBigOperator/defaults";
import { isMathNode } from "../util";
import { ELEMENT_EQUATIONBOX } from "./defaults";
import { EquationBoxInputElementProps } from "./getEquationBoxElement.types";


export const withBox: WithOverride<{}, EquationBoxInputElementProps> = (
  editor
) => {

    const { normalizeNode, deleteBackward, deleteForward } = editor;
    
    // can only have 1 entry
    editor.normalizeNode = ([node, path]) => {
      if (isMathNode(node,editor)){
        if (isElement(node) && (node.type === getPluginType(editor, ELEMENT_EQUATIONBOX) )){
          if (node.children.length > 1) {
            for(var i = 0; i<node.children.length; i++){
              if(node.children[i].text!=undefined){
                
                Transforms.removeNodes(editor, {
                  at: path.concat(i),
                });
              }
            }
          }
        }
        return node;
      }
      return normalizeNode([node, path])
      
      
    };
    const matchCells = (node: Node) => {
        return (
          isElement(node) &&
          (node.type === getPluginType(editor, ELEMENT_EQUATIONBOX)));
      };

      const preventDeleteCell = (
        operation: any,
        pointCallback: any,
        nextPoint: any
      ) => (unit: any) => {
        const { selection } = editor;
    
        if (isCollapsed(selection)) {
          const [cell] = Editor.nodes<TElement>(editor, {
            match: matchCells,
          });
          if (cell) {
            // Prevent deletions within a cell
            const [, cellPath] = cell;
            const start = pointCallback(editor, cellPath);
    
            if (selection && Point.equals(selection.anchor, start)) {
              return;
            }
          } else {
            // Prevent deleting cell when selection is before or after a table
            const next = nextPoint(editor, selection, { unit });
            const _nodes = Editor.nodes(editor, {
              match: matchCells,
              at: next,
            });
            const [nextCell] = Array.from(_nodes);
            if (nextCell) return;
          }
        }
    
        operation(unit);
      };

      
      editor.insertText = (text) => {
        Transforms.insertText(editor, text);
      };

      
      editor.deleteBackward = preventDeleteCell(
        deleteBackward,
        Editor.start,
        Editor.before
      );
    
      // prevent deleting cells with deleteForward
      editor.deleteForward = preventDeleteCell(
        deleteForward,
        Editor.end,
        Editor.after
      );

  return editor;
};
