import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}



function App() {
  
    const [modalShow, setModalShow] = React.useState(false);
    const [animation, setAnimation] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const bodyBG = document.body
    const handleClic = () => {
      // Cambiar el estado de "animation" al hacer clic
      setAnimation(!animation);
      bodyBG.className = 'introBodyAnimation'
    }

    useEffect(() => {
      const handleResize = () => {
        const mediaQuery = window.matchMedia('(max-width: 900px)');
        setIsMobile(mediaQuery.matches);
      };
  
      handleResize(); // Verificar el tamaño inicial de la pantalla
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [])

  return (
    <>
      <Navbar fixed='top' data-bs-theme={`${animation ? 'dark' : 'light'}`} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="http://localhost:5173/">Julián Alberti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5173/">Home</Nav.Link>
            <Nav.Link href="#link">About me</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Other stuff
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className={`main-frame ${animation ? 'introMainPage' : ''}`}>
      <h1 className='main-title'>Julián Alberti</h1>
      
      <h1 className='sub-main-title'>About Me</h1>
      
      <h5 className='about-me'>
      I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
      I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
      </h5>
      <div className='thumbnails'>

      {isMobile ? (
          <Carousel>
          <Carousel.Item>
            <img
              
              src="src\assets\img\vector\marta1.PNG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              
              src="src\assets\img\vector\mb.PNG"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              
              src="src\assets\img\vector\noob-saibot.png"
              alt="Third slide"
            />
          </Carousel.Item>
          </Carousel>
        ) : (
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <div data-bs-toggle="modal" data-bs-target="#martaModal" onClick={() => setModalShow(true)}>
                <Image id="martaModal" src="src\assets\img\vector\marta1.PNG" rounded />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Image id="mbModal" src="src\assets\img\vector\mb.PNG" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image id="noobModal" src="src\assets\img\vector\noob-saibot.png" rounded />
              </Col>
            </Row>
          </Container>
        )}
      
      </div>
    </Container>

    <div className='button-frame'>
      <div id="intro-button" className={`border-button ${animation ? 'introAnimation' : ''}`}
        onClick={handleClic}>
        
        <Container className='name-button tp-transform'>
          <h1>Welcome</h1> 
        </Container>
      
      </div>
    </div>
    <div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    

    </>
  )
}

export default App
