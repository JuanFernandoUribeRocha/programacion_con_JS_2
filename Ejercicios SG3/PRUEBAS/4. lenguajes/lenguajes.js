const idiomaIngles = "en-US";
const idiomaEspañol = "es-ES";
const idiomaFrances = "fr-FR";

function lenguajePagina(lenguaje) {
  switch (lenguaje.toLowerCase()) {
    case idiomaIngles.toLowerCase():
      return "/about-us";
      break;
    case idiomaEspañol.toLowerCase():
      return "/sobre-nosotros";
      break;
    case idiomaFrances.toLowerCase():
      return "a-propos";
      break;
  }
  return "";
}

module.exports = lenguajePagina;
