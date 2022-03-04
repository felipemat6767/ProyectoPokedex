import React from 'react';
import { Link } from 'react-router-dom';

import NavbarImage from "../images/NavbarImage.jpg"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/" alt="S">
          <img src={NavbarImage} alt=""  height="50px" className="d-inline-block align-text-top" />
        </Link>
        <div className="" id="navbarNav">
          <Link className="nav-link TextoNav" to="/search">Busqueda por Nombre</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
