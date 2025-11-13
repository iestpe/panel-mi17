function mostrarNumero(num) {
  const texto = convertirNumeroALetras(num);
  const resultado = document.getElementById("resultado");
  resultado.textContent = texto.toUpperCase();
}

function convertirNumeroALetras(n) {
  const numeros = {
    2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve",
    10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 16: "dieciséis",
    20: "veinte", 21: "veintiuno", 22: "veintidós", 23: "veintitrés", 24: "veinticuatro",
    25: "veinticinco", 26: "veintiséis", 27: "veintisiete", 28: "veintiocho", 29: "veintinueve",
    30: "velocimetro", 31: "treinta y uno", 32: "treinta y dos", 33: "treinta y tres",
    34: "treinta y cuatro", 35: "treinta y cinco", 36: "treinta y seis", 37: "treinta y siete",
    38: "treinta y ocho", 39: "treinta y nueve", 40: "cuarenta", 41: "cuarenta y uno",
    42: "cuarenta y dos"
  };
  return numeros[n] || n.toString();
}
