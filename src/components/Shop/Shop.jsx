import React from 'react'
import "./Shop.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Shop() {
  return (
    <section className='shop_section' id='shop_section'>
      <h1>TIENDA</h1>
      <h3>¡No te pierdas los descuentos de nuestra tienda oficial!</h3>
      <p>Visita nuestra tienda oficial de MercadoShop <img src="/mercado_libre_Isotip.png" alt="logoML" /> descubre los productos Healthy Toys y aprovecha las promociones de temporada</p>
      <a href="https://healthytoys.mercadoshops.com.ar/" target='blanck'><i><ShoppingCartIcon /></i> Ver tienda</a>
    </section>
  )
}

export default Shop
