import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import { NAV_ITEM_SHOPPING_CART,NAV_ITEM_HOME,NAV_ITEM_ADD_TO_CART } from '../constants/Constant';
import { NavLink } from 'react-bootstrap';

 const Header = ()=>{
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">{NAV_ITEM_SHOPPING_CART}</NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">{NAV_ITEM_HOME}</Nav.Link>
            <Nav.Link href="#Add to cart">{NAV_ITEM_ADD_TO_CART}</Nav.Link>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:'pointer'}} ></i>
    </Badge>
          
        </Container>
      </Navbar>  

    )
}

export default Header;

