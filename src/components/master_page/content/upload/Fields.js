import React from 'react';

import Field from './Field'

export default class Fields extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let fields = this.props.data.map((field) => {
      return(
        <Field data={field} />
      )
    })

    return (
      <div>       
        {fields}   
      </div>
    )
  }
}