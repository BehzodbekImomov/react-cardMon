import { useState } from "react";
import { Button, Form, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate =useNavigate();

  const [user,setUser]=useState({username:"",password:""})

  const login = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.username === "behzod" && user.password === "123") {
      
      navigate("/debts");
    } else {
      alert("Check info !");
    }
  };

  const handleChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }


  return (
    <div className="login-bg ">

    <Container >
      <Form  className=" form d-flex align-items-center justify-content-center flex-column ">
        <Col className="mb-3 mt-5 ">
          <Form.Group className="mt-5"  as={Col} controlId="formGridEmail">
            <Form.Label className="mt-5 label" >User Name</Form.Label>
            <Form.Control className="mb-3 input " name="username" value={user.username} onChange={handleChange} type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group   as={Col} controlId="formGridPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control className="input" name="password" value={user.password} onChange={handleChange} type="password" placeholder="Password" />
          </Form.Group>
        </Col>
        <Button onClick={login} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default Login;
