import React from 'react';

import Upload from './Upload'

export default class Upload extends React.Component {

  constructor(){
  	super()
  }

  onSubmitSend(ev){
    ev.preventDefault()
  }

  render() {
    if(this.props.data){
      let fields = this.props.data.map((field) => {
        <label></label>
        <input type="file" >
      })
      return (
        <div>
          <form onSubmit={this.onSubmitLogin.bind(this)} >            
            {fields}
            <input type="submit">
          </form>       
        </div>
      )
    }else{
      <div>LOADING ......</div>
    }
  }
}