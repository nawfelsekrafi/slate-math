import { TComboboxItem, TComboboxItemWithData } from "@udecode/plate"
import { MentionEquationData } from "./mentionables"

export const equationMentionNode = (item: TComboboxItem): MentionEquationData => {
    var item2 = item as TComboboxItemWithData<MentionEquationData>
    return {
      value: item2.data.value,
      node: item2.data.node
    }
  }
  