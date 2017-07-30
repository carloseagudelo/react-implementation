/*  Descripcion: Componente que lista fondos registrados
                 validadores con el fin de poder cambiar alguno de estos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'
import { browserHistory } from 'react-router'

// importa los componentes necesarios
import Loading from '../../../Loading'

// importa las clases propias al componente
import SecretsConstant from '../../../../utils/SecretsConstant'

// Inicializa y exporta la clase que contiene el componente
export default class SelectInputFund extends React.Component {

  constructor(){
  	super()    
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    this.listFunds()
  }

  // Metodo que obtiene la informacion de los fondos
  listFunds(){
    $.ajax({
      crossDomain: true,
      async: false,
      cache: false,
      context: this,
      url: SecretsConstant.HOST_API+'/list_funds',
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      method: 'GET',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          this.setState({funds: response.payload})
        }else{
          browserHistory.push('/error_page/500')
        }        
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
  }

  // Retorna el componente
  render() {
    if(this.state.funds){
      let funds = this.state.funds.data.map((fund) => {
        return(
          <option value={fund.id}>{fund.name}</option>
        )
      })    
      return (
        <div class="form-group">
          <label for="sel1">SELECCIONE EL FONDO</label>
          <select class="form-control" id="fund" onChange={this.props.onChange}>
            <option value="0">SELECCIONE UN FONDO</option>
            {funds}
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