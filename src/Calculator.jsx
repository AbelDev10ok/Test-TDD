import { useState } from "react";
import {evaluate} from 'mathjs'
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const operaciones = ["+", "-", "*", "/"];
export const equal = '='
export const Calculator = () => {
    const [value,setValue] = useState('')
    const createHandleClick = data=>{
        setValue(value.concat(data))
    }

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role="grid">
        {rows.map((row, index) => (
          <div key={index} role="row">
            {row.map((number) => (
              <button onClick={()=>createHandleClick(number)} key={number}>{number}</button>
            ))}
          </div>
        ))}
        {console.log(value)}
        {operaciones.map((operacion) => (
          <button onClick={()=>createHandleClick(operacion)} key={operacion}>{operacion}</button>
        ))}
        <button onClick={()=>setValue(evaluate(value))}>{equal}</button>
      </div>
    </section>
  );
};