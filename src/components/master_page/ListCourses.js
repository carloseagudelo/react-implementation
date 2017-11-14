/*  Descripcion: Componente que renderiza la las vistas de cada uno de los cursos
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

// importa todas las clases de la arquitectura necesaria
import MasterPageAction from '../../actions/MasterPageAction'
import MasterPageStore from '../../stores/MasterPageStore'

import CourseMin from './CourseMin'

// Inicializa y exporta el contenido del componente
@ReactMixin.decorate(Reflux.connect(MasterPageStore, 'information'))
export default class ListCourses extends React.Component {

  constructor(){
    super()
  }

  // Metodo propio de react que carga la informción antes de montar el componente
  componentWillMount(){
    MasterPageAction.FetchInformation();    
  }


  // Retorna el compnente
  render() {

    console.log('XXXXXXXXXXXXXXXX')
    console.log(this.state.information)

    if(this.state.information){

      let courses = this.state.information[0].curses.map((course) => {
          return(
            <CourseMin data={course}/>
          )
        })

      return (
        <div class="page-title">
          <div class="x_title">
            <h3>LISTA DE CURSOS DISPONIBLES PARA TÍ</h3>
          </div>
          <div class="x_content">
            <div class="container">
              <div class="row">
                {courses}
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <h1>CARGANDO</h1>
      )
    }
  }
}
