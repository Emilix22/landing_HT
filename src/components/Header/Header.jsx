import React from "react";
import "./Header.css";
import { HashLink } from 'react-router-hash-link';
import scrollHeader from "../../services/scrollHeader";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CakeIcon from "@mui/icons-material/Cake";
import InfoIcon from "@mui/icons-material/Info";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import closeMenu from "../../services/closeMenu";


function Header() {
  scrollHeader()
  return (
    <header className="header">
      <figure className="logo_header">
        <img src="/logoHT.png" alt="logo_Healthy_Toys" />
      </figure>
      <input
        type="checkbox"
        name="hamburguer_menu"
        className="hamburguer_menu"
        id="hamburguer_menu"
      />
      <nav className="menu" id="menu">
        <ul className="options">
          <li>
            <HashLink smooth to="#" onClick={closeMenu}>
              <i>
                <HomeIcon />
              </i>{" "}
              Inicio
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#exercises_section" onClick={closeMenu}>
              <i>
                <SportsSoccerIcon />
              </i>{" "}
              Ejercicios
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#shop_section" onClick={closeMenu}>
              <i>
                <ShoppingCartIcon />
              </i>{" "}
              Tienda
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#rent_section" onClick={closeMenu}>
              <i>
                <CakeIcon />
              </i>{" "}
              Alquiler
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about_section" onClick={closeMenu}>
              <i>
                <InfoIcon />
              </i>{" "}
              Quienes Somos
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#enterprises_section" onClick={closeMenu}>
              <i>
                <LocationCityIcon />
              </i>{" "}
              Empresas
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#footer" onClick={closeMenu}>
              <i>
                <ContactMailIcon />
              </i>{" "}
              Contacto
            </HashLink>
          </li>
        </ul>
      </nav>
      <label className="icon_hamburguer" id="icon_hamburguer" htmlFor="hamburguer_menu">
        <MenuIcon />
      </label>
    </header>
  );
}

export default Header;
