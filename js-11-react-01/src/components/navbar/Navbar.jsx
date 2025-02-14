/**
 *   Las props (abreviación de "properties") son parámetros
 *   que se pasan de un componente padre a
 *   un componente hijo para personalizar su comportamiento
 *   o apariencia.
 */

export const Navbar = (props) => {
  const cohorte = 50;
  const navbarJsx = (
    <nav>
      {/* Se imprime el número de cohorte */}
      <h2>{cohorte}</h2>
      <img src={props.src} alt={props.alt} />
      <ul className="lista">
        <li className="item">
          <a href="">Inicio</a>
        </li>
        <li className="item">
          <a href="">Productos</a>
        </li>
        <li className="item">
          <a href="">Contacto</a>
        </li>
      </ul>
    </nav>
  );
  return navbarJsx;
};
