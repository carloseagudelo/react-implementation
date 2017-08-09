/*  Descripcion: Componente que lista los documentos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesari
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import { Link } from 'react-router'

// importa las clases necesarias para el manejo de la arquitectura
import DocumentAction from '../../../../actions/DocumentAction'
import DocumentStore from '../../../../stores/DocumentStore'

// importa los componentes necesario
import Document from './Document'
import Loading from '../../../Loading'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(DocumentStore, 'documents'))
export default class ListDocuments extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    DocumentAction.ListDocuments()
  }

  render() {
    // Maneja la logica del componente
    if(this.state.documents){
      let documents = this.state.documents.data.map((document) => {
        return(
          <Document data={document} />
        )
      })

      // Retorna el componente
      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>LISTA DE DOCUMENTOS</h3>
            </div>
            <div class="x_content">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>REQUERIDO</th>
                    <th>TIPO</th>
                    <th>FECHA DE CREACIÓN</th>
                  </tr>
                </thead>
                <tbody>
                  {documents}
                </tbody>
              </table>
              <Link to='/create_document' class="btn btn-primary btn-sm pull-right">CREAR DOCUMENTO</Link>
            </div>
          </div>
        </div>
      )
    }
  }
}
