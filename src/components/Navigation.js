/* Create a navigation component that contains links styled like a navbar. The links don't have to go anywhere. 
   Put the navigation at the top of the page.   */


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Main Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Account</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Change User
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Delete Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;