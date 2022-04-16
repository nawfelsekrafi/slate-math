import { TElement } from "@udecode/plate-core"
import { ELEMENT_MATH_CONTAINER } from "./defaults"


export const getContainerNode = (node:TElement) => {
    return {
        type: ELEMENT_MATH_CONTAINER,
        children: [node],
    }
}

