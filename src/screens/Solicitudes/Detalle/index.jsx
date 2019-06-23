import React, { Component } from 'react';
import './style.css';

class DetalleTransalado extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 class="detalle-h1">Detalle de Solicitud</h1>
                <div class="">
                    <table class="table table-bordered">
                        <tbody>
                        <tr>
                            <td>
                                <img src="img/student.png" alt="Smiley face"  width="150"/>
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
            </React.Fragment>
        )
    }

}

export default DetalleTransalado;