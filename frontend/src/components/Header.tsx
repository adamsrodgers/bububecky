import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import "../css/Header.css";

function Header() {

  const num: number = 0;
  return (
    <header className='bar'>
        <Navbar expand="lg" collapseOnSelect>
        
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='font'>Home</Nav.Link>
            <Nav.Link href="#link" className='font'>Products</Nav.Link>
            <Nav.Link href="#link" className='font'>About</Nav.Link>
            <Nav.Link href="#link" className='font'><i className='fas fa-shopping-cart'></i>Cart({num})</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;