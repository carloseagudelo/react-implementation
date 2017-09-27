/*  Descripcion: Componente que permite agregar y quitar dinamicamente campos de conceptos para las restricciones
  Autor: Sebastián Delgado Díaz
  Contacto: sebasdeldi@hotmail.com
  Fecha de creación: Agosto 2017
  Fecha de modificacion: Agosto 2017 */
// importa las librerias externas necesarias

import React from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery'


// importa las clases propias al componente
import SecretsConstant from '../utils/SecretsConstant'

// Inicializa y exporta la clase que contiene el componente
export default class SelectTag extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    this.getData(this.props.endPoint)
  }

  // Metodo que obtiene la informacion de los fondos
  getData(endPoint){
    var url = String(SecretsConstant.HOST_API+'/'+endPoint.toString())

    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: url ,
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.setState({response: response.payload})
        }else{
          browserHistory.push('/error_page/500')
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

  // Retorna el componente
  render() {

    if(this.state.response){
      let items = this.state.response.data.map((item) => {
        return(
          <option value={item.id}>{item.name}</option>
        )
      })
      return (
        <div class="form-group">
          <select class="form-control" id="element" onChange={this.props.onChange}>
            <option value="0">SELECCIONE</option>
            {items}
          </select>
        </div>
      )
    }
  }
}
