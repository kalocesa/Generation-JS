/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () => {
  // document: representa cualquier página web carga en el navegador
  //         sirve como punto e entrada al contenido de la página.
  //         document es el objeto principal del DOM.
  const descripcionOperadores = document.getElementById(
    "descripcion-operadores"
  );

  console.log(descripcionOperadores);
  descripcionOperadores.innerHTML =
    // inner.text "document: representa cualquier página web carga en el navegador.";
    // inner.HTML"<strong> document: </strong> representa cualquier página web carga en el navegador.";
    '<span class="text-warning"> document: </span> representa cualquier página web carga en el navegador.';
};

changeElementById();

const changeElementByTagName = () => {
  const listItems = document.getElementsByTagName("li");
  console.log(listItems);
};

changeElementByTagName();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () => {
  const element = document.querySelector("descripcion-operadores");
  console.log(element);
};
getElementsByQuerySelector();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelectorTypes = () => {
  // document.getElementById("descripcion-operadores");
  const element = document.querySelector("#descripcion-operadores");
  console.log(element);
  const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre
  console.log(elementParagraph);
  const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
  console.log(classTextCenter);
  const anchorAndTextWarning = document.querySelector("a");
  console.log(anchorAndTextWarning);
};
getElementsByQuerySelectorTypes();

const getElementBySelector = () => {
  const listItems = document.querySelectorAll(".text-start li ");
};

const dinoImage = () => {
  const dino = document.querySelector(".img-fluid");
  console.log(dino);
};

dinoImage();
