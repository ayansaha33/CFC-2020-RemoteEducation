import React, { Component } from "react";
import { Navbar, Container, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    let fullYear = new Date().getFullYear();

    return (
      <Navbar
        style={{ marginTop: "9%" }}
        sticky="bottom"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Col className="text-center text-muted">
            <div>
              {fullYear}-{fullYear + 1}, All Rights Reserved by AYAN_S_CFC
            </div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}
