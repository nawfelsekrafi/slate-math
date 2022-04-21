import { MentionNode, MentionNodeData } from '@udecode/plate-mention';
import { StyledElementProps } from '@udecode/plate-styled-components';

export interface EquationBoxElementStyleProps
  extends EquationBoxInputElementProps {
  selected?: boolean;
  focused?: boolean;
  isEmpty?: boolean;
}

// renderElement props
export interface EquationBoxInputElementProps
  extends Omit<StyledElementProps<MentionNode>, 'onClick'> {
  /**
   * Prefix rendered before mention
   */
  prefix?: string;
  onClick?: (mentionNode: MentionNode) => void;
  renderLabel?: (mentionable: MentionNodeData) => string;
}