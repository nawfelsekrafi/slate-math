import { createPlateUIEditor } from '@udecode/plate';
import { ELEMENT_EQUATIONBOX } from '../components/EquationBoxElement';
import { createEquationBoxPlugin } from '../components/plugin';

const equationBox = Object.freeze([
  { type: 'p', children: [{ text: 'A' }] },
  {type: ELEMENT_EQUATIONBOX, children: [{text: ''}]},
  { type: 'p', children: [{ text: 'B' }] },
]) as any

const equationBoxText = Object.freeze([
  { type: 'p', children: [{ text: 'A' }] },
  {type: ELEMENT_EQUATIONBOX, children: [{text: 'A'}]},
  { type: 'p', children: [{ text: 'B' }] },
]) as any
const plugins = [createEquationBoxPlugin()];
describe('withBox',()=> {
  it('empty equation box should not be deleted when selected (delete button)', () => {
    const editor = createPlateUIEditor({
      plugins,
    });
    editor.children = equationBox;
    editor.selection = {
      anchor: { path: [1,0], offset: 0 },
      focus: { path: [1,0], offset: 0 },
    };
    editor.deleteForward('character');
    expect(editor.children).toEqual(equationBox);
  });
  it('empty equation box should not be deleted when selected (back space button)', () => {
    const editor = createPlateUIEditor({
      plugins,
    });
    editor.children = equationBox;
    editor.selection = {
      anchor: { path: [1,0], offset: 0 },
      focus: { path: [1,0], offset: 0 },
    };
    editor.deleteBackward('character');
    expect(editor.children).toEqual(equationBox);
  });

  
})
