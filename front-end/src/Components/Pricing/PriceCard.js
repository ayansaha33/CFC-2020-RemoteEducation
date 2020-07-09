import React from "react";
import { Card, Button } from "react-bootstrap";
import FeatureList from "./FeatureList";

export default class PriceCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img variant="top" src={this.props.imgurl} />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text className="text-muted">
            Rs. {this.props.price}/month
          </Card.Text>
          <Card.Text>
            <FeatureList features={this.props.features} />
          </Card.Text>
          <Button variant="primary">Get This Plan</Button>
        </Card.Body>
      </Card>
    );
  }
}
