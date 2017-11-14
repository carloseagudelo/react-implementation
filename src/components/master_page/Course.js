/*  Descripcion: Componente que muestra el componente la informacion del curso
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import MasterPageAction from '../../actions/MasterPageAction'
import MasterPageStore from '../../stores/MasterPageStore'

//import ReactLoading from 'react-loading'

// Inicializa y exporta la clase que contiene el componente
@ReactMixin.decorate(Reflux.connect(MasterPageStore, 'course'))
export default class Course extends React.Component {  

  componentWillMount(){
    MasterPageAction.GetCourse(this.props.params.id);    
  }

  constructor(){
  	super()
  }

  // Renderiza el componente
  render() {

    if(this.state.course){
      return(
        <div>
          <br/>
          <br/>
          <center><img src={this.state.course[0].image} alt=""/></center>
          <br/>
          <br/>
          <div class="jumbotron">
            <ul class="description_txt">
              <li><b>NOMBRE DEL CURSO:</b> {this.state.course[0].nombre}</li>
              <br/>
              <li><b>DURACION:</b> {this.state.course[0].duration}</li>
              <br/>
              <li><b>PROFESOR:</b> {this.state.course[0].teacher}</li>
              <br/>
              <li><b>DESCRIPCION DEL CURSO:</b> {this.state.course[0].description}</li>
            </ul>
          </div>
          <br/>
          <br/>
        </div>
      )
    }else{
      return(
        <h1>CARGANDO</h1>
      )
    }
  	
  }
}
