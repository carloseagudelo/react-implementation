/*  Descripcion: Componente que permite la creación de un fondo
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Agosto 2017
    Fecha de modificacion: Septiembre 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import SelectTag from '../../../SelectTag';

// importa las clases necesarias para el manejo de la arquitectura
import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

// importa los componentes necesarios
// import SelectInputFund from './SelectInputFund'
// import DocumentList from './DocumentList'
// import Loading from '../../../Loading'

export default class SetRestrictions extends React.Component {

  constructor(){
  	super()
  }



  onSubmitFund(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'name': form_data[0].value,
      'description': form_data[1].value,
  	}
    ConfigurationAction.SaveFund(data)
  }


  // Retorna el componente
  render() {
    return(
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>CREAR FONDO</h3>
          </div>
          <div class="x_content">
            <form  onSubmit={this.onSubmitFund.bind(this)}>
              <label for="name">NOMBRE</label>
              <input type="text" name="name" class="form-control" required="" autofocus ></input>
              <br />
              <label for="description">DESCRIPCIÓN</label>
              <input type="text" name="description" class="form-control"  required="" autofocus></input>
              <br />
              <label for="sel1">SELECCIONE CONVOCATORIA</label>
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



