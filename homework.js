// En estas primeras preguntas sustituye `null` por la respuesta (constantes iniciales + hoisting):

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Mundo';
// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 53;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// Pensá este orden como si siguiera ejecutándose línea por línea (hoisting de `var`):
// console.log(typeof y);
// var y = 10;
// ¿Qué string devuelve `typeof y` antes de llegar al `=` ? Reemplazá null por ese string entre comillas.
const resultadoHoisting = 'undefined';

// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  return x == y;
}

function sonEstrictamenteIguales(x, y) {
  if (typeof x !== typeof y) {
    return false;
  }
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  return x % y;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  return num ** 2;
}

function elevarAlCubo(num) {
  return num ** 3;
}

function elevar(num, exponent) {
  return num ** exponent;
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  return `${str}!`;
}

function combinarNombres(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

function obtenerSaludo(nombre) {
  return `Hola ${nombre}!`;
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho;
}

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y) {
    return x;
  }
  if (y > x) {
    return y;
  }

  return x;
}

function saludo(idioma) {
  if (idioma === 'aleman') {
    return 'Guten Tag!';
  }
  if (idioma === 'mandarin') {
    return 'Ni Hao!';
  }
  if (idioma === 'ingles') {
    return 'Hello!';
  }
  return 'Hola!';
}

function esDiezOCinco(numero) {
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  return numero >= 20 && numero <= 50;
}

function esEntero(numero) {
  if (numero % 1 === 0) {
    return true;
  }
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
  }
  if (numero % 3 === 0) {
    return 'fizz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  return numero;
}

function esPrimo(numero) {
  if (numero === 1 || numero === 0) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// --- Temario ampliado (alcance let/const, tipos, operadores, Math, strings, condicionales, bucles avanzados) ---

function valoresDelIndiceConLetEnBucle() {
  let funciones = [];

  for (let i = 0; i < 3; i++) {
    funciones.push(() => {
      return i;
    });
  }
  return [funciones[0](), funciones[1](), funciones[2]()];
}

function construirListaConConstMutando() {
  const lista = [];
  for (let i = 1; i <= 3; i++) {
    lista.push(i);
  }
  return lista;
}

function esRealmenteNulo(valor) {
  if (valor === null) {
    return true;
  }
  return false;
}

function esValorUndefined(valor) {
  if (valor === undefined) {
    return true;
  }
  return false;
}

function esNumeroValido(n) {
  if (typeof n === 'number' && !isNaN(n)) {
    return true;
  }
  return false;
}

function acumularPorPasos(inicial, pasos) {

  let total = inicial;
  for (let i = 0; i < pasos.length; i++) {
    if (pasos[i] > 0) {
      total += pasos[i];
    } else {
      total -= pasos[i];
    }
  }
  return total;
}

function aplicarIncrementoDesdeCero(intentos) {
  
  let contador = 0;
  for (let i = 0; i < intentos; i++) {
    contador++;
  }
  return contador;
}

function enteroDesdeBinario(binarioStr) {
 
  return parseInt(binarioStr, 2);
}

function floatDesdeTexto(texto) {
 
  return parseFloat(texto);
}

function precioFormateadoDosDecimales(precio) {

  return precio.toFixed(2);
}

function esNumeroFinitoValor(n) {

  return Number.isFinite(n);
}

function redondearHaciaAbajo(num) {

  return Math.floor(num);
}

function aleatorioEnteroInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarIndiceCadena(texto, subcadena) {

    return texto.indexOf(subcadena);
}

function extraerPorSlice(texto, inicio, fin) {

    return texto.slice(inicio, fin);
}

function limpiarEspaciosExtremos(texto) {

    return texto.trim();
}

function partirEnEspacios(texto) {

    return texto.split(' ');
}

function reemplazarGuionesPorEspacio(texto) {

    return texto.replace(/-/g, ' ');
}

function minusculasYRecortado(texto) {

    return texto.trim().toLowerCase();
}

function mayusculasTrasTrim(texto) {

    return texto.trim().toUpperCase();
}

function puedePasarAlEvento(edad, tieneEntrada, esVIP) {

    return edad >= 18 && (tieneEntrada || esVIP);
}

function noEsValorFalso(valor) {

    if (valor === false) {
      return true;
    }
    return false;
}

function clasificarSigno(num) {

    return num > 0 ? 'positivo' : num < 0 ? 'negativo' : 'cero';
}

function clasificarTipoDia(codigo) {

      switch (codigo) {
        case 'lun':
        case 'mar':
        case 'mie':
        case 'jue':
        case 'vie':
          return 'habil';
        case 'sab':
        case 'dom':
          return 'descanso';
        default:
          return 'desconocido';
      }
}

function sumaDesdeUnoConWhile(numeroFinal) {
 
    let suma = 0;
    while (numeroFinal > 0) {
      suma += numeroFinal;
      numeroFinal--;
    }
    return suma;
}

function primerMultiploEnIntervaloDoWhile(inicio, divisor, limiteSuperior) {
  if (divisor === 0) return null;

  let i = inicio;

  do {
    if (i % divisor === 0) {
      return i;
    }
    i++;
  } while (i <= limiteSuperior);

  return null;
}

function tablaMultiplicacionForBase(base) {

    let tabla = [];
    for (let i = 0; i < 10; i++) {
      tabla.push(base * (i + 1));
    }
    return tabla;
}

function saludarConTitulo(nombre, titulo = 'Sr.') {

    return `Hola, ${titulo} ${nombre}!`;  
}

function elevarConExponentePorDefecto(base, exponente = 2) {
  
    return Math.pow(base, exponente);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  resultadoHoisting,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  sonEstrictamenteIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo,
  valoresDelIndiceConLetEnBucle,
  construirListaConConstMutando,
  esRealmenteNulo,
  esValorUndefined,
  esNumeroValido,
  acumularPorPasos,
  aplicarIncrementoDesdeCero,
  enteroDesdeBinario,
  floatDesdeTexto,
  precioFormateadoDosDecimales,
  esNumeroFinitoValor,
  redondearHaciaAbajo,
  aleatorioEnteroInclusive,
  buscarIndiceCadena,
  extraerPorSlice,
  limpiarEspaciosExtremos,
  partirEnEspacios,
  reemplazarGuionesPorEspacio,
  minusculasYRecortado,
  mayusculasTrasTrim,
  puedePasarAlEvento,
  noEsValorFalso,
  clasificarSigno,
  clasificarTipoDia,
  sumaDesdeUnoConWhile,
  primerMultiploEnIntervaloDoWhile,
  tablaMultiplicacionForBase,
  saludarConTitulo,
  elevarConExponentePorDefecto,
};
