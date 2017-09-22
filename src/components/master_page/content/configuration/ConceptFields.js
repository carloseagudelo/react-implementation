/*  Descripcion: Componente que permite agregar y quitar dinamicamente campos de conceptos para las restricciones
  Autor: Sebastián Delgado Díaz
  Contacto: sebasdeldi@hotmail.com
  Fecha de creación: Agosto 2017
  Fecha de modificacion: Agosto 2017 */

import React from 'react';

export default class ConceptFields extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: [], count: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
    let value = this.state.value.slice();
    value[i] = event.target.value;
    this.setState({value});
  }

  handleSubmit(event) {
    var i,j,hash,chunk = 3;
    var newArr= []
    for (i=0, j =this.state.value.length; i<j; i+=chunk) {
      hash = "{"+ JSON.stringify("name") +":" + JSON.stringify(this.state.value.slice(i,i+chunk)[0]) + "," + JSON.stringify("salaries_number") + ":" +this.state.value.slice(i,i+chunk)[1] + "," + JSON.stringify('fund_category') + ":" + JSON.stringify(this.state.value.slice(i,i+chunk)[2] )+ "}";
      newArr.push(hash);
    }

    return String("[" + newArr.toString() + "]");
  }

  addClick(){
    this.setState({count: this.state.count+3})
  }

  removeClick(i){
    let value = this.state.value.slice();
    value.splice(i,1);
    this.setState({
      count: this.state.count - 3,
      value
    })
  }

    createUI(){
      let uiItems = [];
      for(let i = 0; i < this.state.count; i = i + 3){
        uiItems.push(
          <div key={i}  id={"input-set-" + i} >
            <input class="concept-field" type="text" onChange={this.handleChange.bind(this,i)} placeholder="NOMBRE DEL CONCEPTO" />
            <input class="concept-field" type="number" min="0" onChange={this.handleChange.bind(this,i+1)} placeholder="NÚMERO DE SALARIOS" />
            <input class="concept-field" type="text" onChange={this.handleChange.bind(this,i+2)} placeholder="CATEGORÍA DEL FONDO" />
            <input type='button' value='Eliminar' onClick={this.removeClick.bind(this,i)}/>
          </div>
        )
      }
      return uiItems || null;
    }

  // Retorna el componente
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.createUI()}
        <input type='button' value='Agregar otro concepto' onClick={this.addClick.bind(this)}/>
      </form>
    );
  }
}



