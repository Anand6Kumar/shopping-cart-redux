import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import { navitem1,navitem2,navitem3 } from '../constants/Constant';

 const Header = ()=>{
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#shopping cart">{navitem1}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{navitem2}</Nav.Link>
            <Nav.Link href="#Add to cart">{navitem3}</Nav.Link>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:'pointer'}} ></i>
    </Badge>
          
        </Container>
      </Navbar>  

    )
}

export default Header;
