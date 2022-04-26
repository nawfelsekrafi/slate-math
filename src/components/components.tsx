import {
  ELEMENT_TABLE,
  withProps,
  StyledElement,
  ELEMENT_TR,
  ELEMENT_TH,
  ELEMENT_TD,
  ELEMENT_CODE_BLOCK,
  CodeBlockElement,
  MentionElement,
  createPlateUI,
} from '@udecode/plate'
import { css } from 'styled-components'
import { ELEMENT_ACCENT } from './Accent'
import { ELEMENT_BIG_OPERATOR } from './BigOperator'
import { ELEMENT_EQUATIONBOX } from './EquationBoxElement'
import { ELEMENT_FRACTION } from './Fraction'
import { ELEMENT_LIMIT } from './Limit'
import { ELEMENT_LOG } from './Log'
import { ELEMENT_MATH_CONTAINER } from './MathContainer/defaults'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from './UneditableBigOperator/defaults'
import { ELEMENT_STACKED,ELEMENT_SKEWED, ELEMENT_LINEAR } from './Fraction/FractionDefaults/defaults'
import { ELEMENT_BRACKET } from './Bracket'
import { ELEMENT_TRIG } from './Trig'
export const components = createPlateUI({
  //[ELEMENT_MENTION]: EquationMentionElement,

  //[ELEMENT_EQUATION_TEXT]: withProps(StyledElement, {
  //  className: 'slate-mathtext',
  //  as: 'span',
  //}),
  [ELEMENT_MATH_CONTAINER]: withProps(StyledElement, {
    className: 'slate-mathcontainer',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-flex;
          align-items: center;
          justify-items: center;
        `,
      ],
    },
  }),
  [ELEMENT_LIMIT]: withProps(StyledElement, {
    className: 'slate-lim',
    as: 'span',
    styles: {
      root: [
        css`
          position: relative;
          display: inline-flex;
          flex-direction: column;
          gap: 3px 3px;
          grid-auto-flow: column;
          grid-template-columns: 3em fit-content(1em);
          grid-template-rows: auto auto;
          grid-template-areas:
            '. right'
            '. right';
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
          display: inline-grid;
          gap: 3px 3px;
          grid-auto-flow: column;

          grid-template-rows: auto auto;
          grid-template-areas:
            '. .'
            '. right'
            '. .';
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
          display: inline-grid;
          gap: 3px 3px;
          grid-auto-flow: row;
          grid-template-rows: auto;
          grid-template-areas:
            '. '
            'symbol'
            '.';
          align-items: center;
          justify-items: center;
        `,
      ],
    },
  }),

  [ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT]: withProps(StyledElement, {
    className: 'slate-ubigop-limits-on-right',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-grid;
          gap: 3px 3px;
          grid-auto-flow: row;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            'symbol .'
            'symbol .'
            '. .';
          align-items: center;
          justify-items: left;
        `,
      ],
    },
  }),

  [ELEMENT_LOG]: withProps(StyledElement, {
    className: 'slate-log',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-flex;
          justify-content: flex-start;
          flex-direction: row;
        `,
      ],
    },
  }),

  [ELEMENT_ACCENT]: withProps(StyledElement, {
    className: 'slate-accent',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-flex;
          justify-content: flex-start;
          flex-direction: column;
          text-align: center;
          position: relative;
          bottom: .78rem;
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

  [ELEMENT_BRACKET]: withProps(StyledElement, {
    className: 'slate-bracket',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-flex;
          justify-content: flex-start;
          flex-direction: row;
          width: auto;
          text-align: center;
          position: relative;
          top: 0px;
          bottom: .78rem;
        `,
      ],
    },
  }),

  [ELEMENT_STACKED]: withProps(StyledElement, {
    className: 'slate-stackedfraction',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline-grid;
          gap: 3px 3px;
          grid-auto-flow: row;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            '. '
            'symbol'
            '.';
          align-items: center;
          justify-items: center;
        `,
      ],
    },
  }),

  [ELEMENT_SKEWED]: withProps(StyledElement, {
    className: 'slate-skewedfraction',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline;
          gap: 3px 3px;
          grid-auto-flow: column;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            '. . .'
            'symbol'
            '.';
          align-items: center;
          justify-items: center;
        `,
      ],
    },
  }),
  [ELEMENT_LINEAR]: withProps(StyledElement, {
    className: 'slate-linearfraction',
    as: 'span',
    styles: {
      root: [
        css`
          display: inline;
          gap: 3px 3px;
          grid-auto-flow: column;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            '. . .'
            'symbol'
            '.';
          align-items: center;
          justify-items: center;
        `,
      ],
    },
  }),

  [ELEMENT_TRIG]: withProps(StyledElement, {
    className:'slate-trig',
    as:'span',
    styles: {
      root: [
        css`
        display: inline-flex;
        justify-content: flex-start;
        flex-direction: row;
        `,
      ]
    }
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
})
