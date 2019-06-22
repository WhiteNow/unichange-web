import React, { Component } from 'react';
import {Button,ListGroup} from 'react-bootstrap'

class Reguladores extends Component {
  state = { 

   }
  render() {
    
    let lista = this.props.lista.map(r => (
      <ListGroup.Item>{r}</ListGroup.Item>
    ))
    
    return (
      <div>
        <Button variant="primary">Agregar Reguladores</Button>
        <ListGroup>
          {lista}
        </ListGroup>
      </div>
    );
  }
}

export default Reguladores;