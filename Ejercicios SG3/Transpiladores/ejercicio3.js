/* // Polyfill para String.prototype.includes
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    return this.indexOf(search, start) !== -1;
  };
}

// Parte 1
var str = "Copa de Futbol";

console.log(str.includes("Copa")); // true
console.log(str.includes("Torneo")); // false

// Polyfill para Array.prototype.reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    var accumulator = initialValue;

    for (var i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  };
}

// Parte 2
class miClase {
  //class no es compatible por lo que requeriria uso de Babel para transpilar
  constructor(a, b) {
    this.result = a + b;
  }
}

const miFuncion = (a, b) => a + b; //=> de la funcion no es compatible por lo que requeriria uso de Babel para transpilar

const resultado = [1, 2].reduce((a, b) => a + b, 0); //.reduce si es compatible con ES11 pero la arrow function no lo es.
console.log(resultado); // 3 */

//Parte 3

// Simulación de clase usando función constructora
function miClase(a, b) {
  this.result = a + b;
}

// Función tradicional (en lugar de arrow function)
function miFuncion(a, b) {
  return a + b;
}

// reduce() sí funciona en IE11
var resultado = [1, 2].reduce(function (a, b) {
  return a + b;
}, 0);

console.log("Resultado con reduce:", resultado);

// Probando la clase
var instancia = new miClase(5, 7);
console.log("Resultado en miClase:", instancia.result);
