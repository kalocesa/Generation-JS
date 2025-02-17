/**
 *   Las props (abreviación de "properties") son parámetros
 *   que se pasan de un componente padre a
 *   un componente hijo para personalizar su comportamiento
 *   o apariencia.
 */

import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const cohorte = 50;
  const navbarJsx = (
    <nav>
      {/* Se imprime el número de cohorte */}
      <h2>{cohorte}</h2>
      <img src={props.src} alt={props.alt} />
      <ul className="lista">
        <li className="item">
          <Link to="/">Inicio</Link>{" "}
        </li>
        <li className="item">
          <Link to="/counter">Contador</Link>
        </li>
        <li className="item">
          <Link to="/acerca-de-nosotros">Acerca de nostros</Link>
        </li>
      </ul>
    </nav>
  );
  return navbarJsx;
};
