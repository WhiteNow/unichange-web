import React from "react";

import { Form } from "react-bootstrap";
import "./index.css";
const UniversidadCB = props => {
  return (
    <div>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <h1>Universidad de Destino</h1>
        <div className="selec">
          <Form.Control as="select" />
        </div>
      </Form.Group>
    </div>
  );
};

export default UniversidadCB;
