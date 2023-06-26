import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function App() {
  
    
    const [animation, setAnimation] = useState(false);
    const bodyBG = document.body
    const handleClic = () => {
      // Cambiar el estado de "animation" al hacer clic
      setAnimation(!animation);
      bodyBG.className = 'introBodyAnimation'
    };
    
    
   
  




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
    </Container>

    <div className='button-frame'>
    <div id="intro-button" className={`border-button ${animation ? 'introAnimation' : ''}`}
        onClick={handleClic}>
        
      <Container className='name-button tp-transform'>
      <h1>Welcome</h1> 
      </Container>
      
      </div>
      </div>
    </>
  )
}

export default App
