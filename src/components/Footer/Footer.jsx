import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <section className="up_footer">
        <article className="articles_footer">
          <img src="/Healthy-Toys-Logo-2.png" alt="logoHT" />
        </article>
        <article className="articles_footer">
          <h3>Contactos</h3>
          <div className="contacts_footer">
            <Link to="https://www.instagram.com/bouncer.juego/" target="_blank">
              <i>
                <InstagramIcon />
              </i>
            </Link>
            <Link
              to=""
              target="_blank"
              onClick={(e) => {
                window.location.href = "https://wa.me/541136388857?text=Hola";
                e.preventDefault();
              }}
            >
              <i>
                <WhatsAppIcon />
              </i>
            </Link>
            <Link
              to=""
              target="_blank"
              onClick={(e) => {
                window.location.href = "mailto:consultas@healthytoys.online";
                e.preventDefault();
              }}
            >
              <i>
                <EmailIcon />
              </i>
            </Link>
          </div>
        </article>
      </section>

      <section className="down_footer">
        <p className="emilixWeb">
          Made with ❤️ by{" "}
          <Link id="emilixweb" to="https://emilixweb.com" target="_blank">
            EmilixWeb - 2024
          </Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
