import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';

export const NavBar = () => {
    return (
        <Container className='navbarRow'>
        <Row >
          <Navbar fixed='top' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
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
    ) 
}
