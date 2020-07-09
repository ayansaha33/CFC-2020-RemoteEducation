import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";

export default function Carous() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Carousel
            style={{
              width: "60%",
              marginLeft: "20%",
              marginTop: "5%",
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Virtual Classroom</h3>
                <p>
                  A virtual classroom can bring students together, regardless of
                  their location, to enable education.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Provides Multiple Tests and Assessments</h3>
                <p>
                  Where the current crop of students stand regarding abilities
                  and skill sets. In short, assessment is crcuial feedback of
                  virtual teaching.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Enables Asynchronous (self-paced) Learning</h3>
                <p>
                  The ability to learn and complete coursework at one’s own
                  pace.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
