import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default class ContactUs extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Contact Us</h1>
        <Row>
          <Col lg={6} style={{ marginLeft: "22%", marginTop: "5%" }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
