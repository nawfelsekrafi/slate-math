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
import { BracketPicker } from './BracketPicker'
import { BracketType } from './BracketType'
import { getBracketDropDownMenu } from './constants'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  brackets?: BracketType[]
}
export const BracketToolBarButton = ({
  pluginKey,
  icon,
  brackets = getBracketDropDownMenu(),
  ...rest
}: ToolbarDropdownProps) => {
  const [open, setOpen] = React.useState(false)
  const editor = usePlateEditorState()!
  const editorRef = usePlateEditorRef()!
  const type = getPluginType(editorRef, pluginKey)
  const onToggle = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <div>
      <ToolbarDropdown
        control={
          <ToolbarButton
            active={!!editor?.selection && isMarkActive(editor, type)}
            icon={icon}
            tooltip={{ content: 'Create Bracket', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <BracketPicker
          bracket={'brackets'}
          brackets={brackets}
          onToggle={onToggle}
        />
      </ToolbarDropdown>
    </div>
  )
}
