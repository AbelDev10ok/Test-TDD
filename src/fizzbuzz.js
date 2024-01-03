export const fizzbuzz = (number) => {
  if (typeof number !== "number") {
    throw new Error("parametro must be a number");
  }
  if (Number.isNaN(number)) {
    throw new Error("No es un numero");
  }
  const multiples = { 3: "fizz", 5: "buzz" };
  let output = "";
  Object.entries(multiples).forEach(([multipler, word]) => {
    if (number % multipler === 0) {
      output += word;
    }
  });

  //ya que 15 es multiplo de 5 y 3
  // if(number % 15 === 0 )return 'fizzbuzz'
  // if(number % 3 === 0)return 'fizz'
  // if(number % 5 === 0 )return 'buzz'

  return output === "" ? number : output;
};
