/**
 *  Obtener los usuarios de la siguiente URL e imprimir en consola
 *  https://reqres.in/
 *
 *  Lista de usuarios: https://reqres.in/api/users?page=2
 */

const getUsers = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error))
    .finally(() => console.log("He terminado"));
};

getUsers("https://reqres.in/api/users?delay=5");
getUsers("https://reqres.in/api/users?page=2");
