import { createStyles } from '@udecode/plate-styled-components';
import { css } from 'styled-components';
import tw from 'twin.macro';
export const getEquationTextStyles = () => {
    return(
    createStyles({prefixClassNames: 'isEmpty', }, {
        root: [
            css`
            font-family: Symbola-mq,"Times New Roman",serif;
            text-align: center;
            font-style: normal; font-variant: normal;
            position: relative;
            `,
            tw`my-0 mx-px align-baseline inline-grid`,      
        ]
    })
    )
}