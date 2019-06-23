import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

import Traslados from '../../screens/Traslados'
import Convenios from '../../screens/Convenios'
import Solicitudes from '../../screens/Solicitudes'

// import Convenio from "./../Convenio";

class NavigationNavBar extends Component {

  state = { status: "solicitud" }

  changeStatus = (s) => {
    this.setState({ status: s })
  }

  render() {

    let content = () => {
      if (this.state.status === "solicitud")
        return (<Solicitudes />)
      if (this.state.status === "traslados")
        return (<Traslados />)
      if (this.state.status === "convenios")
        return (<Convenios />)
    }

    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>PuriKusi</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => { this.changeStatus("solicitud") }}>Solicitudes</Nav.Link>
            <Nav.Link onClick={() => { this.changeStatus("traslados") }}>Traslados</Nav.Link>
            <Nav.Link onClick={() => { this.changeStatus("convenios") }}>Convenios</Nav.Link>
          </Nav>
        </Navbar>
        <div>
          {content()}
        </div>
      </div>)
  }
}

export default NavigationNavBar;
