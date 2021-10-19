import { createPlateComponents, ELEMENT_TABLE, withProps, StyledElement, ELEMENT_TR, ELEMENT_TH, ELEMENT_TD, ELEMENT_CODE_BLOCK, CodeBlockElement } from "@udecode/plate";
import { css } from "styled-components";
import { ELEMENT_BIG_OPERATOR } from "./BigOperator";
import { ELEMENT_EQUATIONBOX } from "./EquationBoxElement";
import { ELEMENT_EQUATION_TEXT } from "./EquationText";
import { ELEMENT_FRACTION } from "./Fraction";
import { ELEMENT_INTEGRAL } from "./Integral";
import { ELEMENT_LIMIT } from "./Limit";
import { ELEMENT_SUMMATION } from "./Summation";
  export const components = createPlateComponents({
    [ELEMENT_EQUATION_TEXT]: withProps(StyledElement, {
      className: 'slate-eqtext',
      as: 'span',
      styles: {
        root: {
          paddingRight: '4px',
          minWidth: '14px',
          minHeight: '14px',
          selectors: {
            '> *': {
              margin: 0,
            },
          },
        },
      },
    }),
    [ELEMENT_INTEGRAL]: withProps(StyledElement, {
      className: 'slate-int',
      as: 'span',
      styles: {
        root: [
          css`
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          flex-direction: column;
          width: auto;
          text-align: center;
        `,
      ],
      },
    }),
    [ELEMENT_SUMMATION]:  withProps(StyledElement, {
      className: 'slate-sum',
      as: 'span',
      styles: {
        root: [
          css`
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          flex-direction: column;
          width: auto;
          text-align: center;
        `,
      ],
      },
    }),
    [ELEMENT_LIMIT]:  withProps(StyledElement, {
      className: 'slate-lim',
      as: 'span',
      styles: {
        root: [
          css`
          display: grid; 
          grid-auto-columns: fit-content(3rem);
          grid-auto-rows: auto auto; 
          gap: 0px 0px;
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
          display: inline-flex;
          justify-content: flex-start;
          flex-direction: column;
          width: auto;
          text-align: center;
        `,
      ],
      },
    }),
    [ELEMENT_EQUATIONBOX]: withProps(StyledElement, {
      className: 'slate-box',
      as: 'span',
    }),
    [ELEMENT_FRACTION]: withProps(StyledElement, {
      className: 'slate-fraction',
      as: 'table',
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



