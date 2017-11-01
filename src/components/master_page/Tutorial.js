/*  Descripcion: Componente que renderiza los tutoriales disponibles
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta el contenido del componente
export default class Tutorial extends React.Component {

  constructor(){
  	super()
  }

  // Retorna el compnente
  render() {

    let video
    if(localStorage.role == 'candidate'){
      video = <embed width="100%" height="500px" src="https://www.youtube.com/embed/l8Cv4O2QjKU?autoplay=1"></embed>
    }else{
      video = <embed width="100%" height="500px" src="https://www.youtube.com/embed/P4bHKJFoV3I?autoplay=1"></embed>
    }

    return (
      <div>
        {video}
      </div>
    )
  }
}