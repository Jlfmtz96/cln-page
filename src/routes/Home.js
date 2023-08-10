import Avisos from "../components/Avisos";
import Evento from "../components/Evento";
import Hero from "../components/Hero";
import Lema from "../components/Lema";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://celialechonnoyola.edu.mx/wp-content/uploads/2023/08/IMG_5003-scaled.jpg"
        title="PROFRA. CELIA LECHÓN NOYOLA"
        subtitle="ESCUELA PREPARATORIA"
      />

      <Lema />

      <Avisos />

      <Evento />
    </>
  );
}

export default Home;
