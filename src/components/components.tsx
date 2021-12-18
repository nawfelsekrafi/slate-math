import {  ELEMENT_TABLE, withProps, StyledElement, ELEMENT_TR, ELEMENT_TH, ELEMENT_TD, ELEMENT_CODE_BLOCK, CodeBlockElement, MentionElement, createPlateUI } from "@udecode/plate";
import { css } from "styled-components";
import { ELEMENT_BIG_OPERATOR } from "./BigOperator";
import { ELEMENT_FRACTION } from "./Fraction";
import { ELEMENT_LIMIT } from "./Limit";
import { ELEMENT_UNEDITABLE_BIG_OPERATOR } from "./UneditableBigOperator/defaults";
  export const components = createPlateUI({
    //[ELEMENT_MENTION]: EquationMentionElement,

    //[ELEMENT_EQUATION_TEXT]: withProps(StyledElement, {
    //  className: 'slate-mathtext',
    //  as: 'span',
    //}),

    [ELEMENT_LIMIT]:  withProps(StyledElement, {
      className: 'slate-lim',
      as: 'span',
      styles: {
        root: [
          css`
          display: grid;
          gap: 0px 0px;
          grid-auto-flow: column;
          grid-template-columns: 3em fit-content(1em);
          grid-template-rows: auto auto;
          grid-template-areas: 
            ". right"
            ". right";
          align-items: center;
          justify-items: center;
      
        `,
      ],
      },
    }),
    [ELEMENT_BIG_OPERATOR]: withProps(StyledElement, {
      className: 'slate-bigop',
      as: 'span',
      styles: {
        root: [
          css`
          display: grid;
          gap: 0px 3px;
          grid-auto-flow: column;
          grid-template-columns: 1em fit-content(1em);
          grid-template-rows: auto auto;
          grid-template-areas:
          ". ."
          ". right"
          ". .";
          align-items: center;
          justify-items: center;
        `,
      ],
      },
    }),
    [ELEMENT_UNEDITABLE_BIG_OPERATOR]: withProps(StyledElement, {
      className: 'slate-ubigop',
      as: 'span',
      styles: {
        root: [
          css`
          display: grid;
          gap: 0px 3px;
          grid-auto-flow: column;
          grid-template-columns: 1em fit-content(1em);
          grid-template-rows: auto auto;
          grid-template-areas:
          ". ."
          ". right"
          ". .";
          align-items: center;
          justify-items: center;
        `,
      ],
      },
    }),
    [ELEMENT_FRACTION]: withProps(StyledElement, {
      className: 'slate-fraction',
      as: 'span',
      styles: {
        root: [
          css`
          display: inline-flex;
          justify-content: flex-start;
          flex-direction: column;
          width: auto;
          text-align: center;
        `,
      ],
      },
    }),
    [ELEMENT_CODE_BLOCK]: withProps(CodeBlockElement, {
      styles: {
        root: [
          css`
            background-color: #111827;
            code {
              color: white;
            }
          `,
        ],
      },
    }),

/*    [FRACTION]: withProps(StyledElement, {
      className: 'slate-fraction',
      as: 'table',
      styles: {
        root: {
            display: 'flex',
            flexDirection: 'column',
            verticalAlign: 'middle',
            padding: '0px',
            margin: '0px',
            borderBottom: '0px',
            lineHeight: '0.1',
            textAlign: 'center'
          }
        },
    }),
    */

  });



