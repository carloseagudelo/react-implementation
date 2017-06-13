import React from 'react';

import SubItem from './SubItem'

export default class Item extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let items = this.props.data.map((item) => {
      if(item.level == 'Menu'){
        let arrayItem = filterArray(this.props.data, item.id)
        console.log('resultado funcion')
        console.log(arrayItem)
        console.log('resultado funcion')
        return(        
          <li><a><i class={item.icon}></i>{item.name}<span class="fa fa-chevron-down"></span></a>
            <ul class="nav child_menu">
              <SubItem menu={item.id} dataItem={arrayItem} />
            </ul>
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
    

