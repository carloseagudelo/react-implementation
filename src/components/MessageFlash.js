import React from 'react';

import Constant from '../utils/Constants.js'

export default class MessageFlash extends React.Component {  

  constructor(){
  	super()
  }

  render() {
    if(typeof(this.props.data) != 'undefined'){
    	if(this.props.data.type != ''){
        switch(this.props.data.type) {
          case Constant.TYPE_FLASH_MESSAGE_ERROR:
            return (
              <div class="alert alert-danger">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_SUCESS:
            return (
              <div class="alert alert-success">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_WARNING:
            return (
              <div class="alert alert-warning">
                {this.props.data.message}
              </div>        
            )
            break;
          case Constant.TYPE_FLASH_MESSAGE_INFO:
            return (
              <div class="alert alert-info">
                {this.props.data.message}
              </div>        
            )
            break;
        } 
      }else {
        <div></div>
      }
    }else {
      return(
        <div></div>
      )
    }
  }
}