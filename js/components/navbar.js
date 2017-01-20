import React from 'react';
import 'react-bootstrap';

import Countrylist from './countrylist';

class Navbar extends React.Component{
	constructor(){
		super();
		this.state = {
			countries: false
		}
		this.openCountryList = this.openCountryList.bind(this);
		this.closeCountryList = this.closeCountryList.bind(this);
	}
	openCountryList(){
		this.setState({
			countries: true
		});
	}
	closeCountryList(){
		this.setState({
			countries: false
		});
	}
	render(){
		if(this.state.countries === true){
			return <Countrylist onClick={this.closeCountryList.bind(this)} />
		} else {
			return(
				<div className='navbarDiv'>
					<h4 className='col-md-10'>React Exchange</h4>
					<ul className='navlist col-md-2'>
						<li><a onClick={this.openCountryList} href='#'><h4>Country Codes</h4></a></li>
					</ul>
				</div>
			)
		}
	}
}

module.exports = Navbar;