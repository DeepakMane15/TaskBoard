import { useEffect, useState } from "react";
import React from 'react';
import {Form,Button,Label, Container} from 'react-bootstrap';
import './style.css';
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../../firebase';
// import fireDb from '../../firebase';


const Signup = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [checkWarning, setCheckWarning] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(isChecked && (name !== '' || email !== '' || password !== '') ){
      alert('oj')
      setCheckWarning(false);
      const data = {
        name:name,email:email,password:password
      }
      const fireDb = collection(db, 'users')
      addDoc(fireDb, {name}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err)
      });
      

    }else {
      setCheckWarning(true);
    }
  }

    useEffect(() => {
        document.body.style.backgroundColor = "#0d1117"
        document.body.style.color = 'rgb(92 130 241)'
    })
    return ( 
    <Container className='content'>
        <div  className='title'>
            Sign up
        </div>

    <div className="formBody">
       <Form 
       style={{textAlign:'center'}}
       >
       <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control  
    type="text" 
    placeholder="Enter email" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  
    type="email" 
    placeholder="Enter email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <Form.Group  controlId="formBasicCheckbox">
    <input type="checkbox"
     class="custom-control-input" 
     id="defaultCheckedDisabled"
     checked={isChecked}
     onClick={() => setIsChecked(!isChecked) }
    />
    <label style={{padding:10}} > I accept the terms and conditions</label>
    <p className='warning'>{(checkWarning) ? "please accept the terms and conditions" : null}</p>
 
    </Form.Group>
  </Form.Group>
 
  <Button 
  type="button" 
  onClick={handleSubmit}
  >
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