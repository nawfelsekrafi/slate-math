import React from 'react';
import { getHandler } from '@udecode/plate-common';
import { useFocused, useSelected } from 'slate-react';
import { MentionElementProps, getMentionElementStyles } from '@udecode/plate-mention-ui';

export const UneditableBigOpElement = (props: MentionElementProps) => {
  const {
    attributes,
    children,
    nodeProps,
    styles: _styles,
    element,
    classNames,
    prefixClassNames,
    prefix,
    as,
    onClick,
    renderLabel,
    ...rootProps
  } = props;

  const selected = useSelected();
  const focused = useFocused();

  const styles = getMentionElementStyles({ ...props, selected, focused });

  return (
    <span
      {...attributes}
      as={as}
      data-slate-value={element.value}
      className={styles.root.className}
      css={styles.root.css}
      contentEditable={false}
      onClick={getHandler(onClick, element)}
      {...rootProps}
      {...nodeProps}
    >
      {prefix}
      {renderLabel ? renderLabel(element) : element.value}
      {children}
    </span>
  );
};