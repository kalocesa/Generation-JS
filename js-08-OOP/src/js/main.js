import { insertMainHeader } from "/src/modules/header/header.js";
import { insertMainFooter } from "/src/modules/footer/footer.js";
import {
  amdRadeonRx,
  mouseGamerPixArt,
} from "../modules/class/amd-radion-rx.js";
import { Product } from "../modules/class/Product.js";
import { Mouse } from "../modules/class/Mouse.js";

insertMainHeader();
insertMainFooter();

console.log(amdRadeonRx);
// Podemos acceder a los atributos usando el operador objeto.atributo (access and call), n.precedence: 17
// podemos acceder usando objeto[nombreAtributo]

// Accediendo al modelo
console.log(amdRadeonRx.model);
// console.log( amdRadeonRx["model"] );
let attribute = "model";
console.log(amdRadeonRx[attribute]);

attribute = "price";
console.log(amdRadeonRx[attribute]);

// Acceder al atributo "title" e imprimir en consola

console.log(amdRadeonRx.title);

console.log(amdRadeonRx["title"]);

attribute = "title";
console.log(amdRadeonRx[attribute]);

console.log(amdRadeonRx.dato1);
console.log(mouseGamerPixArt.dato1);

console.log(mouseGamerPixArt.compatibilidad);

//Obteniendo el número de elementos
console.log(amdRadeonRx.compatibilidad.length);
console.log(mouseGamerPixArt.compatibilidad?.length);

console.log(amdRadeonRx.imprimirPrecioMxN());
console.log(amdRadeonRx.imprimirPrecioDolares());

const mouseLogi = new Product("mouse", 800, "logiTech");
const teclado = new Product("teclado");
const monitor = new Product("monitor");
const bateria = new Product();

console.table(mouseLogi);

console.log(mouseLogi.printPrice());

const mouseMac = new Mouse("Mouse Mac", 1400, "Mac", "3000");
console.log(mouseMac.printPrice());
