import React, { Component } from "react";
import { Form, Row, Col, ListGroup, Button } from "react-bootstrap";
import UniversidadCB from "../UniversidadCB";
import Syllabus from "./../Syllabus/Syllabus";
import "./index.css";
class EditarConvenio extends Component {
  state = {
    showRegModal: false,
    cblist: ["UPN", "UNC", "UA"],
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
  };

  handleCloseRegModal = () => {
    this.setState({ showRegModal: false });
  };

  handleShowRegModal = () => {
    this.setState({ showRegModal: true });
  };

  render() {
    let reglist = this.state.regList.map(r => (
      <ListGroup.Item variant="secondary">{r.nombre}</ListGroup.Item>
    ));

    return (
      <div>
        <Syllabus
          handleShow={this.handleShowRegModal}
          handleClose={this.handleCloseRegModal}
          show={this.state.showRegModal}
        />

        <Form>
          <h1>Editar Convenio</h1>
          <Row>
            <Col>
              <h1>Universidad Origen</h1>
              <p> UPC</p>
              <UniversidadCB list={this.state.cblist} />
              <Button
                variant="primary"
                onClick={this.handleShowRegModal}
                id="btn-syllabus"
              >
                SYLLABUS
              </Button>
            </Col>

            <Col>
              <h1>Reguladores</h1>
              <ListGroup>{reglist}</ListGroup>
              <Button variant="primary" id="btn-agregar">
                GUARDAR MODIFICACIONES
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default EditarConvenio;
