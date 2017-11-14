/*  Descripcion: Componente principal del aplicativo, es el encargado de renderizar toda la informacion
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

// importa todas las clases de la arquitectura necesaria
import MasterPageAction from '../actions/MasterPageAction'
import MasterPageStore from '../stores/MasterPageStore'

// importa los componentes necesarios
import Menu from '../components/master_page/Menu';
import TopMenu from '../components/master_page/TopMenu';
import Content from '../components/master_page/Content';
import Footer from '../components/master_page/Footer';

// inicializa el mixing que es la variable donde se alojara el contenido del objeto que retorna la respuesta en el store
@ReactMixin.decorate(Reflux.connect(MasterPageStore, 'information'))
export default class MasterPage extends React.Component {

  constructor(){
  	super()
  }

  // Metodo propio de react que carga la informción antes de montar el componente
  componentWillMount(){
    MasterPageAction.FetchInformation();    
  }

  // Retorna el componente
  render() {

    console.log('XXXXXXXXXXXXXXXX')
  console.log(this.state.information)

    if(this.state.information){
      return (
        <div class='nav-md'>
  	      <div class='container body'>
  	        <div class='main_container'>
  	          <TopMenu data={this.state.information[0]} />
  	          <Content data={this.props.children} />
  	          <Footer />
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