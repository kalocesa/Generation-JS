/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 *
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */

import { generateUsersCards } from "../../modules/cards/generateUsersCards.js";

const getUsers = (url) => {
  const createCards = (usersArray) => {
    document.getElementById("cards").innerHTML = generateUsersCards(usersArray);
  };

  fetch(url)
    .then((res) => res.json())
    .then((users) => createCards(users.data))
    .catch((error) => console.log(error))
    .finally(() => console.log("He terminado"));
};

// getUsers("https://reqres.in/api/users?delay=5"); //pagina 1 con retardo de 5seg, recordar que va users, delay y después la pagina
getUsers("https://reqres.in/api/users?page=2");
