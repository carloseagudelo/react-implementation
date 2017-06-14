import React from 'react';

const padding = {
  'min-height': '760px'
}

export default class Content extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return (
      <div class="right_col" role="main" >
      	<h1>CARGA DE DOCUMENTOS</h1>
      		<div>
      		  <p>Documento 1 </p><input type="file" id="myFile"/>
      		</div>
      </div>
    );
  }
}
