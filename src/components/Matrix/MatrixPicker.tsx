import { MatrixButton } from "./matrixButton";
import { MatrixType } from "./matrixType";

type MatrixPickerProps = {
    matrix?: string;
    matrixes: MatrixType[];
    updateMatrix: (rows:number, cols:number) => void
  };

  export const MatrixPicker = ({
      matrix,
      matrixes,
      updateMatrix
  }:MatrixPickerProps) => {
    //const styles = getMatrixPickerStyles();
    return (
        <div className="matrix-container">
          {matrixes.map(({ name, rows, cols }) => (
            <MatrixButton
              key={name}
              name={name}
              rowNum={rows}
              colNum={cols}
              updateMatrix={updateMatrix}
            />
          ))}
        </div>
    );
  }