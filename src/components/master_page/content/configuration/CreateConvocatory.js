/*  Descripcion: Componente que permite realizar la creación de una restricción para una convocatoria
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Agosto 2017
    Fecha de modificacion: Agosto 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

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


  onSubmitConvocatory(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'name': form_data[0].value,
  	  'description': form_data[1].value
  	}
    ConfigurationAction.SaveConvocatory(data)
  }

  // Retorna el componente
  render() {
    return(
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>CREAR CONVOCATORIA</h3>
          </div>
          <div class="x_content">
            <form  onSubmit={this.onSubmitConvocatory.bind(this)}>
              <label for="name">NOMBRE</label>
              <input type="text" name="name" class="form-control" required="" autofocus ></input>
              <br />
              <label for="description">DESCRIPCIÓN</label>
              <input type="text" name="description" class="form-control"  required="" autofocus></input>
              <br />
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



