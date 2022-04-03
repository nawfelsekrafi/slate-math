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
} from '@udecode/plate'
import React, { ReactNode, useCallback } from 'react'
import { Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { AccentPicker } from './AccentPicker'
import { AccentType } from './AccentType'
import { createAccentDropDownMenu } from './createAccentDropDownMenu'
import { getAccentDropDownMenu } from './constants'

type AccentPickerToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  selectedIcon: ReactNode
  accents?: AccentType[]
}
export const AccentTableDropDown = ({
  pluginKey,
  icon,
  selectedIcon,
  accents = getAccentDropDownMenu(),
  ...rest
}: AccentPickerToolbarDropdownProps) => {
  const [open, setOpen] = React.useState(false)
  const editor = usePlateEditorState()!
  const editorRef = usePlateEditorRef()!
  const type = getPluginType(editorRef, pluginKey)
  const onToggle = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  const updateAccent = (rows: number, cols: number) => {
    if (editorRef && editor && editor.selection) {
      var node = createAccentDropDownMenu(editorRef, rows, cols)
      editor.insertNode(node)
      Transforms.select(editorRef, editor.selection)
      ReactEditor.focus(editorRef)
      onToggle()
    }
  }

  return (
    <div>
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
        <AccentPicker accent={'accents'} accents={accents} />
      </ToolbarDropdown>
    </div>
  )
}
