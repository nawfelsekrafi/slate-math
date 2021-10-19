import { RenderLeaf } from "@udecode/plate";
import { getPlatePluginOptions, PlatePluginOptions } from "@udecode/plate-core";
import { getEditableRenderLeafEqText } from "./equationTextLeaf";

export const ELEMENT_EQUATION_TEXT = 'equationtext';

export const DEFAULTS_EQUATION_TEXT: Partial<PlatePluginOptions> = {
    getNodeProps: ({element}) => ({contentEditable: element?.contentEditable})
};


  export const getRenderLeafEqText = (pluginKey: string): RenderLeaf => (editor) =>
  getEditableRenderLeafEqText(getPlatePluginOptions(editor, pluginKey));
  