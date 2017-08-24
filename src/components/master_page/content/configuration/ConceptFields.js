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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  addClick(){
    this.setState({count: this.state.count+1})
  }

  removeClick(i){
    let value = this.state.value.slice();
    value.splice(i,1);
    this.setState({
      count: this.state.count - 1,
      value
    })
  }

    createUI(){
      let uiItems = [];
      for(let i = 0; i < this.state.count; i++){
        uiItems.push(
          <div key={i}>
            <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
            <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
            <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
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
        <input type='button' value='Agregar otro' onClick={this.addClick.bind(this)}/>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}



