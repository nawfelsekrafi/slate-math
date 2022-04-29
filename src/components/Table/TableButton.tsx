import Tippy from "@tippyjs/react";
import { PlateEditor, usePlateEditorState } from "@udecode/plate";
import { createStyles } from "@udecode/plate-styled-components";
import tw from "twin.macro";
import { getTableButtonStyles } from "./Table.styles"

type TableButtonProps = {
    name:string
    rowNum: number;
    colNum: number;
    updateTable: (rows:number, cols:number) => void; 
};



export const TableButton = ({
    name,
    rowNum,
    colNum,
    updateTable
}: TableButtonProps) => {
    const editor = usePlateEditorState()!;
    const styles = getTableButtonStyles();
    const content = (
        <div className="table-selector-data">
            <button
            className="tableButton" 
            type="button"
            name={'\u2b1a'}
            onClick={() => updateTable(rowNum, colNum)}
            css={styles.root.css}
            ></button>
        </div>
    );
    return name ? <Tippy content={name}>{content}</Tippy> : content;
}
