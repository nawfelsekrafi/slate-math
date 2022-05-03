import { getPluginType, isElement, WithOverride } from "@udecode/plate-core"
import { Transforms } from "slate";
import { ELEMENT_MATH_CONTAINER } from "./defaults";

export const withContainer: WithOverride = (editor) => {
    const { normalizeNode } = editor
    editor.normalizeNode = ([node, path]) => {
        if(isElement(node) && (node.type === getPluginType(editor, ELEMENT_MATH_CONTAINER) )){
            if (node.children.length == 0) {
                Transforms.removeNodes(editor, {
                    at: path,
                  });
            }
            

        }
        return normalizeNode([node, path]);
    }
    
    return editor;
}

