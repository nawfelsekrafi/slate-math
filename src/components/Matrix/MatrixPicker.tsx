import { MatrixButton } from "./matrixButton";
import { MatrixType } from "./matrixType";
import "./index.css";
type MatrixPickerProps = {
    matrix?: string;
    matrixes: MatrixType[];
    updateMatrix: (rows:number, cols:number) => void
  };

  
  export const MatrixPicker = ({
      matrixes,
      updateMatrix
  }:MatrixPickerProps) => {
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