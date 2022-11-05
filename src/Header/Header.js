import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Icon from './icon.png';
import { NavLink } from "react-router-dom" 
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/Reducer";

function Header() {
  const [{ cartShow}, dispatch] = useStateValue();
  
  const toggleCartView = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };


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
              style={{ maxHeight: '100px', marginLeft: '2%' }}
              navbarScroll
            >
              <NavLink to="/" style={{ color: "white", marginRight: "2%" }}>Home</NavLink>
              <NavLink to="/restaurant" style={({ isActive }) => ({ color: isActive ? "green" : "white", marginRight: "2%" })}>Restaurants</NavLink>
              <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "green" : "white", marginRight: "2%" })}>About Us</NavLink>
              <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "green" : "white" })}>Contact Us</NavLink>
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

            <div style={{marginLeft: '1%' }} onClick={toggleCartView}>
            <svg style={
              {
                color: "white"
              }
            } xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            </div>
            <Button style={{ marginLeft: '1%' }} variant="outline-success">Log in</Button>
            <Button style={{ marginLeft: '0.5%' }} variant="outline-success">Sign up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;