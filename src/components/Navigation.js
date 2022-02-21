import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap/';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const Navigation = (props) => {

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Superior Translation Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-decoration-none">
                        <li ><Link className="me-auto text-decoration-none" to="/">Home</Link></li>
                        <li ><Link className="me-auto text-decoration-none" to="/about">About</Link></li>
                        <li ><Link className="me-auto text-decoration-none" to="/services">Services</Link></li>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}


export default Navigation