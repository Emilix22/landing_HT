import React from "react";
import "./Exercises.css";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Exercises() {
  return (
    <section className="exercises_section" id="exercises_section">
      <h1>EJERCICIOS</h1>
      <h3>¡Sigue el plan de entrenamiento exclusivo!</h3>
      <p>
        En nuestro canal de youtube encontrarás muchos ejercicios para mejorar tu técnica individual y divertirte mientras entrenas con <img src="/BOUNCER.png" alt="logoML" />, un entretenimiento saludable de Healthy Toys.
      </p>
      <a href="https://www.youtube.com/@HealthyToys" target="blanck"><i><YouTubeIcon /></i> Ver ejercicios</a>
      <video src="/backgroun_exercises.mp4" muted autoPlay loop className="video_exercises"></video>
      <video src="/backgroun_exercises.mp4" muted autoPlay loop className="video_exercises"></video>
    </section>
  );
}

export default Exercises;
