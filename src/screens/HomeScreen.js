import React from "react";
import Search from "../components/Search";
import MovieList from "../components/MovieList";

const HomeScreen = ({ setTitle, movies, clickHandler }) => {
  return (
    <>
      <Search setTitle={setTitle} />
      <MovieList movies={movies} clickHandler={clickHandler} type="Nominate" />
    </>
  );
};

export default HomeScreen;
