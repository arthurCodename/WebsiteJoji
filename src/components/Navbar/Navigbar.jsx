import React from 'react'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigbar(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand  href ="/" style={{paddingLeft: "1.5rem"}} >
          George Miller
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href = "/home/explore">Explore</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href = "/home/contact">Contact</Nav.Link>
            <Nav.Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}