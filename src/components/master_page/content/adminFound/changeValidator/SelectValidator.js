/*  Descripcion: Componente que lista los validadores de docuentos para determinado fondo
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'
import { browserHistory } from 'react-router'

// importa los componentes necesarios
import Loading from '../../../../Loading'

// importa las clases necesarios
import SecretsConstant from '../../../../../utils/SecretsConstant'

// Inicializa y exporta la clase que contiene el componente
export default class SelectValidator extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    this.listValidators()
  }

  // Metodo que obtiene la información de los validadores por fondo
  listValidators(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretsConstant.HOST_API+'/validators_by_fund',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.setState({validators: response.payload.data})
        }else{
          browserHistory.push('/error_page/500')
        }        
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

  render() {
    // Meneja la logica del componente
    if(this.state.validators){
      let validators = this.state.validators.map((validator) => {
        if(this.props.data == validator.id){
          return(
            <option value={validator.id} selected>{validator.name}</option>
          )
        }else{
          return(
            <option value={validator.id}>{validator.name}</option>
          )
        }        
      })

      // Retorna el componente
      return (
        <div class="form-group">
          <select class="form-control" name={this.props.name} onChange={this.props.onChange}>
            {validators}
          </select> 
        </div>
      )
    }else{
      return(
        <Loading />
      )
    }
  }
}