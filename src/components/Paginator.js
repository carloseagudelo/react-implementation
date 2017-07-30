/*  Descripcion: Componente que renderiza una lista con las paginas que componen toda la información
                 a mostar, este siempre mostrará una lista con 10 paginas en case de se mas de 10 mostrara las 
                 las siguientes 10 a la actual y la ultima pagina
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 29 de Junio 2017 */

// importa las librerias externas necesarias
import React from 'react';

// Inicializa y exporta la clase que contiene el componente
export default class Paginator extends React.Component {  

  constructor(){
  	super()
  }

  render() {
    // Maneja la logica respecto al numero de paginas
  	let items;
  	if(this.props.pages.length <= 9){
  	  items = this.props.pages.map((page) => {
  	   	return(
   	  	  <li class="page-item"><a class="page-link" href="" onClick={this.props.onClick} id={page}>{page}</a></li>                  
        )
  	  })
  	}else{
      items = getArray(parseInt(this.props.current), parseInt(this.props.pages.length)).map((page, index) => {
        return(
          <li class="page-item"><a class="page-link" href="" onClick={this.props.onClick} id={page}>{page}</a></li>                  
        )	 
  	  })
  	}

    // Retorna el compnente
    return(
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="" onClick={this.props.onClick} aria-label="Previous" id="prev">
              &laquo;
            </a>
          </li>
          {items}
          <li class="page-item">
            <a class="page-link" href="" onClick={this.props.onClick} aria-label="Next" id="nxt">
             &raquo;
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

// Metodo que arma el array respecto al numero de paginas y la pagina actual
function getArray(current, end_position){
  var array = []
  if((end_position - current) >= 10){
    for(var i = 0; i < 9; i++){
      array.push(current + i)
    }
    array.push(end_position)
  }else{
    for(var i = 0; i < (end_position - current) + 1; i++){
      array.push(current + i)
    }
  }  
  return array
}
