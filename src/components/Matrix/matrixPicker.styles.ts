import { createStyles } from "@udecode/plate";
import { css } from 'styled-components';
import tw from 'twin.macro';

export const getMatrixPickerStyles = () =>
  createStyles(
    { prefixClassNames: 'matrix-container' },
    {
      root: [
        tw`cursor-pointer h-4 w-4 border-0`,
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