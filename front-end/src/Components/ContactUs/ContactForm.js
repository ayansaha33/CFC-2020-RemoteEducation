import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class ContactForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control required type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Enter 10-digit number"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" placeholder="Enter a valid email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Write your message" />
        </Form.Group>
        <Form.Group className="text-center">
          <Button variant="primary" type="submit">
            Submit{" "}
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
