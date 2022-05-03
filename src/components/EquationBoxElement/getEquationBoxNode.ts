import { ELEMENT_EQUATIONBOX } from "./defaults"

export const getEmptyBoxNode = (
styles?:any
) => {
  return {
    type: ELEMENT_EQUATIONBOX,
    children: [{text: ''}],
    styles:styles
  }
}
