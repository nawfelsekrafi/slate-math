import { createStyles } from "@udecode/plate";
import { css } from "styled-components";
import tw from "twin.macro";

export const getTableButtonStyles = () =>
  createStyles(
    { prefixClassNames: 'TableButton' },
    {
      root: [
        tw`cursor-pointer h-4 w-4 border-0`,
        css`
          background-Table: #d1d5da;
          :hover {
            box-shadow: 0px 0px 5px 1px #9a9a9a;
          }
          :focus {
            box-shadow: 0px 0px 5px 1px #676767;
          }
        `,
      ],
    }
  );