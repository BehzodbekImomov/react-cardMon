// import React, { useState } from "react";
import { Button, Form, Col, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState({ userName: "", password: "" });
  // const login = (e) => {
  //   e.preventDefault();
  //   if (user.userName === "behzod" && user.password === "123") {
  //     navigate("/home");
  //   } else {
  //     alert("Ma'lumotlarni kiriting!");
  //   }
  //  function handlChange  (e)  {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };
  // };
  return (
    <Container className="login-bg">
      <Form  className="d-flex align-items-center justify-content-center flex-column mt-5">
        <Col className="mb-3 mt-5 ">
          <Form.Group className="" as={Col} controlId="formGridEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="" as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Col>
        <Button
          variant="primary"
          type="submit"
          // onChange={handlChange}
          // onClick={login}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
