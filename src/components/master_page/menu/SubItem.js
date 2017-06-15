import React from 'react';
import {Link} from 'react-router'

export default class SubItem extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let sub_items = this.props.dataItem.map((subItem) => {
      return(
        <li><Link to={subItem.url}>{subItem.name}</Link></li>
      )
    })
    return ( 
      <ul class="nav child_menu">
        {sub_items}
      </ul>
    )
  }
}