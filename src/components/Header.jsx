import React from "react";
import { InputGroup, Form, Button, Col } from "react-bootstrap";

const Header = ({ handleSubmit, text, handleChange }) => {
  return (
    <div className="mt-4 mx-auto">
      <h1 className="text-center text-white py-3">Todo App</h1>
      <Col lg={6} md={12} className="m-auto">
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              placeholder="Enter new todo..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={text}
              onChange={handleChange}
              className="bg-transparent input text-white"
            />
            <Button variant="success" type="submit" id="button-addon2">
              Add Todo
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </div>
  );
};

export default Header;
