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
import { getIntegralDropDownMenu } from './constants'
import { IntegralButton } from './IntegralButton'
import { IntegralPicker } from './IntegralPicker'
import { IntegralType } from './IntegralType'

type ToolbarDropdownProps = {
  pluginKey: string
  icon: ReactNode
  integrals?: IntegralType[]
  styles?: Partial<RootStyles>
}
export const IntegralToolBarButton = ({
  pluginKey,
  icon,
  integrals = getIntegralDropDownMenu(),
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
            tooltip={{ content: 'Create Integral', theme: 'light-border' }}
            {...rest}
          />
        }
        open={open}
        onOpen={onToggle}
        onClose={onToggle}
      >
        <IntegralPicker
          integral={'integral'}
          integrals={integrals}
          onToggle={onToggle}
        />
      </ToolbarDropdown>
    </div>
  )
}
