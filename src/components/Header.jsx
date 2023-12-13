import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const Header = ({ handleSubmit, text, handleChange }) => {
  return (
    <div className="mt-4 mx-auto">
      <h1 className="text-center text-danger py-3">Todo App</h1>

      <Form onSubmit={handleSubmit} className="w-100">
        <InputGroup>
          <Form.Control
            placeholder="Enter new todo..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={text}
            onChange={handleChange}
          />
          <Button variant="success" type="submit" id="button-addon2">
            Add Todo
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Header;
