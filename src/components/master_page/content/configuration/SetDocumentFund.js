/*  Descripcion: Componente que permite realizar la selcción de documentos por fondo
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
import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

// importa los componentes necesarios
import SelectTag from '../../../SelectTag'
import DocumentList from './DocumentList'
import Loading from '../../../Loading'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'documents'))
export default class SetDocumentFund extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    ConfigurationAction.ListDocumentsWithFund(0)
  }

  // Metodo ue lista los documentos selecionados por fondo
  onChangeSelect(){
    ConfigurationAction.ListDocumentsWithFund($("#element option:selected").val())
  }

  // Metodo que guarda los documentos por seleccionados
  onSaveDocumentsFund(ev){
    ev.preventDefault()
    var data = {}
    data['fund_id'] = $("#fund option:selected").val()
    ConfigurationAction.SaveDocumentsFund(this.getValues(data))
  }

  // Metodo que obtiene los valores a guardar
  getValues(data){
    $('input').each(function( key, value ) {
      if(value.checked){
        data['document'+key] = value.id
      }
    });
    return data
  }

  // Retorna el componente
  render() {
    if(this.state.documents){
      return(
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>SELECCIONAR DOCUMENTOS POR FONDO</h3>
            </div>
            <div class="x_content">
              <label for="sel1">SELECCIONE FONDO</label>
              <SelectTag onChange={this.onChangeSelect.bind(this)} endPoint="list_funds"/>
              <br />
              <DocumentList data={this.state.documents.data} />
              <button class="btn btn-primary pull-right" onClick={this.onSaveDocumentsFund.bind(this)}>GUARDAR</button>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div>
        </div>
      )
    }
  }
}