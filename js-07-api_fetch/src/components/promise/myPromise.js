const primerPaso = () => {
  console.log("01 - Inicio de mi programa");
};
const segundoPaso = () => {
  const myPromise = new Promise((fncCallbackResolve, fncCallbackReject) => {
    let i = 0;

    for (; i < 1_000_000_000.1; i++) {
      i * 2;
    }

    i = 0;

    if (i >= 1_000_000_000.1) {
      fncCallbackResolve("02, Desarrollo de mi programa");
    } else {
      fncCallbackReject({
        error: 100,
        description: "Problemas con el cálculo de iteración",
      });
    }
  });

  return myPromise;
};

const tercerPaso = () => {
  console.log("03 - Fin de mi programa");
};

primerPaso();

segundoPaso()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

tercerPaso();
