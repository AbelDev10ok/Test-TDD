import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";
/*
Escribe una funcion que al pasarle un numero:
-Muestre fizz si es multiplo de 3.
-Muestre buzz si es multiplo de 5.
-Muestre fizzBuzz si no es multiplo de 3 y 5.
-Muestra el numero si no es multiplo de ninguno de los anteriores
*/
describe("test-fizzbuzz", () => {
  //este tes ya lo cubrimos con los demas
  // it('deberia ser una funcion',() =>{
  //     expect(typeof fizzbuzz).toBe('function')
  // })
  it("si no pasamos un parametro a number", () => {
    expect(() => fizzbuzz()).toThrow();
  });

  it("si quiero especificar mas el mensaje de error", () => {
    expect(() => fizzbuzz()).toThrow(/number/i);
    //(/number/) que contenga la palabra number
  });

  it("si es un not a number", () => {
    expect(() => fizzbuzz(NaN)).toThrow("No es un numero");
  });
  it("devuelve 1 si el numero es 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it("deve devolver fizz si el numero es 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });
  //ya esta cubierto
  // it('deberia devolber 4 si el number es 4',()=>{
  //     expect(fizzbuzz(4)).toBe(4)
  // })
  it("deberia devolber buzz si el number es 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it("devuelve buzz si el numbero es multipli de 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("devuelve fizzbuzz si el numbero es multipli de 3 y 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
