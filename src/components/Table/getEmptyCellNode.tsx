import { ELEMENT_TD } from '@udecode/plate';
import {
    ELEMENT_DEFAULT,
    getPluginType,
    PlateEditor,
  } from '@udecode/plate-core';

export const getEmptyCellNode = (
    editor: PlateEditor,
    
) => {
return {
    type: getPluginType(editor, ELEMENT_TD),
    children: [
        {
            type: getPluginType(editor, ELEMENT_DEFAULT),
            children: [{ text: ''}],
        },
    ],
}
};
