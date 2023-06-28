
import './App.css'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function MyVerticallyCenteredModal(props) {
  const { src, alt, ...modalProps } = props
  if (src === 'contact'){
    return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      Contact me!
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form className='formContact' name="contact" data-netlify="true">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Modal.Body>
</Modal>
    )
  }
  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {alt}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={src} alt={alt} rounded />
      </Modal.Body>
    </Modal>
  );
}



function App() {
  
    const [modalShow, setModalShow] = React.useState(false);

    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setModalShow(true);
    };

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
    <Container className='navbarRow'>
    <Row >
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
    </Row>
    </Container>
    <Container className={`main-frame ${animation ? 'introMainPage' : ''}`}>
      <Row>
      <div className='main-title'>
        <h1>Julián Alberti</h1>
      </div>
      </Row>
      <Row className="formButton">
      <div data-bs-toggle="modal" data-bs-target="#contactModal" onClick={() => handleImageClick('contact')}>
        <a className="btn btn-xl btn-outline-light" id='contactModal' >
          Contact me!
        </a>
      </div>
      </Row>

      <Row>
      <h1 className='sub-main-title'>About Me</h1>
      </Row>
      <Row className='about-me'>
      <h5 >
      I am an enthusiastic person, creative, and always willing to explore new ideas and concepts. <br />
      I have a desire to learn, and that drives me to develop my skills and apply them in innovative projects.
      </h5>
      </Row>
      <Row className='thumbnails'>
      <div >
      {isMobile ? (
          <Carousel>
          <Carousel.Item>
            <img
              src="src\assets\img\vector\marta1.PNG"
              alt="First"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img       
              src="src\assets\img\vector\ab.PNG"
              alt="Second"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img         
              src="src\assets\img\vector\noob.png"
              alt="Third"
            />
          </Carousel.Item>
          </Carousel>
        ) : (
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <div data-bs-toggle="modal" data-bs-target="#martaModal" 
                 onClick={() => handleImageClick("src/assets/img/vector/640/marta640.PNG", "Netherworld Queen")} >
                  <Image id="martaModal" src="src/assets/img/vector/marta1.PNG" alt='First' rounded />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div data-bs-toggle="modal" data-bs-target="#abModal" 
                onClick={() => handleImageClick("src/assets/img/vector/640/ab640.PNG", "Woman with flower")}>
                  <Image id="abModal" src="src/assets/img/vector/ab.PNG" alt='Second' rounded />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <div data-bs-toggle="modal" data-bs-target="#noobModal" 
                onClick={() => handleImageClick("src/assets/img/vector/640/noob640.png", "Noob-Saibot NEON")}>
                  <Image id="noobModal" src="src/assets/img/vector/noob.png" alt='Noob-Saibot NEON' rounded />
                </div>
              </Col>
            </Row>
          </Container>
        )}
      
      </div>
      </Row>
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
         src={selectedImage?.src}
        alt={selectedImage?.alt}
      />
       
    </div>
    

    </>
  )
}

export default App
