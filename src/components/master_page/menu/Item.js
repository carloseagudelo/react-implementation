/*  Descripcion: Componente que renderiza una lista los items del menu vertical derecho
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react'

// importa los componentes necesarios
import SubItem from './SubItem'

// Inicializa y exporta la clase que contiene el componente
export default class Item extends React.Component {

  constructor(){
  	super()
  }

  render() {
    // Maneja la logica del componente
    let items = this.props.data.payload.data.map((item) => {
      if(item.level == 'Menu'){
        return(        
          <li><a><i class={item.icon}></i>{item.name}<span class="fa fa-chevron-down"></span></a>
            <SubItem menu={item.id} dataItem={filterArray(this.props.data.payload.data, item.id)} />            
          </li>
        )
      }
    })
    // Retorna el componente
    return(
      <div class="menu_section">
        <ul class="nav side-menu">
          { items }
        </ul>
      </div>
    )
  }
}

// Metodo que filtra los subitems del un item especifico
function filterArray(data, id){
  var result = [];
  for( var i = 0; i < data.length; i++) {
    if( data[i].id_menu == id ) {
      result.push(data[i]);
    }
  }
  return result;
}
    

