import { MentionNode, StyledElementProps, TElement } from "@udecode/plate";
import { BaseElement } from "slate";

export interface MathEditorProps extends Omit<StyledElementProps<EditorNode>, 'onClick'> {
  
  selected?: boolean;
  focused?: boolean;
  onClick?: (mentionNode: BaseElement) => void
  renderLabel?: (mentionable: BaseElement) => string;
}

export declare type EditorNode = TElement<EditorNodeData>;
export interface EditorNodeData {
  value: string;
}