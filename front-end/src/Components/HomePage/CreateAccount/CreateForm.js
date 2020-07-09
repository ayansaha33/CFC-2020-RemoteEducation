import React from "react";
import { Form, Button } from "react-bootstrap";

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", email: "", password: "" };

    this.handleFirst = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name="firstname"
            onChange={this.handleFirst}
            input={this.state.firstname}
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            name="lastname"
            onChange={this.handleLast}
            input={this.state.lastname}
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={this.handleEmail}
            input={this.state.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={this.handlePass}
            input={this.state.password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
