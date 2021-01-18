import React from "react";
import { Card, Button } from "react-bootstrap";

const Movie = ({ movie, clickHandler, type }) => {
  const { Title, Year, Poster } = movie;

  return (
    <Card style={{ height: "18rem" }} className="mb-3 d-flex flex-row">
      <Card.Img src={Poster} style={{ width: "auto" }} />
      <Card.Body className="my-auto ml-3">
        <Card.Title>
          {Title} ({Year})
        </Card.Title>
        <Button variant="primary" onClick={() => clickHandler(movie)}>
          {type}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
