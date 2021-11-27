import { MentionNodeData, PlatePluginKey, PEditor } from "@udecode/plate";

export interface MentionPluginOptions extends PlatePluginKey {
    createTag(tag: string): Promise<string>
  
    mentionables?: MentionNodeData[]
  
    // Character triggering the mention select
    trigger?: string
    // Maximum number of suggestions
    maxSuggestions?: number
    // Function to match mentionnables for a given search
    mentionableFilter?: (
      search: string
    ) => (mentionable: MentionNodeData) => boolean
    // Regex Pattern of a mentionable. Some may want to match emails, so default \W is not enough
    mentionableSearchPattern?: string
  
    // Insert space after mention (defaults to false)
    insertSpaceAfterMention?: boolean
  }

  export interface GetTagSelectProps {
    /**
     * Range from the mention trigger to the cursor
     */
    at: Range | null
  
    /**
     * List of mentionable items
     */
    options: MentionNodeData[]
  
    /**
     * Index of the selected option
     */
    valueIndex: number
  
    /**
     * Callback called when clicking on a mention option
     */
    onClickMention?: (
      editor: PEditor,
      option: MentionNodeData | 'create'
    ) => void
  }