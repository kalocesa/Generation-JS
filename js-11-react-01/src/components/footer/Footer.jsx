const coloresVivos = {
  color: "green",
  backgroundColor: "yellow",
  fontSize: "30px",
  fontFamily: "Arial",
};

const coloresMuertos = {
  color: "black",
  backgroundColor: "gray",
  fontSize: "18px",
  fontFamily: "Times New Roman",
};

export const Footer = ({ year, cohorte: ch, inLove }) => {
  const terminos = "Términos y condiciones";
  const copyright = "© Kati Sandoval";
  return (
    <>
      <div className="footer">
        <p>{terminos}</p>
        <p style={{ color: "purple", fontFamily: "Arial" }}>
          Año {year}, Cohorte {ch}.
        </p>
        <p style={inLove ? coloresVivos : coloresMuertos}>
          Feliz 14 de febrero, también el 15, 16 y todos días
        </p>
        <p>
          <strong style={{ color: "gray" }}>{copyright}</strong>
        </p>
      </div>
    </>
  );
};
