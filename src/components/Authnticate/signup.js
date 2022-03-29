import { useEffect } from "react";
import React from 'react';
import {Form,Button,Label, Container} from 'react-bootstrap';
import './style.css';


const Signup = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#1c437e"
        document.body.style.color = '#fff'
    })
    return ( 
    <Container className='content'>
        <div  className='title'>
            Sign up
        </div>

    <div className="formBody">
       <Form style={{textAlign:'center'}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control  
    type="email" 
    placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  
    type="email" 
    placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  
    type="password" 
    placeholder="Password" />
    <Form.Group  controlId="formBasicCheckbox">
    <Form.Check  
    type="checkbox"  
    label="I accept the terms and conditions"  />
    </Form.Group>
  </Form.Group>
 
  <Button 
  type="button" >
    Sign up
  </Button>
  <div>
<p style={{fontSize:'13px'}}>
        already have an account? <a style={{color:'#fff'}} href="/login"> Log in here!</a>
    </p>
</div>
</Form>
        </div>
        </Container>
    )
}
export default Signup;