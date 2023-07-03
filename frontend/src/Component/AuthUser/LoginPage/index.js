import React, { useState } from "react";
import MainScreen from "../../MainScreen";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);

      setLoading(false);
    }
  };

  return (
    <div>
      <MainScreen title={"Login User"}>
        <div
          className="loginContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          {error && <ErrorMessage variant={"danger"} child={error} />}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Id"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontSize: "1rem", fontWeight: 400 }}>
                PassWord
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              New Customer ? |{" "}
              <Link to="/signup" style={{ color: "black" }}>
                Sign-up
              </Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    </div>
  );
}

export default LoginPage;
