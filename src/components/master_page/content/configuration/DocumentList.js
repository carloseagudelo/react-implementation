/*  Descripcion: Componente que carga la información la información en cada iteración
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';

// importa los componentes necesario
import Loading from '../../../Loading'

// Inicializa y exporta la clase que contiene el componente
export default class DocumentList extends React.Component {

  constructor(){
  	super()
  }

  // Meotodo que carga como seleccionados loc documentos por fondo
  setChecked(){
    if(this.props.data){
      this.props.data.forEach( function(element, index) {
        if(element.checked){
          $('#'+String(element.id)).prop('checked', true)
        }else{
          $('#'+String(element.id)).prop('checked', false)
        }
      });
    }
  }

  render() {
    // Maneja la logica del componente
    if(this.props.data){
      let documents = this.props.data.map((document) => {
        return(
          <a href="#" class="list-group-item">{document.name}<input type="checkbox" class="pull-right" id={document.id}/></a>
        )
      })
      this.setChecked()

      // Retorna el componente
      return (
        <div class="form-group">
          <div class="list-group">
            <a href="#" class="list-group-item active">SELECCIONE LOS DOCUMENTOS POR FONDO</a>
            {documents}
          </div>
        </div>
      )
    }
  }
}
