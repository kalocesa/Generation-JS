export const Footer = ({ year, cohorte: ch }) => {
  const terminos = "Términos y condiciones";
  const copyright = "© Kati Sandoval";
  return (
    <>
      <div className="footer">
        <p>{terminos}</p>
        <p>
          Año {year}, Cohorte {ch}.
        </p>
        <p>
          <strong>{copyright}</strong>
        </p>
      </div>
    </>
  );
};
