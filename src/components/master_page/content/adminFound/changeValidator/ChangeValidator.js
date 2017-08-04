/*  Descripcion: Componente que lista los preseleccionados a determinado fondo, junto con sus dos
                 validadores con el fin de poder cambiar alguno de estos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

// importa las clases necesarias para el manejo de la arquitectura
import ConfigurationAction from '../../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../../stores/ConfigurationStore'

// importa los componentes necesarios
import UserWithValidator from './UserWithValidator'
import Paginator from '../../../../Paginator'
import Loading from '../../../../Loading'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'userValidators'))
export default class ChangeValidator extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
  	ConfigurationAction.UsersWithValidators(0)
  }

  // Metodo que permite al paginador pasar a la siguiente pagina, o a la pagina de selección
  // Parametro: ev, evento del tag
  nextPage(ev){
    ev.preventDefault()
    console.log(ev.target)
    if(ev.target.id == 'prev'){
      console.log('entro prev')
      if(parseInt(this.state.userValidators.current_page) != 1){
        ConfigurationAction.UsersWithValidators(parseInt(this.state.userValidators.current_page) - 1)
      }
    }else if(ev.target.id == 'nxt'){
      if(parseInt(this.state.userValidators.current_page) != this.state.userValidators.records_count.length){
        ConfigurationAction.UsersWithValidators(parseInt(this.state.userValidators.current_page) + 1)
      }
    }else{
      ConfigurationAction.UsersWithValidators(ev.target.id)
    }
  }

  // Metodo que actualiza el validador del usuario
  // Parametro: ev, evento del tag
  updateValidators(ev){
    ev.preventDefault()
    ConfigurationAction.SendUpdateValidators(this.getParams(ev.target.id))
  }

  // Metodo que obtiene la información parametrizada en el componente del usuario a actualizar
   // Parametro: user_id, id del usuario la que se actualizaran los calificadores
  getParams(user_id){
    var obj = {}
    obj['user_id'] = user_id
    obj['pre_validator_id'] = $('#'+user_id+' select[name=pre_validator]').val()
    obj['final_validator_id'] = $('#'+user_id+' select[name=final_validator]').val()
    return obj
  }

  render() {
    // Maneja la logica del componente
    if(this.state.userValidators){
      let users = this.state.userValidators.data.map((user) => {
        return(
          <UserWithValidator data={user} onClick={this.updateValidators.bind(this)}/>
        )
      })

      // Retorna el componente
      return (
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="table-header">NOMBRE</th>
                <th class="table-header">ESTADO</th>
                <th class="table-header">VALIDADOR 1</th>
                <th class="table-header">VALIDADOR 2</th>
              </tr>
            </thead>
            <tbody>
              {users}
            </tbody>
          </table>
          <Paginator pages={this.state.userValidators.records_count} current={this.state.userValidators.current_page} onClick={this.nextPage.bind(this)}/>
        </div>
      )
    }else {
      return(
        <Loading />
      )
    }
  }
}