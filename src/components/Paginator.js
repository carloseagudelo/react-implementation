import React from 'react';

import {Button} from 'react-bootstrap'
import Dialog from 'react-bootstrap-dialog'

export default class Paginator extends React.Component {  

  constructor(){
  	super()
  }

  render() {

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

function getArray(current, end_position){
  var array = []

  if((end_position - current) >= 10){
    for(var i = 0; i < 9; i++){
      array.push(current + i)
    }
    array.push(end_position)
  }else{
    console.log('XXXXXXXXX')
    console.log((end_position - current)+1)
    for(var i = 0; i < (end_position - current) + 1; i++){
      array.push(current + i)
    }
  }  
  return array
}
