import { transform } from '@babel/core'
import {
  findNode,
  getNode,
  getNodesRange,
  getRangeBefore,
  isCollapsed,
  KeyboardHandler,
  selectEditor,
  someNode,
  getPluginType,
  PlateEditor,
  comboboxStore,
} from '@udecode/plate'
import { copyBlockMarksToSpanChild, findDescendant, getBlockAbove, getLastChild, PEditor, TNode } from '@udecode/plate-core'
import { BaseEditor, Editor, Path, Range, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'
import { ELEMENT_ACCENT } from './Accent'
import { ELEMENT_BIG_OPERATOR } from './BigOperator'
import { ELEMENT_BRACKET } from './Bracket'
import { ELEMENT_EQUATIONBOX } from './EquationBoxElement'
import { ELEMENT_EQUATION_TEXT } from './EquationText'
import { ELEMENT_FRACTION } from './Fraction'
import { ELEMENT_LIMIT } from './Limit'
import { ELEMENT_LOG } from './Log'
import { ELEMENT_MATH_CONTAINER } from './MathContainer/defaults'
import { ELEMENT_MATRIX } from './Matrix/defaults'
import {
  ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
  ELEMENT_UNEDITABLE_BIG_OPERATOR,
} from './UneditableBigOperator/defaults'
import { ELEMENT_LINEAR_FRACTION, ELEMENT_SKEWED_FRACTION, ELEMENT_STACKED_FRACTION } from './Fraction/defaults'
import { ELEMENT_TRIG } from './Trig'
import { ELEMENT_EXPONENT } from './Exponent/defaults'


export const getCurrentSelection = (editor: PlateEditor): Path | undefined => {
  var at = editor.selection
  var _at: Path
  if (Range.isRange(at) && !isCollapsed(at)) {
    _at = at.focus.path
  } else if (Range.isRange(at)) {
    _at = at.anchor.path
  } else {
    _at = at as unknown as Path
  }
  return _at
}
export const selectFirstBox = (editor: PlateEditor) => {
  var selection = getCurrentSelection(editor)
  if (selection) {
    let textNode = findNode(editor, {
      at: selection,
      match: { type: getPluginType(editor, ELEMENT_MATH_CONTAINER) },
    })
    if (textNode) {
      let firstNode = findNode(editor, {
        at: textNode[1],
        mode: 'highest',
        match: { type: getPluginType(editor, ELEMENT_EQUATIONBOX) },
      })
      console.log(textNode)
      if (firstNode) {
        console.log(firstNode)
        let target = Editor.range(editor, firstNode[1])
        ReactEditor.focus(editor as unknown as ReactEditor)
        Transforms.setSelection(editor, target)
      }
    }
  }
}

export const equationBoxOnKeyDown = (): KeyboardHandler => (editor) => (e) => {
  var selection = getCurrentSelection(editor)
    if (e.key === 'Enter'){
      if(comboboxStore.get.isOpen())
      {
        e.preventDefault()
        e.stopPropagation()
      }
      if(isInsideBox(editor,selection))
      {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    else if (e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (selection) {
        if(!containsMath(editor,selection)||comboboxStore.get.isOpen()) //if not at math node of if combobox is open do nothing
          return
        let pathParent = Path.parent(selection) //get parent
        let sibling = Path.next(pathParent)
        while (getNode(editor,sibling)){ //check if math equation node has any more boxes
          let textNode = findNode(editor, {at: sibling, match: {type: getPluginType(editor, ELEMENT_EQUATIONBOX)}})
          if(textNode){ //if found another box, select it
            let target = Editor.range(editor, sibling)
            Transforms.setSelection(editor, Editor.range(editor, target))
            e.preventDefault()
            e.stopPropagation()
            break
          }
          sibling = Path.next(sibling)
        }
      }
}
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (selection) {
            if(!containsMath(editor,selection)||comboboxStore.get.isOpen()) ////if not at math node of if combobox is open do nothing
              return
            let pathParent = Path.parent(selection) //get parent
            if(pathParent.at(pathParent.length-1)!==0) { //make sure sibling isnt negative
                let sibling = Path.previous(pathParent)
                while (getNode(editor,sibling)){ //check if math equation node has any more boxes
                let textNode = findNode(editor, {at: sibling, match: {type: getPluginType(editor as PlateEditor, ELEMENT_EQUATIONBOX)}})
                if(textNode){ //if found another box, select it
                    let target = Editor.range(editor, sibling)
                    Transforms.setSelection(editor, Editor.range(editor, target))
                    e.preventDefault()
                    e.stopPropagation()
                    break
                }
                if(pathParent.at(pathParent.length-1)!==0)
                  sibling = Path.previous(sibling)
                }
            }
        }
      }
    }
export const isInsideBox = (
  editor: PlateEditor,
  selection: Path | undefined
): boolean => {
  if (!selection) return false
  var pathParent = Path.parent(selection) //get parent
  let node = getNode(editor, pathParent)
  if (node) {
    let n: TNode = node as TNode
    if (n.type === getPluginType(editor, ELEMENT_EQUATIONBOX)) return true
  }
  return false
}

export const containsMath = (editor: PlateEditor, selection: Path): boolean => {
  return someNode(editor, {
    at: selection,
    match: { type: getPluginType(editor, ELEMENT_EQUATIONBOX) },
  })
}

export const containsMathContainer = (
  editor: PlateEditor,
  selection: Path
): boolean => {
  var n = findNode(editor, {
    at: selection.slice(0, selection.length - 2),
    match: {
      type: getPluginType(editor as PlateEditor, ELEMENT_MATH_CONTAINER),
    },
  })
  console.log(n)
  return n != undefined
}

export const isMathNode = (node: any, editor: PlateEditor): boolean => {
  //dont normalize these nodes
  const types = [
    ELEMENT_EQUATIONBOX,
    ELEMENT_EQUATION_TEXT,
    ELEMENT_UNEDITABLE_BIG_OPERATOR,
    ELEMENT_BIG_OPERATOR_LIMITS_ON_RIGHT,
    ELEMENT_BIG_OPERATOR,
    ELEMENT_ACCENT,
    ELEMENT_LOG,
    ELEMENT_LIMIT,
    ELEMENT_FRACTION,
    ELEMENT_MATRIX,
    ELEMENT_BRACKET,
    ELEMENT_STACKED_FRACTION,
    ELEMENT_SKEWED_FRACTION,
    ELEMENT_LINEAR_FRACTION,
    ELEMENT_TRIG,
    ELEMENT_EXPONENT
  ]
  for (var i = 0; i < types.length; i++) {
    if (node.type === getPluginType(editor, types[i])) return true
  }
  return false
}
