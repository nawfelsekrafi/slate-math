import { createStyles } from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';

export const getMatrixPickerStyles = () =>
  createStyles(
    { prefixClassNames: 'matrix-container' },
    {
      root: [
      css`
        .matrix-container {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-column-gap: 0.5em;
            grid-row-gap: 0.5em;
        }
      `,

    ],
      
    }
  );