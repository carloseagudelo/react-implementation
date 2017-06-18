import React from 'react';
import { Link } from 'react-router'

export default class User extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return(
      <div>
        <p>NOMBRE: {this.props.data.name}</p>
        <p>ESTADO: {this.props.data.state}</p>
        <p>HORA DE FINALIZACIÓN: {this.props.data.finised_hour}</p>
        <Link to={'/documents/'+this.props.data.id }> VALIDAR DOCUMENTOS</Link>
      </div>
    )
  }
}