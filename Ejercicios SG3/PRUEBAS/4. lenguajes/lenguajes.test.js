const lenguajePagina = require("./lenguajes.js");

test("Revisamos el valor de retorno del lenguaje seleccionado", () => {
  expect(lenguajePagina("es-ES")).toBe("/sobre-nosotros");
  expect(lenguajePagina("en-US")).toBe("/about-us");
  expect(lenguajePagina("fr-FR")).toBe("a-propos");
});
