import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="" src={props.heroImg} />
      </div>

      <div className="hero-text">
        <h2>{props.subtitle}</h2>
        <h1>{props.title}</h1>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;
