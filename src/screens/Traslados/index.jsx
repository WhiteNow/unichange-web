import React, { Component } from 'react';
import './style.css';

class Traslados extends Component {
  state = {
    columns: [
      "#ID",
      "Código Alumno",
      "Destino",
      "Estado"
    ],
    data: [
      {
        id: "001",
        codigo: "u201628877",
        destino: "Universidad Privada del Norte",
        estado: "Aceptado"
      },
      {
        id: "002",
        codigo: "u201512699",
        destino: "Universidad de Tokyo",
        estado: "En proceso"
      },
      {
        id: "003",
        codigo: "u201212355",
        destino: "Universidad Politecnica de Cataluña",
        estado: "Rechazado"
      }
    ]
  }

  componentDidMount = () => {
    // populate columns and data (just data)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {

    let columns = this.state.columns.map((c,k) => (
      <th key={k} scope="col">{c}</th>
    ))    

    let data = this.state.data.map(d => (
      <tr key={d.id}>
        <th scope="row">{d.id}</th>
        <td>{d.codigo}</td>
        <td>{d.destino}</td>
        <td>{d.estado}</td>
      </tr>
    ))

    return (
      <div className="container">
        <table className="table table-bordered" >
          <thead className="barra-de-navegación">
            <tr className="cuadro-text">
              {columns}
            </tr>
          </thead>
          <tbody className="data">
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Traslados;