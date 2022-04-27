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
import { TrigPicker } from './TrigPicker'
import { TrigType } from './TrigType'
//import { createTrigDropDownMenu } from './CreateTrigDropDownMenu'
import { getTrigDropDownMenu } from './Constants'

type TrigPickerToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  trigs?: TrigType[]
  styles?: Partial<RootStyles>
}
export const TrigTableDropDown = ({
  pluginKey,
  icon,
  trigs = getTrigDropDownMenu(),
  ...rest
}: TrigPickerToolbarDropdownProps) => {
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
            tooltip={{ content: 'Create Function', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <TrigPicker trig={'trigs'} trigs={trigs} onToggle={onToggle} />
      </ToolbarDropdown>
    </div>
  )
}
