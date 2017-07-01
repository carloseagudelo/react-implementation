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
          <a href={'ftp://181.143.72.66:5010/'+this.props.data.file_url} target="_blank">{this.props.data.file_file_name}</a>
        </div>
      )
    }else{
      return(
        <div class="col col-md-6">
          <input type="file" name={"s" + this.props.data.id} class="file" accept="application/pdf"/>
        </div>
      )
    }
  }
}