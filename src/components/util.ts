import { transform } from "@babel/core";
import { findNode, getNode, getNodesRange, getRangeBefore, isCollapsed, KeyboardHandler, selectEditor, someNode, getPluginType, PlateEditor, comboboxStore } from "@udecode/plate";
import { PEditor } from "@udecode/plate-core";
import { BaseEditor, Editor, Path, Range, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";

export const getCurrentSelection = (editor:PlateEditor, root?:boolean):Path | undefined => {
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
export const selectFirstBox = (editor:PlateEditor) => {
    var selection = getCurrentSelection(editor, true)
    console.log(selection)
    if(selection){
        let textNode = findNode(editor, {at: selection, match: {type: getPluginType(editor, ELEMENT_EQUATIONBOX)}})
        if(textNode){
            let target = Editor.range(editor, textNode[1])
            ReactEditor.focus(editor as unknown as ReactEditor)
            Transforms.setSelection(editor, target)
            let path = target.anchor.path as Path 
            path = Path.parent(path)            
            while (someNode(editor, {at:path }))
            {
              path = Path.next(path);
            }
            path = Path.previous(path);
            return path;

        }
    }
    
    
}

export const equationBoxOnKeyDown = (): KeyboardHandler => (editor) => (e) => {
    if (e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        var found = false
        var selection = getCurrentSelection(editor)
          if (selection) {
            if(!containsMath(editor,selection)||comboboxStore.get.isOpen()) //if not at math node of if combobox is open do nothing
              return
            var pathParent = Path.parent(selection) //get parent
            let sibling = Path.next(pathParent)
            while (getNode(editor,sibling)){ //check if math equation node has any more boxes
              let textNode = findNode(editor, {at: sibling, match: {type: getPluginType(editor, ELEMENT_EQUATIONBOX)}})
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
            if(!containsMath(editor,selection)||comboboxStore.get.isOpen()) ////if not at math node of if combobox is open do nothing
              return
            var pathParent = Path.parent(selection) //get parent
            if(pathParent.at(pathParent.length-1)!==0) { //make sure sibling isnt negative
                let sibling = Path.previous(pathParent)
                while (getNode(editor,sibling)){ //check if math equation node has any more boxes
                let textNode = findNode(editor, {at: sibling, match: {type: getPluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX)}})
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
export const containsMath = (editor:PlateEditor, selection:Path ):boolean => {
    return someNode(editor, {at:selection, match: {type: getPluginType(editor, ELEMENT_EQUATIONBOX)} })
}