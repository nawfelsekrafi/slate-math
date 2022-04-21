import { getText, insertNodes, PlateEditor, TElement } from '@udecode/plate';
import { getContainerNode } from './MathContainer/getContainerNode';
import { selectFirstBox } from './util';

//
export function insertMathNode(
  nodeFunction: ((arg:any)=>TElement),
  editor: PlateEditor<{}>,
  nodeValue?: any,
  noContainer?: boolean,
  textInsert?: boolean
): void {
    var text = getText(editor,editor.selection)
  if (noContainer)
    insertNodes(editor, nodeFunction(nodeValue));
  else {
    console.log(nodeValue)
    var v = nodeFunction.call(nodeValue,nodeValue)
    console.log(v)
    insertNodes(editor, getContainerNode(v));
    selectFirstBox(editor);
  }
  if(textInsert){
    editor.insertText(text)
  }
  

}
