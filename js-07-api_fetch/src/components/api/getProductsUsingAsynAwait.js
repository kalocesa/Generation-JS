/*
 */

const getProductsUsingAsyncAwait = async (url) => {
  console.log("Estoy iniciando en la función con Async y Await");
  const resolve = await fetch(url);
  const products = await resolve.json();
  console.log(products);
  console.log("Finalizado la peticion fetch con Async y Await");
};
getProductsUsingAsyncAwait("https://fakestoreapi.com/products");

/*const getProductsUsingAsyncAwait = async (url) => {
  const createCards = (usersArray) => {
    document.getElementById("cards").innerHTML = generateUsersCards(usersArray);
  };
  const resolve = await fetch(url);
  const usuarios = await resolve.json();
  createCards(usuarios.data);
};
getProductsUsingAsyncAwait("https://reqres.in/api/users?page=2");*/
