import React from 'react';

import Fields from './Fields'
import ListUser from './ListUsers'

import Constant from '../../../../utils/Constants'

export default class Document extends React.Component {

  constructor(){
  	super()
  }  

  render() {
    if(localStorage.role == Constant.ROLE_BENEFICIARY){ // Valida si la vista es para el beneficiario
      return (
        <div class="">
          <div class="page-title">
            <div class="x_title">
              <h3>CARGA DE DOCUMENTOS</h3>
            </div>
            <div class="x_content">
              <Fields />
            </div>
          </div>
        </div>
      )
    }else if(localStorage.role.includes("admin")){ // Valida si la vista es para un usuario con rol administrador de fondo
      if(this.props.params.id){
        return (
          <div class="">
            <div class="page-title">
              <div class="x_title">
                <h3>DOCUMENTOS DEL USUARIO</h3>
              </div>
              <div class="x_content">
                <Fields data={this.props.params.id} />
              </div>
            </div>
          </div>
        )
      }else{ 
        return (
          <div class="">
            <div class="page-title">
              <div class="x_title">
                <h3>USUARIOS FINALIZADOS</h3>
              </div>
              <div class="x_content">
                <ListUser data={'admin'}/>
              </div>
            </div>
          </div>
        )
      }
    }else{  // Valida si la vista es para un usuario con rol validador de documentos
      if(this.props.params.id){
        return (
          <div class="">
            <div class="page-title">
              <div class="x_title">
                <h3>DOCUMENTOS DEL USUARIO</h3>
              </div>
              <div class="x_content">
                <Fields data={this.props.params.id} />
              </div>
            </div>
          </div>
        )
      }else{ 
        return (
          <div class="">
            <div class="page-title">
              <div class="x_title">
                <h3>USUARIOS PENDIENTES</h3>
              </div>
              <div class="x_content">
                <ListUser data={'validator'}/>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}