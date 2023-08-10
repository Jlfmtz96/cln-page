import "./Avisos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Avisos() {
  return (
    <div className="aviso">
      <div className="calendario">
        <h3>Calendario:</h3>
        <img
          src="https://slp.gob.mx/seer/PublishingImages/Calendario-SEP-2022-2023.jpg"
          alt=""
        />
      </div>

      <div className="avisos">
        <h3>Avisos:</h3>
        <Carousel autoPlay interval={3000} infiniteLoop>
          <div>
            <img
              src="https://images.pexels.com/photos/17589784/pexels-photo-17589784/free-photo-of-monitor-hora-retro-relojes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen 1"
            />
          </div>
          <div>
            <img src="imagen2.jpg" alt="Imagen 2" />
          </div>
          <div>
            <img src="imagen3.jpg" alt="Imagen 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Avisos;
