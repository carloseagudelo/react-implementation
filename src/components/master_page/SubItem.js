import React from 'react';

export default class SubItem extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let sub_items = this.props.dataItem.map((subItem) => {
      return(
        <li>{subItem.name}</li>
      )
    })
    return (
      <div>{sub_items}</div>
    )
  }
}