//npm install react react-dom -E
//npm install @vitejs/plugin-react -D
//npm install @testing-library/react happy-dom -D
//investigar happy-dom y jsdom
//va mejor happy-dom

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { afterEach, describe, it, expect, beforeEach } from "vitest";
import { Calculator,operaciones,numbers,equal } from "../src/Calculator";
describe("calculadora", () => {
  //para que luego de cada renderizado lo limpie
  //ya que se renderizara muchas veces y encontrara multiples textos repetidos
  afterEach(cleanup);
  //podemos hacer que antes de cada test se renderize la calculadora es otra forma
//   beforeEach(()=>{
//     render(<Calculator/>)
//   })
  
  it("mostrar rederizado", () => {
    //en el render utilizaremos react testing library
    render(<Calculator />);
  });

  it("mostrar renderizado de titulo correcto", () => {
    //en el render utilizaremos react testing library
    render(<Calculator />);
    screen.getByText("Calculator"); //-> si no lo encuentra directamente lanza error
  });
  it("renderize numeros", () => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });
  it("muestre renderizado de 4 filas", () => {
    render(<Calculator />);
    const filas = screen.getAllByRole("row");
    expect(filas.length).toBe(4);
  });
  it("mostrar operaciones que queremos tener", () => {
    render(<Calculator />);
    operaciones.forEach((operacion) => {
      screen.getByText(operacion);
    });
  });
  it("mostrar signo igual", () => {
    render(<Calculator />);
    screen.getByText('=');
  });
  it("renderizar input", () => {
    render(<Calculator />);
    screen.getByRole('textbox');
  });
  it("mostrar input despues que el usuario hace click un numero", () => {
    render(<Calculator />);
    //En este ejemplo usamos fireEvent
    //pero es mejor usar userEvent
    const one = screen.getByText('1')
    fireEvent.click(one)
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1')
    
  });
  it("mostrar input despues que  el usuario hace click varios numeros", () => {
    render(<Calculator />);
    const one = screen.getByText('1')
    fireEvent.click(one)
    const two = screen.getByText('2')
    fireEvent.click(two)
    const three = screen.getByText('3')
    fireEvent.click(three)
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123')
    
  });

  it("mostrar input despues que  el usuario hace click varios numeros y operaciones", () => {
    render(<Calculator />);
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1')
    
  });
  it("mostrar lo calculado", () => {
    render(<Calculator />);
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)
    const signoEqual = screen.getByText(equal)
    fireEvent.click(signoEqual)
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2')    
  });
});
