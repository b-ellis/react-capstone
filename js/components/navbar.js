import React from 'react';
import 'react-bootstrap';

class Navbar extends React.Component{
	render(){
		return(
			<div className='navbarDiv'>
				<h4 className='col-md-10'>React Exchange</h4>
				<ul className='navlist col-md-2'>
					<li><h4>Info</h4></li>
					<li><h4>Currencies</h4></li>
				</ul>
			</div>
		)
	}
}

module.exports = Navbar;