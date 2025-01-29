/*

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia;
    if ( condición ) {
        sentencias;
    }
    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;
    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }
    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;

    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

let temperatura = 30;

/**
 * FUnción que reciba la temperatura y devuelve un mensaje
 * Si la temperatura = 22 grados: La temperatura es ideal
 * Si la temperatura = 15 a 21 grados: La temperatura es fresca
 * Si la temperatura < 15 grados: La temperatura es fría
 * Si la temperatura > 22 grados: La temperatura es calurosa y le gustaría a Nan
 *
 */

const getTemperature = (number) => {
  if (number === 22) {
    return console.log(`La temperatura de ${number} grados es ideal`);
  } else if (number >= 15 && number <= 21) {
    return console.log(`La temperatura de ${number} grados es fresca`);
  } else if (number < 15) {
    return console.log(`La temperatura de ${number} grados es fría`);
  } else {
    return console.log(
      `La temperatura de ${number} es calurosa y le gustaría a Nan`
    );
  }
};
getTemperature(22);
getTemperature(15);
getTemperature(18);
getTemperature(21);
getTemperature(14);
getTemperature(2);
getTemperature(23);
getTemperature(45);

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===
 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/

temperatura = 15;
switch (temperatura) {
  case 22:
    console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
    break;
  case 15:
    console.log("estoy en 15 grados");
  case 16:
    console.log("estoy en 16 grados");
  case 17:
    console.log("estoy en 17 grados");
  case 18:
    console.log("estoy en 18 grados");
  case 19:
    console.log("estoy en 19 grados");
  case 20:
    console.log("estoy en 20 grados");
  case 21:
    console.log(`La temperatura de ${temperatura}° es fresca.`);
    break;
  case 13:
  case 14:
    console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
    break;
  default:
    console.log(
      `La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`
    );
    break;
}

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */
console.log("método Switch");
const getSpeed = (number) => {
  switch (number) {
    case 0:
      return `La velocidad del ventilador es de ${number} / APAGADO`;
    case 1:
      return `La velocidad del ventilador es de ${number} / BAJA`;
    case 2:
      return `La velocidad del ventilador es de ${number} / MEDIA`;
    case 3:
      return `La velocidad del ventilador es de ${number} / ALTA`;
    default:
      return `La velocidad del ventilador es de ${number} / DESCONOCIDA`;
  }
};

console.log(getSpeed(0));
console.log(getSpeed(1));
console.log(getSpeed(2));
console.log(getSpeed(3));
console.log(getSpeed(10));

console.log("método if");
const getSpeedIf = (number) => {
  if (number === 0) {
    return console.log(`La velocidad del ventilador es de ${number}/APAGADO`);
  } else if (number === 1) {
    return console.log(`La velocidad del ventilador es de ${number} BAJA`);
  } else if (number === 2) {
    return console.log(`La velocidad del ventilador es de ${number}/MEDIA`);
  } else if (number === 3) {
    return console.log(`La velocidad del ventilador es de ${number}/ALTA`);
  } else {
    return console.log(
      `La velocidad del ventilador es de ${number}/DESCONOCIDA`
    );
  }
};

getSpeedIf(0);
getSpeedIf(1);
getSpeedIf(2);
getSpeedIf(3);
getSpeedIf(-1);
