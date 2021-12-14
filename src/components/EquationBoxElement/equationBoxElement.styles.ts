import { StyledElementProps } from '@udecode/plate';
import { createStyles } from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';

export const getEquationBoxElementStyles = (props: StyledElementProps) =>
  createStyles(
    { prefixClassNames: 'equationbox', ...props },
    
    {
      root: [
        css`
          font-size: `+props.size
        ``,
      ],
    }
  );