import { createStyles } from '@udecode/plate'
import { css } from 'styled-components'
import tw from 'twin.macro'

export const getBracketButtonStyles = () =>
  createStyles(
    { prefixClassNames: 'BracketButton' },
    {
      root: [
        tw`cursor-pointer h-9 w-9 border-0`,
        css`
          background-matrix: #d1d5da;
          :hover {
            box-shadow: 0px 0px 5px 1px #9a9a9a;
          }
          :focus {
            box-shadow: 0px 0px 5px 1px #676767;
          }
        `,
      ],
    }
  )
