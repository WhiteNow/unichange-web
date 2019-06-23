import React, {Component} from 'react';
import './style.css';
export default () => (
    <div class="container">
      <table class="table table-bordered" >
          <thead class="barra-de-navegación">
            <tr class="cuadro-text">
              <th scope="col">#ID</th>
              <th scope="col">Código Alumno</th>
              <th scope="col">Destino</th>
              <th scope="col">Fecha de Solicitud</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">001</th>
              <td>Mark</td>
              <td>Universidad de Marbella</td>
              <td>20/06/19</td>
            </tr>
            <tr>
              <th scope="row">002</th>
              <td>Jacob</td>
              <td>Universidad de Cádiz (UCA) </td>
              <td>21/06/19</td>
            </tr>
            <tr>
                <th scope="row">003</th>
                <td>Alirio</td>
                <td>Universidad de Sevilla (US)</td>
                <td>22/06/19</td>
              </tr>
          </tbody>
        </table>
  </div>
);

