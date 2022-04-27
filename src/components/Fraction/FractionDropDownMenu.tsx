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
import { FractionPicker } from './FractionPicker'
import { FractionType } from './FractionType'
import { getFractionDropDownMenu } from './constants'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  fractions?: FractionType[]
  styles?: Partial<RootStyles>
}
export const FractionToolBarButton = ({
  pluginKey,
  icon,
  fractions = getFractionDropDownMenu(),
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
            tooltip={{ content: 'Create Fraction', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <FractionPicker
          fraction={'fractions'}
          fractions={fractions}
          onToggle={onToggle}
        />
      </ToolbarDropdown>
    </div>
  )
}
