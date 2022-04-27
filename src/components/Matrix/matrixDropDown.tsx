import { RestartAlt } from '@styled-icons/material'
import {
  ToolbarButtonProps,
  ToolbarDropdown,
  ToolbarButton,
  isCollapsed,
  someNode,
  isMarkActive,
  getPluginType,
  usePlateEditorRef,
  usePlateEditorState,
  RootStyles,
} from '@udecode/plate'
import React, { ReactNode, useCallback } from 'react'
import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { getDefaultMatrixes } from './constants'
import { createMatrix } from './createMatrix'
import { MatrixButton } from './matrixButton'
import { MatrixPicker } from './MatrixPicker'
import { MatrixType } from './matrixType'

type MatrixPickerToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  selectedIcon: ReactNode
  matrixes?: MatrixType[]
  styles?: Partial<RootStyles>
}
export const MatrixTableDropDown = ({
  pluginKey,
  icon,
  selectedIcon,
  matrixes = getDefaultMatrixes(),
  ...rest
}: MatrixPickerToolbarDropdownProps) => {
  const [open, setOpen] = React.useState(false)
  const editor = usePlateEditorState()!
  const editorRef = usePlateEditorRef()!
  const type = getPluginType(editorRef, pluginKey)
  const onToggle = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const updateMatrix = (rows: number, cols: number) => {
    if (editorRef && editor && editor.selection) {
      var node = createMatrix(editorRef, rows, cols)
      editor.insertNode(node)
      Transforms.select(editorRef, editor.selection)
      ReactEditor.focus(editorRef)
      onToggle()
    }
  }

  return (
    <ToolbarDropdown
      control={
        <ToolbarButton
          active={!!editor?.selection && isMarkActive(editor, type)}
          icon={icon}
          tooltip={{ content: 'Create Matrix', theme: 'light-border' }}
          {...rest}
        />
      }
      open={open}
      onOpen={onToggle}
      onClose={onToggle}
    >
      <MatrixPicker
        matrix={'matrixes'}
        matrixes={matrixes}
        updateMatrix={updateMatrix}
      />
    </ToolbarDropdown>
  )
}
