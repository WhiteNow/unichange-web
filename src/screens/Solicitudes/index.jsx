import React, { Component } from 'react';
import './style.css';

class Solicitudes extends Component {
  state = {
    columns: [
      "#ID",
      "Código Alumno",
      "Destino",
      "Fecha de Solicitud",
    ],
    data: [
      {
        id: "004",
        codigo: "u201512034",
        destino: "Universidad de Marbella",
        fecha: "20/06/19"
      },
      {
        id: "005",
        codigo: "u201688922",
        destino: "Universidad de Marbella",
        fecha: "21/06/19"
      },
      {
        id: "006",
        codigo: "u201412346",
        destino: "Universidad de Cádiz (UCA)",
        fecha: "22/06/19"
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
        <td>{d.fecha}</td>
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
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Solicitudes;

// export default () => (
//   <div class="container">
//     <table class="table table-bordered" >
//       <thead class="barra-de-navegación">
//         <tr class="cuadro-text">
//           <th scope="col">#ID</th>
//           <th scope="col">Código Alumno</th>
//           <th scope="col">Destino</th>
//           <th scope="col">Fecha de Solicitud</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">001</th>
//           <td>Mark</td>
//           <td>Universidad de Marbella</td>
//           <td>20/06/19</td>
//         </tr>
//         <tr>
//           <th scope="row">002</th>
//           <td>Jacob</td>
//           <td>Universidad de Cádiz (UCA) </td>
//           <td>21/06/19</td>
//         </tr>
//         <tr>
//           <th scope="row">003</th>
//           <td>Alirio</td>
//           <td>Universidad de Sevilla (US)</td>
//           <td>22/06/19</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

