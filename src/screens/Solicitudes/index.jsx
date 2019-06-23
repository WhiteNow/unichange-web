import React, { Component } from 'react';
import './style.css';
import DetalleSolicitud from './Detalle';


class Solicitudes extends Component {
  state = {
    status: "lista",
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

  onClickRowHanlder = (e,data) => {
    this.changeStatus('detalles');
  }

  componentDidMount = () => {
    // populate columns and data (just data)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  changeStatus = (s) => {
    this.setState({ status: s })
  }

  render() {
    let columns = this.state.columns.map((c,k) => (
      <th key={k} scope="col">{c}</th>
    ))

    let data = this.state.data.map(d => (
      <tr key={d.id} className="hover-row" onClick={((e) => this.onClickRowHanlder(e, d))}>
        <th scope="row">{d.id}</th>
        <td>{d.codigo}</td>
        <td>{d.destino}</td>
        <td>{d.fecha}</td>
      </tr>
    ))

    let content = () => {
      if (this.state.status === "lista")
        return (
          <>
            <div class="container-1">
              <div class="text-tabla">
              <h1 class="titulo-tabla">TODAS LAS SOLICITUDES</h1>
                </div>
              <div class="buscador">
                <input class="typeahead form-control " type="text" placeholder="Buscar...."/>
              </div>
            </div>
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
          </>
      );
      if (this.state.status === "detalles")
        return (<DetalleSolicitud/>)
    }

    return (<>{content()}</>);
  }
}

export default Solicitudes;

