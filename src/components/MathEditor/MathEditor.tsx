import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,  AnyObject, createParagraphPlugin, createPlugins, Plate, createBlockquotePlugin, createCodeBlockPlugin, createHeadingPlugin, createPlateUI, TElement, setNodes, ELEMENT_DEFAULT  } from "@udecode/plate";
import { useEditorState, useEventEditorStore } from "@udecode/plate-core";
import { useState } from "react";
import { ReactEditor, useFocused, useSelected } from "slate-react";
import tw from "twin.macro";
import { EquationBox } from "../EquationBoxElement/getEquationBoxElement";
import { getEmptyBoxNode } from "../EquationBoxElement/getEquationBoxNode";
import { createEquationBoxPlugin, createMathPlugins } from "../plugin";
import { EditorNodeData, MathEditorProps } from "./MathEditor.types";
import { MathEditorSelection } from "./MathEditorSelect";

export const MathEditor = (props:MathEditorProps) => {
  const plugins = createMathPlugins()

  const { attributes, children, nodeProps, element, as, editor } = props;
  const selected = useSelected();
  const focused = useFocused();
  const options = element;
  let init = undefined
  if (element.initial){
    init = [element.initial]
  }  
  return (
    <pre contentEditable={false}
    css={[tw`whitespace-pre-wrap py-3 px-4`,
    `background-color: #fffcb4;
    line-height: normal;
    border-radius: 3px;
    padding: 0px 3px 0px;
    position: relative;`]}>
    <MathEditorSelection
      data-testid="MathOptionSelect"
      css={`z-index: 5;
      position: relative;`}
      options={options}
      onChange={(val: string) => {
        const path = ReactEditor.findPath(editor, element);
        setNodes<TElement<EditorNodeData>>(
          editor,
          { opt: val },
          { at: path }
        );
      }}/>
      <Plate
        id="matheditor"
        normalizeInitialValue={true}
        plugins={plugins}
        initialValue={init}
      >
      </Plate>

      {children}
    </pre>
            
  )
  }

