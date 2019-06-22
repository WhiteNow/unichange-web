import React from "react";

import { Form, Button } from "react-bootstrap";
const UniversidadCB = props => {
  let list = props.list.map(r => <option>{r}</option>);

  return (
    <div>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <h1>Universidad de Destino</h1>
        <Form.Control as="select">{list}</Form.Control>
        <Button variant="primary">SYLLABUS</Button>
      </Form.Group>
    </div>
  );
};

export default UniversidadCB;
