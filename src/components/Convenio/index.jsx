import React, { Component } from "react";
import { Form, Row, Button, Col,ListGroup } from "react-bootstrap";
import UniversidadCB from "../UniversidadCB";

class Convenio extends Component {
  state = {
    cblist: [
      "UPN", 
      "UNC", 
      "UA"
    ],
    reglist: [
      "SUNEDU",
      "SUNEDU1",
      "SUNEDU2",
      "SUNEDU3",
    ]
  };

  componentDidMount() {
    // populate cblist and reglist
  }

  render() {
    let reglist = this.state.reglist.map(r => (<ListGroup.Item>{r}</ListGroup.Item>))

    return (
      <Form>
        <Row>
          <Col>
            <h1>Universidad Origen</h1>
            <p> UPC</p>
            <UniversidadCB list={this.state.cblist} />
          </Col>
          <Col>
            <Button variant="primary">Agregar Reguladores</Button>
            <ListGroup>
              {reglist}
            </ListGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Convenio;
