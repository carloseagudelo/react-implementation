/*  Descripcion: Componente renderiza las vistas de error dependiendo el paramtero que ingrese
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// importa los componentes necesarios
import AccesDenied from '../components/error/AccessDenied'
import NoExist from '../components/error/NoExist'
import ServerError from '../components/error/ServerError'

export default class ErrorPage extends React.Component {

  constructor(){
  	super()
  }

  // Maneja la logica
  render() {
    let component
    if(this.props.params.er == 403){
      component = <AccesDenied />
    }else if(this.props.params.er == 404){
      component = <NoExist />
    }else{
      component = <ServerError />
    }

    // Retorna el componente
    return(
      <div class="container body">
        <div class="main_container">
          <div class="col-md-12">
            <div class="col-middle">
              {component}
            </div>
          </div>
        </div>
      </div>
    )
  }
}