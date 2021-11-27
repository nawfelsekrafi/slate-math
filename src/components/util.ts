import { transform } from "@babel/core";
import { findNode, getNode, getNodesRange, getRangeBefore, isCollapsed, KeyboardHandler, selectEditor, someNode } from "@udecode/plate";
import { getPlatePluginType, PEditor, PlateEditor,  } from "@udecode/plate-core";
import { BaseEditor, Editor, Path, Range, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";

export const getCurrentSelection = (editor:PEditor, root?:boolean):Path | undefined => {
    var at = editor.selection
    var _at: Path;
    if (Range.isRange(at) && !isCollapsed(at)) {
      _at = at.focus.path;
    } else if (Range.isRange(at)) {
      _at = at.anchor.path;
    } else {
      _at = at as unknown as Path;
    }
    if(root){
        var levels = Path.levels(_at)
        if (levels.length<1)
            return
        return levels[1]
    }
    return _at

}
export const selectFirstBox = (editor: BaseEditor | undefined) => {
    var selection = getCurrentSelection(editor as PEditor, true)
    if(selection){
        let textNode = findNode(editor as PEditor, {at: selection, match: {type: getPlatePluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX)}})
        if(textNode){
            let target = Editor.range(editor as PEditor, textNode[1])
            ReactEditor.focus(editor as ReactEditor)
            Transforms.setSelection(editor as PEditor, target)
        }
    }
    
    
}

export const equationBoxOnKeyDown = (): KeyboardHandler => (editor:PEditor) => (e) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        var found = false
        var selection = getCurrentSelection(editor)
          if (selection) {
            if(!containsMath(editor,selection))
              return
            var pathParent = Path.parent(selection) //get parent
            let sibling = Path.next(pathParent)
            while (getNode(editor,sibling)){ //check if math equation node has any more boxes
              let textNode = findNode(editor, {at: sibling, match: {type: getPlatePluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX)}})
              if(textNode){ //if found another box, select it
                found = true
                let target = Editor.range(editor, sibling)
                Transforms.setSelection(editor, Editor.range(editor, target))
                e.preventDefault()
                e.stopPropagation()
                break
              }
              sibling = Path.next(sibling)
            }
          }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        var selection = getCurrentSelection(editor)
        if (selection) {
            if(!containsMath(editor,selection))
              return
            var pathParent = Path.parent(selection) //get parent
            if(pathParent.at(pathParent.length-1)!==0) { //make sure sibling isnt negative
                let sibling = Path.previous(pathParent)
                while (getNode(editor,sibling)){ //check if math equation node has any more boxes
                let textNode = findNode(editor, {at: sibling, match: {type: getPlatePluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX)}})
                if(textNode){ //if found another box, select it
                    found = true
                    let target = Editor.range(editor, sibling)
                    Transforms.setSelection(editor, Editor.range(editor, target))
                    e.preventDefault()
                    e.stopPropagation()
                    break
                }
                sibling = Path.previous(sibling)
                }
            }
        }
    }
    
}
export const containsMath = (editor: BaseEditor | undefined, selection:Path ):boolean => {
    return someNode(editor as PEditor, {at:selection, match: {type: getPlatePluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX),} })
}