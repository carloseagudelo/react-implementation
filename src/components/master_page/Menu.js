import React from 'react';

import Item from './Item'

export default class Menu extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return (
      <div class="col-md-3 left_col">
		<div class="left_col scroll-view">
		  <div class="navbar nav_title" >
		    <a href="#" class="site_title"><i class="fa fa-home"></i> <span>Sapiencia</span></a>
		  </div>
		  <div class="clearfix"></div>
		  <br />
		  <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
	        <Item data={this.props.data} />
		  </div>
		</div>
      </div>
    )
  }
}

