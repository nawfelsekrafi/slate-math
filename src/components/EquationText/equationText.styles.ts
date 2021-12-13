import { MentionElementStyleProps, createStyles } from "@udecode/plate";
import { css } from "styled-components";
import tw from "twin.macro";

export const getEquationTextStyles = (props: any) =>
  createStyles(
    { prefixClassNames: 'equationtext', ...props },
    {
      root: [
        tw`my-0 mx-px align-baseline inline-block`,
        props.selected && props.focused && tw`boxShadow[0 0 0 2px #B4D5FF]`,
        css`
        font-family: Symbola-mq,"Times New Roman",serif;
        font-size: 24px; font-style: normal; font-variant: normal;
        
        `,
      ],
    }
  );