import { ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI, ELEMENT_PARAGRAPH, PlatePlugin, AutoformatPlugin, ExitBreakPlugin, NormalizeTypesPlugin, IndentPlugin, ResetNodePlugin, SelectOnBackspacePlugin, SoftBreakPlugin, TrailingBlockPlugin, createPlateUI, ELEMENT_CODE_BLOCK, CodeBlockElement, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, ELEMENT_TD, KEYS_HEADING, ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED, ELEMENT_HR, ELEMENT_CODE_LINE, MARK_BOLD, MARK_ITALIC, isBlockAboveEmpty, isSelectionAtBlockStart, withProps } from "@udecode/plate";
import { ELEMENT_EXCALIDRAW, ExcalidrawElement } from "@udecode/plate-excalidraw";
import { EditableProps } from "slate-react/dist/components/editable";
import { css } from "styled-components";
import { ELEMENT_BIG_OPERATOR } from "./components/BigOperator";
import { ELEMENT_EQUATION_TEXT } from "./components/EquationText";
import { ELEMENT_FRACTION } from "./components/Fraction";
import { ELEMENT_LIMIT } from "./components/Limit";
import { ELEMENT_MATH_CONTAINER } from "./components/MathContainer/defaults";
import { ELEMENT_MATRIX } from "./components/Matrix/defaults";
import { autoformatRules } from "./components/mention/autoformat/autoformatRules";
import { MENTIONABLES } from "./components/mention/mentionables";

const resetBlockTypesCommonRule = {
    types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
    defaultType: ELEMENT_PARAGRAPH,
  };
  interface Config {
    components: Record<string, any>;
    editableProps: EditableProps;
  
    align: Partial<PlatePlugin>;
    autoformat: Partial<PlatePlugin<{}, AutoformatPlugin>>;
    exitBreak: Partial<PlatePlugin<{}, ExitBreakPlugin>>;
    forceLayout: Partial<PlatePlugin<{}, NormalizeTypesPlugin>>;
    indent: Partial<PlatePlugin<{}, IndentPlugin>>;
    lineHeight: Partial<PlatePlugin>;
    mentionItems: any;
    resetBlockType: Partial<PlatePlugin<{}, ResetNodePlugin>>;
    selectOnBackspace: Partial<PlatePlugin<{}, SelectOnBackspacePlugin>>;
    softBreak: Partial<PlatePlugin<{}, SoftBreakPlugin>>;
    trailingBlock: Partial<PlatePlugin<{}, TrailingBlockPlugin>>;
  }
  
  export const CONFIG: Config = {
    editableProps: {
      autoFocus: process.env.NODE_ENV !== 'production',
      spellCheck: false,
      placeholder: 'Type…',
      style: {
        padding: '15px',
      },
    },
    components: createPlateUI({
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
      [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
    }),
  
    align: {
      inject: {
        props: {
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
      },
    },
    indent: {
      inject: {
        props: {
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
      },
    },
    lineHeight: {
      inject: {
        props: {
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
      },
    },
    resetBlockType: {
      options: {
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
    },
    trailingBlock: { type: ELEMENT_PARAGRAPH },
    softBreak: {
      options: {
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
    },
    exitBreak: {
      options: {
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
    },
    selectOnBackspace: {
      options: {
        query: {
          allow: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED, ELEMENT_HR],
        },
      },
    },
    autoformat: {
      options: {
        rules: autoformatRules,
      },
    },
    mentionItems: MENTIONABLES,
    forceLayout: {
      options: {
        rules: [{ path: [0], strictType: ELEMENT_H1 }],
      },
    },
  };