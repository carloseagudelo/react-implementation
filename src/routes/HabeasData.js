/*  Descripcion: Componente que renderiza la funcionalidad de autentificación en la plataforma
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import $ from 'jquery'
import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import { Link } from 'react-router'

import Bubbles from '../components/login/Bubbles'
import Logo from '../components/login/Logo'

export default class HabeasData extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el componente
  render() {
	return(
	  <div class="custom-style">
	    <div class="wrapper">
	      <center>
		    <Logo />
		  </center>
		  <div class="custom-container">
		    <form class="custom-form">

			  <p class="justificar"> 
			    Certifico que he leído y autorizo expresamente a La Agencia de Educación Superior de Medellín – SAPIENCIA, 
			    el tratamiento de los datos personales, con miras a la planeación, diseño, desarrollo y evaluación de los 
			    proyectos adelantados por dicha entidad, y podrá ser suministrada a las autoridades que lo soliciten,
			    con observancia de los principios y disposiciones consagradas en la Ley 1581 de 2012 y el Decreto 1377 de 2013 y 
			    aquellos consagrados en el Manual de Políticas y Tratamiento de Datos Personales de La Agencia de Educación Superior
			    de Medellín – SAPIENCIA.
			  </p>
			  <br />
			  <p class="justificar">
			    Así mismo, acepto las condiciones del programa según se estipula en la 
			    <strong><a href="http://www.sapiencia.gov.co/wp-content/uploads/2017/05/Resolución-de-apertura.pdf" target="_blank">Resolución 6665 del 2017</a></strong> 
			    para iniciar el diligenciamiento del formulario, y autorizo a La Agencia de Educación Superior de Medellín – SAPIENCIA, 
			    para que la información y notificación demandados de éste proceso, sean realizados al correo electrónico indicado en éste
			    formulario.
			  </p>

			  <div class="row">
			    <div class="col-sm-6">
			  	  <div class="checkbox-default">
			  	    <input type="checkbox" id="habeas_check"></input>
				    <label class="pull-rigth">		    
				      <p class="justificar">ACEPTO</p>
				    </label>
				  </div>
			    </div>
			    <div class="col-sm-6">
			  	  <Link class="mg-right" to='registration' id="btnAcepto" class="hidden-field">INICIAR </Link>
			    </div>
			  </div>

			</form>

		  </div>
		  <Bubbles />
		</div>
	  </div>
	);
  }
}