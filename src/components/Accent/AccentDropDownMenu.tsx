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
import { AccentPicker } from './AccentPicker'
import { AccentType } from './AccentType'
import { getAccentDropDownMenu } from './constants'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  accents?: AccentType[]
  styles?: Partial<RootStyles>
}
export const AccentToolBarButton = ({
  pluginKey,
  icon,
  accents = getAccentDropDownMenu(),
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
            tooltip={{ content: 'Create Accent', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <AccentPicker
          accent={'accents'}
          accents={accents}
          onToggle={onToggle}
        />
      </ToolbarDropdown>
    </div>
  )
}
