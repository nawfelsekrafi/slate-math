import { FormatColorText, Check, FontDownload, LineWeight, Link, OndemandVideo } from "@styled-icons/material";
import { createPlugins, createBlockquotePlugin, createTodoListPlugin, createImagePlugin, createHorizontalRulePlugin, createLineHeightPlugin, createLinkPlugin, createListPlugin, createTablePlugin, createMediaEmbedPlugin, createCodeBlockPlugin, createAlignPlugin, createBoldPlugin, createCodePlugin, createItalicPlugin, createHighlightPlugin, createUnderlinePlugin, createStrikethroughPlugin, createSubscriptPlugin, createSuperscriptPlugin, createFontBackgroundColorPlugin, createFontFamilyPlugin, createFontColorPlugin, createFontSizePlugin, createFontWeightPlugin, createKbdPlugin, createNodeIdPlugin, createIndentPlugin, createResetNodePlugin, createSoftBreakPlugin, createExitBreakPlugin, createNormalizeTypesPlugin, createTrailingBlockPlugin, createSelectOnBackspacePlugin, createComboboxPlugin, createDeserializeMdPlugin, createDeserializeCsvPlugin, createDeserializeDocxPlugin, createJuicePlugin, ColorPickerToolbarDropdown, HeadingToolbar, ImageToolbarButton, LineHeightToolbarDropdown, LinkToolbarButton, MARK_BG_COLOR, MARK_COLOR, MediaEmbedToolbarButton, Plate, createPlateUI } from "@udecode/plate";
import { createMathPlugins, MathToolbar } from "./components";
import { BasicElementToolbarButtons, ListToolbarButtons, IndentToolbarButtons, BasicMarkToolbarButtons, AlignToolbarButtons, TableToolbarButtons } from "./Toolbars";
import { Image } from '@styled-icons/boxicons-regular'
import {CONFIG} from "./config"

export const Plugins = () => {
  let components = createPlateUI();
  const plugins = createPlugins([
    createBlockquotePlugin(),
    createTodoListPlugin(),
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
    //createAutoformatPlugin(CONFIG.autoformat),
    createResetNodePlugin(CONFIG.resetBlockType),
    createSoftBreakPlugin(CONFIG.softBreak),
    createExitBreakPlugin(CONFIG.exitBreak),
    createNormalizeTypesPlugin(CONFIG.forceLayout),
    createTrailingBlockPlugin(CONFIG.trailingBlock),
    createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
    createComboboxPlugin(),
    createDeserializeMdPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeDocxPlugin(),
    createJuicePlugin(),
  ], {
    components,
  });
  plugins.push(...createMathPlugins())
  return (
    <Plate
      id="playground"
      editableProps={CONFIG.editableProps}
      plugins={plugins}
    >
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


