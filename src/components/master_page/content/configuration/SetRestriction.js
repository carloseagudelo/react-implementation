/*  Descripcion: Componente que permite realizar la creación de una restricción para una convocatoria
    Autor: Sebastián Delgado Díaz
    Contacto: sebasdeldi@hotmail.com
    Fecha de creación: Agosto 2017
    Fecha de modificacion: Agosto 2017 */


//TODO IMPORTANTE: FALTA LA IMPLEMENTACCIÓN DE UN SELECT QUE ME PERMITA SELECCIONAR UNA CONVOCATORIA DE LAS LISTAS DE CONVOCATORIAS CREADAS
//TODO IMPORTANTE: FALTA TERMINAR DE IMPLEMENTAR EL ENVÍO DE LOS CONCEPTOS (PERMITE AGREGAR Y QUITAR FIELDS PARA GENERAR UN JSON COMO SE ESTIPULA EN LA HISTORIA DE USUARIO)

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react';
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import ConceptFields from './ConceptFields'

// importa las clases necesarias para el manejo de la arquitectura
import ConfigurationAction from '../../../../actions/ConfigurationAction'
import ConfigurationStore from '../../../../stores/ConfigurationStore'

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(ConfigurationStore, 'convocatories'))
export default class SetRestrictions extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propia de react que carga la información al componente antes de que este sea montado
  componentWillMount(){
    ConfigurationAction.ListConvocatories()
  }

  onSubmitRestriction(ev){
  	ev.preventDefault()
  	let form_data = $(ev.target).serializeArray()
  	let data = {
  	  'ipc': form_data[0].value,
  	  'smlv': form_data[1].value,
      'internal_operation': form_data[2].value,
  	  'budget_percentage': form_data[3].value,
      'convocatory_name': 'convocatoria 2014-34',
      'concepts':  this.refs.child.handleSubmit()

      //'concepts': this.refs.child.handleSubmit()
    }
    ConfigurationAction.SaveRestriction(data)

  }

  // Retorna el componente
  render() {
    return(
      <div class="">
        <div class="page-title">
          <div class="x_title">
            <h3>CREAR RESTRICCIONES</h3>
          </div>
          <div class="x_content">
            <form  onSubmit={this.onSubmitRestriction.bind(this)}>
              <label for="ipc">VALOR IPC</label>
              <input type="number" name="ipc" min="0" class="form-control" required="" autofocus ></input>
              <br />
              <label for="smlv">VALOR SMLV</label>
              <input type="number" name="smlv" min="0" class="form-control"  required="" autofocus></input>
              <br />
              <label for="internal-operation">PORCENTAJE DE OPERACIÓN INTERNA</label>
              <input type="number" name="internal_operation" min="0" class="form-control"  required="" autofocus></input>
              <br />
              <label for="budget_percentage">PORCENTAJE DE PRESUPUESTO</label>
              <input type="number" name="budget_percentage" min="0" class="form-control"  required="" autofocus></input>
              <br />
              <label> CONCEPTOS </label>
              <ConceptFields ref="child"/>
              <br />
              {/*<select>
                {convocatories}
              </select>*/}
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



