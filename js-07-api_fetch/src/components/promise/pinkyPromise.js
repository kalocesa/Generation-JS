const pinkyPromise = (comida) => {
  const myPromise = new Promise((res, rej) => {
    if (comida === "elote") {
      res("Tengo mi elote");
    } else {
      rej("No tengo mi elote");
    }
  });
  return myPromise;
};

pinkyPromise("elote")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

pinkyPromise("brocoli")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
