/* Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resulva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
 */

/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
*/

const getProducts = (url) => {
  //Manejo de fetch con .then() y .catch()
  /*
  fetch(resource)
  .then(callback) // se ejecuta el callback cuando la promesa sea resuelta
  .catch(callback) // se ejecuta el callback cuando la promesa es rechazada
  .finally(callback) // se ejecuta el callback independientemente de que sea resuelta o rechazada  
  */

  fetch(url)
    .then((res) => {
      console.log(res);
      res
        .json() // convierte de JSON a Objeto de js
        .then((productos) => console.log(productos))
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("He terminado"));
};
getProducts("https://fakestoreapi.com/products");
