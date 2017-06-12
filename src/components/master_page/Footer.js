import React from 'react';

export default class Footer extends React.Component {

  constructor(){
    super()
  }

  render() {
    return (
      <footer>
        <div class="pull-left">
          <strong>SISAP</strong> SISTEMA DE INFORMACION SAPIENCIA
        </div>
        <div class="pull-right">
           <strong>SAPIENCIA MEDELLIN 2017</strong>
        </div>
        <div class="clearfix"></div>
      </footer>
    );
  }
}