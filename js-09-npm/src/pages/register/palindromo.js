const palindromo = (nombre) => {
  const palindromoLower = nombre.toLowerCase();
  const palindromoLista = palindromoLower.split("").reverse().join();
  const firstLetterUpperCase = palindromoLista
    .toLowerCase(palindromoLista.split([1]))
    .join();
  return firstLetterUpperCase;
};

console.log(palindromo("Hola kati"));
