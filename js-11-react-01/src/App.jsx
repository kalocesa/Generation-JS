import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Counter } from "./components/counter/Counter";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main valentin={true} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/acerca-de-nosotros" element={<AboutUs />} />
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      <Footer year="2025" cohorte={50} inLove={true} />
    </BrowserRouter>
  );
}

export default App;
