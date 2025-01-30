const postres = [];

// Agregar un postres al final del arreglo.
postres.push("Pastel de Guayaba");
postres.push("Flan", "Gelatina");
console.log(postres); // ["Pastel de Guayaba", "Flan", "Gelatina"]

// Eliminar un postre del final del arreglo.
console.log(`Elemento eliminado con pop() ${postres.pop()}`); // Gelatina
console.log(postres); // ["Pastel de Guayaba", "Flan"]

// Agregar un postre al inicio del arreglo.
postres.unshift("Tiramisú");
console.log(postres); // ["Tiramisú", "Pastel de Guayaba", "Flan"]
// Eliminar un postre al inicio del arreglo.
console.log(`Elemento eliminado con shift() ${postres.shift()}`); // Tiramisú
console.log(postres); // ["Pastel de Guayaba", "Flan"]
// Buscar un elemento dentro del arreglo usando indexOf().
console.log(`Índice de "Flan": ${postres.indexOf("Flan")}`); // 1

//Buscar en "postres" el flan
//Si existe mostrar "El flan existe"
//Si no existe mostrar "El flan no existe"
//Con operador ternario

let mensaje = postres.includes("Flan") ? "El flan existe" : "El flan no existe";
console.log(mensaje);

console.log(
  postres.indexOf("Flan") != -1 ? "El flan existe" : "El flan no existe"
);

// =================================================
const pasteles = [
  "Pastel de Chocolate",
  "Pastel de Zanahoria",
  "Pastel de Limón",
];
const eliminarPastel = (array, indice) => {
  const pastelEliminado = array.splice(indice, 1);
  console.log(array); // ["Pastel de Chocolate", "Pastel de Limón"]
  return pastelEliminado;
};
eliminarPastel(pasteles, 1);
console.log(pasteles); // ["Pastel de Chocolate", "Pastel de Limón"]

// El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.

const eliminarElPastel = (array, indice) => {
  const copyArray = array.slice();
  const pastelEliminado = copyArray.splice(indice, 1);
  console.log(copyArray); // ["Pastel de Chocolate", "Pastel de Limón"]
  return pastelEliminado;
};
eliminarPastel(pasteles, 1);
console.log(pasteles); // ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"]

// Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []
const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const myArray5 = [5, 6]; // [5,6]
const myArray6 = new Array(5, 6); // [5,6]

// ================= Iterar un arreglo con for loop ==================
/*
Sintaxis: 
for ( let i = 0; i < array.length; i++){
console.log(array[i])
};
*/
const nombres = ["Juan", "Pedro", "María", "Ana"];

for (let index = 0; index < nombres.length; index++) {
  console.log(nombres[index]);
}

// ============ Iterar un  arreglo y mostrar los elementos como una lista ============
const gelatinas = ["Fresa", "Limon", "Naranja", "Uva"];
const gelatinasLista = [];
for (let index = 0; index < gelatinas.length; index++) {
  gelatinasLista.push(`<li> ${gelatinas[index]} </li>`);
}
console.log(gelatinasLista);
/* 
  [
   "<li> Fresa </li>", 
   "<li> Limon </li>", 
   "<li> Naranja </li>", 
   "<li> Uva </li>"
   ]
*/

const refGelatinasLista = document.getElementById("gelatina-lista");

refGelatinasLista.innerHTML = gelatinasLista.join("");

// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
for (let i = 0; i < colores.length; i++) {
  const element = colores[i];
  console.log(element);
}

console.log("Se itera con for of");

for (const color of colores) {
  console.log(color);
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función
 */

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");
const generarListaCantantes = (cantantesArray) => {
  const cantantesLista = [];
  for (const cantante of cantantesArray) {
    cantantesLista.push(`<li>${cantante}</li>`);
  }
  return cantantesLista.join("");
};
const insertarListaDeCantantesAlDOM = (lista, refDom) =>
  (refDom.innerHTML = lista);
const listItemsOfCantantes = generarListaCantantes(cantantes);
insertarListaDeCantantesAlDOM(listItemsOfCantantes, refListaCantantes);

let iteracion = 0;
for (;;) {
  console.log(`Núm de iteración: ${iteracion}`);
  iteracion++;
  if (iteracion === 5) {
    break;
  }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    if (i >= 4) break;
  }
}
