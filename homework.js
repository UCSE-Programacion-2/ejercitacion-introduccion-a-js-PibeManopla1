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
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

// --- Temario ampliado (alcance let/const, tipos, operadores, Math, strings, condicionales, bucles avanzados) ---

function valoresDelIndiceConLetEnBucle() {
  // Debés usar `let` en el declarador del `for` (no uses `var` en ese lugar).
  // Creá tres funciones en un bucle for (let i = 0; i < 3; i++) que cada una devuelva su i al invocarse.
  // Devolvé el array resultado de ejecutar cada función: debe ser [0, 1, 2].
  // Tu código:
}

function construirListaConConstMutando() {
  // Usá una constante para el arreglo (const lista = [];). No reasignes `lista`; usá `.push`.
  // Llenalo con los números 1, 2 y 3 en un bucle for y devolvé ese arreglo.
  // Tu código:
}

function esRealmenteNulo(valor) {
  // Devuelve true sólo cuando `valor` es exactamente null (=== null).
  // Tu código:
}

function esValorUndefined(valor) {
  // Devuelve true sólo cuando `valor` es undefined (idealmente usando === sin coerciones raras).
  // Tu código:
}

function esNumeroValido(n) {
  // Devuelve true si `n` es de tipo número y NO es NaN (p.ej. Number.isNaN o comparación conocida).
  // Tu código:
}

function acumularPorPasos(inicial, pasos) {
  // Sumá/restá al total usando += y -= dentro de un bucle. `pasos` es un array de números (ej. [10, -3, 2]).
  // Empezás en `inicial`; devolvé el total final.
  // Tu código:
}

function aplicarIncrementoDesdeCero(intentos) {
  // Variable contador inicializada en 0; repetí intentos veces usando un bucle for y ++ en cada vuelta.
  // Devolvé el valor final del contador.
  // Tu código:
}

function enteroDesdeBinario(binarioStr) {
  // Usá parseInt con radix 2. Ejemplo: '1010' -> 10
  // Tu código:
}

function floatDesdeTexto(texto) {
  // Usá parseFloat sobre la cadena. Ejemplo: '3.14' -> 3.14 ; '99px' típicamente trunca número inicial.
  // Tu código:
}

function precioFormateadoDosDecimales(precio) {
  // Devolvé una string con el número con dos decimales usando .toFixed(2).
  // Tu código:
}

function esNumeroFinitoValor(n) {
  // Devuelve true sólo cuando el número es finito (usá Number.isFinite).
  // Tu código:
}

function redondearHaciaAbajo(num) {
  // Usá Math.floor.
  // Tu código:
}

function aleatorioEnteroInclusive(min, max) {
  // Devolvé un entero entre min y max inclusives usando Math.floor y Math.random.
  // Fórmula estándar: Math.floor(Math.random() * (max - min + 1)) + min
  // Tu código:
}

function buscarIndiceCadena(texto, subcadena) {
  // Usá indexOf. Si no aparece devolvé -1 (comportamiento estándar de indexOf).
  // Tu código:
}

function extraerPorSlice(texto, inicio, fin) {
  // Usá slice exclusivo final `fin` igual que JS (no incluye el índice fin).
  // Tu código:
}

function limpiarEspaciosExtremos(texto) {
  // Usá trim.
  // Tu código:
}

function partirEnEspacios(texto) {
  // Dividí palabras separadas por un único caracter espacio usando split con ' '.
  // Ejemplo 'hola mundo' -> ['hola','mundo']
  // Tu código:
}

function reemplazarGuionesPorEspacio(texto) {
  // Reemplazá todos los caracteres '-' por un espacio ' ' con replace/replaceAll según soporte esperado ES6+
  // Tu código:
}

function minusculasYRecortado(texto) {
  // Aplicá trim() y después toLowerCase() al resultado.
  // Tu código:
}

function mayusculasTrasTrim(texto) {
  // Aplicá trim() y después toUpperCase().
  // Tu código:
}

function puedePasarAlEvento(edad, tieneEntrada, esVIP) {
  // puede pasar si edad >= 18 Y (tieneEntrada ES true OR esVIP ES true). Usá && y || explícitos.
  // Tu código:
}

function noEsValorFalso(valor) {
  // Devolvé true siempre que `valor` no sea EXACTAMENTE el boolean false (=== false debe fallar sólo ante false literal).
  // Ejemplos: 0, '', null, undefined, true deben devolver true; false devuelve false.
  // Usá negación explícita (!).
  // Tu código:
}

function clasificarSigno(num) {
  // Usá sólo expresiones ternarias (sin if/switch): devolvé la string 'positivo', 'negativo' o 'cero'.
  // Tu código:
}

function clasificarTipoDia(codigo) {
  // Usá switch. Códigos: 'lun'|'mar'|'mie'|'jue'|'vie' laborable -> 'habil'.
  // 'sab' o 'dom' -> fin de semana -> 'descanso'
  // Cualquier otro valor debe caer en default y devolver 'desconocido'
  // Tu código:
}

function sumaDesdeUnoConWhile(numeroFinal) {
  // Sumá 1+2+...+numeroFinal usando sólo while. Si numeroFinal < 1 devolvé 0.
  // Tu código:
}

function primerMultiploEnIntervaloDoWhile(inicio, divisor, limiteSuperior) {
  // Encontrá el primer múltiplo natural de divisor que sea >= inicio usando do...while.
  // Si divisor es 0 o no existe un múltiplo menor o igual a limiteSuperior, devolvé null.
  // Evitá bucles infinitos: cortá antes de sobrepasar limiteSuperior.
  // Tu código:
}

function tablaMultiplicacionForBase(base) {
  // Devolvé un array de 10 posiciones donde la posición k (0-index) es base * (k+1).
  // Usá sólo bucle for. Ejemplo base 5 -> [5,10,...,50]
  // Tu código:
}

function saludarConTitulo(nombre, titulo = 'Sr.') {
  // Valor por defecto ya está en la firma: devolvé `"Hola, titulo nombre!"` (con espacio y signos ej. Hola, Sr. Ana!)
  // Tu código:
}

function elevarConExponentePorDefecto(base, exponente = 2) {
  // exponente por defecto 2: devolvé base elevado exponente usando Math.pow o **.
  // Tu código:
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
