import { createStyles } from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';
import { EquationBoxElementStyleProps } from './getEquationBoxElement.types';
export const getEquationBoxStyles = (props: EquationBoxElementStyleProps) => {
    return(
    createStyles({prefixClassNames: 'isEmpty', ...props}, {
        root: [
            css`
            position: relative;
            z-index: -1;
            background-color: #FFFFFF;
            text-align: center;
            font-style: normal; font-variant: normal;
            :hover {box-shadow: 0px 0px 5px 1px #9a9a9a;}
            align-content: center;

            `,
            tw`my-0 mx-px align-baseline inline-grid`,
            props.selected && tw`boxShadow[0 0 0 2px #B4D5FF] bg-gray-300`,
            props.isEmpty && `background-color: #eee;`,
            props.isEmpty && `padding: 0px 7px 0px;`,
        ]
    })
    )
}