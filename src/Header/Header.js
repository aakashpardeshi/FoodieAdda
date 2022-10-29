import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Icon from './icon.png';
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div>
      <Navbar expand="md" style={{ background: "linear-gradient(135.77deg, rgba(255, 255, 255, 0.4) -94.16%, rgba(255, 255, 255, 0) 100%)" }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            <Image src={Icon} style={{ marginRight: "5%" }}></Image>
            Foodie Adda</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', marginLeft: '2%'}}
              navbarScroll
            >
              <NavLink to="/" style={{ color:"white" , marginRight: "2%"}}>Home</NavLink>
              <NavLink to="/restaurant" style={({ isActive }) => ({ color: isActive ? "green" : "white" , marginRight: "2%"})}>Restaurants</NavLink>
              <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "green" : "white" , marginRight: "2%"})}>About Us</NavLink>
              <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? "green" : "white"})}>Contact Us</NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button style={{ marginLeft: '3%' }} variant="outline-success">Log in</Button>
            <Button style={{ marginLeft: '0.5%' }} variant="outline-success">Sign up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;