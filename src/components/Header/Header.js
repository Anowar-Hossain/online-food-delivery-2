// import Button from '@restart/ui/esm/Button';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
        <div className="">
        <h1 style={{"color": "white"}}>HungryNaki</h1>
        </div>
        <div>
        <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/contact us">Contact Us</Nav.Link>
      {user?.email ?
        <Button onClick={logOut} variant="light">Log Out</Button> :
         <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
       }
      <Navbar.Text>
          signed in as: <a href = "#login">{user?.displayName}</a>
      </Navbar.Text>

    </Nav>
        </div>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;