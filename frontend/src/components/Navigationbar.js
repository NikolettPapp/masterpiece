import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap' 


const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Raktár menedzsment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link>Kezdőlap</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link>Rólunk</Nav.Link></LinkContainer>
            <LinkContainer to="dump"><Nav.Link>Átmeneti raktár</Nav.Link></LinkContainer>
            <LinkContainer to="/products"><Nav.Link>Termék keresés</Nav.Link></LinkContainer>
            <LinkContainer to="/groups"><Nav.Link>Csoport keresés</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigationbar
