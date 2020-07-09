import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PriceCard from "./PriceCard";

export default class Price extends Component {
  render() {
    const Free = [
      "Unlimited 1 to 1",
      "Host upto 100 Students",
      "Chat and Video Conferencing",
    ];
    const Standard = [
      "Free Plan Features",
      "All Basic Features",
      "User Management",
      "Admin Feature Controls",
      "Assessments",
    ];
    const Pro = [
      "Free & Standard Features",
      "Generate Reports",
      "Dedicated Lecture Storage",
      "Admin Dashboard",
      "No Limit on meeting Duration",
    ];
    return (
      <Container>
        <h1 className="text-center">Plans and Pricing</h1>
        <Row
          style={{
            margin: "5%",
            marginTop: "5%",
          }}
        >
          <Col>
            <PriceCard name="Free" imgurl="" price="0" features={Free} />
          </Col>
          <Col>
            <PriceCard
              name="Standard"
              imgurl=""
              price="299"
              features={Standard}
            />
          </Col>
          <Col>
            <PriceCard name="Pro" imgurl="" price="599" features={Pro} />
          </Col>
        </Row>
      </Container>
    );
  }
}
