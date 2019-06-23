import React from "react";
import { Form, Modal, Table, Button } from "react-bootstrap";
class Syllabus extends React.Component {
  // constructor(props, context) {
  //   super(props, context);

  //   this.handleShow = this.handleShow.bind(this);
  //   this.handleClose = this.handleClose.bind(this);

  //   this.state = {
  //     show: false
  //   };
  // }
  // handleClose() {
  //   this.setState({ show: false });
  // }

  // handleShow() {
  //   this.setState({ show: true });
  // }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>SYLLABUS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>CURSOS DE UNIVERSIDAD PROCEDENCIA</h1>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>CICLO DEL ALUMNO</Form.Label>
              <Form.Control as="select">
                <option>2015-01</option>
                <option>2018-01</option>
                <option>2014-02</option>
                <option>2019-01</option>
                <option>2013-01</option>
              </Form.Control>
            </Form.Group>

            <Table striped bordered hover>
              <tr>
                <td>CURSO ORIGEN </td>
                <td>CURSO DESTINO</td>
              </tr>
              <tr>
                <td>MA45</td>
                <td>
                  <select>
                    <option>IO54</option>
                    <option>KL89</option>
                    <option>RT85</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>CV87</td>
                <td>
                  <select>
                    <option>IO54</option>
                    <option>LP69</option>
                    <option>RT85</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>ER23</td>
                <td>
                  <select>
                    <option>IO54</option>
                    <option>KL89</option>
                    <option>RT85</option>
                  </select>
                </td>
              </tr>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              CANCELAR
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              GUARDAR
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Syllabus;
