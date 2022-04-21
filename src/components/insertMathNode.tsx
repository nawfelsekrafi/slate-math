import { getText, insertNodes, PlateEditor } from '@udecode/plate';
import { getContainerNode } from './MathContainer/getContainerNode';
import { selectFirstBox } from './util';

//
export function insertMathNode(
  nodeFunction: any,
  editor: PlateEditor<{}>,
  nodeValue?: any,
  noContainer?: boolean,
  textInsert?: boolean
): void {
    var text = getText(editor,editor.selection)
  if (noContainer)
    insertNodes(editor, nodeFunction(nodeValue));
  else {
    insertNodes(editor, getContainerNode(nodeFunction(nodeValue)));
    selectFirstBox(editor);
  }
  if(textInsert){
    editor.insertText(text)
  }
  

}
