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
          <img src={this.state.course[0].image} alt=""/>
          <h1>NOMBRE DEL CURSO: {this.state.course[0].nombre}</h1>
          <h3>DESCRIPCION DEL CURSO: {this.state.course[0].description}</h3>
          <p>DURACION: {this.state.course[0].duration}</p>
          <p>PROFESOR: {this.state.course[0].teacher}</p>
        </div>
      )
    }else{
      return(
        <h1>CARGANDO</h1>
      )
    }
  	
  }
}
