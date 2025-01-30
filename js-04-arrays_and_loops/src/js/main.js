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
