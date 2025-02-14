let x = 10;
let y = 20;

console.log(x, y);
// p

let variableTemporal = x;
x = y;
y = variableTemporal;

console.log(x, y);

//Ejemplo de desestructuración con variables
[x, y] = [y, x];
// -----------------------------------------

const numeros = [1, 2, 3, 4];
let a;
let b;
let c;

// forma tradicional
// a = numeros[0];
// b = numeros[1];
// c = numeros[3];

[a, b] = numeros;
console.log(a, b, c);

//---------------------------
const [valueA, valueB, , valueC] = numeros;

//Ejercicio
// Ejercicio
// Del siguiente arreglo ["Isabel", "María", "Ana", "Luis", "Pedro"];
// Extraer en variables independientes los valores de Isabel y Ana

const nombres = ["Isabel", "María", "Ana", "Luis", "Pedro"];

const [nombre1, , nombre2] = nombres;
console.log(nombre1, nombre2);

const datosMiguel = {
  name: "Miguel",
  lastName: "González",
  age: 20,
};

const { age, name } = datosMiguel;
console.log(nombre, age);

const product = {
  name: "Jabón Zote",
  precio: {
    frontera: 10,
    zonaCentro: 20,
    korea: 1000,
  },
  color: "blanco",
};

//Obtener en variables independientes el valor de name y color
const { name: nombreProductos, color: colorProducto } = product;
console.log(nombreProducto, colorProducto);

//Desestructurando un objeto dentro de un objeto
// const { frontera } = product.precio;
// Obtener el color de precio en frontera
const {
  color: colorJabon,
  precio: { frontera: precioFrontera },
} = product;
console.log(colorJabon, precioFrontera);

// Desestructurar el name y precio de korea, renombrar las variables
// name -> nombre Producto
// precio.kores -> precioKorea
const {
  name: nombreProducto,
  precio: { korea: precioKorea },
} = product;

console.log(nombreProducto, precioKorea);
