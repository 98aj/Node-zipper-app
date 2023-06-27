import React from "react";
import "./style.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

export default function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">Safest place to store your notes.</p>
          </div>

          <div className="buttonContainer">
            <a href="/">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
            <a href="/">
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Sigin
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}
