import { createPlateOptions, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK, ELEMENT_IMAGE, ELEMENT_MENTION, ELEMENT_PARAGRAPH, ELEMENT_TD, ELEMENT_TODO_LI, ExitBreakPluginOptions, insertNodes, isBlockAboveEmpty, isSelectionAtBlockStart, KEYS_HEADING, MentionElement, MentionNode, MentionNodeData, MentionPluginOptions, ResetBlockTypePluginOptions, SoftBreakPluginOptions, SPEditor, useMentionPlugin, WithAutoformatOptions } from "@udecode/plate"
import { useCallback, useState } from "react"
import { Transforms } from "slate"
import { getEmptyBigOpNode } from "../BigOperator/getEmptyBigOpNode"
import { getEmptyFractionNode } from "../Fraction/thfraction/getEmptyFractionNode"
import { getEmptyIntegralNode } from "../Integral/getEmptyIntegralNode"
import { getEmptyLimNode } from "../Limit/getEmptyLimNode"
import { getEmptySummationNode } from "../Summation/getEmptySummationNode"
import { autoformatRules } from "./autoformat/autoformatRules"
import { MENTIONABLES } from "./mentionables"


export const options = createPlateOptions()

export const optionsMentionPlugin = {
  mentionables: MENTIONABLES,
  maxSuggestions: 10,
  insertSpaceAfterMention: false,
  trigger: '/',
  mentionableSearchPattern: '\\S*',
}

const resetBlockTypesCommonRule = {
  types: [options[ELEMENT_BLOCKQUOTE].type, options[ELEMENT_TODO_LI].type],
  defaultType: options[ELEMENT_PARAGRAPH].type,
}

export const optionsResetBlockTypePlugin: ResetBlockTypePluginOptions = {
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
}

export const optionsSoftBreakPlugin: SoftBreakPluginOptions = {
  rules: [
    { hotkey: 'shift+enter' },
    {
      hotkey: 'enter',
      query: {
        allow: [
          options[ELEMENT_CODE_BLOCK].type,
          options[ELEMENT_BLOCKQUOTE].type,
          options[ELEMENT_TD].type,
        ],
      },
    },
  ],
}

export const optionsExitBreakPlugin: ExitBreakPluginOptions = {
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
    {
      hotkey: 'enter',
      query: {
        allow: [options[ELEMENT_IMAGE].type],
      },
    },
    {
      hotkey: 'enter',
      before: true,
      query: {
        start: true,
        allow: [options[ELEMENT_PARAGRAPH].type],
      },
    },
  ],
}
  
  export const optionsAutoformat: WithAutoformatOptions = {
    rules: autoformatRules,
  }
  
  export const editableProps = {
    placeholder: 'Enter some rich text…',
    spellCheck: false,
    padding: '0 30px',
  }
  export const onAddMention = 
    (editor: SPEditor, data: MentionNodeData) => {
        insertMention(editor, data, options);
      }


  
export const insertMention = (
  editor: SPEditor,
  mentionable: MentionNodeData,
  options?: MentionPluginOptions
) => {
  
  const mentionNode: MentionNode = {
    type: ELEMENT_MENTION,
    children: [{ text: '' }],
    ...mentionable,
  };
  console.log(mentionable.value)
  if (mentionNode.test.match("integralcomponent")) {
    insertNodes(editor, getEmptyIntegralNode());

  }
  else if (mentionNode.test.match("fraction")){
    insertNodes(editor, getEmptyFractionNode())
  }
  else if (mentionNode.test.match("sumcomponent")){
    insertNodes(editor, getEmptySummationNode())

  }
  else if (mentionNode.test.match("limcomponent")){
    insertNodes(editor, getEmptyLimNode())

  }
  else if (mentionNode.test.match("bigoperator")){
    insertNodes(editor, getEmptyBigOpNode())
  }
  else {
    insertNodes(editor, mentionNode)

  }
};