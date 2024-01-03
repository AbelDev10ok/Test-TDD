import { describe, expect, it } from "vitest";

//ejercicio advents


const canReConfigure = (from, to) => {
  if (from === undefined) {
    throw new Error("from is requerid");
  }
  if (typeof from !== "string") {
    throw new Error("from is not a string");
  }
  if (typeof to !== "string") {
    throw new Error("to is not a string");
  }
  if (from.length !== to.length) {
    return false;
  }
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) {
    return false;
  }
  const transformation = {};
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformation[fromLetter];
    if (storedLetter && storedLetter !== toLetter) {
      return false;
    }
    transformation[fromLetter] = toLetter;
  }
  return true;
};

describe("canReconfigure", () => {
  // it('esto es una funcion',()=>{
  //     expect(canConfigure).toBeTypeOf('function')
  // })

  it("si le falta el primer parametro", () => {
    expect(() => canReConfigure()).toThrow();
  });
  it("si el primer parametro no es un string", () => {
    expect(() => canReConfigure(2)).toThrow();
  });

  it("si el primer parametro no es un string", () => {
    expect(() => canReConfigure("a")).toThrow();
  });
  it("deberia return booleano", () => {
    expect(canReConfigure("a", "b")).toBeTypeOf("boolean");
  });
  it("si los parametros tienen diferente longitud", () => {
    expect(canReConfigure("a", "bwe")).toBeFalsy();
    expect(canReConfigure("a", "bwe")).toBe(false);
  });
  it("return false si los string tienen diferentes longitud tambien  letras unicas", () => {
    expect(canReConfigure("aab", "ab")).toBeFalsy();
  });
  it("return false si los string tienen diferentes numeros de unicas letras", () => {
    expect(canReConfigure("abc", "ddd")).toBeFalsy();
  });
  it("return false si los string tienen diferentes orden de transformacion ", () => {
    expect(canReConfigure("xbox", "xxbo")).toBeFalsy();
  });
});
