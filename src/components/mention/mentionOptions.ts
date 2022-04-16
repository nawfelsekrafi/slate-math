import { ELEMENT_BLOCKQUOTE, ELEMENT_PARAGRAPH, ELEMENT_TODO_LI, isBlockAboveEmpty, isSelectionAtBlockStart } from "@udecode/plate"
import { autoformatRules } from "./autoformat/autoformatRules"
import { MENTIONABLES } from "./mentionables"



export const optionsMentionPlugin = {
  mentionables: MENTIONABLES,
  maxSuggestions: 10,
  insertSpaceAfterMention: false,
  trigger: '/',
  mentionableSearchPattern: '\\S*',
}

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};


  export const editableProps = {
    placeholder: 'Enter some rich text…',
    spellCheck: false,
    padding: '0 30px',
  }
