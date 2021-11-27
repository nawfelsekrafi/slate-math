import { RestartAlt } from "@styled-icons/material";
import { ToolbarButtonProps, ToolbarDropdown, ToolbarButton, isCollapsed, someNode, isMarkActive } from "@udecode/plate";
import { getPlatePluginType, usePlateEditorRef, usePlateEditorState } from "@udecode/plate-core";
import React, { ReactNode, useCallback } from "react";
import { Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { getDefaultMatrixes } from "./constants";
import { createMatrix } from "./createMatrix";
import {  MatrixButton } from "./matrixButton";
import { MatrixPicker } from "./MatrixPicker";
import { MatrixType } from "./matrixType";

type MatrixPickerToolbarDropdownProps = {
    pluginKey: string;
    icon: ReactNode;
    selectedIcon: ReactNode;
    matrixes?: MatrixType[];
  };
export const MatrixTableDropDown = ({
  pluginKey,
  icon,
  selectedIcon,
  matrixes = getDefaultMatrixes(),
  ...rest

}:MatrixPickerToolbarDropdownProps) => {
    const [open, setOpen] = React.useState(false);
    const editor = usePlateEditorState()!;
    const editorRef = usePlateEditorRef()!;
    const type = getPlatePluginType(editorRef, pluginKey);
    const onToggle = useCallback(() => {
      setOpen(!open);
    }, [open, setOpen]);
    console.log(matrixes)
    console.log(open)

    const updateMatrix = (rows:number, cols:number) => {
      if (editorRef && editor && editor.selection) {
        var node = createMatrix(editor, rows, cols)
        editor.insertNode(node)
        Transforms.select(editorRef, editor.selection);
        ReactEditor.focus(editorRef);
        onToggle()
      }
    }
  
    return (
      <ToolbarDropdown
        control={
          <ToolbarButton
            active={!!editor?.selection && isMarkActive(editor, type)}
            icon={icon}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <MatrixPicker
            matrix={"matrixes"}
            matrixes={matrixes}
            updateMatrix={updateMatrix}

        />
      </ToolbarDropdown>
    );
  };




