import React, { Component } from "react";
import { Form, Row, Col,ListGroup } from "react-bootstrap";
import UniversidadCB from "../UniversidadCB";

class Convenio extends Component {
  state = {      
    showRegModal: false,
    cblist: [
      "UPN", 
      "UNC", 
      "UA"
    ],
    regList: [
      {
        nombre: "SUNEDU",
        seleccionado: false
      },
      {
        nombre: "SUNEDU DE COLOMBIA",
        seleccionado: false
      }
    ]
  };

  componentDidMount = () => {
    // populate cblist and reglist
  }

  handleCloseRegModal = () => {
    this.setState({ showRegModal: false });
  }

  handleShowRegModal = () => {
    this.setState({ showRegModal: true });
  }

  render() {
    let reglist = this.state.regList.map(r => (
      <ListGroup.Item variant="secondary">
        {r.nombre}
      </ListGroup.Item>
    ))

    return (
      <div>
        <Form>
          <Row>
            <Col>
              <h1>Universidad Origen</h1>
              <p> UPC</p>
              <UniversidadCB list={this.state.cblist} />
            </Col>
            <Col>
              <h1>Reguladores</h1>
              <ListGroup>
                {reglist}
              </ListGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Convenio;
