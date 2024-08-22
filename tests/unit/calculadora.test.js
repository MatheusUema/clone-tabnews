const calculadora = require("../../models/calculadora");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 'banana' + 100 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("Banana", 100);
  expect(resultado).toBe("Erro");
});

test("Somar 100 + 'banana' deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar(100, "Banana");
  expect(resultado).toBe("Erro");
});
