/**  Encapsulamiento: La encapsulación ayuda a proteger la integridad
 *  de los datos y asegura que un objeto mantenga su estado interno
 *  consistente. Al limitar el acceso directo a los datos internos
 *  de un objeto, se reduce la posibilidad de que estos datos sean
 *  modificados de manera incorrecta o que se produzcan efectos
 *  secundarios no deseados.
 **/

class Product {
  //El método constructor ayuda a inicializar un objeto/clase
  #name;
  #price;
  #brand;

  constructor(name = "---", price, brand) {
    this.#name = name;
    this.#price = price;
    this.#brand = brand;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set price(price) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set brand(brand) {
    this.#brand = brand;
  }

  get brand() {
    return this.#brand;
  }

  printPrice() {
    return `${this.#name} cuesta $${this.#price} MxN`;
  }

  card() {
    return `<h2 class="display-1">${this.name}</h2>
    <p>Llévatelo por ${this.price}</p>`;
  }
}

export { Product };
