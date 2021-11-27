import 'tippy.js/dist/tippy.css'
import './index.css'
import ReactDOM from 'react-dom'
import { useMemo } from 'react'
import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  PlatePlugin,
  Plate,
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
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMDPlugin,
  createDeserializeCSVPlugin,
  createDeserializeAstPlugin,
  ColorPickerToolbarDropdown,
  MARK_COLOR,
  createComboboxPlugin,
  createFontFamilyPlugin,
  createFontSizePlugin,
  createFontWeightPlugin,
  createHorizontalRulePlugin,
  createIndentPlugin,
  createLineHeightPlugin,
  createMentionPlugin,
  createNormalizeTypesPlugin,
  ImageToolbarButton,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MediaEmbedToolbarButton,
  MentionCombobox,
  SearchHighlightToolbar,
  createPlateOptions,
  KEYS_HEADING,
  AlignPluginOptions,
  AutoformatPluginOptions,
  CodeBlockElement,
  createPlateComponents,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_TD,
  ExitBreakPluginOptions,
  IndentPluginOptions,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  LineHeightPluginOptions,
  NormalizeTypesPluginOptions,
  PlatePluginOptions,
  ResetBlockTypePluginOptions,
  SelectOnBackspacePluginOptions,
  SoftBreakPluginOptions,
  TrailingBlockPluginOptions,
  withProps,
  ELEMENT_TODO_LI,
} from '@udecode/plate'
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from '@udecode/plate-excalidraw'
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsMentionPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
  optionsAutoformat,
} from './components/mention/mentionOptions'
import { renderMentionLabel } from './components/mention/renderElementMention'
import { AlignToolbarButtons, BasicElementToolbarButtons, BasicMarkToolbarButtons, IndentToolbarButtons, ListToolbarButtons, TableToolbarButtons } from './Toolbars'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Search } from '@styled-icons/material/Search'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { components, createEquationBoxPlugin, createEquationTextPlugin, createMatrixPlugin, MathToolbar } from './components'
import { createBigOperatorPlugin, createFractionPlugin, createIntegralPlugin, createLimitPlugin, createSummationPlugin } from './components'
import { FormatColorText } from '@styled-icons/material/FormatColorText'
import { Check, Link, Image } from '@styled-icons/boxicons-regular'
import { FontDownload, LineWeight, OndemandVideo } from '@styled-icons/material'
import { EditableProps } from 'slate-react/dist/components/editable'
import { css } from 'styled-components'
import { autoformatRules } from './components/mention/autoformat/autoformatRules'
import { MENTIONABLES } from './components/mention/mentionables'
import { MatrixTableDropDown } from './components/Matrix/matrixDropDown'
//import { MENTIONABLES } from './components/mention/mentionables'

const id = 'Examples/Playground'
const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};
const CONFIG: {
  options: Record<string, PlatePluginOptions>;
  components: Record<string, any>;
  editableProps: EditableProps;

  align: AlignPluginOptions;
  autoformat: AutoformatPluginOptions;
  exitBreak: ExitBreakPluginOptions;
  forceLayout: NormalizeTypesPluginOptions;
  indent: IndentPluginOptions;
  lineHeight: LineHeightPluginOptions;
  mentionItems: any;
  resetBlockType: ResetBlockTypePluginOptions;
  selectOnBackspace: SelectOnBackspacePluginOptions;
  softBreak: SoftBreakPluginOptions;
  trailingBlock: TrailingBlockPluginOptions;
} = {
  editableProps: {
    autoFocus: process.env.NODE_ENV !== 'production',
    spellCheck: false,
    placeholder: 'Type…',
    style: {
      padding: '15px',
    },
  },
  options: createPlateOptions(),
  components: createPlateComponents({
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
  }),

  align: {
    validTypes: [
      ELEMENT_PARAGRAPH,
      ELEMENT_H1,
      ELEMENT_H2,
      ELEMENT_H3,
      ELEMENT_H4,
      ELEMENT_H5,
      ELEMENT_H6,
    ],
  },
  indent: {
    validTypes: [
      ELEMENT_PARAGRAPH,
      ELEMENT_H1,
      ELEMENT_H2,
      ELEMENT_H3,
      ELEMENT_H4,
      ELEMENT_H5,
      ELEMENT_H6,
      ELEMENT_BLOCKQUOTE,
      ELEMENT_CODE_BLOCK,
    ],
  },
  lineHeight: {
    defaultNodeValue: 1.5,
    validNodeValues: [1, 1.2, 1.5, 2, 3],
    validTypes: [
      ELEMENT_PARAGRAPH,
      ELEMENT_H1,
      ELEMENT_H2,
      ELEMENT_H3,
      ELEMENT_H4,
      ELEMENT_H5,
      ELEMENT_H6,
    ],
  },
  resetBlockType: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty,
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: 'Backspace',
        predicate: isSelectionAtBlockStart,
      },
    ],
  },
  trailingBlock: { type: ELEMENT_PARAGRAPH },
  softBreak: {
    rules: [
      { hotkey: 'shift+enter' },
      {
        hotkey: 'enter',
        query: {
          allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
        },
      },
    ],
  },
  exitBreak: {
    rules: [
      {
        hotkey: 'mod+enter',
      },
      {
        hotkey: 'mod+shift+enter',
        before: true,
      },
      {
        hotkey: 'enter',
        query: {
          start: true,
          end: true,
          allow: KEYS_HEADING,
        },
      },
    ],
  },
  selectOnBackspace: { allow: [ELEMENT_IMAGE, ELEMENT_HR] },
  autoformat: {
    rules: autoformatRules,
  },
  mentionItems: MENTIONABLES,
  forceLayout: {
    rules: [{ path: [0], strictType: ELEMENT_H1 }],
  },
};

const options = createPlateOptions()




export const Plugins = () => {
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin();
  //const { getMentionSelectProps, plugin: mentionPlugin } = useMentionPlugin( //TODO: move to plugins
  //  optionsMentionPlugin
  //)

  const pluginsMemo = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createHorizontalRulePlugin(),
      createLineHeightPlugin(CONFIG.lineHeight),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(CONFIG.align),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontBackgroundColorPlugin(),
      createFontFamilyPlugin(),
      createFontColorPlugin(),
      createFontSizePlugin(),
      createFontWeightPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createIndentPlugin(CONFIG.indent),
      createAutoformatPlugin(CONFIG.autoformat),
      createResetNodePlugin(CONFIG.resetBlockType),
      createSoftBreakPlugin(CONFIG.softBreak),
      createExitBreakPlugin(CONFIG.exitBreak),
      createNormalizeTypesPlugin(CONFIG.forceLayout),
      createTrailingBlockPlugin(CONFIG.trailingBlock),
      createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
      createComboboxPlugin(),
      createMentionPlugin(),
      createIntegralPlugin(),
      createSummationPlugin(),
      createBigOperatorPlugin(),
      createFractionPlugin(),
      createLimitPlugin(),
      createEquationBoxPlugin(),
      createEquationTextPlugin(),
      createMatrixPlugin(),
    ]

    plugins.push(
      ...[
        createDeserializeMDPlugin({ plugins }),
        createDeserializeCSVPlugin({ plugins }),
        createDeserializeHTMLPlugin({ plugins }),
        createDeserializeAstPlugin({ plugins }),
      ]
    );

    return plugins
  }, [options, searchHighlightPlugin])

  return (
    <Plate
      id="playground"
      plugins={pluginsMemo}
      components={components}
      options={options}
      editableProps={CONFIG.editableProps}
    >
      <SearchHighlightToolbar icon={Search} setSearch={setSearch} />
      <HeadingToolbar>
        <BasicElementToolbarButtons />
        <ListToolbarButtons />
        <IndentToolbarButtons />
        <BasicMarkToolbarButtons />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_COLOR}
          icon={<FormatColorText />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Text color' }}
        />
        <ColorPickerToolbarDropdown
          pluginKey={MARK_BG_COLOR}
          icon={<FontDownload />}
          selectedIcon={<Check />}
          tooltip={{ content: 'Highlight color' }}
        />
        <AlignToolbarButtons />
        <LineHeightToolbarDropdown icon={<LineWeight />} />
        <LinkToolbarButton icon={<Link />} />
        <ImageToolbarButton icon={<Image />} />
        <MediaEmbedToolbarButton icon={<OndemandVideo />} />
        <TableToolbarButtons />
      </HeadingToolbar>
      <HeadingToolbar> 
        <MathToolbar></MathToolbar>
      </HeadingToolbar>


    </Plate>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
