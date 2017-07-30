/*  Descripcion: Componente que renderiza la funcionalidad de cargar usuarios preselccionados al de cada uno
                 de los fondos a el aplicativo sisap
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

// importa las clases necesarias para el manejo de la arquitectura
import AdminFoundAction from '../../../../actions/AdminFoundAction'
import AdminFoundStore from '../../../../stores/AdminFoundStore'

// importa los componentes necesarios
import MessageFlash from '../../../../components/MessageFlash'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(AdminFoundStore, 'response'))
// inicializa y exporta la clase
export default class LoadUser extends React.Component {

  constructor(){
  	super()
  }

  // enveto del boton cargar preselecionados el cual llama la funcion del adminfound store
  loadPreSelected(ev){
    ev.preventDefault()
    AdminFoundAction.LoadData()
  }

  // Retorna el componente
  render() {
    return (
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>CARGA DE PRESELECCIONADOS</h3>
          </div>
          <div class="x_content">
            <MessageFlash data={this.state.response} />
            <div class="alert alert-info">
              <strong><h1>ATENCIÓN</h1></strong>
              <h3>
                A CONTINUACIÓN INICIARÁ EL PROCESO DE CARGA DE USUARIOS PARA EL FONDO QUE ADMINISTRA, 
                TENGA EN CUENTA QUE ANTES DE HACER ESTE CARGUE DEBE REALIZAR LA SELECCION EN LA 
                APLICACION DEL FONDE QUE ADMINISTRA.
              </h3>
            </div>
            <button onClick={this.loadPreSelected.bind(this)} >CARGAR PRESELECCIONADOS</button>
          </div>
        </div>
      </div>
    )
  }
}