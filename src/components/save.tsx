import { getPlateEditorRef, serializeHtml, ToolbarButton } from "@udecode/plate";
import { FolderUpload } from "@styled-icons/icomoon";
import { saveAs } from 'file-saver';

export default function EqSaver() {

  const editor = getPlateEditorRef("playground")!

  
  
  
  const getBlob = () => {
    //const html = serializeHtml(editor, {
    //  nodes: editor.children,
    //});
    var jsonElements = JSON.stringify(editor.children)
    //var unquoted = jsonElements.replace(/"([^"]+)":/g, '$1:');
    return new Blob([jsonElements], {type: "text/plain;charset=utf-8"});
  }
  return (
    <ToolbarButton
    icon={<FolderUpload/>}
    tooltip={{content: "Save", theme: 'light-border'}} 
    onMouseDown={() => saveAs(getBlob(), "document.html")}
    />

  );
}


