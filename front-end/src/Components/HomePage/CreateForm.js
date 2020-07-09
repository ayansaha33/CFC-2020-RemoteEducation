import React from "react";
import { Form, Button } from "react-bootstrap";

export default function LoginForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control required type="text" placeholder="Last name" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit{" "}
      </Button>
    </Form>
  );
}
