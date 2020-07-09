import React from "react";
import { ListGroup } from "react-bootstrap";

export default class FeatureList extends React.Component {
  render() {
    return (
      <ListGroup variant="flush">
        {this.props.features.map((feature) => {
          return <ListGroup.Item>{feature}</ListGroup.Item>;
        })}
      </ListGroup>
    );
  }
}
