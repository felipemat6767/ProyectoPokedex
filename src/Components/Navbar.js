import React from 'react';
import Fondo from "../images/Fondo.jpg"
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="z" alt="S">
            <img src={Fondo} alt="" width="55px" height="50px" className="d-inline-block align-text-top" />
          </a>
          <div className="" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-around">
              <li className="nav-item px-3 TextoNav">
                <a className="nav-link " href="2" style = {{color: "rgb(219, 112, 112)"}}>Features</a>
              </li>
              <li className="nav-item px-3 TextoNav">
                <a className="nav-link" href="3" style = {{color: "rgb(219, 112, 112)"}}>Types</a>
              </li>
              <li className="nav-item px-3 TextoNav">
                <a className="nav-link" href="4" tabindex="-1" aria-disabled="true" style = {{color: "rgb(219, 112, 112)"}}>Fun Facts</a>
              </li>
            </ul>
          </div>
          <div>
            <span> 
            </span>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
