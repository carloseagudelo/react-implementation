/*  Descripcion: Componente que lista los preseleccionados a determinado fondo, junto con sus dos 
                 validadores con el fin de poder cambiar alguno de estos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

// importa las clases necesarias para el manejo de la arquitectura
import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

// importa los componentes necesarios
import MessageFlash from '../../../../components/MessageFlash'

// importa las clases propias necesarias
import Constant from '../../../../utils/Constants'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(DocumentStore, 'response'))
export default class ListDocuments extends React.Component {

  constructor(){
  	super()
  }

  // Metodo que realiza el guardado del documenteo el servidor
  sendDocumentSave(ev){
    ev.preventDefault()   
    DocumentAction.SaveDocument(this.getParams())
  }

  // Metodo que obtiene el valores del documento a guardar
  getParams(){
    var obj = {};
    obj['name'] = $('#name').val()
    obj['description'] = $('#description').val()
    obj['legalization'] = $('#type').prop('checked')
    obj['obligatory'] = $('#require').prop('checked')
    obj['pages_number'] = $('#pages :selected').val()
    return obj
  }

  // Metodo que valida la información a guardar
  validateFields(){    
    if($('#name').val() == '' || $('#description').val() == ''){
      return false
    }else{
      return true
    }
  }

  // Retorna el componente
  render() {
    return (
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>CREAR DOCUMENTO</h3>
          </div>
          <div class="x_content">
            <div class="component well">
              <form onSubmit={this.sendDocumentSave.bind(this)} >
                <MessageFlash data={this.state.response} />
                <div class="form-group">
                  <label for="name">NOMBRE: </label>
                  <input type="text" id="name" class="form-control" placeholder="NOMBRE DOCUMENTO" />
                </div>
                <div class="form-group">
                  <label for="description">DESCRIPCIÓN: </label>
                  <input type="text" id="description" class="form-control" placeholder="DESCRIPCIÓN DOCUMENTO" />
                </div>
                <div class="row">
                  <div class="col col-md-3">
                    <label class="pull-right">LEGALIZACIÓN: <input type="checkbox" id="type" /></label>
                  </div>
                  <div class="col col-md-3">
                    <label class="pull-right">OBLIGATORIO: <input type="checkbox" id="require" /></label>
                  </div>
                  <div class="col col-md-2">
                    <label class="pull-right">PAGINAS:</label>
                  </div>
                  <div class="col col-md-2">
                    <select id="pages" class="form-control pull-left" >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="col col-md-2">
                    <input type="submit" class="btn btn-primary btn-sm pull-right" value="GUARDAR" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>        
    )
  }
}
