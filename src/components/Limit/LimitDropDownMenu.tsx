import {
  ToolbarButtonProps,
  ToolbarDropdown,
  ToolbarButton,
  isMarkActive,
  getPluginType,
  usePlateEditorRef,
  usePlateEditorState,
  RootStyles,
} from '@udecode/plate'
import React, { ReactNode, useCallback } from 'react'
import { getLimitDropDownMenu } from './constants'
import { LimitPicker } from './LimitPicker'
import { LimitType } from './LimitType'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  limits?: LimitType[]
  styles?: Partial<RootStyles>
}
export const LimitToolBarButton = ({
  pluginKey,
  icon,
  limits = getLimitDropDownMenu(),
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
            tooltip={{ content: 'Create Limit', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <LimitPicker limit={'limits'} limits={limits} onToggle={onToggle} />
      </ToolbarDropdown>
    </div>
  )
}
