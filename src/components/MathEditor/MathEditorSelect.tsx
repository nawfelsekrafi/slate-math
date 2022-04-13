import React from 'react';
import { CSSProp } from 'styled-components';
import { EQUATION_OPTIONS } from './constants';

export const MathEditorSelection = ({
    options,
    onChange,
    ...props
}: {
    options?: string;
    onChange: Function;
    css?: CSSProp;
}) => {
    const [value, setValue] = React.useState(options);
    return (
        <select
            value={value}
            style={{ float: 'right' }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(e) => {
              onChange(e.target.value);
              setValue(e.target.value);
            }}
            contentEditable={false}
            {...props}
        >
        <option value=""> </option>
        {Object.entries(EQUATION_OPTIONS).map(([key, val]) => (
        <option key={key} value={key}>
          {val}
        </option>
      ))}
        </select>
    )
}