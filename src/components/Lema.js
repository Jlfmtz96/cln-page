import "./Lema.css";
import AnimatedNumber from "./AnimatedNumber";

const Lema = () => {
  return (
    <div className="lema">
      <div className="lema-text">
        <h2>
          NUNCA POR LA FUERZA, CON LA RAZON SIEMPRE. EDUCANDO POR LA PATRIA
        </h2>
        <p>
          Tenemos como propósito desarrollar en nuestros estudiantes
          habilidades, destrezas, actitudes, valores que le permitan resolver
          problemas de manera analítica y crítica de la vida cotidiana,
          científica y tecnológica.
        </p>
      </div>

      <div className="contador">
        <div className="item-cont">
          <p className="number">
            <AnimatedNumber endValue={20} duration={2} />
          </p>
          <p className="category">años</p>
        </div>
        <div className="item-cont">
          <p className="number">
            <AnimatedNumber endValue={375} duration={3} />
          </p>
          <p className="category">años</p>
        </div>
        <div className="item-cont">
          <p className="number">
            <AnimatedNumber endValue={35} duration={2} />
          </p>
          <p className="category">años</p>
        </div>
      </div>

      <div>
        <a href="/conocenos" className="btnClass">
          Conocer más...
        </a>
      </div>
    </div>
  );
};

export default Lema;
