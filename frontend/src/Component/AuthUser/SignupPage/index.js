import React, { useState } from "react";
import MainScreen from "../../MainScreen";
import Form from "react-bootstrap/Form";
import "./style.css";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import Button from "react-bootstrap/esm/Button";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://www.weebly.com/preview/m81348.5lbn7chk96ij9.d20809c3558041508efe4cdada54e4bb/291535356454646763"
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [varient, setVarient] = useState("success");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);
        const { data } = await axios.post(
          "http://localhost:5000/api/users",
          { name, email, password, pic },
          config
        );
        setError("User Created Successfully");
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setVarient("danger");
        setLoading(false);
      }
    } else {
      setError("Password Does not match");
      setVarient("danger");
    }
  };

  return (
    <div>
      <MainScreen title={"Register New User"}>
        <div className="formContainer">
          <Container>
            {error && <ErrorMessage variant={varient} child={error} />}
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password Again"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                  Select Your Pic
                </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </MainScreen>
    </div>
  );
}
