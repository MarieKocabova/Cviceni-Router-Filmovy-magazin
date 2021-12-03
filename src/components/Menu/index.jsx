import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Menu = () => {
  const menuClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="topnav">
      <NavLink className={menuClass} to="/">
        Home
      </NavLink>
      <NavLink className={menuClass} to="/reviews">
        Reviews
      </NavLink>
      <NavLink className={menuClass} to="/articles">
        Articles
      </NavLink>
      <NavLink className={menuClass} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Menu;
