import React, { useEffect, useState } from 'react'
// import './App.css';
import {Navbar,Container,Row,Col} from 'react-bootstrap';
import {BsThreeDotsVertical} from  "react-icons/bs";
import {AiOutlinePlusCircle} from  "react-icons/ai";
// import {plus} from '../assets/plus.png'

const Home = () => {
  const[pic, setPic] = useState();
  useEffect(() => {
    fetch(
      "https://picsum.photos/id/77/info")
                  .then((res) => res.json())
                  .then((json) => {
                    console.log(json)
                      setPic(json);
                      console.log('sad',pic.download_url);
                  })
  })
    return (
<>
  <Navbar style={{backgroundColor:'#1c437e'}}>
  <Container>
    <Navbar.Brand href="#home">TasksBoard</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="" >
      <img 
      src={(pic) ? pic.download_url : null}
      height="50"
      width="50"
      style={{borderRadius: "50%"}}
      alt="new"
      />
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Container style={{marginTop:"20px"}}>
  <div className="box">
    <Row>
      <Col>
      <p>
      My Tasks
    </p>
      </Col>
      <Col style={{textAlign: 'right'}}>
      <BsThreeDotsVertical/>
      </Col>
    </Row>
    <Row>
      <Col>
      <p style={{opacity:'0.5'}}>
      New Task
    </p>
      </Col>
      <Col style={{textAlign: 'right'}}>
      <img src = {require('../assets/images/plus.png')}
      width="30"
      hwight="30"
      />
      </Col>
    </Row>
   

  </div>
</Container>
</>
    )
}
export default Home;