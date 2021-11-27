import styled from 'styled-components'

export const EquationTextRoot = styled.div<any>`
  display: inline-block;
  line-height: 1.2;
  ${({ selected }) =>
    selected &&
    `
    outline: rgb(0, 120, 212) auto 1px;
  `}

`
export {}