import { getEmptyTableNode, getPlatePluginOptions, isCollapsed, someNode, ToolbarButton, ToolbarDropdown } from "@udecode/plate";
import { GetElementDeserializerOptions, usePlateEditorState } from "@udecode/plate-core";
import { ToolbarButtonProps } from "@udecode/plate-toolbar";
import React, { useCallback } from "react";
import { ReactEditor } from "slate-react";

export const matrixIcon = () => {
    return (
        <>
        <span className="matrix-bracket-ico">(</span>
          <table className="matrix-ico">
            <tr className="matric-row-ico">
                <td className="matrix-data-ico">&#11034;</td>
                <td className="matrix-data-ico">&#11034;</td>
            </tr>
            <tr className="matric-row-ico">
                <td className="matrix-data-ico">&#11034;</td>
                <td className="matrix-data-ico">&#11034;</td>
            </tr>
          </table>
          <span className="matrix-bracket-ico">)</span>
        </>
    );
}



