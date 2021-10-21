import { RenderLeaf } from "@udecode/plate";
import { getPlatePluginOptions, PlatePluginOptions } from "@udecode/plate-core";

export const ELEMENT_EQUATION_TEXT = 'equationtext';

export const DEFAULTS_EQUATION_TEXT: Partial<PlatePluginOptions> = {
    getNodeProps: ({element}) => ({contentEditable: element?.contentEditable})
};


  