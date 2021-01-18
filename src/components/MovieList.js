import React from "react";
import { ListGroup } from "react-bootstrap";
import Movie from "./Movie";

const MovieList = ({ movies, clickHandler, type }) => {
  return (
    <ListGroup variant="flush">
      {movies &&
        movies.map((movie) => (
          <Movie
            key={movie["imdbID"]}
            movie={movie}
            clickHandler={clickHandler}
            type={type}
          />
        ))}
    </ListGroup>
  );
};

export default MovieList;
