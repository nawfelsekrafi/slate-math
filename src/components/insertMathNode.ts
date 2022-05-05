import { getNode, getText, insertNodes, PlateEditor, TElement } from '@udecode/plate';
import { getContainerNode } from './MathContainer/getContainerNode';
import { getCurrentSelection, selectFirstBox } from './util';

//
export function insertMathNode(
  nodeFunction: ((arg:any)=>TElement),
  editor: PlateEditor<{}>,
  nodeValue?: any,
  noContainer?: boolean,
  textInsert?: boolean
): void {
    let path = getCurrentSelection(editor)
    if(!path) return;
    if(!getNode(editor,path)) return; //node should not be  null
    let text = getText(editor,editor.selection)
    
  if (noContainer)
    insertNodes(editor, nodeFunction(nodeValue));
  else {
    let v = nodeFunction.call(nodeValue,nodeValue)
    insertNodes(editor, getContainerNode(v));
    selectFirstBox(editor);
  }
  if(textInsert){
    editor.insertText(text)
  }
  

}
