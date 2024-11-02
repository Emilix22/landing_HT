import React from "react";
import "./Rent.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Rent() {
  return (
    <section className="rent_section" id="rent_section">
      <h1>ALQUILER</h1>
      <h3>¡Haz de tu Evento una Experiencia Inolvidable con Healthy Toys!</h3>
      <p>
        ¿Estás planeando un cumpleaños, una reunión familiar o cualquier tipo de
        evento especial? En Healthy Toys, te ofrecemos la oportunidad de
        alquilar nuestros innovadores aparatos de entretenimiento saludable para
        añadir un toque único y divertido a tus celebraciones.
      </p>
      <img className="img1" src="/bouncerVerde.png" alt="fotoBouncer1" />
      <img className="img2" src="/bouncerRosa.png" alt="fotoBouncer2" />
      <img className="img3" src="/confetti-svgrepo-com.png" alt="confeti" />
      <img className="img4" src="/party-confetti-svgrepo-com.png" alt="confeti" />
      <a
        href="https://healthytoys.mercadoshops.com.ar/p/alquiler"
        target="blanck"
      >
        <i>
          <AccessTimeIcon />
        </i>{" "}
        Ver alquiler
      </a>
    </section>
  );
}

export default Rent;
