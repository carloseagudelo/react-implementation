/*  Descripcion: Componente que renderiza la las vistas de cada uno de los menus
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class Footer extends React.Component {

  constructor(){
    super()
  }

  // Retorna el componente
  render() {
    return (
      <footer>
        <div class="pull-left">
          <strong>CYMETRIA</strong> Expertos en Innovación y Transformación Digital
        </div>

        <div class="clearfix"></div>
      </footer>
    );
  }
}