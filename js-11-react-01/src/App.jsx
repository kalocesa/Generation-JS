import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer year="2025" cohorte={50} />
    </>
  );
}

export default App;
