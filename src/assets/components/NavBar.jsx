import { useState, useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeContext from './ThemeContext';

export const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Container className='navbarRow'>
        <Row >
          <Navbar fixed='top' bg='dark' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand href="https://julian-portfolio-av.netlify.app/">Julián Alberti</Navbar.Brand>
            <Navbar.Brand style={{marginTop:'0.5em',marginRight:'auto', marginLeft:'auto', fontSize:'0.8rem'}}><ThemeSwitcher /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#about-me">About me</Nav.Link>
                <Nav.Link href="#other-stuff">My career</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </Row>
        </Container>
        </ThemeContext.Provider>
    ) 
}
