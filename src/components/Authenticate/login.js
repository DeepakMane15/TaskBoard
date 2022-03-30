import { useEffect } from "react";
import {Form,Button,Label, Container} from 'react-bootstrap';
import React from 'react';
import './style.css';

const Login = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#0d1117"
        document.body.style.color = 'rgb(92 130 241)'
    })
    return ( 
    <Container className='content'>
        <div className='title'>
            Log in!
        </div>

    <div className="formBody">
       <Form className='formText'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  type="password" placeholder="Password" />
    <Form.Group  controlId="formBasicCheckbox">
    <Form.Check  type="checkbox"  label="Remember me"  />
    </Form.Group>
    <a style={{fontSize:'13px', cursor:"pointer"}}>
        forgot password?
    </a>
  </Form.Group>
 
  <Button  type="button" >
    Log in
  </Button>
<div>
<p style={{fontSize:'13px'}}>
        don't have an account? <a style={{color:'#fff'}} href="/signup"> signup here!</a>
    </p>
</div>
</Form>
        </div>
        </Container>
    )
}
export default Login;