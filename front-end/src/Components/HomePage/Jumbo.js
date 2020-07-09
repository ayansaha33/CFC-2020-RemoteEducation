import React from "react";
import { Jumbotron, Button, Col, Form, Container } from "react-bootstrap";

export default function Jumbo() {
  return (
    <Jumbotron fluid style={{ marginTop: "8%" }} className="text-center">
      <h2>Welcome to Edumote</h2>
      <p>Start learning with your first Virtual classroom. Go to Class!</p>
      <Container>
        <Col lg={12}>
          <Form inline style={{ marginLeft: "35%" }}>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Paste URL Here"
            />
            <p>
              <Button variant="primary">Join Class</Button>
            </p>
          </Form>
        </Col>
      </Container>
    </Jumbotron>
  );
}
