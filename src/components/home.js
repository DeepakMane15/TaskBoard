import React from 'react'
// import './App.css';
import {Navbar,Container} from 'react-bootstrap';


const Home = () => {
    return (
<>
  <Navbar style={{backgroundColor:'#1c437e'}}>
  <Container>
    <Navbar.Brand href="#home">TasksBoard</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="header" >
         <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}
export default Home;