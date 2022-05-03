import { createPlateUIEditor } from "@udecode/plate";
import { createEquationTextPlugin } from "../components";
import { ELEMENT_EQUATION_TEXT } from "../components/EquationText";
import { ELEMENT_MATH_CONTAINER } from "../components/MathContainer/defaults";
const plugins = [createEquationTextPlugin()];
export const equationText = Object.freeze([
    { type: 'p', children: [{ text: 'A' }] },
    {
        type: ELEMENT_MATH_CONTAINER, children: [{
            type: ELEMENT_EQUATION_TEXT, children: [{text: 'HELLO'}]
        }]
    },
    { type: 'p', children: [{ text: 'B' }] },
]) as any

export const textA = Object.freeze([
    { type: 'p', children: [{ text: 'A' }] },
]) as any

describe('Equation Text',()=> {
    it('equation text should be deleted when user presses back space', () => {
      const editor = createPlateUIEditor({
        plugins,
      });
      editor.children = equationText;
      editor.selection = {
        anchor: { path: [2,0], offset: 0 },
        focus: { path: [2,0], offset: 0 },
      };
      editor.deleteBackward('character');
      expect.not.objectContaining(ELEMENT_EQUATION_TEXT);
    })});