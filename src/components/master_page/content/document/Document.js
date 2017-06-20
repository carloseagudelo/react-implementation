import React from 'react';

import Fields from './Fields'
import ListUser from './ListUsers'

import Constant from '../../../../utils/Constants'

export default class Document extends React.Component {

  constructor(){
  	super()
  }  

  render() {
    if(localStorage.role == Constant.ROLE_BENEFICIARY){
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
    }else{
      if(this.props.params.id){
        return (
          <div class="">
            <div class="page-title">
              <div class="x_title">
                <h3>VALIDACIÓN DE DOCUMENTOS</h3>
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
                <h3>VALIDACIÓN DE DOCUMENTOS</h3>
              </div>
              <div class="x_content">
                <ListUser />
              </div>
            </div>
          </div>
        )
      }
    }
  }
}