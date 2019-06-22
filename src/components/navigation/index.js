import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Convenio from "./../Convenio";

let reguladores = [
  "SUNEDU",
  "SUNEDU1",
  "SUNEDU2",
  "SUNEDU3",
]

const NavigationNavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        <Convenio />
      </div>
    </div>
  );
};

export default NavigationNavBar;
