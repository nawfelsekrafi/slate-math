import 'tippy.js/dist/tippy.css'
import './index.css'
import ReactDOM from 'react-dom'
import React, { useMemo } from 'react'
import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createPlateComponents,
  createPlateOptions,
  HeadingToolbar,
  MentionSelect,
  PlatePlugin,
  Plate,
  ToolbarSearchHighlight,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createDndPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHTMLPlugin,
  useFindReplacePlugin,
  useMentionPlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  SPEditor,
  MARK_COLOR,
  withStyledProps,
  StyledLeaf,
  MARK_BG_COLOR,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMDPlugin,
  createDeserializeCSVPlugin,
  createDeserializeAstPlugin,
<<<<<<< HEAD
  ELEMENT_CODE_BLOCK,
  CodeBlockElement,
=======
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
} from '@udecode/plate'
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-excalidraw'
import { initialValuePlayground } from './config/initialValues'
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsMentionPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
  optionsAutoformat,
} from './config/pluginOptions'
import { renderMentionLabel } from './config/renderMentionLabel'
import { BallonToolbarMarks, ToolbarButtons } from './config/Toolbars'
import { withStyledPlaceHolders } from './config/withStyledPlaceHolders'
import { withStyledDraggables } from './config/withStyledDraggables'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Search } from '@styled-icons/material/Search'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
<<<<<<< HEAD
import { css } from 'styled-components'
import { MathToolbar} from './components/toolbar'
import { createBigOperatorPlugin, createFractionPlugin, createIntegralPlugin, createLimitPlugin, createSummationPlugin } from './components/plugin'
=======

>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
type TEditor = SPEditor & ReactEditor & HistoryEditor

const id = 'Examples/Playground'

<<<<<<< HEAD

const components = createPlateComponents({
  [ELEMENT_CODE_BLOCK]: withProps(CodeBlockElement, {
    styles: {
      root: [
        css`
          background-color: #111827;
          code {
            color: white;
          }
        `,
      ],
    },
  }),
});

=======
let components = createPlateComponents({
  [ELEMENT_MENTION]: withProps(MentionElement, {
    renderLabel: renderMentionLabel,
  }),
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  [MARK_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_COLOR]: ['color'],
    },
  }),
  [MARK_BG_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_BG_COLOR]: ['backgroundColor'],
    },
  }),
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66

const options = createPlateOptions({
  // customize your options by plugin key
})

<<<<<<< HEAD
export const Plugins = () => {
=======
const Plugins = () => {
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin()
  const { getMentionSelectProps, plugin: mentionPlugin } = useMentionPlugin(
    optionsMentionPlugin
  )

  const pluginsMemo: PlatePlugin<TEditor>[] = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createExcalidrawPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createDndPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
      createSelectOnBackspacePlugin({
        allow: [ELEMENT_IMAGE, ELEMENT_EXCALIDRAW],
      }),
<<<<<<< HEAD
      createIntegralPlugin(),
      createSummationPlugin(),
      createBigOperatorPlugin(),
      createFractionPlugin(),
      createLimitPlugin(),
=======
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
      mentionPlugin,
      searchHighlightPlugin,
    ]

    plugins.push(
      ...[
        createDeserializeMDPlugin({ plugins }),
        createDeserializeCSVPlugin({ plugins }),
        createDeserializeHTMLPlugin({ plugins }),
        createDeserializeAstPlugin({ plugins }),
      ]
    )

    return plugins
  }, [mentionPlugin, searchHighlightPlugin])

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        id={id}
        plugins={pluginsMemo}
        components={components}
        options={options}
        editableProps={editableProps}
        initialValue={initialValuePlayground}
      >
        <ToolbarSearchHighlight icon={Search} setSearch={setSearch} />
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>
<<<<<<< HEAD
        <HeadingToolbar>
          <MathToolbar />
        </HeadingToolbar>
        <BallonToolbarMarks />
=======

        <BallonToolbarMarks />

>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
        <MentionSelect
          {...getMentionSelectProps()}
          renderLabel={renderMentionLabel}
        />
      </Plate>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
