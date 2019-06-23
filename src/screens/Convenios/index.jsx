import React, { Component } from 'react';
import './style.css';
import CrearConvenio from './../../components/Convenio'

class Convenios extends Component {
  state = {
    status: "lista",
    columns: [
      "#ID",
      "Universidad",
      "Pais",
      "Estado",
    ],
    data: [
      {
        id: "001",
        universidad: "Universidad de Marbella",
        pais: "España",
        estado: "Vigente"
      },
      {
        id: "002",
        universidad: "Universidad de Cádiz (UCA)",
        pais: "España",
        estado: "En proceso"
      },
      {
        id: "003",
        universidad: "Universiad de Tokyo",
        pais: "Japón",
        estado: "Vigente"
      },
      {
        id: "004",
        universidad: "Massachusetts Institute of Technology",
        pais: "Estados Unidos",
        estado: "Rechazado"
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
        <td>{d.universidad}</td>
        <td>{d.pais}</td>
        <td>{d.estado}</td>
      </tr>
    ))

    let content = () => {
      if (this.state.status === "lista")
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
      if (this.state.status === "detalles")
        return (<CrearConvenio />)
    }

    return (<>{content()}</>);
  }
}

export default Convenios;