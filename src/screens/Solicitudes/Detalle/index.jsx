import React, { Component } from 'react';
import './style.css';
import Photo from '../../../img/bryam-beto.jpeg';
import Arrow from '../../../img/back-arrow.png';
import Solicitudes from '../index.jsx'

class DetalleTransalado extends Component {

    state = {status: "detalle"};

    changeStatus = (s) => {
        this.setState({ status: s })
    }

    render() {

        let content = () => {
            if (this.state.status === "detalle")
              return (
                <React.Fragment>
                <div className = "header-div">
                    <img src={Arrow} className="back-btn" onClick={() => { this.changeStatus("lista") }}></img>
                    <h2 className="header-title">Detalle de la solicitud</h2>
                </div>

                <div className = "content-div">
                    <div className="content-user-info">
                        <table className = "table table-bordered">
                            <tbody>
                            <tr>
                                <td align = "center">
                                <img src={Photo} alt="Smiley face"  width="150" className="profile-info-image"/>
                                </td>
                                <td>
                                <p>Alumno: Bryam Beto</p>
                                <p>Celular: 968 201 748</p>
                                <p>Correo Electrónico: bryamwhite98@gmail.com</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="content-btns">
                        <div> 
                            <button type="button"  className="approve-button" data-toggle="modal" data-target="#exampleModal">
                                RECHAZAR
                            </button>
                        </div>                        
                        <div>
                            <button type="button"  className="reject-button" data-toggle="modal" data-target="#exampleModal">
                                RECHAZAR
                            </button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
            );
            if (this.state.status === "lista")
              return (<Solicitudes/>)
          }
      
          return (<>{content()}</>);
        }
    

}

export default DetalleTransalado;