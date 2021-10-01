import { CodeBlockElement, createPlateComponents, ELEMENT_CODE_BLOCK, ELEMENT_PARAGRAPH, ELEMENT_TABLE, ELEMENT_TD, ELEMENT_TH, ELEMENT_TR, HandlerReturnType, PlatePlugin, SPEditor, StyledElement, withProps } from "@udecode/plate";
import { css } from "styled-components";
import { FRACTION } from "./defaults";
export const createIntegralPlugin = (): PlatePlugin => ({
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

  });
  export const createSummationPlugin = (): PlatePlugin => ({
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

  });

  export const createBigOperatorPlugin = (): PlatePlugin => ({
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

  });

  export const createFractionPlugin = (): PlatePlugin => ({
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

  });

  
  export const createLimitPlugin = (): PlatePlugin => ({
    //deserialize: 
    //onKeyDown: 
    //pluginKeys: 
    //renderElement: 

  });

  export const components = createPlateComponents({

    [ELEMENT_TABLE]: withProps(StyledElement, {

      className: 'slate-table',
      as: 'table',
      styles: {
        root: {
          display: 'inline-block',
          verticalAlign: 'middle',
          padding: '0px',
          margin: '0px',
          borderBottom: '0px',
          lineHeight: '0.1',
          textAlign: 'center',
        },
      },
    }),
    [ELEMENT_TR]: withProps(StyledElement, {
      className: 'slate-tr',
      as: 'tr',
    }),
    [ELEMENT_TH]: 
    withProps(StyledElement, {
      className: 'slate-th',
      as: 'th',
      styles: {
        root: {
          backgroundColor: 'rgb(255, 255, 255)',
          border: '1px solid black',
          borderTop: '0px',
          borderRight: '0px',
          borderLeft: '0px',
          padding: '0px',
          fontWeight: 'normal',
          margin: '0px',          
          minWidth: '21px',
          verticalAlign: 'middle',
          lineHeight: '1.5',
          textAlign: 'center',
          selectors: {
            '> *': {
              margin: 0,
            },
          },
        },
      },
    }),
    [ELEMENT_TD]: withProps(StyledElement, {
      className: 'slate-td',
      as: 'td',
      styles: {
        root: {
          backgroundColor: 'rgb(255, 255, 255)',
          border: '0px solid rgb(0, 0, 0)',
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
    [FRACTION]: withProps(StyledElement, {
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

  });