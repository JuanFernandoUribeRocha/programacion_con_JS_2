const sum = require("./ejercicio1");

describe("Pruebas con números", () => {
  test("Prueba con numero", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    //toBe y toEqual son equivalentes al usae números

    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
});

describe("Pruebas con string", () => {
  test("Comparación de texto", () => {
    const mensaje = "Hola mundo";

    expect(mensaje).toMatch(/mundo/); // contiene la palabra mundo
    expect(mensaje).not.toMatch(/adiós/); //No contiene la palabra adiós
  });
});
