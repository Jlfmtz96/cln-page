import "./Evento.css";

function EventoData(props) {
  return (
    <div className="e-card">
      <div className="e-image">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default EventoData;
