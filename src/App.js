import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import NominationScreen from "./screens/NominationScreen";

const App = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const urlEncodedTitle = encodeURI(title);
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=a1f80a00&s=${urlEncodedTitle}`
      );
      const results = await response.data;
      setMovies(results["Search"]);
    };
    fetchMovies();
  }, [title]);

  const nominate = (movie) => {
    if (
      !nominatedMovies.find(
        (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
      )
    ) {
      setNominatedMovies([...nominatedMovies, movie]);
    }
  };

  const removeNomination = (movie) => {
    setNominatedMovies(
      nominatedMovies.filter(
        (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
      )
    );
  };

  return (
    <Router>
      <Header />
      <main className="mt-5">
        <Container>
          <Route path="/" exact>
            <HomeScreen
              setTitle={setTitle}
              movies={movies}
              clickHandler={nominate}
            />
          </Route>
          <Route path="/nominations" exact>
            <NominationScreen
              movies={nominatedMovies}
              clickHandler={removeNomination}
            />
          </Route>
        </Container>
      </main>
    </Router>
  );
};

export default App;
