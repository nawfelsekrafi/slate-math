import {  isCollapsed, KeyboardHandler,  SPEditor } from "@udecode/plate";
import {Editor, Path, Range} from 'slate'
export const getEquationTextOnKeyDown = (): KeyboardHandler => (editor:SPEditor) => (e) => {
    if (e.key === 'Tab') {
        let at = editor.selection
        
        let _at: Path;

        if (Range.isRange(at) && !isCollapsed(at)) {
            _at = at.focus.path;
          } else if (Range.isRange(at)) {
            _at = at.anchor.path;
          } else {
            _at = at as unknown as Path;
          }
        
          if (_at) {
            //let options = getPlatePluginOptions(editor, ELEMENT_EQUATION_TEXT);
            //let node = getNode(editor,_at)
            let x = Editor.parent(editor,_at,{depth:1})
            console.log(x)
            

          }
                    

    }
    
}

