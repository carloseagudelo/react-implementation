/*  Descripcion: Componente que el mustra la información en miniatura del curso
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'
import { Link } from 'react-router'

// Inicializa y exporta la clase que contiene el componente
export default class CourseMin extends React.Component {  

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {
  	return(
      <div class=" col-md-4">
          <div class="card card-inverse card-info">
              <center><img class="card-img-top" src={this.props.data.image} width="200" heigth="200"/></center>
              <div class="card-block">
                  <center><h4 class="card-title">{this.props.data.nombre}</h4></center>
                  <div class="card-text">
                      {this.props.data.description}
                  </div>
              </div>
              <div class="card-footer">
                <Link class="btn btn-info btn-sm" to={'/course/' + this.props.data.id}>Conocer más</Link>
              </div>
          </div>
      </div>
    )
  }
}
