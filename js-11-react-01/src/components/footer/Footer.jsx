export const Footer = () => {
  const terminos = "Términos y condiciones";
  const copyright = "© Kati Sandoval";
  return (
    <>
      <div className="footer">
        <p>{terminos}</p>
        <p>
          <strong>{copyright}</strong>
        </p>
      </div>
    </>
  );
};
