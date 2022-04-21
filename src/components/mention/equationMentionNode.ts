import { TComboboxItem, TComboboxItemWithData } from "@udecode/plate"
import { MentionEquationData } from "./mentionables"

export const equationMentionNode = (element: TComboboxItem): MentionEquationData => {
    let item = element as TComboboxItemWithData<MentionEquationData>
    return {
      value: item.data.value,
      node: item.data.node,
      icon: item.data.icon
    }
  }
  