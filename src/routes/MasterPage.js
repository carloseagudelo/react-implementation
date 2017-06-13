import React from 'react';
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import MasterPageAction from '../actions/MasterPageAction'
import MasterPageStore from '../stores/MasterPageStore'

import Menu from '../components/master_page/Menu';
import TopMenu from '../components/master_page/TopMenu';
import Content from '../components/master_page/Content';
import Footer from '../components/master_page/Footer';

@ReactMixin.decorate(Reflux.connect(MasterPageStore, 'information'))
export default class MasterPage extends React.Component {

  constructor(){
  	super()
  }

  componentWillMount(){
  	MasterPageAction.FetchInformation()
  }

  render() {
    if(this.state.information){ 
      return (
        <div class='nav-md'>
  	      <div class='container body'>
  	        <div class='main_container'>
  	      	  <Menu data={this.state.information}/>
  	          <TopMenu data={this.state.information} />
  	          <Content />
  	          <Footer />
  	        </div>
  	      </div>
  	    </div>
      )
    }else{
      return(
        <div>LOADING .......</div>
      )
    }
  }
}