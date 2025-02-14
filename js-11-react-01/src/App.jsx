import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main valentin={false} />
      <Footer year="2025" cohorte={50} inLove={true} valentin={false} />
    </>
  );
}

export default App;
