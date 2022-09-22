import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom'
 const Header = ()=>{
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Add to Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  

    )
}

export default Header;