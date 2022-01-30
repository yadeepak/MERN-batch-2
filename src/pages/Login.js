import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqObj = { email, password: pwd };
    const response = await axios.post("http://localhost:3002/login", reqObj, {
      headers: {
        Authorization: "Basic YWRjQGdtYWlsLmNvbToxMjM0NTY=",
      },
    });
    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);
  };

  const verifyUser = async () => {
    const { data } = await axios.get("http://localhost:3002/verify-user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (data.name === "TokenExpiredError") {
      alert(data.message);
    }
  };
  return (
    <Row className="justify-content-center">
      <Col md="6">
        <Card className="p-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => setPwd(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>

      <Button variant="primary" type="button" onClick={verifyUser}>
        verify
      </Button>
    </Row>
  );
}
