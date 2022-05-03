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
  insertNodes,
} from '@udecode/plate'
import React, { ReactNode, useCallback } from 'react'
import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'


import { getTables } from './Constants'
import { getEmptyTableNode } from './GetEmptyTableNode'
//import { createTable } from './createTable'
import { TableButton } from './TableButton'
import { TablePicker } from './TablePicker'
import { TableType } from './TableType'

type TablePickerToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  selectedIcon: ReactNode
  tables?: TableType[]
  styles?: Partial<RootStyles>
}
export const TableDropDown = ({
  pluginKey,
  icon,
  selectedIcon,
  tables = getTables(),
  ...rest
}: TablePickerToolbarDropdownProps) => {
  const [open, setOpen] = React.useState(false)
  const editor = usePlateEditorState()!
  const editorRef = usePlateEditorRef()!
  const type = getPluginType(editorRef, pluginKey)
  const onToggle = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const updateTable = (rows: number, cols: number) => {
    if (editorRef && editor && editor.selection) {
      insertNodes(editor, getEmptyTableNode(editor, cols, rows))
      //Transforms.select(editorRef, editor.selection)
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
          tooltip={{ content: 'Create Table', theme: 'light-border' }}
          {...rest}
        />
      }
      open={open}
      onOpen={onToggle}
      onClose={onToggle}
    >
      <TablePicker
        table={'tables'}
        tables={tables}
        updateTable={updateTable}
      />
    </ToolbarDropdown>
  )
}
