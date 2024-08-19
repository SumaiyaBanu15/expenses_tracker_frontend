import React from "react";
import PropTypes from 'prop-types';
import "./navbarstyles.css";
import { menuItems } from "../../utilis/MenuItems";
import { logout } from "../../utilis/icons";
import logo from "../../assets/Images/logo.jpeg";

function NavBar({ active, setActive }) {
  return (
    <>
      <div className="container">
        <div className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="App Logo" className="logo-img" />
            <p>Expenses Tracker</p>
          </div>
          <ul className="menu-items">
            {menuItems.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>

          <div className="bottom-nav">
            <li>{logout} Sign Out</li>
          </div>
        </div>
      </div>
    </>
  );
}

// Define prop types for the NavBar component
NavBar.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
}
//  The PropTypes library is used to define the expected types of props that a component should receive. This helps with type checking during development

export default NavBar;
