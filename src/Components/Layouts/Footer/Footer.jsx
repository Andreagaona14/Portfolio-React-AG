import React from "react";
import { NavbarFooter } from "../../UI/NavbarFooter/NavbarFooter";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="social-title">Conecta conmigo</div>
      <NavbarFooter />
      <p>&copy; Andrea Gaona {new Date().getFullYear()}</p>
    </footer>
  )
}