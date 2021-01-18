import React from "react";
import MovieList from "../components/MovieList";

const Nominations = ({ movies, clickHandler }) => {
  if (movies.length !== 0) {
    return (
      <MovieList movies={movies} clickHandler={clickHandler} type="Remove" />
    );
  } else {
    return (
      <h2>
        You haven't nominated any movies yet! <i class="fas fa-frown-open"></i>
      </h2>
    );
  }
};

export default Nominations;
