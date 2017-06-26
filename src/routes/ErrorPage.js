import React from 'react';

import AccesDenied from '../components/error/AccessDenied'
import NoExist from '../components/error/NoExist'
import ServerError from '../components/error/ServerError'

export default class ErrorPage extends React.Component {

  constructor(){
  	super()
  }

  render() {
    let component
    if(this.props.params.er == 403){
      component = <AccesDenied />
    }else if(this.props.params.er == 404){
      component = <NoExist />
    }else{
      component = <ServerError />
    }

    return(
      <div class="container body">
        <div class="main_container">
          <div class="col-md-12">
            <div class="col-middle">
              {component}
            </div>
          </div>
        </div>
      </div>
    )
  }
}