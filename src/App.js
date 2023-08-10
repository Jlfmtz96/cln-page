import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Offer from "./routes/Offer";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<About />} />
        <Route path="/oferta-academica" element={<Offer />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}
