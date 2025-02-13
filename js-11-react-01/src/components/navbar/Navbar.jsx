export const Navbar = () => {
  const cohorte = 50;
  const navbarJsx = (
    <nav>
      {/* Se imprime el número de cohorte */}
      <h2>{cohorte}</h2>
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
