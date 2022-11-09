import React from "react";
import Card from "react-bootstrap/Card";
import "./Event.css";

const Event = (props) => {
  return (
    <div>
      <Card>
        <Card.Body key={props._id}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.location}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>
            <span>{props.date}</span>
            <span> </span>
            <span>{props.time}</span>
          </Card.Text>
          <Card.Link href={props.attendance} target="_blank">
            {props.attendance}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Event;
