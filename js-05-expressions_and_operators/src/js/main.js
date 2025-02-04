// -------------- Operadores unarios ------------------
// Solo actuan sobre un operando
// Negación unaria (cambia el signo en números)
let numero = 3;
let dinero = -numero; // -3
console.log(numero, dinero); // 3, -3
// suma unaria (No cambia el signo el números)
let pago = +dinero; //
console.log(pago); // -3
let intereses = +"5.23"; // number
console.log(5 + intereses); //  10.23
console.log(5 + parseInt(intereses)); //  10.23
let pagoFinal = 0;
console.log((pagoFinal += 5 + +"3")); // 8
console.log((pagoFinal += 5 + parseFloat("3"))); // 8

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor
    -- valor
  Operador de post-incremento y post-decremento
    valor ++
    valor --
*/

// Uso de post-incremento
number = 20;
console.log(number); // 20
console.log((number = number + 1)); // 21
// valor++
number = 20;
console.log(number++); // 20
console.log(number); // 21

number = 100;
let kati = 10;
console.log(kati + +number); // 110
console.log(kati + ++number); // 111

// ------------ Ejercicio Mental ---------------------
let x = 3;
let y = x++; // y:3   x:4
console.log(`x :${x++} y:${++y}`); // x:4    y:4
// x:5
console.log(`x :${x} y:${y}`); // x:5     y:4

let a = 0;
b = 0;
for (; a < 3; b = a++) {
  console.log(a, b);
}
console.log(a, b);

a = 0;
b = 0;
for (; a < 3; b = ++a) {
  console.log(a, b);
}
console.log(a, b);

// =============Imprimir los valores d array ====================
const numeros = [2, 4, 5, 67, 8];
let indice = 0;
while (indice < numeros.length) {
  console.log("Número:", numeros[indice++]);
  //indice = indice + 1;
}

// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).
 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 && OP2 si OP1 es falso, se retorna la expresión de OP1.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 OP1 || OP2 Si OP2 es verdadero, se retorna la expresión de OP2.
 Se consideran falsos: "", 0, null, undefined, Nan. 

 OP1 ?? OP2 si OP1 es null o undefined retorna la expresión de OP2 
 OP1 ?? OP2 si OP2 es null o undefined retorna la expresión de OP1
*/

console.log(true && false); // false
console.log(true && "Usando corto circuito "); // "Usando corto circuito"
console.log("false" && "Mi mente sigue de vacaciones"); // "Mi mente sigue de vacaciones"
console.log(0 && "Chau, chau"); // 0
console.log("" && "Chau, chau"); // "" empty string
console.log(false && "Chau, chau"); // false

// ------------- casos prácticos -----------------------
// console.log(   variableSinDeclarar ); // La variable no ha sido declarada
console.log(true || variableSinDeclarar);
// -----------------------------------------------------
let loggedIn = false;
loggedIn && console.log("Bienvenido Usuario"); // false; NO se imprime en consola

// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true

let esAdmin = true;
esAdmin && console.log("Acceso permitidooo");

let nombre = "";
let usuario = nombre || "Invitado";
console.log(usuario); // "Invitado";

// ------------------ Ejercicio --------------------------
/*
  Imprimir en consola "Acceso Denegado" es la variable esAutorizado = true
  En caso contrario imprimir "Acceso concedido".
*/

const permitirAcceso = (esAutorizado) => {
  if (esAutorizado === true) {
    console.log("Acceso Denegado");
  } else {
    console.log("Acceso Permitido");
  }
};

permitirAcceso(false);

{
  let esAutorizado = true;
  esAutorizado && console.log("Acceso permitido con AND");
}

{
  let esAutorizado = true;
  esAutorizado = false || console.log("Acceso permitido con OR");
}

{
  let esAutorizado = true;
  esAutorizado = null ?? console.log("Acceso permitido con Coalescencia");
}

let autorizado = true;
let message = (autorizado && "Acceso concedido") || "Acceso denegado";
console.log(message);

let message = (autorizado = false && "Acceso concedido") || "Acceso denegado";
console.log(message);
