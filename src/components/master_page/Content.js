import React from 'react';

export default class Content extends React.Component {

  constructor(){
  	super()
  }

  render() {
    return (
      <div class="right_col" role="main" >
      	{this.props.data}
      </div>
    )
  }
}
