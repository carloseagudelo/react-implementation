import React from 'react'

import SubItem from './SubItem'

export default class Item extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let items = this.props.data.payload.data.map((item) => {
      if(item.level == 'Menu'){
        return(        
          <li><a><i class={item.icon}></i>{item.name}<span class="fa fa-chevron-down"></span></a>
            <SubItem menu={item.id} dataItem={filterArray(this.props.data.payload.data, item.id)} />            
          </li>
        )
      }
    })
    return(
      <div class="menu_section">
        <ul class="nav side-menu">
          { items }
        </ul>
      </div>
    )
  }
}

function filterArray(data, id){
  var result = [];
  for( var i = 0; i < data.length; i++) {
    if( data[i].id_menu == id ) {
      result.push(data[i]);
    }
  }
  return result;
}
    

