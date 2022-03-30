import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
import {Navbar,Container,Row,Col,Button} from 'react-bootstrap';
import {BsThreeDotsVertical} from  "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Form } from 'react-bootstrap'
import '../App.css';

const Home = () => {
  const[pic, setPic] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState('asd');
  const [details, setDetails] = useState('');
  var tasks = [];

  useEffect(() => {
    fetch(
      "https://picsum.photos/id/77/info")
                  .then((res) => res.json())
                  .then((json) => {
                    console.log(json)
                    setPic(json);
                  })
  })
  
  const addTask = () => {
const add = (e) =>{
  e.preventDefault()
  if(title != '' || details != '') {
    tasks.push({title:title, details:details});
    console.clear()
    setModalShow(false);
console.log(tasks);

  }
}
    return (
      <Modal show={modalShow} onHide={() => setModalShow(false)}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
       <Modal.Title id="contained-modal-title-vcenter">
         
       </Modal.Title>
     </Modal.Header>
     <Modal.Body>
     <Form className='modalForm'>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control id="formInput"  type="email" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
  </Form.Group>

  <Form.Group  controlId="formBasicPassword">
    <Form.Label>Details</Form.Label>
    <Form.Control id="formInput" as="textarea"  style={{ height: '100px' }} placeholder="Enter details" value={details} onChange={(e) => setDetails(e.target.value)} />
  </Form.Group>
  <p>Add date</p>
  <p>Move to another list</p>
  
</Form>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={() => setModalShow(false)}>Cancel</Button>
     <Button variant="primary" type="button" onClick={add}>
    Submit
  </Button>
     </Modal.Footer>
       </Modal>
    )
  }

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
      alt=''
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
        <a onClick={() => setModalShow(true)} style={{cursor:"pointer"}}>
      <img src = {require('../assets/images/plus.png')}
      width="30"
      hwight="30"
      />
      </a>
      </Col>
    </Row>
    { tasks.length > 0 ? tasks.map((m, index) => (
      <div> {m['title']} </div>
    )) : null}
    {modalShow ? addTask() : null}
    

  </div>
  
        
</Container>
</>
    )
}
export default Home;