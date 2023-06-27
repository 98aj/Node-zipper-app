import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright @ Abhishek Junagade</Col>
        </Row>
      </Container>
    </footer>
  );
}
