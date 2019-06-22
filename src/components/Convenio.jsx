import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import UniversidadCB from "./UniversidadCb";
class Convenio extends Component {
  state = {
    cblist: ["UPN", "UNC", "UA"]
  };
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <h1>Universidad Origen</h1>
            <p> UPC</p>
            <UniversidadCB list={this.state.cblist} />
          </Col>
          <Col>
            <h2>HOLA MUNDO</h2>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Convenio;
