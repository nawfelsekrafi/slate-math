import {
  ToolbarDropdown,
  ToolbarButton,
  isMarkActive,
  getPluginType,
  usePlateEditorRef,
  usePlateEditorState,
  RootStyles,
} from '@udecode/plate'
import React, { ReactNode, useCallback } from 'react'
import { getSummationDropDownMenu } from './constants'
import { SummationPicker } from './SummationPicker'
import { SummationType } from './SummationType'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  summations?: SummationType[]
  styles?: Partial<RootStyles>
}
export const SummationToolBarButton = ({
  pluginKey,
  icon,
  summations = getSummationDropDownMenu(),
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
            tooltip={{ content: 'Create Summation', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <SummationPicker
          summation={'summation'}
          summations={summations}
          onToggle={onToggle}
        />
      </ToolbarDropdown>
    </div>
  )
}
