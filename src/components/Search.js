import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Search = ({ setTitle }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTitle(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Movie title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie title"
          onChange={inputHandler}
          value={inputValue}
        />
      </Form.Group>
    </form>
  );
};

export default Search;
