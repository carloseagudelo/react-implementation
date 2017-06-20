import React from 'react'
import bfl from 'bootstrap-fileinput-npm'

export default class UploadInput extends React.Component {

  constructor(){
  	super()
  }

  render() {
    if(this.props.data.pre_validation && this.props.data.final_validation) {
      return(
        <div class="col col-md-6">
          <a href={this.props.data.file_url}>{this.props.data.file_file_name}</a>
        </div>
      )
    }else{
      return(
        <div class="col col-md-6">
          <input type="file" name={"s" + this.props.data.id} class="file" />
        </div>
      )
    }
  }
}
