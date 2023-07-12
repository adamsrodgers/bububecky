import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import "../css/Header.css";

function Header() {

  const num: number = 0;
  return (
    <header className='bar'>
      <Navbar expand="lg" collapseOnSelect>
        
        <Navbar.Brand href="#home" className='desktop'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='left'>
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            <Nav.Link href="#link" className='link'>Products</Nav.Link>
            <Nav.Link href="#link" className='link'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='ms-auto'>
            <Nav.Link href="#link"><i className='fas fa-shopping-cart'></i>({num})</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header;