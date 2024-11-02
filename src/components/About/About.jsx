import React from 'react'
import "./About.css"
import InfoIcon from "@mui/icons-material/Info";

function About() {
  return (
    <section className='about_section' id='about_section'>
      <h1>QUIENES SOMOS</h1>
      <h3>Conoce nuestra historia y nuestros valores</h3>
      <p>Healthy Toys es una empresa familiar, somos apasionados por el deporte y compartimos la visión de un mundo más saludable y activo. Nuestra misión es proporcionar aparatos de entrenamiento deportivo de alta calidad que inspiren a las personas a alcanzar sus metas de bienestar y rendimiento físico.</p>
      <img className="img1" src="/Healthy-Toys-Logo-2.png" alt="nosImg" />
      <a href="https://healthytoys.mercadoshops.com.ar/p/quienes-somos" target='blanck'><i><InfoIcon /></i> Saber más</a>
    </section>
  )
}

export default About
