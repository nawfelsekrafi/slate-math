import { useFilePicker } from "use-file-picker";
import { deserializeHtml, getPlateEditorRef, insertNodes, PlateEditor, TElement, ToolbarButton } from "@udecode/plate";
import { FolderDownload } from "@styled-icons/icomoon/FolderDownload";
import { getHtmlDocument } from "@udecode/plate-test-utils";

export default function EqLoader() {
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ".html"
  });
  const editor = getPlateEditorRef("playground")!
  
  return (
    <ToolbarButton
    icon={<FolderDownload/>}
    tooltip={{content: "Load", theme: 'light-border'}} 
    onMouseDown={() => openFileSelector()}
    >
    {loadContents(filesContent.pop()?.content,editor)}
    </ToolbarButton>

  );
}
function loadContents(content: string | undefined, editor:PlateEditor) {
  if (content==undefined) return;
  console.log(content)
  //var element = getHtmlDocument(content).body;
  //var nodes = deserializeHtml(editor,{element})
  var elementJSON = JSON.parse(content) as TElement[]
  console.log(elementJSON)
  insertNodes(editor,elementJSON)
  
}
