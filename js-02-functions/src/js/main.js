/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:
- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones: 
  -Nombre descriptivo: Debe indicar claramente lo que hace
  -Se recomienda no tener más de 3 parámetros 
  -Seguir el principio SOLID, sobre el principio de responsabilidad única. 
  (Single Responsability Principle)
  -Evitar efectos secundarios: Una función no debe de modificar variables externas.
*/

//=================================================================
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.
sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}
hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
*/

// Declaración de una función
console.log(saludar("Kati"));

function saludar(name) {
  return `Hola ${name}, soy una función declarada`;
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

//Realizar una funcion declarada que sume dos numeros, retorna el resultado de la suma

const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(2, 2));

// Realizar una función expresada que sume dos números, retorna el resultado de la suma
const sumarDosNumeros = function suma(num1, num2) {
  return num1 + num2;
};
console.log(sumarDosNumeros(3, 6)); // 9
let hora = 10;
let saludarDependiendoHora;
if (hora < 12) {
  saludarDependiendoHora = function () {
    return "Buenos días";
  };
} else {
  saludarDependiendoHora = function () {
    return "Buenas tardes";
  };
}
console.log(saludarDependiendoHora());

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.
sintaxis:
   ( function (parámetros ){} )( argumentos );
*/

(function setUp(name) {
  console.log(`Hola ${name}, soy una función autoinvocada`);
})("Erick");

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//Realizar una función declarada que calcule el área de un rectángulo
const rectangleArea = (height, width) => height * width;
console.log(`El área del rectangulo es ${rectangleArea(10, 6)} cm2`);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/

const grettingsPeople = (name) => `Hi ${name}, welcome!`;
console.log(grettingsPeople());
console.log(grettingsPeople("Kati"));

const grettingsPeopleDefault = (name = "Guest") => `Hi ${name}, welcome!`;
console.log(grettingsPeopleDefault());
console.log(grettingsPeopleDefault("Kati"));

//Realizar una function que tenga de parámetros el nombre y cohorte
//Los valores por default de los parámetros son nombre = participante y cohorte = cohorte Generation

const greetingGeneration = (
  name = "participante",
  cohorte = "Cohorte de Generation"
) => console.log(`Hola ${name}, bienvenido/a a la ${cohorte}`);

greetingGeneration();
greetingGeneration("Kati", "Cohorte 50");

console.log(parseInt("faba")); // NaN
console.log(parseInt("faba", 10)); // NaN

// base decimal(10 dígitos): 0,1,2,3,4,5,6,7,8,9
// base hexadecimal(16 dígitos): 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// base octal(8 dígitos): 0,1,2,3,4,5,6,7
// base binaria(2 dígitos): 0,1
console.log(parseInt("faba", 16)); // NaN

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

//Arrow function que reciba un parámetro y lo imprima en la consola
//Arrow function que reciba un parámetro y lo imprima con alert

//listaSuper("leche");

//const superLista = (comida) => alert(`Hoy necesito ${comida}, del Walmart`);
//superLista("harina");

/**
 * Funcion que imprima en consola o alert un mensaje
 * El parámetro mensaje = mensaje a imprimir;
 * el parámetro opcion = "consola" o "alert" el destino a imprimit
 */
const mensajeConsola = (mensaje) => console.log(mensaje);
//const mensajeAlerta = (mensaje) => alert(mensaje);
const mensajeTítulo = (mensaje) =>
  (document.getElementById("title").innerText = mensaje);

const mensajeDificil = (mensaje, opcion) => {
  if (opcion === "consola") {
    return mensajeConsola(mensaje);
  } else if (opcion === "alerta") {
    return mensajeAlerta(mensaje);
  } else if (opcion === "titulo") {
    mensajeTítulo(mensaje);
  }
};

mensajeDificil("Sí se pudo!", "consola");
//mensajeDificil("Sí se pudo!", "alerta");
mensajeDificil("Holiii", "titulo");

//Usar función de callback del ejercicio anterior

const mensajeDificilConCallback = (mensaje, callback) => callback(mensaje);
mensajeDificilConCallback("Hola Erick", mensajeConsola); //console.log
mensajeDificilConCallback("Hola Erick", mensajeTítulo); //innertext
mensajeDificilConCallback("Hola Erick", 589); //Error porque no es una funciòn
