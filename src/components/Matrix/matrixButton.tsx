import Tippy from "@tippyjs/react";
import { getEmptyRowNode, getEmptyTableNode, PlateEditor, usePlateEditorState } from "@udecode/plate";
import { createStyles } from "@udecode/plate-styled-components";
import tw from "twin.macro";
import { ELEMENT_MATRIX } from "./defaults"; 
import { getMatrixButtonStyles } from "./matrixButton.styles";

type MatrixButtonProps = {
    name:string
    rowNum: number;
    colNum: number;
    updateMatrix: (rows:number, cols:number) => void; 
};



export const MatrixButton = ({
    name,
    rowNum,
    colNum,
    updateMatrix
}: MatrixButtonProps) => {
    const editor = usePlateEditorState()!;
    const styles = getMatrixButtonStyles();
    const content = (
        <div className="matrix-selector-data">
            <button
            className="matrixButton" 
            data-testid="matrix-selector-button"
            type="button"
            aria-label={'\u2b1a'}
            name={'\u2b1a'}
            onClick={() => updateMatrix(rowNum, colNum)}
            css={styles.root.css}
            ></button>
        </div>
    );
    return name ? <Tippy content={name}>{content}</Tippy> : content;
}







