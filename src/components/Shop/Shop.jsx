import React from "react";
import "./Shop.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Shop() {
  return (
    <section
      className="shop_section"
      id="shop_section"
      role="region"
      aria-labelledby="shop-title"
    >
      <h1 id="shop-title">Healthy Toys – Tienda Oficial</h1>
      <h3>
        ¡Aprovechá los mejores descuentos en nuestra tienda de MercadoShops!
      </h3>
      <p>
        Visita nuestra tienda oficial de MercadoShop{" "}
        <img
          src="/mercado_libre_Isotip.png"
          alt="logo de Mercado Libre"
          loading="lazy"
        />{" "}
        descubre los productos Healthy Toys y aprovecha las promociones de
        temporada
      </p>
      <a
        href="https://healthytoys.mercadoshops.com.ar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar tienda oficial en MercadoShops"
      >
        <i>
          <ShoppingCartIcon />
        </i>{" "}
        Ver tienda
      </a>
    </section>
  );
}

export default Shop;
