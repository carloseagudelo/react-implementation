import React from 'react';

export default class SubItem extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let sub_items = this.props.dataItem.map((subItem) => {
      return(
        <li><a>{subItem.name}</a></li>
      )
    })
    return (
      <spam>{sub_items}</spam>
    )
  }
}