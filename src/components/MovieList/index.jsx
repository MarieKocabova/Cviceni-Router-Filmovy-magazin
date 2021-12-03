import React from "react";
import movies from "./../../movies.js";

import { NavLink } from "react-router-dom";

import "./style.css";

const MovieList = () => {
  const menuClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="movie-list">
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li>
            <NavLink className={menuClass} to={`/movies/${movie.id}`} key={movie.id}>
              <div className="listItemDiv">
                {movie.title}
                <img className="thumbnail" src={`../assets/${movie.poster}`} alt="" />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieList;
