import React from "react";
import { Outlet } from "react-router-dom";

import MovieList from "../MovieList";

import "./style.css";

const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <p>V kinech právě hrají:</p>

      <div className="movies">
        <MovieList />
        <Outlet />
      </div>
    </>
  );
};

export default Movies;
