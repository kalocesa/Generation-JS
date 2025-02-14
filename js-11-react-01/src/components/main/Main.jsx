const si = {
  color: "red",
  fontFamily: "Arial",
};

const no = {
  color: "gray",
};

export const Main = ({ valentin }) => {
  const section = "Hola soy un section";
  const div = "Hola soy un div, úsame pero no mucho";
  const p =
    "Hola, soy un texto lleno de curiosidad y entusiasmo. Estoy aquí para ser leído, explorado y compartido. Mi propósito es ofrecerte información valiosa, entretenimiento y quizás un poco de inspiración. Cada palabra que ves es una oportunidad para aprender algo nuevo o ver el mundo desde una perspectiva diferente. ¡Vamos a sumergirnos en esta aventura de palabras juntos!";
  return (
    <>
      <section className="section">{section}</section>
      <div className="div">{div}</div>
      <p className="p">{p}</p>
      <p style={valentin ? si : no}>¿Quieres ser mi Valentin ❤️?</p>
    </>
  );
};
