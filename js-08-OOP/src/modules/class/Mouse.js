/**
 * Herencia: mecanismo que permite a un objeto basarse en otro
 * objeto existente para heredar propiedades y métodos.
 * Esto permite la reutilización de código y la creación
 * de relaciones entre objetos, lo que facilita la
 * organización y la estructura del código.
 *
 * Para heredar en la declaración de la clase se usa la palabra extends
 */

import { Product } from "./Product.js";

class Mouse extends Product {
  #dpi;

  constructor(name, price, brand, dpi) {
    super(name, price, brand);
    this.#dpi = dpi;
  }

  set dpi(dpi) {
    this.#dpi = dpi;
  }

  get dpi() {
    return `${this.#dpi} dpis`;
  }

  //sobreescritura de métodos | polimorfismo
  card() {
    return `<h2 class="display-2">${this.name}</h2>
    <h3 class="display-3>${this.dpi}</h3>
    <p>Llévatelo por ${this.price}</p>`;
  }
}

export { Mouse };
