import { TableButton } from "./TableButton";
import { TableType } from "./TableType";

type TablePickerProps = {
    table?: string;
    tables: TableType[];
    updateTable: (rows:number, cols:number) => void
  };

  export const TablePicker = ({
      table,
      tables,
      updateTable
  }:TablePickerProps) => {
    //const styles = getMatrixPickerStyles();
    return (
        <div className="table-container">
          {tables.map(({ name, rows, cols }) => (
            <TableButton
              key={name}
              name={name}
              rowNum={rows}
              colNum={cols}
              updateTable={updateTable}
            />
          ))}
        </div>
    );
  }