import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from "../../UI/Navbar/Navbar";
import logo from "../../../assets/img/logo.jpeg";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h2>Portafolio</h2>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Navbar />
      </nav>
    </header>
  );
};