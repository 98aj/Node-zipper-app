import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/esm/Badge";

export default function Accordion({ title, category, content, id }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <Card className="my-2">
      <Card.Header
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => {
          setDropDown(!dropDown);
        }}
      >
        <strong
          style={{
            alignSelf: "center",
            cursor: "pointer",
            fontSize: "1.15rem",
            fontWeight: 700,
          }}
        >
          {title}
        </strong>
        <div>
          <Button className="mx2" href={`/note/${id}`}>
            Edit
          </Button>
          <Button variant="danger" className="mx-2">
            Delete
          </Button>
        </div>
      </Card.Header>

      <Card.Body
        className="cardbody"
        style={{
          display: dropDown ? "block" : "none",
        }}
      >
        <h4>
          <Badge bg="success">{category}</Badge>
        </h4>
        <blockquote className="blockquote mb-0">
          <p>{content}</p>
          <footer className="blockquote-footer">Created on - date</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
